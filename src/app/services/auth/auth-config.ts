import { Configuration, LogLevel } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  // dev auth
  auth: {
    // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
    clientId: "de9b6e29-ce8d-4aad-bde1-baeb58a0d09c",
    // Full directory URL, in the form of https://login.microsoftonline.com/<tenant-id>
    authority:
      "https://login.microsoftonline.com/1c959d66-59b2-4a6b-b984-2775de3c74f9",
    // Full redirect URL, in form of http://localhost:3000
    // redirectUri: "http://localhost:5033/",
    redirectUri: "https://127.0.0.1:5500/",
  },

  // // production auth
  // auth: {
  //   // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
  //   clientId: "74bfe642-0405-4c7c-8be9-d95a00c5ee9a",
  //   // Full directory URL, in the form of https://login.microsoftonline.com/<tenant-id>
  //   authority:
  //     "https://login.microsoftonline.com/1c959d66-59b2-4a6b-b984-2775de3c74f9",
  //   // Full redirect URL, in form of http://localhost:3000
  //   redirectUri: "https://demo.proaxia-consulting.com/holiday/",
  // },
  cache: {
    cacheLocation: "sessionStorage", // This configures where cache will be stored
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

/**
 * Scopes will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: ["User.Read"],
};

/**
 * Scopes to request when obtaining an access token for MS Graph API.
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const tokenRequest = {
  scopes: ["User.Read", "Sites.ReadWrite.All"],
  forceRefresh: false, // "true" to skip a cached token and go to the server to get a new token
};
