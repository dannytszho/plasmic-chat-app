import * as React from "react";
import * as ph from "@plasmicapp/host";
import { PlasmicHomepage } from "../components/plasmic/chat_app/PlasmicHomepage";
import { useRouter } from "next/router";
import { createBrowserSupabaseClient, withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

function Homepage() {
  const router = useRouter()
  const supabase = useSupabaseClient()

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage />
    </ph.PageParamsProvider>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })

export default Homepage;
