import { dir } from "i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: any) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <div className='h-screen container mx-auto'>{children}</div>
      </body>
    </html>
  );
}
