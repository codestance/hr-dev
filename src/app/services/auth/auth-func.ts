import {
  AuthenticationResult,
  InteractionRequiredAuthError,
  PopupRequest,
  PublicClientApplication,
} from "@azure/msal-browser";
import { loginRequest, msalConfig } from "./auth-config";
import { getFromMSGraph } from "../ms-graph/graph-helper";
import { graphConfig } from "../ms-graph/graph-config";
// import { UserInfo } from "../../types/types";
import globalStore from "../../store/store";
import { AuthPopup } from "../../components/auth-popup";
import { getTeamsToken } from "./auth-teams";

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.ts
let myMSALObj = new PublicClientApplication(msalConfig);

let username = "";

function selectAccount() {
  const currentAccounts = myMSALObj.getAllAccounts();
  if (currentAccounts.length === 0) {
    return;
  } else if (currentAccounts.length > 1) {
    // Add choose account code here
    console.warn("Multiple accounts detected.");
  } else if (currentAccounts.length === 1) {
    username = currentAccounts[0].username;
    console.log(username, "account", currentAccounts[0]);
  }
}

function handleResponse(response: AuthenticationResult) {
  if (response !== null) {
    username = response.account.username;
  } else {
    selectAccount();
  }
  return response;
}

export async function signIn() {
  if (!myMSALObj) {
    myMSALObj = new PublicClientApplication(msalConfig);
  }
  await myMSALObj.initialize();
  console.log("msalobj", myMSALObj);
  try {
    // const res = await myMSALObj.ssoSilent(loginRequest);
    console.log("kos getTeamToken");
    const res = await getTeamsToken();
    // return handleResponse(res);
    return res;
  } catch {
    try {
      const res = await myMSALObj.loginPopup(loginRequest);
      return handleResponse(res);
    } catch (error) {
      const res = await getTeamsToken();
      console.log("get teamstoken", res);
      console.error(error);
    }
  }
  // }
}

export async function getTokenPopup(request: PopupRequest) {
  /**
   * See here for more info on account retrieval:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
   */
  request.account = (await myMSALObj.getAccount({ username })) ?? undefined;
  console.log("account", request.account);
  console.log("token request", request);
  try {
    const tokenResponse = await myMSALObj.acquireTokenSilent(request);
    return tokenResponse;
  } catch (error) {
    console.warn("silent token acquisition fails. acquiring token using popup");
    if (error instanceof InteractionRequiredAuthError) {
      // fallback to interaction when silent call fails
      try {
        const tokenResponse = await myMSALObj.acquireTokenPopup(request);
        return tokenResponse;
      } catch (error) {
        // try {
        // await AuthPopup();
        // await getTeamsToken();
        // } catch (error) {
        console.error(error);
        // }
      }
    } else {
      console.warn(error);
    }
  }
}

export async function getLimitList() {
  try {
    if (!globalStore.userStore.token) {
      await globalStore.userStore.signUserIn();
    }
    const list = await getFromMSGraph(
      graphConfig.limitListEndpoint,
      globalStore.userStore.token!
    );
    console.log("limit list", list);
    return list.value[0];
    // }
  } catch (error) {
    console.error(error);
  }
}

export async function getUserLookupId(mail: string) {
  try {
    if (!globalStore.userStore.token) {
      await globalStore.userStore.signUserIn();
    }
    const userLookupId = await getFromMSGraph(
      `${graphConfig.usersListEndpoint}&$filter=(fields/EMail eq '${mail}')`,
      globalStore.userStore.token!
    );
    return userLookupId;
  } catch (error) {
    console.error(error);
  }
}

export async function getHistory() {
  try {
    if (!globalStore.userStore.token) {
      await globalStore.userStore.signUserIn();
    }
    const list = await getFromMSGraph(
      graphConfig.requestsListGetEndpoint,
      globalStore.userStore.token!
    );
    if (list.error) {
      throw new Error(list.error.message);
    }
    console.log("history", list.value);
    return list.value;
  } catch (error) {
    console.log("history error");
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("unknown error on getHistory");
  }
}

selectAccount();
