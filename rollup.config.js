import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";
import analyze from "rollup-plugin-analyzer";
import alias from "@rollup/plugin-alias";
import path from "path";
import { uglify } from "rollup-plugin-uglify";

const config = require("./package.json");

// const projectRootDir = path.resolve(__dirname);

export default {
  input: "src/index.js",
  output: {
    exports: "named",
    name: "VueStateDropdown",
    file: "dist/vue-state-dropdown.js",
    format: "umd",
    /*
    globals: {
      "country-state-city": "CountryStateCity",
    }
    */
  },
  plugins: [
    alias({
      entries: {
        "@": path.resolve(__dirname, "src")
      }
    }),
    vue(),
    resolve({
      mainFields: ["module", "jsnext:main", "main", "browser"]
    }),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".vue"]
    }),
    commonjs(),
    replace({
      VERSION: JSON.stringify(config.version),
      preventAssignment: true,
    }),
    postcss(),
    analyze(),
    uglify(),
    // terser()
  ],
  watch: {
    include: "src/**"
  }
};