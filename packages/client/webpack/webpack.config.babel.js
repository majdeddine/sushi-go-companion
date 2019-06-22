import common from "./webpack.common";
import { env, html, hot, clean, analyzer, compression } from "./webpack.plugins";
import { js, image, font } from "./webpack.loaders";
import { optimization } from "./webpack.optimization";

const isDev = process.env.NODE_ENV === "development";

const config = {
  ...common,
  module: {
    rules: [js, image, font],
  },
  plugins: [env, html, clean],
};

if (isDev) {
  config.plugins = [...config.plugins, hot];
} else {
  config.plugins = [...config.plugins, analyzer, compression];
  config.optimization = optimization;
}

export default config;
