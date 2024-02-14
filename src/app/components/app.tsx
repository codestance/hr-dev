import React from "react";
import { Route, Routes, useLocation } from "react-router";
import { History } from "./history";
import { Profile } from "./profile";
import { TeamsAuthPopup } from "./teams-auth-popup";

export const App = () => {
  const location = useLocation();
  return (
    <div className="app-content">
      <Routes location={location}>
        <Route path="/history" element={<History />}></Route>
        {/* @ts-expect-error Async Server Component */}
        <Route path="/teamsauthpopup" element={<TeamsAuthPopup />} />
        <Route path="/" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};
