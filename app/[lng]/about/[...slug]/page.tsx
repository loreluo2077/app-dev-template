import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/mdx-components";
import "@/styles/mdx.css";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string[];
    lng: String;
  };
}

function getPage(lng: String, slug: String) {
  const pageSlug = lng + "/" + slug;

  const page = allPosts.find(
    (page: { slugAsParams: string }) => page.slugAsParams === pageSlug
  );
  return page;
}

//动态生成Metadata
export async function generateMetadata(params: any): Promise<Metadata> {
  // console.log("this params:" + JSON.stringify(params));
  const page = getPage(params.params?.lng, params.params?.slug);

  // console.log("printmeata:" + page?.title);
  return {
    title: page?.title,
    description: page?.description,
  };
}

async function getPageFromParams(params: { slug: string[]; lng: String }) {
  // console.log("this lang:" + params?.lng);
  // console.log("this slug:" + slug);

  const page = getPage(params?.lng, params?.slug.toString());

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
