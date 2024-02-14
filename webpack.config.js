/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const package = require("./package.json");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ChildProcess = require("child_process");

const execCommand = (command) =>
  ChildProcess.execSync(command).toString().trim();

module.exports = (env, argv) => {
  const isProduction = (argv.mode || "development") === "production";
  const commitHash = execCommand("git rev-parse --short HEAD");
  const gitStatus = execCommand(`git status --short`);
  const cleanState = gitStatus.length > 0 ? "modified" : "clean";
  return [
    {
      context: path.resolve(path.resolve(), "src"),
      target: "web",
      entry: {
        main: ["./app/main.tsx", "./sass/index.scss"],
      },
      resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"],
      },
      output: {
        filename: isProduction ? "[name].[contenthash].js" : "[name].js",
        path: path.resolve(path.resolve(), "dist"),
        publicPath: "",
      },
      devtool: isProduction ? undefined : "eval",
      devServer: isProduction
        ? undefined
        : {
            static: "./dist",
            client: {
              overlay: {
                errors: true,
                warnings: false,
              },
            },
            port: 5033,
            // proxy: {
            //   "/dbe": {
            //     target: "https://sapvu5.proaxia-consulting.com",
            //     secure: true,
            //     changeOrigin: true,
            //   }
            // },
          },
      module: {
        rules: [
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false,
            },
          },
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: "ts-loader",
                options: {
                  configFile: "tsconfig.json",
                },
              },
            ],
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                  url: false,
                },
              },
              {
                loader: "sass-loader", // compiles Sass to CSS
              },
            ],
          },
        ],
      },
      optimization: {
        usedExports: true,
        splitChunks: {
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              name: "bundle",
              chunks: "all",
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
      },
      plugins: [
        new ESLintPlugin({
          extensions: ["tsx", "ts", "js", "jsx"],
          exclude: "./node_modules",
        }),
        new MiniCssExtractPlugin({
          filename: isProduction ? "styles.[chunkhash].css" : "styles.css",
        }),
        new CopyWebpackPlugin({
          patterns: [
            { from: "../color.png", to: "" },
            { from: "../outline.png", to: "" },
            { from: "../manifest.json", to: "" },
          ],
        }),
        new HtmlWebpackPlugin({
          template: "index.html",
          scriptLoading: "defer",
          appVersion: package.version,
          commit: `${commitHash} ${cleanState}`,
        }),
      ],
    },
  ];
};
