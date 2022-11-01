import * as React from "react";
import {
  PlasmicUploadAvatar,
  DefaultUploadAvatarProps
} from "./plasmic/chat_app/PlasmicUploadAvatar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";

export interface UploadAvatarProps extends DefaultUploadAvatarProps {}

function UploadAvatar_({onUpload, url, loading, ...props}: any, ref: HTMLElementRefOf<"div">) {
  const [uploadError, setUploadError] = React.useState("")
  const [uploading, setUploading] = React.useState(false)
  const [avatarUrl, setAvatarUrl] = React.useState("")
  const [supabaseClient] = React.useState(() => createBrowserSupabaseClient())

  useEffect(() => {
    setAvatarUrl(url)
  },[url])

  useEffect(() => {
    setUploading(loading)
  },[loading])

  

  const handleUploadImage = async(e:any) => {
    try {
      setUploading(true)
      setUploadError("")

      if( !e.target.files || !e.target.files.length ) {
        setUploadError("Please select a particular file to upload!!")
        return
      }

      const file = e.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let {error} = await supabaseClient.storage.from("avatars").upload(filePath, file)
      if(error) {
        setUploadError(error?.message)
        return
      }

     
      let publicURL = supabaseClient.storage.from("avatars").getPublicUrl(filePath)
      setAvatarUrl(publicURL.data.publicUrl)
      onUpload(publicURL.data.publicUrl)
     

    } catch (err: any) {
      setUploadError(err.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <PlasmicUploadAvatar
      root={{
        wrapChildren: (children) => {
          return (
            <label htmlFor="userProfileAvatar">
              {children}
              <input 
                id="userProfileAvatar"
                type="file"
                accept="image/*"
                onChange={handleUploadImage}
                disabled={uploading}
                style={{ display: "none" }}
              />
            </label>
          )
        }
      }}
      {...props}
      avatar={{
        imageUrl: avatarUrl
      }}
      isError={!!uploadError}
      errorMessage={uploadError}
      uploading={uploading}
    />
  );
}

const UploadAvatar = React.forwardRef(UploadAvatar_);
export default UploadAvatar;
