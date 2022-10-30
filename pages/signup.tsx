import * as React from "react";
import * as ph from "@plasmicapp/host";

import { PlasmicSignup } from "../components/plasmic/chat_app/PlasmicSignup";
import { useRouter } from "next/router";

function Signup() {

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicSignup />
    </ph.PageParamsProvider>
  );
}

export default Signup;
