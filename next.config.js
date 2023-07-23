/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
};

// const withTM = require("next-transpile-modules")(["three"]);
// module.exports = withTM(nextConfig);

module.exports = nextConfig;
