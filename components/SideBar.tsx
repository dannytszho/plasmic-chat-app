import * as React from "react";
import {
  PlasmicSideBar,
  DefaultSideBarProps
} from "./plasmic/chat_app/PlasmicSideBar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useCreateChatRoom } from "../lib/supbase/chatRoom";
import router from "next/router";

export interface SideBarProps extends DefaultSideBarProps {}

function SideBar_(props: SideBarProps, ref: HTMLElementRefOf<"div">) {

  const [data, setData] = React.useState()
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const createChatRoomMutation = useCreateChatRoom()

  useEffect(() => {
    async function getUserData(userId: string) {
      try {
        const {data: userData} = await supabaseClient.from('profiles').select('*').eq("id", userId).single()    
        setData(userData)
        setFirstName(userData.first_name)
        setLastName(userData.last_name)
      } catch (err) {
        console.log(err)
      }
    }
    if(user) {
      getUserData(user.id)
    }
  },[user, supabaseClient])


  
  
  return (
    <PlasmicSideBar
      root={{ ref }}
      {...props}
      username={(
        data?.first_name ? (
          `${firstName || ''} ${lastName|| ''}`
          ): user?.email
      )}
      userAvatar={{
        prefixText: firstName[0] || user?.email[0].toUpperCase(),
        isEmpty: !data?.avatar_url,
        imageUrl: data?.avatar_url,
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

