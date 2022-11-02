import * as React from "react";
import * as ph from "@plasmicapp/host";
import { PlasmicHomepage } from "../components/plasmic/chat_app/PlasmicHomepage";
import { useRouter } from "next/router";
import { createBrowserSupabaseClient, withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import SideBar from "../components/SideBar";


function Homepage({user, ...props}: any) {
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage
      layout={<SideBar user={user} />}
       />
    </ph.PageParamsProvider>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })

export default Homepage;
