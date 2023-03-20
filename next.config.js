module.exports = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
};