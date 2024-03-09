import Link from "next/link";
import { useTranslation } from "@/app/i18n";

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <div className='h-full flex justify-center '>
        <p>博客</p>
      </div>
    </>
  );
}
