import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { useUser } from "@supabase/auth-helpers-react"
import { useMutation, useQuery, useQueryClient } from "react-query"

const supabaseClient = createBrowserSupabaseClient()

async function getChatMessages(roomId: string) {
    let {error, data} = await supabaseClient.rpc("get_messages", {"room_id_input": roomId}).order("created_at")

    if(error) {
        throw error
    }

    return data
}

export const useGetChatMessages = (roomId: string) => {
    return useQuery(
        `chat-messages-list-${roomId}`,
        () => getChatMessages(roomId),
        {
            enabled: Boolean(roomId)
        }
    )
}

async function createNewMessage({content, sender, room_id}: any) {
    let {error, data} = await supabaseClient.from("messages").insert([{content, sender, room_id}])

    if (error) {
        throw error
    }
    return data
}

export const useCreateNewMessage = (roomId: number) => {
    const queryClient = useQueryClient()
    const user = useUser()

    return useMutation(
        ({content}: any) => createNewMessage({content, room_id: roomId, sender: user?.id }),
        {
            onSuccess: () => {
                queryClient.refetchQueries(`chat-messages-list-${roomId}`)
            }
        }
    )
}