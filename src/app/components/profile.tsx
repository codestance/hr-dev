import React, { useEffect } from "react";
import { useGlobalStore } from "../store/store";
import { observer } from "mobx-react-lite";
import { loadFromStorage } from "../store/utils";
import { RequestForm } from "./request-form";
import { Skeleton, SkeletonItem } from "@fluentui/react-components";

export const Profile = observer(() => {
  const { userStore } = useGlobalStore();
  const account = loadFromStorage("account");
  console.log("account", account);

  console.log("userstore", userStore);

  useEffect(() => {
    if (!userStore.isLogged || !account) {
      userStore.signUserIn();
    }
    console.log("user logged");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userStore.isLogged) {
      userStore.getAvailableDays();
      userStore.getUserId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStore.isLogged]);

  return (
    <>
      {!userStore.available ? (
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
      ) : (
        account && (
          <div className="profile">
            <p>
              Hello, <i>{account.name}</i>
            </p>
            {userStore.available && (
              <p>
                you have <b>{userStore.available}</b> days to use
              </p>
            )}
            <RequestForm />
          </div>
        )
      )}
    </>
  );
});
