
import * as React from "react";
import * as ph from "@plasmicapp/host";
import { PlasmicLogin } from "../components/plasmic/chat_app/PlasmicLogin";
import { useRouter } from "next/router";

function Login() {
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicLogin />
    </ph.PageParamsProvider>
  );
}

export default Login;
