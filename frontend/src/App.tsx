import { Box } from "@mui/material";
import { AppFooter, AppTopBar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Contact, FAQ, Home, HostingCloud, HostingVPS, HostingWordpress, ServiceDatabases, ServiceDomains } from "./pages";
import { AuthProvider } from "./context/AuthContext";

// TODO: add logout to the app

function App() {
  return (
    <>
      <AuthProvider>
        <AppTopBar />
      </AuthProvider>
      <Box component="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services/hosting/wordpress" element={<HostingWordpress />} />
          <Route path="/services/hosting/cloud" element={<HostingCloud />} />
          <Route path="/services/hosting/vps" element={<HostingVPS />} />
          <Route path="/services/domains" element={<ServiceDomains />} />
          <Route path="/services/databases" element={<ServiceDatabases />} />
        </Routes>
      </Box>
      <AppFooter />
    </>
  )
}

export default App
