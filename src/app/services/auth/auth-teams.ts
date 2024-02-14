import * as ms from "@microsoft/teams-js";
import { useGlobalStore } from "../../store/store";
export const getTeamsToken = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { userStore } = useGlobalStore();
  try {
    await ms.app.initialize();
    console.log("ms app initialized");
    // console.log("kos store", userStore);
    const token = await ms.authentication.authenticate({
      url: "https://login.microsoftonline.com/1c959d66-59b2-4a6b-b984-2775de3c74f9/oauth2/v2.0/authorize",
      // url: `${window.location.origin}/dist/#/teamsauthpopup`,
      width: 300,
      height: 500,
      isExternal: true,
    });
    const user = await ms.authentication.getUser();

    return { token, user };
  } catch (error) {
    console.error(error);
  }
};
