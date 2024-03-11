// import { createContentlayerPlugin } from "next-contentlayer"
const { createContentlayerPlugin } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {

    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
};
const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});


// export default withContentlayer(nextConfig)
module.exports = withContentlayer(nextConfig);
