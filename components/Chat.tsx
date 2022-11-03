import * as React from "react";
import { PlasmicChat, DefaultChatProps } from "./plasmic/chat_app/PlasmicChat";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useGetChatRoomDetails } from "../lib/supbase/chatRoom";
import { useCreateNewMessage, useGetChatMessages } from "../lib/supbase/messages";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import moment from 'moment'

export interface ChatProps extends DefaultChatProps {}

const supabaseClient = createBrowserSupabaseClient()

function Chat_({user, roomId, ...props}: any, ref: HTMLElementRefOf<"div">) {
  const scrollRef = React.useRef<HTMLSpanElement>(null)
  const [newMessage, setNewMessage] = React.useState("")

  const {data: roomDetails} = useGetChatRoomDetails(roomId)
  const {data: chatMessages, isLoading: messagesIsLoading, refetch: fetchMessages} = useGetChatMessages(roomId)
  const createNewMessageMutation = useCreateNewMessage(roomId)

  useEffect(() => {
    async function getSubscription() {
      const channel = supabaseClient.channel('messages').on("postgres_changes", {event: 'INSERT', schema: 'public', table: 'messages'}, (payload) => {
        fetchMessages()
      }).subscribe()
      
      return () => supabaseClient.removeChannel(channel)
    }
    getSubscription()
  },[])

  useEffect(() => {
    if(!scrollRef.current) return

    setTimeout(() => {
      scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }, 2000)
  },[chatMessages?.length, messagesIsLoading])

  async function createNewMessage() {
    if(newMessage?.length <= 0) return

    await createNewMessageMutation.mutateAsync({
      content: newMessage,
      room_id: roomId
    })

    setNewMessage("")
  }

  return (
    <PlasmicChat
      root={{ ref }}
      {...props}
      roomAvatar={{
        isEmpty: true,
        prefixText: roomDetails?.room_name[0]?.toUpperCase()
      }}
      roomName={roomDetails?.room_name}
      body={{
        wrapChildren: (children: any) => {
          return (
          <React.Fragment>
            {
              chatMessages?.map(message => (
                <ChatMessage
                  key={message.id}
                  content={message.content}
                  createdAt={moment(message.created_at).fromNow()}
                  username={message?.first_name ? (
                    `${message?.first_name || ''} ${message?.last_name|| ''}`
                    ): message?.sender_email
                  }
                  avatar={{
                    prefixText: (
                      message?.first_name && message?.first_name[0] || message?.sender_email[0].toUpperCase()
                      ),
                    isEmpty: !message?.avatar_url,
                    imageUrl: message?.avatar_url
                  }}
                  isSent={Boolean(user.id === message.sender_id)}
                />
              ))
            }
            <span ref={scrollRef}></span>
          </React.Fragment>
          )
        }
      }}
      messageTextInput={{
        value: newMessage,
        onChange: (e: any) => {
          setNewMessage(e.target.value)
        },
        onKeyDown: async(e: any) => {
          if(e.key === 'Enter') {
            await createNewMessage()
          }
        }
      }}
      sendIcon={{
        onClick: async() => {
          await createNewMessage()
        }
      }}
    />
  );
}

const Chat = React.forwardRef(Chat_);
export default Chat;
