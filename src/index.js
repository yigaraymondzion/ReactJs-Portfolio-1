import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./Context";

ReactDom.render(
  <ThemeProvider>
    <App />,
  </ThemeProvider>,
  document.querySelector("#root")
);
