import React, { useState } from "react";
import { useFormStore } from "../store/form-store";
import { observer } from "mobx-react-lite";
import {
  Button,
  Field,
  Select,
  Skeleton,
  SkeletonItem,
  SpinButton,
  Textarea,
} from "@fluentui/react-components";
import { occasionalReasons, reasons } from "../misc/reasons";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import globalStore from "../store/store";
import {
  ApproversList,
  GraphApiOperationState,
  LookupResponse,
  UserInfo,
} from "../types/types";
import { getTokenPopup, getUserLookupId } from "../services/auth/auth-func";
import { tokenRequest } from "../services/auth/auth-config";
import { postToMSGraph } from "../services/ms-graph/graph-helper";
import { graphConfig } from "../services/ms-graph/graph-config";

export const RequestForm = observer(() => {
  const { form } = useFormStore();
  const [requestState, setRequestState] = useState(
    GraphApiOperationState.initial
  );
  const [errorMessage, setErrorMessage] = useState("");
  console.log("form store", form);

  const postData = async () => {
    setRequestState(GraphApiOperationState.pending);
    try {
      const token = await getTokenPopup(tokenRequest);
      if (token) {
        console.log("form data in submit", form);
        const reasonDesc = reasons.filter(
          (reason) => reason.code === form.reason
        )[0].description;
        let occasionalReasonDesc = "";
        if (form.occasionalReason) {
          occasionalReasonDesc = occasionalReasons.filter(
            (reason) => reason.code === form.occasionalReason
          )[0].description;
        }

        await postToMSGraph(
          graphConfig.requestsListPostEndpoint,
          token.accessToken,
          {
            fields: {
              Title: `${reasonDesc} - ${form.days} day${
                form.days === 1 ? "" : "s"
              }, from ${form.startDate?.toLocaleDateString()} to ${form.endDate?.toLocaleDateString()} - ${
                globalStore.userStore.username
              }`,
              Reason: reasonDesc,
              OccasionalReason: occasionalReasonDesc,
              Comments: form.comments,
              PersonLookupId: globalStore.userStore.id,
              StartDate: form.startDate,
              EndDate: form.endDate,
              // ManagerLookupId: data.managerLookupId,
              Days: form.days,
            },
          }
        );
        setRequestState(GraphApiOperationState.success);
        console.log({
          fields: {
            Title: `${reasonDesc} - ${form.days} day${
              form.days === 1 ? "" : "s"
            }, from ${form.startDate?.toLocaleDateString()} to ${form.endDate?.toLocaleDateString()} - ${
              globalStore.userStore.username
            }`,
            Reason: reasonDesc,
            OccasionalReason: occasionalReasonDesc,
            Comments: form.comments,
            PersonLookupId: globalStore.userStore.id,
            StartDate: form.startDate,
            EndDate: form.endDate,
            Days: form.days,
          },
        });
      }
    } catch (error) {
      console.error("error while posting data", error);
      setRequestState(GraphApiOperationState.error);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };
  const onSubmit = async () => {
    await postData();
  };
  const clearState = () => {
    setRequestState(GraphApiOperationState.initial);
    setErrorMessage("");
  };
  return (
    <React.Fragment>
      {requestState === GraphApiOperationState.initial && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit", e.target, e.currentTarget.elements);
            onSubmit();
          }}
        >
          <div className="form-inputs-container">
            <Field
              required
              label="start date"
              validationMessage={
                form.startDatePristine ? "" : form.startDateError
              }
            >
              <DatePicker
                value={form.startDate}
                initialPickerDate={form.endDate ?? undefined}
                onSelectDate={(date) => form.setStartDate(date ?? null)}
                onOpenChange={(open) => {
                  if (!open) {
                    form.setStartDateDirty();
                  }
                }}
              />
            </Field>
            <Field
              required
              label="end date"
              validationMessage={form.endDatePristine ? "" : form.endDateError}
            >
              <DatePicker
                value={form.endDate}
                initialPickerDate={form.startDate ?? undefined}
                onSelectDate={(date) => form.setEndDate(date ?? null)}
                onOpenChange={(open) => {
                  if (!open) {
                    form.setEndDateDirty();
                  }
                }}
              />
            </Field>
            <Field
              required
              label="days"
              validationMessage={form.daysPristine ? "" : form.daysError}
              size="medium"
            >
              <SpinButton
                value={form.days}
                min={1}
                max={globalStore.userStore.available}
                step={1}
                onChange={(e, days) => {
                  form.setDays(days.value ?? 1);
                  form.setDaysDirty();
                }}
              />
            </Field>
            <Field required label="reason" validationMessage={""} size="medium">
              <Select
                onChange={(e, data) => {
                  form.setReason(data.value);
                }}
                value={form.reason}
              >
                {reasons.map((reason) => (
                  <option key={reason.code} value={reason.code}>
                    {reason.description}
                  </option>
                ))}
              </Select>
            </Field>
            <Field
              label="occasional reason"
              validationMessage={
                form.occasionalReasonPristine ? "" : form.occasionalReasonError
              }
            >
              <Select
                onChange={(e, data) => {
                  form.setOccasionalReason(data.value);
                }}
                value={form.occasionalReason}
              >
                {occasionalReasons.map((reason) => (
                  <option key={reason.code} value={reason.code}>
                    {reason.description}
                  </option>
                ))}
              </Select>
            </Field>
            <Field
              label="comment"
              validationMessage={
                form.commentsPristine ? "" : form.commentsError
              }
            >
              <Textarea
                value={form.comments}
                onChange={(e, data) => {
                  form.setComments(data.value);
                }}
              />
            </Field>
          </div>
          <Button type="submit" disabled={!form.isValid}>
            Submit
          </Button>
        </form>
      )}
      {requestState === GraphApiOperationState.pending && (
        <React.Fragment>
          <Skeleton>
            <div className="skeleton-item">
              <SkeletonItem />
            </div>
            <div className="skeleton-item">
              <SkeletonItem />
            </div>
            <div>
              <p>Sending request</p>
            </div>
            <div className="skeleton-item">
              <SkeletonItem />
            </div>
            <div className="skeleton-item">
              <SkeletonItem />
            </div>
          </Skeleton>
        </React.Fragment>
      )}
      {requestState === GraphApiOperationState.success && (
        <div>
          <p>Request sent</p>
          <button type="button" onClick={clearState}>
            OK
          </button>
        </div>
      )}
      {requestState === GraphApiOperationState.error && (
        <div>
          <p>Something went wrong</p>
          <p>{errorMessage}</p>
          <button type="button" onClick={clearState}>
            OK
          </button>
        </div>
      )}
    </React.Fragment>
  );
});
