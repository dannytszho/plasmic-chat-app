// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BeanEater1S200PxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BeanEater1S200PxsvgIcon(props: BeanEater1S200PxsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      style={{
        background: "#fff",
        animationPlayState: "running",
        animationDelay: '0s"',

        ...(style || {}),
      }}
      viewBox={"0 0 100 100"}
      preserveAspectRatio={"xMidYMid"}
      display={"block"}
      shapeRendering={"auto"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        style={{
          animationPlayState: "running",
          animationDelay: '0s"',
        }}
        fill={"#e15b64"}
      >
        <circle
          cx={"60"}
          cy={"50"}
          r={"4"}
          style={{
            animationPlayState: "running",
            animationDelay: '0s"',
          }}
        >
          <animate
            attributeName={"cx"}
            repeatCount={"indefinite"}
            dur={"1s"}
            values={"95;35"}
            keyTimes={"0;1"}
            begin={"-0.67s"}
            style={{
              animationPlayState: "running",
              animationDelay: '0s"',
            }}
          ></animate>

          <animate
            attributeName={"fill-opacity"}
            repeatCount={"indefinite"}
            dur={"1s"}
            values={"0;1;1"}
            keyTimes={"0;0.2;1"}
            begin={"-0.67s"}
            style={{
              animationPlayState: "running",
              animationDelay: '0s"',
            }}
          ></animate>
        </circle>

        <circle
          cx={"60"}
          cy={"50"}
          r={"4"}
          style={{
            animationPlayState: "running",
            animationDelay: '0s"',
          }}
        >
          <animate
            attributeName={"cx"}
            repeatCount={"indefinite"}
            dur={"1s"}
            values={"95;35"}
            keyTimes={"0;1"}
            begin={"-0.33s"}
            style={{
              animationPlayState: "running",
              animationDelay: '0s"',
            }}
          ></animate>

          <animate
            attributeName={"fill-opacity"}
            repeatCount={"indefinite"}
            dur={"1s"}
            values={"0;1;1"}
            keyTimes={"0;0.2;1"}
            begin={"-0.33s"}
            style={{
              animationPlayState: "running",
              animationDelay: '0s"',
            }}
          ></animate>
        </circle>

        <circle
          cx={"60"}
          cy={"50"}
          r={"4"}
          style={{
            animationPlayState: "running",
            animationDelay: '0s"',
          }}
        >
          <animate
            attributeName={"cx"}
            repeatCount={"indefinite"}
            dur={"1s"}
            values={"95;35"}
            keyTimes={"0;1"}
            begin={"0s"}
            style={{
              animationPlayState: "running",
              animationDelay: '0s"',
            }}
          ></animate>

          <animate
            attributeName={"fill-opacity"}
            repeatCount={"indefinite"}
            dur={"1s"}
            values={"0;1;1"}
            keyTimes={"0;0.2;1"}
            begin={"0s"}
            style={{
              animationPlayState: "running",
              animationDelay: '0s"',
            }}
          ></animate>
        </circle>
      </g>

      <g
        style={{
          animationPlayState: "running",
          animationDelay: '0s"',
        }}
        fill={"#f8b26a"}
      >
        <path
          d={"M35 50V20a30 30 0 000 60z"}
          style={{
            animationPlayState: "running",
            animationDelay: '0s"',
          }}
        ></path>

        <path
          d={"M35 50H5a30 30 0 0060 0z"}
          style={{
            animationPlayState: "running",
            animationDelay: '0s"',
          }}
        >
          <animateTransform
            attributeName={"transform"}
            type={"rotate"}
            repeatCount={"indefinite"}
            dur={"1s"}
            values={"0 50 50;45 50 50;0 50 50"}
            keyTimes={"0;0.5;1"}
            style={{
              animationPlayState: "running",
              animationDelay: '0s"',
            }}
          ></animateTransform>
        </path>

        <path
          d={"M35 50H5a30 30 0 0160 0z"}
          style={{
            animationPlayState: "running",
            animationDelay: '0s"',
          }}
        >
          <animateTransform
            attributeName={"transform"}
            type={"rotate"}
            repeatCount={"indefinite"}
            dur={"1s"}
            values={"0 50 50;-45 50 50;0 50 50"}
            keyTimes={"0;0.5;1"}
            style={{
              animationPlayState: "running",
              animationDelay: '0s"',
            }}
          ></animateTransform>
        </path>
      </g>
    </svg>
  );
}

export default BeanEater1S200PxsvgIcon;
/* prettier-ignore-end */
