import * as React from "react";
import {
  PlasmicSideBar,
  DefaultSideBarProps
} from "./plasmic/chat_app/PlasmicSideBar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useCreateChatRoom } from "../lib/supbase/chatRoom";
import { useRouter } from "next/router";
import { useGetUserData } from "../lib/supbase/user";

export interface SideBarProps extends DefaultSideBarProps {}

function SideBar_({user, ...props}: any, ref: HTMLElementRefOf<"div">) {
  const supabaseClient = useSupabaseClient()
  const createChatRoomMutation = useCreateChatRoom()
  const router = useRouter()

  const {data: userData} = useGetUserData(user?.id)

  let username = user?.email
  if(userData?.first_name || userData?.last_name){
    username = `${userData?.first_name} ${userData?.last_name}`
  }


  return (
    <PlasmicSideBar
      root={{ ref }}
      {...props}
      username={username}
      userAvatar={{
        prefixText: userData?.first_name && userData?.first_name[0].toUpperCase() ||
        userData?.last_name && userData?.last_name[0].toUpperCase() || user?.email[0],
        isEmpty: !userData?.avatar_url,
        imageUrl: userData?.avatar_url,
        onClick: () => {
          router.push("/profile")
        }
      }}
      logoutIcon={{
        onClick: async() => {
          await supabaseClient.auth.signOut()
          router.push('/')
        }
      }}
      addNewRoomWrapper={{
        onClick: async() => {
          const roomName = prompt("Please enter the namer for chat room")
          if(!roomName) return

          await createChatRoomMutation.mutateAsync({room_name: roomName})
        }
      }}
    />
  );
}

const SideBar = React.forwardRef(SideBar_);
export default SideBar;

