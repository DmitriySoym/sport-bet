import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./ui";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
