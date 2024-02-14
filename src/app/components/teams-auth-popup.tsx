import React from "react";
import * as ms from "@microsoft/teams-js";
import { useGlobalStore } from "../store/store";
import { getTokenPopup } from "../services/auth/auth-func";
import { tokenRequest } from "../services/auth/auth-config";

export const TeamsAuthPopup = async () => {
  const { userStore } = useGlobalStore();

  if (ms) {
    await ms.app.initialize();
    const ctx = await ms.app.getContext();
    console.log("ctx", ctx);

    if (ctx) {
      if (!userStore.isLogged) {
        userStore.signUserIn();
      } else {
        try {
          console.log("token?", userStore);
          //   const authRes =
          //     await ms.externalAppAuthentication.authenticateWithSSO(
          //       "de9b6e29-ce8d-4aad-bde1-baeb58a0d09c",
          //       { claims: ["User.Read", "Sites.ReadWrite.All"], silent: false }
          //     );
          //   console.log("authRes", authRes);
          const token = await ms.authentication.authenticate({
            url: "https://login.microsoftonline.com/1c959d66-59b2-4a6b-b984-2775de3c74f9/oauth2/v2.0/authorize",
          });
          return token;
          //   await getTokenPopup(tokenRequest);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  return <p>Authorizing in popup...</p>;
};
