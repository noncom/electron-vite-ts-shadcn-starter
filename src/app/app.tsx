import ReactDOM from "react-dom/client";
import { ShadCNApp } from "./shadcn/shadcn-app.js";

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    ShadCNApp()
)