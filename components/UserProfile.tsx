import * as React from "react";
import {
  PlasmicUserProfile,
  DefaultUserProfileProps
} from "./plasmic/chat_app/PlasmicUserProfile";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";


export interface UserProfileProps extends DefaultUserProfileProps {}

function UserProfile_(props: UserProfileProps, ref: HTMLElementRefOf<"div">) {

  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [data, setData] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const supabaseClient = useSupabaseClient()
  const user = useUser()


  useEffect(() => {
    async function getUserData(userId: string) {
      try {
        const {data: userData, error} = await supabaseClient.from('profiles').select('*').eq("id", userId).single()    
        setData(userData)
        setFirstName(userData.first_name)
        setLastName(userData.last_name)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    // Only run query once user is logged in.
    if(user) {
      getUserData(user.id)
    }
  }, [supabaseClient, user])
 
  

  async function updateProfile({avatar_url, firstName, lastName}: any) {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')
  
      const updates = {
        id: user.id,
        firstName,
        lastName,
        avatar_url,
        updated_at: new Date().toISOString(),
      }
      let { error } = await supabaseClient.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }}

  return(
    <PlasmicUserProfile
      root={{ ref }}
      {...props}
      uploadAvatar={{
        url: data?.avatar_url,
        onUpload: async(publicAvatarUrl: string) => {
          // update profile mutation to basically update the avatar_url on the backend.
          await updateProfile({avatar_url: publicAvatarUrl})
        },
        loading: loading
      }}
      firstNameInput={{
        value: firstName,
        onChange: (e) => setFirstName(e.target.value)
      }}
      lastNameInput={{
        value: lastName,
        onChange: (e) => setLastName(e.target.value)
      }}
    />
  );
}

const UserProfile = React.forwardRef(UserProfile_);
export default UserProfile;
