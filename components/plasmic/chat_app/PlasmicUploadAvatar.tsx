// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tuYYL4LS2Mqra35JfVEDDQ
// Component: 1SkV-WKjFZ
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: kv2sB2fQdM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_chat_app.module.css"; // plasmic-import: tuYYL4LS2Mqra35JfVEDDQ/projectcss
import sty from "./PlasmicUploadAvatar.module.css"; // plasmic-import: 1SkV-WKjFZ/css

import BeanEater1S200PxsvgIcon from "./icons/PlasmicIcon__BeanEater1S200Pxsvg"; // plasmic-import: 8dFCSNKlq/icon

export type PlasmicUploadAvatar__VariantMembers = {
  isError: "isError";
  uploading: "uploading";
};
export type PlasmicUploadAvatar__VariantsArgs = {
  isError?: SingleBooleanChoiceArg<"isError">;
  uploading?: SingleBooleanChoiceArg<"uploading">;
};
type VariantPropType = keyof PlasmicUploadAvatar__VariantsArgs;
export const PlasmicUploadAvatar__VariantProps = new Array<VariantPropType>(
  "isError",
  "uploading"
);

export type PlasmicUploadAvatar__ArgsType = {
  errorMessage?: React.ReactNode;
};
type ArgPropType = keyof PlasmicUploadAvatar__ArgsType;
export const PlasmicUploadAvatar__ArgProps = new Array<ArgPropType>(
  "errorMessage"
);

export type PlasmicUploadAvatar__OverridesType = {
  root?: p.Flex<"div">;
  avatar?: p.Flex<typeof Avatar>;
  svg?: p.Flex<"svg">;
};

export interface DefaultUploadAvatarProps {
  errorMessage?: React.ReactNode;
  isError?: SingleBooleanChoiceArg<"isError">;
  uploading?: SingleBooleanChoiceArg<"uploading">;
  className?: string;
}

function PlasmicUploadAvatar__RenderFunc(props: {
  variants: PlasmicUploadAvatar__VariantsArgs;
  args: PlasmicUploadAvatar__ArgsType;
  overrides: PlasmicUploadAvatar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootisError]: hasVariant(variants, "isError", "isError"),
          [sty.rootuploading]: hasVariant(variants, "uploading", "uploading")
        }
      )}
    >
      {(hasVariant(variants, "uploading", "uploading") ? true : true) ? (
        <Avatar
          data-plasmic-name={"avatar"}
          data-plasmic-override={overrides.avatar}
          className={classNames("__wab_instance", sty.avatar, {
            [sty.avatarisError]: hasVariant(variants, "isError", "isError"),
            [sty.avataruploading]: hasVariant(
              variants,
              "uploading",
              "uploading"
            )
          })}
        />
      ) : null}
      {(hasVariant(variants, "isError", "isError") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox___6TlA8, {
            [sty.freeBoxisError___6TlA8FPrfd]: hasVariant(
              variants,
              "isError",
              "isError"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__bzArq, {
              [sty.freeBoxisError__bzArqfPrfd]: hasVariant(
                variants,
                "isError",
                "isError"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Enter some text",
              value: args.errorMessage,
              className: classNames(sty.slotTargetErrorMessage, {
                [sty.slotTargetErrorMessageisError]: hasVariant(
                  variants,
                  "isError",
                  "isError"
                )
              })
            })}
          </div>
        </div>
      ) : null}
      {(hasVariant(variants, "uploading", "uploading") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__bYmF, {
            [sty.freeBoxuploading__bYmF1M8J7]: hasVariant(
              variants,
              "uploading",
              "uploading"
            )
          })}
        >
          <BeanEater1S200PxsvgIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg, {
              [sty.svguploading]: hasVariant(variants, "uploading", "uploading")
            })}
            role={"img"}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "svg"],
  avatar: ["avatar"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof Avatar;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUploadAvatar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUploadAvatar__VariantsArgs;
    args?: PlasmicUploadAvatar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUploadAvatar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUploadAvatar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicUploadAvatar__ArgProps,
          internalVariantPropNames: PlasmicUploadAvatar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicUploadAvatar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUploadAvatar";
  } else {
    func.displayName = `PlasmicUploadAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicUploadAvatar = Object.assign(
  // Top-level PlasmicUploadAvatar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicUploadAvatar
    internalVariantProps: PlasmicUploadAvatar__VariantProps,
    internalArgProps: PlasmicUploadAvatar__ArgProps
  }
);

export default PlasmicUploadAvatar;
/* prettier-ignore-end */
