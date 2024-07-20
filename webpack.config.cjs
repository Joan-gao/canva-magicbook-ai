/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires  */
/* eslint-disable no-undef */
// todo: fix this file and remove the above
require("dotenv").config();
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { DefinePlugin, optimize } = require("webpack");
const chalk = require("chalk");

/**
 *
 * @param {Object} [options]
 * @param {string} [options.appEntry=./src/index.tsx]
 * @param {string} [options.backendHost]
 * @param {Object} [options.devConfig]
 * @param {number} [options.devConfig.port]
 * @param {boolean} [options.devConfig.enableHmr]
 * @param {boolean} [options.devConfig.enableHttps]
 * @param {string} [options.devConfig.appOrigin]
 * @param {string} [options.devConfig.appId] - Deprecated in favour of appOrigin
 * @param {string} [options.devConfig.certFile]
 * @param {string} [options.devConfig.keyFile]
 * @returns {Object}
 */
function buildConfig({
  devConfig,
  appEntry = path.join(process.cwd(), "src", "index.tsx"),
  backendHost = process.env.CANVA_BACKEND_HOST,
} = {}) {
  const mode = devConfig ? "development" : "production";

  if (!backendHost) {
    console.error(
      chalk.redBright.bold("BACKEND_HOST is undefined."),
      `Refer to "Customizing the backend host" in the README.md for more information.`
    );
    process.exit(-1);
  } else if (backendHost.includes("localhost") && mode === "production") {
    console.error(
      chalk.redBright.bold(
        "BACKEND_HOST should not be set to localhost for production builds!"
      ),
      `Refer to "Customizing the backend host" in the README.md for more information.`
    );
  }

  return {
    mode,
    context: path.resolve(process.cwd(), "./"),
    entry: {
      app: appEntry,
    },
    target: "web",
    resolve: {
      alias: {
        assets: path.resolve(process.cwd(), "assets"),
        utils: path.resolve(process.cwd(), "utils"),
        styles: path.resolve(process.cwd(), "styles"),
        src: path.resolve(process.cwd(), "src"),
      },
      extensions: [".ts", ".tsx", ".js", ".css", ".svg", ".woff", ".woff2"],
    },
    infrastructureLogging: {
      level: "none",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [require("cssnano")({ preset: "default" })],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg)$/i,
          type: "asset/inline",
        },
        {
          test: /\.(woff|woff2)$/,
          type: "asset/inline",
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              issuer: /\.[jt]sx?$/,
              resourceQuery: /react/, // *.svg?react
              use: ["@svgr/webpack", "url-loader"],
            },
            {
              type: "asset/resource",
              parser: {
                dataUrlCondition: {
                  maxSize: 200,
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [require("cssnano")({ preset: "default" })],
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true,
            },
          },
        }),
      ],
    },
    output: {
      filename: `[name].js`,
      path: path.resolve(process.cwd(), "dist"),
      clean: true,
    },
    plugins: [
      new DefinePlugin({
        BACKEND_HOST: JSON.stringify(backendHost),
      }),
      // Apps can only submit a single JS file via the developer portal
      new optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    ],
    ...buildDevConfig(devConfig),
  };
}

/**
 *
 * @param {Object} [options]
 * @param {number} [options.port]
 * @param {boolean} [options.enableHmr]
 * @param {boolean} [options.enableHttps]
 * @param {string} [options.appOrigin]
 * @param {string} [options.appId] - Deprecated in favour of appOrigin
 * @param {string} [options.certFile]
 * @param {string} [options.keyFile]
 * @returns {Object|null}
 */
function buildDevConfig(options) {
  if (!options) {
    return null;
  }

  const { port, enableHmr, appOrigin, appId, enableHttps, certFile, keyFile } =
    options;

  let devServer = {
    server: enableHttps
      ? {
          type: "https",
          options: {
            cert: certFile,
            key: keyFile,
          },
        }
      : "http",
    host: "localhost",
    historyApiFallback: {
      rewrites: [{ from: /^\/$/, to: "/app.js" }],
    },
    port,
    client: {
      logging: "verbose",
    },
    static: {
      directory: path.resolve(process.cwd(), "assets"),
      publicPath: "/assets",
    },
  };

  if (enableHmr && appOrigin) {
    devServer = {
      ...devServer,
      allowedHosts: new URL(appOrigin).hostname,
      headers: {
        "Access-Control-Allow-Origin": appOrigin,
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Private-Network": "true",
      },
    };
  } else if (enableHmr && appId) {
    // Deprecated - App ID should not be used to configure HMR in the future and can be safely removed
    // after a few months.

    console.warn(
      "Enabling Hot Module Replacement (HMR) with an App ID is deprecated, please see the README.md on how to update."
    );

    const appDomain = `app-${appId.toLowerCase().trim()}.canva-apps.com`;
    devServer = {
      ...devServer,
      allowedHosts: appDomain,
      headers: {
        "Access-Control-Allow-Origin": `https://${appDomain}`,
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Private-Network": "true",
      },
    };
  } else {
    if (enableHmr && !appOrigin) {
      console.warn(
        "Attempted to enable Hot Module Replacement (HMR) without configuring App Origin... Disabling HMR."
      );
    }
    devServer.webSocketServer = false;
  }

  return {
    devtool: "source-map",
    devServer,
  };
}

module.exports = () => buildConfig();

module.exports.buildConfig = buildConfig;
