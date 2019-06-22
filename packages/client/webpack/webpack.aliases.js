import path from "path";

export default {
  "react-dom": "@hot-loader/react-dom",
  src: path.resolve(__dirname, "../src/"),
  dist: path.resolve(__dirname, "../dist/"),
  utils: path.resolve(__dirname, "../src/utils/"),
  stores: path.resolve(__dirname, "../src/stores/"),
  config: path.resolve(__dirname, "../src/config/"),
  pages: path.resolve(__dirname, "../src/pages/"),
  language: path.resolve(__dirname, "../src/language/"),
  resources: path.resolve(__dirname, "../src/resources/"),
  components: path.resolve(__dirname, "../src/components/"),
  atoms: path.resolve(__dirname, "../src/components/atoms/"),
  molecules: path.resolve(__dirname, "../src/components/molecules/"),
  organisms: path.resolve(__dirname, "../src/components/organisms/"),
};
