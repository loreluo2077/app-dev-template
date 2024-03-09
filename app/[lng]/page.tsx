import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation(lng, "welcome");

  return (
    <>
      <div className='flex justify-center flex-col'>
        <div>{t("title")}</div>
        <div>
          <Link href={"/about/privary"}>{t("privary")}</Link>
        </div>
      </div>
    </>
  );
}
