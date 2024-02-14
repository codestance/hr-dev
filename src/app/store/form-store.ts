import { makeAutoObservable, reaction } from "mobx";
import { createContext, useContext } from "react";
import { getWorkingDays } from "./utils";

const createFormStore = () => {
  const store = makeAutoObservable(
    {
      startDate: null as Date | null,
      endDate: null as Date | null,
      days: 1 as number,
      reason: "01",
      occasionalReason: "",
      comments: "",
      startDatePristine: true,
      endDatePristine: true,
      daysPristine: true,
      reasonPristine: true,
      occasionalReasonPristine: true,
      commentsPristine: true,
      setStartDate(value: Date | null) {
        this.startDate = value;
      },
      setStartDateDirty() {
        this.startDatePristine = false;
      },
      setEndDate(value: Date | null) {
        this.endDate = value;
      },
      setEndDateDirty() {
        this.endDatePristine = false;
      },
      setDays(value: number) {
        this.days = value;
      },
      setDaysDirty() {
        this.daysPristine = false;
      },
      setReason(value: string) {
        console.log("reason", value);
        this.reason = value;
        // this.daysRequired = this.reason === "01" || this.reason === "07";
      },
      setOccasionalReason(value: string) {
        console.log("oReason", value);
        this.occasionalReason = value;
      },
      setComments(value: string) {
        console.log("comments", value);
        this.comments = value;
      },
      get startDateError() {
        if (this.startDate === null) {
          return "Start date is required";
        }
        return "";
      },
      get endDateError() {
        if (this.endDate === null) {
          return "End date is required";
        } else if (this.startDate && this.endDate < this.startDate) {
          return "The end must be later than the start date";
        }
        return "";
      },
      get daysError() {
        if (this.startDate && this.endDate) {
          if (this.days > getWorkingDays(this.startDate, this.endDate)) {
            return "the number entered is greater than the number of working days in the given date range";
          }
        }
        return "";
      },
      get occasionalReasonError() {
        if (
          (this.reason === "03" && !this.occasionalReason) ||
          (this.reason === "03" && this.occasionalReason === "00")
        ) {
          return "Occasional reason is required";
        }
        return "";
      },
      get commentsError() {
        if (this.reason === "04" && !this.comments) {
          return "Comment is required";
        }
        return "";
      },
      get isValid() {
        if (
          !this.startDateError &&
          !this.endDateError &&
          !this.daysError &&
          !this.occasionalReasonError &&
          !this.commentsError
        ) {
          return true;
        }
        return false;
      },
      dispose() {
        startDateChanged();
        reasonChanged();
      },
    },
    { dispose: false }
  );

  const startDateChanged = reaction(
    () => store.startDate,
    () => {
      if (store.endDate && store.startDate && store.endDate < store.startDate) {
        console.log("store", store);
        store.endDate = store.startDate;
      }
    }
  );

  const reasonChanged = reaction(
    () => store.reason,
    () => {
      if (store.reason === "03") {
        console.log("reason changed", store);
        store.occasionalReasonPristine = false;
      }
      if (store.reason === "04") {
        console.log("reason changed", store);
        store.commentsPristine = false;
      }
    }
  );

  return store;
};

export const formStore = {
  form: createFormStore(),
};
export const formStoreContext = createContext(formStore);
export const useFormStore = () => {
  return useContext<typeof formStore>(formStoreContext);
};
