import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { Session, SessionContextProvider } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

function MyApp({ Component, pageProps }: AppProps<{initialSession: Session}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <PlasmicRootProvider Head={Head}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}  
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </PlasmicRootProvider>
  );
}

export default MyApp




// // 1. Subscripbe to onAuthStateChange
// useEffect(() => {               
//   const { data: authListener} = supabase.auth.onAuthStateChange((event, session) => {
//     updateSupabaseCookie(event, session)
//   })
//   console.log(authListener)
//   console.log(supabase)

//   return () => {
//     authListener?.subscription.unsubscribe()

//   }
// })

// async function updateSupabaseCookie(event, session) {
//   let apiUrl = "/api/auth/set"
//   if(event === 'SIGNED_OUT') {
//     apiUrl = "/api/auth/remove"
//   }
//   await fetch(apiUrl, {
//     method: "POST",
//     headers: new Headers({"Content-Type": "application/json"}),
//     credentials: "same-origin",
//     body: JSON.stringify({event, session})
//   })
// }
// // 2. Update the supabase auth cookie on server
// // 3. Add a wrapper component for ServerSideProps to actually check for the supabase auth cookie and do the redirection