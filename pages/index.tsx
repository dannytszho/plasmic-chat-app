import * as React from "react";
import * as ph from "@plasmicapp/host";
import { PlasmicHomepage } from "../components/plasmic/chat_app/PlasmicHomepage";
import { useRouter } from "next/router";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";

function Homepage() {
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage/>
    </ph.PageParamsProvider>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })

export default Homepage;
