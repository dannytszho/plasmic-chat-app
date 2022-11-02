// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tuYYL4LS2Mqra35JfVEDDQ
// Component: 1KykzanB-I
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
import ChatMessage from "../../ChatMessage"; // plasmic-import: t8CM_vbY1N/component
import TextInput from "../../TextInput"; // plasmic-import: 9ljEDf5OMQM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_chat_app.module.css"; // plasmic-import: tuYYL4LS2Mqra35JfVEDDQ/projectcss
import sty from "./PlasmicChat.module.css"; // plasmic-import: 1KykzanB-I/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: X-S4N8Ewv2b/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: i-vm5fwpkkY/icon
import SendSvgrepoComsvgIcon from "./icons/PlasmicIcon__SendSvgrepoComsvg"; // plasmic-import: yHFyNPQ13F/icon

export type PlasmicChat__VariantMembers = {};
export type PlasmicChat__VariantsArgs = {};
type VariantPropType = keyof PlasmicChat__VariantsArgs;
export const PlasmicChat__VariantProps = new Array<VariantPropType>();

export type PlasmicChat__ArgsType = {
  roomName?: React.ReactNode;
};
type ArgPropType = keyof PlasmicChat__ArgsType;
export const PlasmicChat__ArgProps = new Array<ArgPropType>("roomName");

export type PlasmicChat__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  roomAvatar?: p.Flex<typeof Avatar>;
  freeBox?: p.Flex<"div">;
  body?: p.Flex<"div">;
  footer?: p.Flex<"div">;
  messageTextInput?: p.Flex<typeof TextInput>;
  sendIcon?: p.Flex<"svg">;
};

export interface DefaultChatProps {
  roomName?: React.ReactNode;
  className?: string;
}

function PlasmicChat__RenderFunc(props: {
  variants: PlasmicChat__VariantsArgs;
  args: PlasmicChat__ArgsType;
  overrides: PlasmicChat__OverridesType;

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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        hasGap={true}
        className={classNames(projectcss.all, sty.header)}
      >
        <Avatar
          data-plasmic-name={"roomAvatar"}
          data-plasmic-override={overrides.roomAvatar}
          className={classNames("__wab_instance", sty.roomAvatar)}
          size={"_60" as const}
        />

        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.roomName,
            className: classNames(sty.slotTargetRoomName)
          })}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"body"}
        data-plasmic-override={overrides.body}
        hasGap={true}
        className={classNames(projectcss.all, sty.body)}
      >
        <ChatMessage
          className={classNames("__wab_instance", sty.chatMessage___9Rlsf)}
        />

        <ChatMessage
          className={classNames("__wab_instance", sty.chatMessage__ohKzv)}
          isSent={true}
        />

        <ChatMessage
          className={classNames("__wab_instance", sty.chatMessage___649K9)}
        />

        <ChatMessage
          className={classNames("__wab_instance", sty.chatMessage__jO65)}
        />

        <ChatMessage
          className={classNames("__wab_instance", sty.chatMessage___6MwiV)}
        />

        <ChatMessage
          className={classNames("__wab_instance", sty.chatMessage___17MBm)}
        />
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        hasGap={true}
        className={classNames(projectcss.all, sty.footer)}
      >
        <TextInput
          data-plasmic-name={"messageTextInput"}
          data-plasmic-override={overrides.messageTextInput}
          className={classNames("__wab_instance", sty.messageTextInput)}
          placeholder={"Type your message here..." as const}
        />

        <SendSvgrepoComsvgIcon
          data-plasmic-name={"sendIcon"}
          data-plasmic-override={overrides.sendIcon}
          className={classNames(projectcss.all, sty.sendIcon)}
          role={"img"}
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "roomAvatar",
    "freeBox",
    "body",
    "footer",
    "messageTextInput",
    "sendIcon"
  ],
  header: ["header", "roomAvatar", "freeBox"],
  roomAvatar: ["roomAvatar"],
  freeBox: ["freeBox"],
  body: ["body"],
  footer: ["footer", "messageTextInput", "sendIcon"],
  messageTextInput: ["messageTextInput"],
  sendIcon: ["sendIcon"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  roomAvatar: typeof Avatar;
  freeBox: "div";
  body: "div";
  footer: "div";
  messageTextInput: typeof TextInput;
  sendIcon: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChat__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChat__VariantsArgs;
    args?: PlasmicChat__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChat__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicChat__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicChat__ArgProps,
          internalVariantPropNames: PlasmicChat__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicChat__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChat";
  } else {
    func.displayName = `PlasmicChat.${nodeName}`;
  }
  return func;
}

export const PlasmicChat = Object.assign(
  // Top-level PlasmicChat renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    roomAvatar: makeNodeComponent("roomAvatar"),
    freeBox: makeNodeComponent("freeBox"),
    body: makeNodeComponent("body"),
    footer: makeNodeComponent("footer"),
    messageTextInput: makeNodeComponent("messageTextInput"),
    sendIcon: makeNodeComponent("sendIcon"),

    // Metadata about props expected for PlasmicChat
    internalVariantProps: PlasmicChat__VariantProps,
    internalArgProps: PlasmicChat__ArgProps
  }
);

export default PlasmicChat;
/* prettier-ignore-end */
