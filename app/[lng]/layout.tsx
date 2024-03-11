import { SiteHeader } from "@/components/site-header";
import { useTranslation } from "@/app/i18n/index";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: any };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const { t } = await useTranslation(locale);

  return (
    <div className='relative flex min-h-screen flex-col'>
      <SiteHeader siteName={t("websiteName")} />
      <div className='flex-1'>{children}</div>
      <footer className='max-w-screen-xl mx-auto px-4  md:px-8'>
        <div className='mt-3 py-3 border-t md:text-center'>
          <p>{t("beian")}</p>
        </div>
      </footer>
    </div>
    // <div> {children}</div>
  );
}
