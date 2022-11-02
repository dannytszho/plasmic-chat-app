import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useMutation, useQuery, useQueryClient } from "react-query";

const supabaseClient = createBrowserSupabaseClient()

async function getChatRoom() {
    let { error, data } = await supabaseClient.from('chat_rooms').select("*")
    if(error) {
        throw error
    }
    return data
}

export const useGetChatRooms = () => {
    return useQuery(
        'chat-rooms-list',
        () => getChatRoom(),
    )
}

async function getChatRoomDetails(roomId: string) {
    let {error, data} = await supabaseClient.from("chat_rooms").select("*").eq('id', roomId).single()
    
    if(error) {
        throw error
    }

    return data
}

export const useGetChatRoomDetails = (roomId: string) => {
    return useQuery(
        `chat-room-details-${roomId}`,
        () => getChatRoomDetails(roomId),
        {
            enabled: Boolean(roomId)
        }
    )
}

export const createChatRoom = async({room_name}: any) => {
    let { error, data } = await supabaseClient.from('chat_rooms').insert([{room_name}])
    if(error) {
      throw error
    }
    return data
  }

export const useCreateChatRoom = () => {
    const queryClient = useQueryClient()
    return useMutation(
        ({room_name}: any) => createChatRoom({room_name}),
        {
            onSuccess: () => {
                queryClient.refetchQueries('chat-rooms-list')
            }
        }
    )
}