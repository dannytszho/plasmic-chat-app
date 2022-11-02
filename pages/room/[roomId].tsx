import * as React from "react";
import * as ph from "@plasmicapp/host";

import { PlasmicRoomChat } from "../../components/plasmic/chat_app/PlasmicRoomChat";
import { useRouter } from "next/router";
import Chat from "../../components/Chat";
import SideBar from "../../components/SideBar";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";

function RoomChat({user}: any) {
  const router = useRouter()
  const {roomId} = router.query
  // console.log(user)

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicRoomChat
        layout={{
          sideBar: <SideBar user={user} />,
          mainContent: <Chat user={user} roomId={roomId} />
        }}
      />
    </ph.PageParamsProvider>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })

export default RoomChat;
