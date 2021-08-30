// const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
// const path = require("path");
// const withImages = require('next-images')

// module.exports = withImages({
//   images: {
//     domains: ["images.ctfassets.net"],
//   },
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.plugins.push(new DuplicatePackageCheckerPlugin());
//     config.resolve.alias["fast-deep-equal"] = path.resolve(
//       __dirname,
//       "node_modules",
//       "fast-deep-equal"
//     );
//     config.resolve.alias["strip-ansi"] = path.resolve(
//       __dirname,
//       "node_modules",
//       "strip-ansi"
//     );
//     config.resolve.alias["react-is"] = path.resolve(
//       __dirname,
//       "node_modules",
//       "react-is"
//     );
//     return config;
//   },
// });

module.exports = {
  optimizeFonts: false,
};
