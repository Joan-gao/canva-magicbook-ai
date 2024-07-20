import { AppUiProvider } from "@canva/app-ui-kit";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "@canva/app-ui-kit/styles.css";

const el = document.getElementById("root");
if (!el) {
  throw new Error("Root element not found");
}
const root = createRoot(el);
function render() {
  root.render(
    <AppUiProvider>
      <App />
    </AppUiProvider>
  );
}

render();

if (module.hot) {
  module.hot.accept("./app", render);
}
