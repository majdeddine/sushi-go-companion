import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CompressionPlugin from "compression-webpack-plugin";
import nodePackage from "../package.json";

const { NODE_ENV } = process.env;

const isDev = NODE_ENV === "development";

export const env = new webpack.DefinePlugin({
  process: {
    env: {
      APP_NAME: JSON.stringify("GDM-Health POC"),
      APP_Version: JSON.stringify(nodePackage.version),
      NODE_ENV: JSON.stringify(NODE_ENV),
    },
  },
});

export const html = new HtmlWebpackPlugin({
  title: "GDM-Health POC",
  filename: "index.html",
  template: "src/index.ejs",
  cache: !isDev,
  hash: !isDev,
  minify: !isDev,
  meta: {
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no",
  },
});

export const hot = new webpack.HotModuleReplacementPlugin();

export const clean = new CleanWebpackPlugin();

export const analyzer = new BundleAnalyzerPlugin({
  analyzerMode: "static",
  openAnalyzer: false,
});

export const compression = new CompressionPlugin({
  filename: "[path].gz[query]",
  algorithm: "gzip",
});
