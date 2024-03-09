import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/mdx-components";
import "@/styles/mdx.css";

interface PageProps {
  params: {
    slug: string[];
    lng: String;
  };
}

async function getPageFromParams(params: { slug: string[]; lng: String }) {
  console.log("this lang:" + params?.lng);
  const slug = params?.lng + "/" + params?.slug;
  console.log("this slug:" + slug);
  const page = allPosts.find(
    (page: { slugAsParams: string }) => page.slugAsParams === slug
  );

  console.log("find page:" + page?.slugAsParams);
  if (!page) {
    null;
  }

  return page;
}

export async function generateStaticParams(): Promise<any> {
  return allPosts.map((page: any) => ({
    slug: page.slugAsParams?.split("/"),
  }));
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <article className='container max-w-3xl py-6 lg:py-12'>
      <div className='space-y-4'>
        <h1 className='inline-block font-heading text-4xl lg:text-5xl'>
          {page.title}
        </h1>
        {page.description && (
          <p className='text-xl text-muted-foreground'>{page.description}</p>
        )}
      </div>
      <hr className='my-4' />
      <Mdx code={page.body.code} />
    </article>
  );
}
