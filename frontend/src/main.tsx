import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

// main font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// brand font
import "@fontsource/open-sans/800.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";



const queryClient = new QueryClient();


export const PRIMARY_COLOR = deepPurple;
export const SECONDARY_COLOR = deepOrange;

const theme = createTheme({
  palette: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
