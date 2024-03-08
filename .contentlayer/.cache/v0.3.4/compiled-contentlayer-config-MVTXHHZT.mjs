// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  // 定义计算字
  slug: {
    // 计算字段用于生成文档的URL slug
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    // 计算字段用于生成文档的URL参数形式的slug
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  // 指定匹配的文件路径模式
  contentType: "mdx",
  // 指定了文档类型为 mdx
  fields: {
    // 定义文档的字段结构，因为我接下来的示例中只用到title和description字段，所以其他字段被我注释掉了。如果此处配置的字段和实际mdx文件中用到的不一样，编译会报错
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    }
    // date: {
    //   type: "date",
    //   required: true,
    // },
    // published: {
    //   type: "boolean",
    //   default: true,
    // },
    // image: {
    //   type: "string",
    //   required: true,
    // },
    // authors: {
    //   // Reference types are not embedded.
    //   // Until this is fixed, we can use a simple list.
    //   // type: "reference",
    //   // of: Author,
    //   type: "list",
    //   of: { type: "string" },
    //   required: true,
    // },
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  // 指定内容文件的目录路径
  documentTypes: [Post],
  // 指定使用的文档类型，支持多个
  mdx: {
    // 配置MDX解析器的插件
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-MVTXHHZT.mjs.map
