import * as React from "react";
import {
  PlasmicChatList,
  DefaultChatListProps
} from "./plasmic/chat_app/PlasmicChatList";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import ChatListItem from "./ChatListItem";
import { useGetChatRooms } from "../lib/supbase/chatRoom";
import { useRouter } from "next/router";

export interface ChatListProps extends DefaultChatListProps {}

function ChatList_(props: ChatListProps, ref: HTMLElementRefOf<"div">) {
  const router = useRouter()
  const {data: chatRooms, isLoading: chatRoomsLoading} = useGetChatRooms()
  

  return (
    <PlasmicChatList
      root={{ ref }}
      chatListWrapper={{
         wrapChildren: (children) => chatRooms?.map(({room_name, id}) => (
          <ChatListItem
            key={id}
            roomName={room_name}
            avatar={{
              isEmpty: true,
              prefixText: room_name[0].toUpperCase()
            }}
            onClick={() => {
              router.push(`/room/${id}`)
            }}
          />
        ))
       }}
      {...props}
      isLoading={chatRoomsLoading}
    />
  );
}

const ChatList = React.forwardRef(ChatList_);
export default ChatList;
