import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { UsercontextProvider } from "./Contexts/UsercontextProvider";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
   {/* <UsercontextProvider>

      <App/>
   </UsercontextProvider> */}
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);
