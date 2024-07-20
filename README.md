# Canva App

Welcome to your Canva App! 🎉

This is a starting point for your app using your chosen template. The complete documentation for the platform is at [canva.dev/docs/apps](https://www.canva.dev/docs/apps/).

**Note:** This code and documentation assumes some experience with TypeScript and React.

## Requirements

- Node.js `v18` or `v20.10.0`
- npm `v9` or `v10`

**Note:** To make sure you're running the correct version of Node.js, we recommend using a version manager, such as [nvm](https://github.com/nvm-sh/nvm#intro). The [.nvmrc](/.nvmrc) file in the root directory of this repo will ensure the correct version is used once you run `nvm install`.

## Quick start

```bash
npm install
```

## Running your Canva App

### Step 1: Start the local development server

To start the boilerplate's development server, run the following command:

```bash
npm start
```

The server becomes available at <http://localhost:8080>.

The app's source code is in the `src/app.tsx` file.

### Step 2: Preview the app

The local development server only exposes a JavaScript bundle, so you can't preview an app by visiting <http://localhost:8080>. You can only preview an app via the Canva editor.

To preview an app:

1. Create an app via the [Developer Portal](https://www.canva.com/developers/apps).
2. Select **App source > Development URL**.
3. In the **Development URL** field, enter the URL of the development server.
4. Click **Preview**. This opens the Canva editor (and the app) in a new tab.
5. Click **Open**. (This screen only appears when using an app for the first time.)

The app will appear in the side panel.

<details>
  <summary>Previewing apps in Safari</summary>

By default, the development server is not HTTPS-enabled. This is convenient, as there's no need for a security certificate, but it prevents apps from being previewed in Safari.

**Why Safari requires the development server to be HTTPS-enabled?**

Canva itself is served via HTTPS and most browsers prevent HTTPS pages from loading scripts via non-HTTPS connections. Chrome and Firefox make exceptions for local servers, such as `localhost`, but Safari does not, so if you're using Safari, the development server must be HTTPS-enabled.

To learn more, see [Loading mixed-content resources](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content#loading_mixed-content_resources).

To preview apps in Safari:

1. Start the development server with HTTPS enabled:

```bash
# Run the main app
npm start --use-https

# Run an example
npm start <example-name> --use-https
```

2. Navigate to <https://localhost:8080>.
3. Bypass the invalid security certificate warning:
4. Click **Show details**.
5. Click **Visit website**.
6. In the Developer Portal, set the app's **Development URL** to <https://localhost:8080>.

You need to bypass the invalid security certificate warning every time you start the local server. A similar warning will appear in other browsers (and will need to be bypassed) whenever HTTPS is enabled.

</details>

### (Optional) Step 3: Enable Hot Module Replacement

By default, every time you make a change to an app, you have to reload the entire app to see the results of those changes. If you enable [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) (HMR), changes will be reflected without a full reload, which significantly speeds up the development loop.

**Note:** HMR does **not** work while running the development server in a Docker container.

To enable HMR:

1. Navigate to an app via the [Your apps](https://www.canva.com/developers/apps).
2. Select **Configure your app**.
3. Copy the value from the **App origin** field. This value is unique to each app and cannot be customized.
4. In the root directory, open the `.env` file.
5. Set the `CANVA_APP_ORIGIN` environment variable to the value copied from the **App origin** field:

   ```bash
   CANVA_APP_ORIGIN=# YOUR APP ORIGIN GOES HERE
   ```

6. Set the `CANVA_HMR_ENABLED` environment variable to `true`:

   ```bash
   CANVA_HMR_ENABLED=true
   ```

7. Restart the local development server.
8. Reload the app manually to ensure that HMR takes effect.

## Running an app's backend

Some templates provide an example backend. This backend is defined in the template's `backend/server.ts` file, automatically starts when the `npm start` command is run, and becomes available at <http://localhost:3001>.

To run templates that have a backend:

1. Navigate to the [Your apps](https://www.canva.com/developers/apps) page.
2. Copy the ID of an app from the **App ID** column.
3. In the starter kit's `.env` file, set `CANVA_APP_ID` to the ID of the app.

   For example:

   ```bash
   CANVA_APP_ID=AABBccddeeff
   CANVA_APP_ORIGIN=#
   CANVA_BACKEND_PORT=3001
   CANVA_FRONTEND_PORT=8080
   CANVA_BACKEND_HOST=http://localhost:3001
   CANVA_HMR_ENABLED=FALSE
   ```

4. Start the app:

   ```bash
   npm start
   ```

The ID of the app must be explicitly defined because it's required to [send and verify HTTP requests](https://www.canva.dev/docs/apps/verifying-http-requests/). If you don't set up the ID in the `.env` file, an error will be thrown when attempting to run the example.

## Customizing the backend host

If your app has a backend, the URL of the server likely depends on whether it's a development or production build. For example, during development, the backend is probably running on a localhost URL, but once the app's in production, the backend needs to be exposed to the internet.

To more easily customize the URL of the server:

1. Open the `.env` file in the text editor of your choice.
2. Set the `CANVA_BACKEND_HOST` environment variable to the URL of the server.
3. When sending a request, use `BACKEND_HOST` as the base URL:

   ```ts
   const response = await fetch(`${BACKEND_HOST}/custom-route`);
   ```

   **Note:** `BACKEND_HOST` is a global constant that contains the value of the `CANVA_BACKEND_HOST` environment variable. The variable is made available to the app via webpack and does not need to be imported.

4. Before bundling the app for production, update `CANVA_BACKEND_HOST` to point to the production backend.

## Configure ngrok (optional)

If your app requires authentication with a third party service, your server needs to be exposed via a publicly available URL, so that Canva can send requests to it.
This step explains how to do this with [ngrok](https://ngrok.com/).

**Note:** ngrok is a useful tool, but it has inherent security risks, such as someone figuring out the URL of your server and accessing proprietary information. Be mindful of the risks, and if you're working as part of an organization, talk to your IT department.
You must replace ngrok urls with hosted API endpoints for production apps.

To use ngrok, you'll need to do the following:

1. Sign up for a ngrok account at <https://ngrok.com/>.
2. Locate your ngrok [authtoken](https://dashboard.ngrok.com/get-started/your-authtoken).
3. Set an environment variable for your authtoken, using the command line. Replace `<YOUR_AUTH_TOKEN>` with your actual ngrok authtoken:

   For macOS and Linux:

   ```bash
   export NGROK_AUTHTOKEN=<YOUR_AUTH_TOKEN>
   ```

   For Windows PowerShell:

   ```shell
   $Env:NGROK_AUTHTOKEN = "<YOUR_AUTH_TOKEN>"
   ```

This environment variable is available for the current terminal session, so the command must be re-run for each new session. Alternatively, you can add the variable to your terminal's default parameters.

## Run the development server with ngrok and add authentication to the app

These steps demonstrate how to start the local development server with ngrok.

From your app's root directory

1. Stop any running scripts, and run the following command to launch the backend and frontend development servers. The `--ngrok` parameter exposes the backend server via a publicly accessible URL.

   ```bash
   npm start --ngrok
   ```

2. After ngrok is running, copy your ngrok url
   (e.g. `https://0000-0000.ngrok-free.app`) to the clipboard.

   1. Go to your app in the [Developer Portal](https://www.canva.com/developers/apps).
   2. Navigate to the "Add authentication" section of your app.
   3. Check "This app requires authentication"
   4. In the "Redirect URL" text box, enter your ngrok url followed by `/redirect-url` e.g.
      `https://0000-0000.ngrok-free.app/redirect-url`
   5. In the "Authentication base URL" text box, enter your ngrok url followed by `/` e.g.
      `https://0000-0000.ngrok-free.app/`
      Note: Your ngrok URL changes each time you restart ngrok. Keep these fields up to
      date to ensure your example authentication step will run.

3. Make sure the app is authenticating users by making the following changes:

   1. Replace

      `router.post("/resources/find", async (req, res) => {`

      with

      `router.post("/api/resources/find", async (req, res) => {`

      in [./backend/routers/auth.ts](./backend/routers/auth.ts). Adding `/api/` to the route ensures
      the JWT middleware authenticates requests.

   2. Replace

      `` const url = new URL(`${BACKEND_HOST}/resources/find`); ``

      with

      `` const url = new URL(`${BACKEND_HOST}/api/resources/find`); ``

      in [./adapter.ts](./adapter.ts)

   3. Comment out these lines in [./app.tsx](./app.tsx)

      ```typescript
      // Comment this next line out for production apps
      setAuthState("authenticated");
      ```

4. Navigate to your app at `https://www.canva.com/developers/apps`, and click **Preview** to preview the app.
   1. A new screen will appear asking if you want to authenticate.
      Press **Connect** to start the authentication flow.
   2. A ngrok screen may appear. If it does, select **Visit Site**
   3. An authentication popup will appear. For the username, enter `username`, and
      for the password enter `password`.
   4. If successful, you will be redirected back to your app.
5. You can now modify the `/redirect-url` function in `server.ts` to authenticate with your third-party
   asset manager, and `/api/resources/find` to pull assets from your third-party asset manager.

   See `https://www.canva.dev/docs/apps/authenticating-users/` for more details.
