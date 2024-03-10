import { MetadataRoute } from 'next'
import { allPosts } from 'contentlayer/generated'
import siteMetadata from '@/siteMetadata'


export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['zh-CN', 'en']
  const siteUrl = siteMetadata.siteUrl

  // blog route for english
  // const firstBlogRoutes = allPosts
  //   .filter((p) => p.language === fallbackLng)
  //   .map((post) => ({
  //     url: `${siteUrl}/${fallbackLng}/${post.path}`,
  //     lastModified: post.lastmod || post.date,
  //   }))

  // // // blog route for zh-CN
  // const secondBlogRoutes = allBlogs
  //   .filter((p) => p.language === zhLng)
  //   .map((post) => ({
  //     url: `${siteUrl}/${zhLng}/${post.path}`,
  //     lastModified: post.lastmod || post.date,
  //   }))

  // const BlogRoutes = [...firstBlogRoutes, ...secondBlogRoutes].map((route) => ({
  //   ...route,
  // }))

  // all routes for all locales
  const routes = locales.flatMap((locale) => {
    return ['', ].map((route) => ({
      url: `${siteUrl}/${locale}/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))
  })

  const SitemapRoutes: MetadataRoute.Sitemap = [...routes].map((route) => ({
    ...route,
  }))

  return SitemapRoutes
}
