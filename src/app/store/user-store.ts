import { makeAutoObservable } from "mobx";
import {
  getLimitList,
  getUserLookupId,
  signIn,
} from "../services/auth/auth-func";
import { AuthenticationResult } from "@azure/msal-browser";
import { LimitList, LookupResponse } from "../types/types";

export const userStore = () => {
  return makeAutoObservable({
    isLogged: false as boolean,
    username: "" as string | undefined,
    email: "" as string,
    id: "" as string,
    token: "" as string | undefined,
    exp: undefined as number | undefined,
    available: null as unknown as number,
    signUserIn: function* () {
      const authRes: AuthenticationResult = yield signIn();
      console.log("authRes", authRes);
      this.isLogged = true;
      this.token = authRes.accessToken;
      this.exp = authRes.account.idTokenClaims?.exp;
      this.username = authRes.account.name;
      this.email = authRes.account.username;
      sessionStorage.setItem("account", JSON.stringify(authRes.account));
    },
    getAvailableDays: function* () {
      const list: LimitList = yield getLimitList();
      console.log("limit list in store", list, list?.fields);
      this.available = list?.fields.days;
    },
    getUserId: function* () {
      const lookup: LookupResponse = yield getUserLookupId(this.email);
      this.id = lookup.value[0].id;
    },
  });
};
