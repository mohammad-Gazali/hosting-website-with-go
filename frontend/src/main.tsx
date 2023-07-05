import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ColorModeContextProvider } from "./context/ColorModeContext.tsx";
import App from "./App.tsx";

// main font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// brand font
import "@fontsource/open-sans/800.css";



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* ColorModeContextProvider contains ThemeProvider of material ui */}
      <ColorModeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ColorModeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
