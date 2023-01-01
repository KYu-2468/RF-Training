import React, { useEffect } from "react";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

import { auth } from "../firebase";
import { EmailAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginVersion2 = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const uiConfig = {
    signInSuccessUrl: "/app/overview",
    signInOptions: [EmailAuthProvider.PROVIDER_ID],
    tosUrl: "https://rf-training-sgs.web.app",
    privacyPolicyUrl: function () {
      window.location.assign("https://rf-training-sgs.web.app");
    },
  };

  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    if (!user) ui.start("#firebaseui-auth-container", uiConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (error) {
    return (
      <div id="firebaseui-auth-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (loading) {
  }

  if (user) {
    return (
      <div className="signout">
        <div id="firebaseui-auth-container">
          <p>Current User: {user.email}</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="startRun" onClick={logout}>
              Log out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
      className="h-screen"
    >
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};

export default LoginVersion2;
