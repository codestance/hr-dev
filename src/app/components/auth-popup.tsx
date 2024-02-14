import React from "react";
import * as ms from "@microsoft/teams-js";
import * as E from "../../../env";

export const AuthPopup = async () => {
  try {
    await ms.app.initialize();
    console.log("initialized");
    const authResSilent =
      await ms.externalAppAuthentication.authenticateWithSSO(
        E.env.devAuth.clientId,
        { claims: ["User.Read", "Sites.ReadWrite.All"], silent: true }
      );
    console.log("authResSilent", authResSilent);
    const ctx = await ms.app.getContext();
    if (ctx) {
      console.log("ctx", ctx);
    }
    return authResSilent;
  } catch (error) {
    try {
      const authRes = await ms.externalAppAuthentication.authenticateWithSSO(
        E.env.devAuth.clientId,
        { claims: ["User.Read", "Sites.ReadWrite.All"], silent: false }
      );
      console.log("authRes", authRes);

      return authRes;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <p>Authorizing...</p>
    </>
  );
};
