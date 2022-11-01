// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SendSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SendSvgrepoComsvgIcon(props: SendSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M512 256.006C512 397.402 397.394 512.004 256.004 512 114.606 512.004 0 397.402 0 256.006-.007 114.61 114.606 0 256.004 0 397.394 0 512 114.614 512 256.006z"
        }
        fill={"#4a5a67"}
      ></path>

      <path
        d={
          "M512 256.005c0-35.674-7.314-69.632-20.494-100.485-.098-.167-.18-.345-.323-.487-.199-.199-.462-.288-.683-.453-.165-.221-.255-.484-.454-.684-.199-.199-65.297-65.123-65.518-65.289-.165-.22-.254-.483-.453-.683-.617-.619-1.344-1.057-2.11-1.402-.238-.108-.475-.172-.721-.251a7.009 7.009 0 00-1.708-.332c-.267-.018-.519-.044-.786-.031a7.024 7.024 0 00-1.971.383c-.149.051-.303.058-.449.119-.031.013-.064.011-.095.025L90.165 228.206a7.093 7.093 0 00-4.254 6.229c-.075 1.902.818 3.539 2.064 4.894.265.469.77.738 1.137 1.137.266.469 183.395 183.374 183.494 183.523.387.364.656.845 1.111 1.111.005.01.016.014.022.022.388.365.659.849 1.116 1.117.007.012.021.017.029.028.387.362 68.892 69.084 69.358 69.356.19.179.377.35.545.545C442.409 460.074 512 366.181 512 256.005z"
        }
        fill={"#444a54"}
      ></path>

      <path
        d={
          "M426.061 92.476a6.932 6.932 0 00-.337-1.728c-.079-.242-.142-.477-.247-.711-.346-.767-.785-1.494-1.403-2.112-.617-.619-1.345-1.056-2.111-1.402-.238-.108-.475-.171-.72-.251a7.058 7.058 0 00-1.708-.333c-.267-.018-.519-.044-.786-.031a6.99 6.99 0 00-1.971.384c-.149.051-.303.058-.449.118-.031.013-.064.012-.094.026l-326.07 141.77a7.092 7.092 0 00-4.254 6.23 7.075 7.075 0 003.765 6.534l118.576 62.779 62.775 118.573a7.09 7.09 0 006.265 3.773c.09 0 .18 0 .273-.006a7.082 7.082 0 006.226-4.257l141.77-326.069c.013-.029.012-.06.023-.089.062-.147.069-.303.121-.452a7.018 7.018 0 00.385-1.98c.012-.262-.012-.507-.029-.766zM109.326 235.335l278.321-121.008-175.46 175.461-102.861-54.453zm167.341 167.334L222.21 299.811l175.469-175.469-121.012 278.327z"
        }
        fill={"#f4f6f9"}
      ></path>
    </svg>
  );
}

export default SendSvgrepoComsvgIcon;
/* prettier-ignore-end */
