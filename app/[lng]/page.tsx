// "use client";
import { use } from "react";
import { useTranslation } from "../i18n";
import {
  XIconBtn,
  GithubIconBtn,
  MailIconBtn,
  WechatIconBtn,
} from "@/components//social-icons/icon_btn";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import LangSwitch from "@/components/ui/lang-switch";

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <div className='flex flex-col'>
      <div className='flex justify-center flex-col'>
        <div className='navbar bg-base-100'>
          <div className='flex-1'>
            <a className='btn btn-ghost text-xl'>{t("websiteName")}</a>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <ThemeSwitch />
              </li>
              <li>
                <LangSwitch />
              </li>
            </ul>
          </div>
        </div>
        <div className='divider'>
          {" "}
          <p className='md:text-xl'>{t("welcome")}</p>{" "}
        </div>

        <div className='flex justify-center'>
          <div className='card bg-base-100 shadow-xl '>
            <div className='card-body text-center  p-5'>
              {/* <h2 className='card-title'></h2> */}
              <p className=''>{t("info1")}</p>
              <p className='text-sm md:text-base'>{t("info2")}</p>
              <p className='text-sm md:text-base'>{t("info3")}</p>
            </div>
            <div className='card-actions justify-center mb-3 '>
              <XIconBtn href={"http://www.baidu.com"} />
              <GithubIconBtn href={"http://www.baidu.com"} />
              <MailIconBtn href={"mailto:liuxudongbupt@163.com"} />
              <WechatIconBtn openModal={"wechat_modal"} />

              <dialog id='wechat_modal' className='modal'>
                <div className='modal-box'>
                  <figure>
                    <img
                      src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                      alt='Wechat'
                    />
                  </figure>
                </div>
                <form method='dialog' className='modal-backdrop'>
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
          {/* <div className='glass'>Glass</div> */}
        </div>
      </div>
      <h1 className=' pt-10 max-w-[750px] text-center text-3xl text-muted-foreground sm:text-xl'></h1>
      <div className='divider'>
        <p className='md:text-xl'>{t("myProduct")}</p>
      </div>

      <div className='flex justify-center flex-wrap items-center gap-3'>
        <div className='card md:w-96 md:h-60 bg-base-100 shadow-xl mt-5'>
          <div className='card-body'>
            <h2 className='card-title p-0'>{t("product1")}</h2>
            <p>{t("product1_desc")}</p>
            <div className='card-actions justify-end'>
              <button className='btn info-content'>Go </button>
            </div>
          </div>
        </div>

        <div className='card md:w-96 md:h-60  bg-base-100 shadow-xl mt-5'>
          <div className='card-body'>
            <h2 className='card-title p-0'>{t("product2")}</h2>
            <p>{t("product2_desc")}</p>
            <div className='card-actions justify-end'>
              <button className='btn info-content'>Go</button>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer footer-center p-4 bg-base-100 text-base-content mt-20'>
        <aside>
          <p>Copyright © 2024 - All right reserved by loreluo</p>
        </aside>
      </footer>
    </div>
  );
}
