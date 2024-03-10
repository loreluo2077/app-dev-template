"use client";
import * as React from "react";
import { X, Github, WeChat, Mail } from "./icons";

interface IIconBtnProps {
  size?: String;
  href?: String;
  openModal?: String;
}

const XIconBtn: React.FunctionComponent<IIconBtnProps> = ({
  size = 5,
  href,
}) => {
  return (
    <>
      <a
        className='btn btn-ghost btn-square btn-sm '
        href={`${href}`}
        target='_blank'
      >
        <X className={`w-${size} h-${size} fill-current`} />
      </a>
    </>
  );
};

const GithubIconBtn: React.FunctionComponent<IIconBtnProps> = ({
  size = 5,
  href,
}) => {
  return (
    <>
      <a
        className='btn btn-ghost btn-square btn-sm '
        href={`${href}`}
        target='_blank'
      >
        <Github className={`w-${size} h-${size} fill-current`} />
      </a>
    </>
  );
};

const MailIconBtn: React.FunctionComponent<IIconBtnProps> = ({
  size = 5,
  href,
}) => {
  return (
    <>
      <a
        className='btn btn-ghost btn-square btn-sm '
        href={`${href}`}
        target='_blank'
      >
        <Mail className={`w-${size} h-${size} fill-current`} />
      </a>
    </>
  );
};

const WechatIconBtn: React.FunctionComponent<IIconBtnProps> = ({
  openModal,
  size = 5,
}) => {
  return (
    <>
      <button
        className='btn btn-ghost btn-square btn-sm '
        onClick={() =>
          (document.getElementById(
            `${openModal}`
          ) as HTMLDialogElement)!.showModal()
        }
      >
        <WeChat className={`w-${size} h-${size} fill-current`} />
      </button>
    </>
  );
};

export { XIconBtn, GithubIconBtn, MailIconBtn, WechatIconBtn };
