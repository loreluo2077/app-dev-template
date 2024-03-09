import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <div className='h-full flex justify-center '>
        <p>首页</p>
      </div>
    </>
  );
}
