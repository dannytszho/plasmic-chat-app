import * as React from "react";
import {
  PlasmicUserProfile,
  DefaultUserProfileProps
} from "./plasmic/chat_app/PlasmicUserProfile";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useUser } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { useGetUserData, useUpdateUserData } from "../lib/supbase/user";
import { useRouter } from "next/router";


export interface UserProfileProps extends DefaultUserProfileProps {}

function UserProfile_(props: UserProfileProps, ref: HTMLElementRefOf<"div">) {

  const router = useRouter()

  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const user = useUser()

  console.log(firstName)

  const {data: userData, isLoading: userDataIsLoading} = useGetUserData(user?.id)

  const updateUserDataMutation = useUpdateUserData()

  useEffect(() => {
    setFirstName(userData?.first_name)
    setLastName(userData?.last_name)

  },[userData])

  return(
    <PlasmicUserProfile
      root={{ ref }}
      {...props}
      uploadAvatar={{
        url: userData?.avatar_url,
        onUpload: async(publicAvatarUrl: string) => {
          // update profile mutation to basically update the avatar_url on the backend.
          await updateUserDataMutation.mutateAsync({avatar_url: publicAvatarUrl})
        },
        loading: userDataIsLoading || updateUserDataMutation.isLoading
      }}
      firstNameInput={{
        value: firstName || '',
        onChange: (e) => setFirstName(e.target.value)
      }}
      lastNameInput={{
        value: lastName || '',
        onChange: (e) => setLastName(e.target.value)
      }}
      saveProfileButton={{
        onClick: async() => {
          await updateUserDataMutation.mutateAsync({ first_name: firstName, last_name: lastName })
          router.replace('/')
        }
      }}
    />
  );
}

const UserProfile = React.forwardRef(UserProfile_);
export default UserProfile;
