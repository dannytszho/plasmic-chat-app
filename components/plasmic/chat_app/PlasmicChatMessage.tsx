// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tuYYL4LS2Mqra35JfVEDDQ
// Component: t8CM_vbY1N
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
import sty from "./PlasmicChatMessage.module.css"; // plasmic-import: t8CM_vbY1N/css

export type PlasmicChatMessage__VariantMembers = {
  isSent: "isSent";
};
export type PlasmicChatMessage__VariantsArgs = {
  isSent?: SingleBooleanChoiceArg<"isSent">;
};
type VariantPropType = keyof PlasmicChatMessage__VariantsArgs;
export const PlasmicChatMessage__VariantProps = new Array<VariantPropType>(
  "isSent"
);

export type PlasmicChatMessage__ArgsType = {
  content?: React.ReactNode;
  createdAt?: React.ReactNode;
  username?: React.ReactNode;
};
type ArgPropType = keyof PlasmicChatMessage__ArgsType;
export const PlasmicChatMessage__ArgProps = new Array<ArgPropType>(
  "content",
  "createdAt",
  "username"
);

export type PlasmicChatMessage__OverridesType = {
  root?: p.Flex<"div">;
  avatar?: p.Flex<typeof Avatar>;
  text?: p.Flex<"div">;
  chatWrapper?: p.Flex<"div">;
};

export interface DefaultChatMessageProps {
  content?: React.ReactNode;
  createdAt?: React.ReactNode;
  username?: React.ReactNode;
  isSent?: SingleBooleanChoiceArg<"isSent">;
  className?: string;
}

function PlasmicChatMessage__RenderFunc(props: {
  variants: PlasmicChatMessage__VariantsArgs;
  args: PlasmicChatMessage__ArgsType;
  overrides: PlasmicChatMessage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    true ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root,
          { [sty.rootisSent]: hasVariant(variants, "isSent", "isSent") }
        )}
      >
        {true ? (
          <Avatar
            data-plasmic-name={"avatar"}
            data-plasmic-override={overrides.avatar}
            className={classNames("__wab_instance", sty.avatar)}
            prefixText={
              true ? (
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"A"}
                </div>
              ) : null
            }
            size={"_45" as const}
          />
        ) : null}

        <p.Stack
          as={"div"}
          data-plasmic-name={"chatWrapper"}
          data-plasmic-override={overrides.chatWrapper}
          hasGap={true}
          className={classNames(projectcss.all, sty.chatWrapper, {
            [sty.chatWrapperisSent]: hasVariant(variants, "isSent", "isSent")
          })}
        >
          <div className={classNames(projectcss.all, sty.freeBox__nrpMw)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              value: args.content
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox___4Q49Q)}>
            {p.renderPlasmicSlot({
              defaultContents: "8 seconds ago",
              value: args.createdAt,
              className: classNames(sty.slotTargetCreatedAt)
            })}
          </div>
        </p.Stack>

        <div
          className={classNames(projectcss.all, sty.freeBox__xgn7O, {
            [sty.freeBoxisSent__xgn7OLtfDw]: hasVariant(
              variants,
              "isSent",
              "isSent"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.username,
            className: classNames(sty.slotTargetUsername, {
              [sty.slotTargetUsernameisSent]: hasVariant(
                variants,
                "isSent",
                "isSent"
              )
            })
          })}
        </div>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "text", "chatWrapper"],
  avatar: ["avatar", "text"],
  text: ["text"],
  chatWrapper: ["chatWrapper"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof Avatar;
  text: "div";
  chatWrapper: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChatMessage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChatMessage__VariantsArgs;
    args?: PlasmicChatMessage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChatMessage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicChatMessage__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicChatMessage__ArgProps,
          internalVariantPropNames: PlasmicChatMessage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicChatMessage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChatMessage";
  } else {
    func.displayName = `PlasmicChatMessage.${nodeName}`;
  }
  return func;
}

export const PlasmicChatMessage = Object.assign(
  // Top-level PlasmicChatMessage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    text: makeNodeComponent("text"),
    chatWrapper: makeNodeComponent("chatWrapper"),

    // Metadata about props expected for PlasmicChatMessage
    internalVariantProps: PlasmicChatMessage__VariantProps,
    internalArgProps: PlasmicChatMessage__ArgProps
  }
);

export default PlasmicChatMessage;
/* prettier-ignore-end */
