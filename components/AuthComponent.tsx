import * as React from "react";
import {
  PlasmicAuthComponent,
  DefaultAuthComponentProps
} from "./plasmic/chat_app/PlasmicAuthComponent";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { AuthError } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export interface AuthComponentProps extends DefaultAuthComponentProps {}
function AuthComponent_(
  props: AuthComponentProps,
  ref: HTMLElementRefOf<"div">
) {
  const router = useRouter()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [authError, setAuthError] = React.useState<AuthError | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [supabaseClient] = React.useState(() => createBrowserSupabaseClient())
  
  return (
    <PlasmicAuthComponent 
      root={{ ref }}
      {...props} 
      isError={!!authError}
      errorMessage={authError?.message}
      isLoading={loading}
      emailInput={{
        value: email,
        onChange: (e) => setEmail(e.target.value)
      }}
      passwordInput={{
        value: password,
        onChange: (e) => setPassword(e.target.value)
      }}
      submitButton={{
        onClick: async() => {
          setLoading(true)
          setAuthError(null)
          try {

            
            let authFunction = null
            if(props.isSignUpFlow) {
              authFunction = await supabaseClient.auth.signUp({email, password})
            } else {
              authFunction = await supabaseClient.auth.signInWithPassword({email, password})
            }
            
            const {error} = authFunction
            if(error) {
              setAuthError(error)
              return
            }

            router.replace('/')
          } catch (err: any) {
            setAuthError(err)
          } finally {
            setLoading(false)
          }
            
        }
      }}
    />
    );
}

const AuthComponent = React.forwardRef(AuthComponent_);
export default AuthComponent;
