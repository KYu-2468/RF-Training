import React, { useEffect } from "react";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

import { auth } from "../firebase";
import { EmailAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import background from "../assets/video/background.mp4";
import PageTitle from "../components/Typography/PageTitle";

import { FiLogOut } from "react-icons/fi";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
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
      <>
        <div className="z-10 h-screen flex flex-col mx-auto mt-32">
          <PageTitle>{user.email}</PageTitle>
          <LogOutBtn logout={logout} />
        </div>

        <video
          className="w-screen fixed top-0 left-0 -z-10"
          autoPlay
          loop
          muted
        >
          <source src={background} type="video/mp4" />
        </video>
      </>
    );
  }

  return (
    <>
      <video className="w-screen fixed top-0 left-0 z-0" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <div id="firebaseui-auth-container" className="my-32" />
    </>
  );
};

const LogOutBtn = ({ logout }) => {
  const buttonStyle =
    "rounded-full border-black bg-red-500 w-64 h-20 p-3 text-4xl font-serif text-white flex no-wrap content-center";

  return (
    <>
      <button className={"z-10 " + buttonStyle} onClick={logout}>
        <FiLogOut className="h-full ml-4" />
        <p className="h-full ml-6">Log out</p>
      </button>
    </>
  );
};

const uiConfig = {
  signInSuccessUrl: "/app/overview",
  signInOptions: [EmailAuthProvider.PROVIDER_ID],
  tosUrl: "https://rf-training-sgs.web.app",
  privacyPolicyUrl: function () {
    window.location.assign("https://rf-training-sgs.web.app");
  },
};

export default Login;
