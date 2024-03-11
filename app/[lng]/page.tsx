import Link from "next/link";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { useTranslation } from "@/app/i18n/index";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function IndexPage({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-xl font-extrabold leading-tight tracking-tighter md:text-2xl'>
          {/* Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS. */}
          {t("info1")}
        </h1>
        <p className='max-w-[700px] text-lg  '>{t("info2")}</p>
        <p className='max-w-[700px] text-lg  '>{t("info3")}</p>
      </div>
      <div className='flex gap-4'>
        <div className='flex gap-3 justify-center'>
          <p className='pt-2'>{t("welcomeContact")}</p>
          <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </div>
          </Link>
          <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Icons.mail className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </div>
          </Link>

          <Popover>
            <PopoverTrigger>
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.wechat className='h-5 w-5' />
                <span className='sr-only'>wechat</span>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <Image
                src={"/qrCode.png"}
                alt={"wechat qr code"}
                width={100}
                height={100}
              />
            </PopoverContent>
          </Popover>

          <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Icons.twitter className='h-5 w-5' />
              <span className='sr-only'>twitter</span>
            </div>
          </Link>
        </div>
      </div>

      <h1 className='mt-10 pt-3 border-t text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl'>
        {t("myProduct")}
      </h1>

      <p className='max-w-[700px] text-lg   '>{t("welcomeProduct")}</p>
      <div className='flex gap-6 flex-wrap justify-center md:justify-normal'>
        <Card>
          <CardHeader>
            <CardTitle>{t("product1")}</CardTitle>
            <CardDescription>{t("product1_desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{t("product1_content")}</p>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("product2")}</CardTitle>
            <CardDescription>{t("product2_desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{t("product2_content")}</p>
          </CardContent>
        </Card>

        {/* <Card>
          <CardHeader>
            <CardTitle>{t("product3")}</CardTitle>
            <CardDescription>{t("product3_desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{t("")}</p>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
}
