// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
    @use "styles/vars" as *;
    @use "styles/mixins" as *;`,
  },
}

module.exports = nextConfig
