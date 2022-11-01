import * as React from "react";
import {
  PlasmicSideBar,
  DefaultSideBarProps
} from "./plasmic/chat_app/PlasmicSideBar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useRouter } from "next/router";

export interface SideBarProps extends DefaultSideBarProps {}

function SideBar_(props: SideBarProps, ref: HTMLElementRefOf<"div">) {
  const router = useRouter()
  
  return (
    <PlasmicSideBar
      root={{ ref }}
      {...props}
      headerProfile={{
        onClick: () => {
          router.push("/profile")
        }
      }}
    />
  );
}

const SideBar = React.forwardRef(SideBar_);
export default SideBar;
