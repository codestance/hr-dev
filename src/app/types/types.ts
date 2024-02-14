export interface UserInfo {
  businessPhones?: Array<string>;
  displayName?: string;
  givenName?: string;
  id?: string;
  jobTitle?: string;
  mail: string;
  mobilePhone?: string;
  officeLocation?: string;
  preferredLanguage?: string;
  surname?: string;
  userPrincipalName?: string;
}

export interface LimitList {
  fields: {
    days: number;
    personLookupId: string;
  };
}
export interface Account {
  name: string;
  username: string;
}

export interface Reason {
  code: string;
  description: string;
}
export interface HistoryResponse {
  fields: HolidayRequest;
}
export interface HolidayRequest {
  StartDate: string;
  EndDate: string;
  Days: string;
  Reason: string;
  OccasionalReason: string;
  Status: string;
  id: string;
}

export type LookupId = {
  id: string;
};

export type LookupResponse = {
  value: LookupId[];
};

export interface ApproversList {
  fields: ApproversListElement;
}

interface ApproversListElement {
  personLookupId: string;
  approverLookupId: string;
}

export enum GraphApiOperationState {
  initial = "initial",
  pending = "pending",
  success = "success",
  error = "error",
}

export interface ReqListItem {
  id: string;
  start: string;
  end: string;
  days: string;
  reason: string;
  status: string;
}
