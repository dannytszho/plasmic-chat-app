import * as React from "react";
import * as ph from "@plasmicapp/host";
import { PlasmicProfile } from "../components/plasmic/chat_app/PlasmicProfile";
import { useRouter } from "next/router";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";

function Profile({user}: any) {
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicProfile
       userProfile={{user: user}}
       />
    </ph.PageParamsProvider>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })

export default Profile;
