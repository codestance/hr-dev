import React, { useEffect, useState } from "react";
import { getHistory } from "../services/auth/auth-func";
import { Divider, Skeleton, SkeletonItem } from "@fluentui/react-components";
import {
  GraphApiOperationState,
  HistoryResponse,
  ReqListItem,
} from "../types/types";
import { DataTable } from "./table";

export const History = () => {
  const [requestState, setRequestState] = useState(
    GraphApiOperationState.initial
  );
  const [archive, setArchive] = useState<HistoryResponse[]>();
  const [future, setFuture] = useState<ReqListItem[]>();
  const [past, setPast] = useState<ReqListItem[]>();
  const [errorMessage, setErrorMessage] = useState("");

  const processData = (data: HistoryResponse[]) => {
    const all: ReqListItem[] = data.map((vacation) => ({
      id: vacation.fields.id,
      start: vacation.fields.StartDate,
      end: vacation.fields.EndDate,
      days: vacation.fields.Days,
      reason: vacation.fields.Reason,
      status: vacation.fields.Status,
    }));
    all.sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
    return all;
  };

  useEffect(() => {
    const getData = async () => {
      setRequestState(GraphApiOperationState.pending);
      try {
        const h: HistoryResponse[] = await getHistory();
        setArchive(h);
        setRequestState(GraphApiOperationState.success);
      } catch (error) {
        setRequestState(GraphApiOperationState.error);
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (archive) {
      const all = processData(archive);
      setPast(all.filter((req) => new Date(req.end) < new Date()));
      setFuture(all.filter((req) => new Date(req.start) >= new Date()));
    }
  }, [archive]);

  return (
    <>
      {requestState !== GraphApiOperationState.success ? (
        <>
          {requestState === GraphApiOperationState.pending && (
            <Skeleton>
              <div className="skeleton-item">
                <SkeletonItem />
              </div>
              <div className="skeleton-item">
                <SkeletonItem />
              </div>
              <div className="skeleton-item">
                <SkeletonItem />
              </div>
              <div className="skeleton-item">
                <SkeletonItem />
              </div>
            </Skeleton>
          )}
          {requestState === GraphApiOperationState.error && (
            <div>
              <p>Error {errorMessage}</p>
              <button type="button">x</button>
            </div>
          )}
        </>
      ) : (
        <>
          {future && future.length > 0 && (
            <div className="history-table">
              <h3>Your future holidays</h3>
              <DataTable data={future} />
              <Divider />
            </div>
          )}
          {past && past.length > 0 && (
            <div className="history-table">
              <h3>Your past holidays</h3>
              <DataTable data={past} />
              <Divider />
            </div>
          )}
        </>
      )}
    </>
  );
};
