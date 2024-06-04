import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./app/store";
import "./index.css";
import makeServer from "./mocks/server";
const container = document.getElementById("root");

if (container) {
    //  if (
    //    process.env.NODE_ENV === "development" &&
    //    typeof makeServer === "function"
    //  ) {
    makeServer(); // For people following the tutorial
    //  }

    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
    );
}
