import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(<App history={history} />, el);
  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV == "development") {
  const dev_root = document.querySelector("#_marketing_dev_root");
  if (dev_root) {
    mount(dev_root, {});
  }
}
export { mount };
