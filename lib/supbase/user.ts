import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { useUser } from "@supabase/auth-helpers-react"
import { useMutation, useQuery } from "react-query"

interface UserProps {
    avatar_url: string
    first_name: string
    last_name: string
}

const supabaseClient = createBrowserSupabaseClient()

async function getUserData(userId: string) {
    const {data, error} = await supabaseClient.from('profiles').select('*').eq("id", userId).single()
    if(error) {
        throw error
    }
    return data
}
export const useGetUserData = (userId: string) => {
    return useQuery(
        `user-data-${userId}`,
        () => getUserData(userId),
        {
            enabled: Boolean(userId)
        }
    )
}

async function updateUserData({avatar_url, first_name, last_name}: UserProps) {
    const {data: userData} = await supabaseClient.auth.getUser().then()
    const updates = {
        id: userData.user?.id,
        first_name,
        last_name,
        avatar_url,
        updated_at: new Date().toISOString(),
    }
    let { error } = await supabaseClient.from('profiles').upsert(updates)

    if (error) throw error

    alert('Profile updated!')
}


export const useUpdateUserData = () => {
    return useMutation(({avatar_url, first_name, last_name}: any) => updateUserData({avatar_url, first_name, last_name}))
}