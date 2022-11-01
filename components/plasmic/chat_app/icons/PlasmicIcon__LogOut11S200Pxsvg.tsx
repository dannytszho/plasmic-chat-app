// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogOut11S200PxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogOut11S200PxsvgIcon(props: LogOut11S200PxsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      viewBox={"0 0 100 100"}
      y={"0"}
      x={"0"}
      version={"1.1"}
      style={{
        width: "100%",
        height: "100%",
        background: "rgb(255, 255, 255)",
        animationPlayState: "paused",
        fill: "currentcolor",

        ...(style || {}),
      }}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        className={"ldl-scale"}
        style={{
          transformOrigin: "50% 50%",
          animationPlayState: 'paused"',
        }}
      >
        <path
          d={
            "M43.28 64.16c0 1.04 1.2 1.52 2 .88L71.6 40.88c.24-.24.4-.56.4-.88 0-.32-.16-.64-.4-.88L45.28 14.96c-.72-.72-2-.16-2 .88v14.48H28.24c-.88 0-1.68.72-1.68 1.68v16.08c0 .88.72 1.68 1.68 1.68h15.04v14.4z"
          }
          style={{
            animationPlayState: 'paused"',
          }}
        ></path>

        <path
          fill={"currentColor"}
          d={
            "M19.2 65.84h13.92c2.16 0 3.92-1.76 3.92-3.92S35.28 58 33.12 58H19.2c-1.84 0-3.44-1.52-3.44-3.44V25.28c0-1.84 1.52-3.44 3.44-3.44h13.92c2.16 0 3.92-2.96 3.92-5.12S35.28 14 33.12 14H19.2C13.04 14 8 19.04 8 25.2v29.36c0 6.32 5.04 11.28 11.2 11.28z"
          }
          style={{
            animationPlayState: 'paused"',
          }}
        ></path>
      </g>
    </svg>
  );
}

export default LogOut11S200PxsvgIcon;
/* prettier-ignore-end */
