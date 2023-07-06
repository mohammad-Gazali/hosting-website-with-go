import { Box } from "@mui/material";
import { AppTopBar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Contact, FAQ, Home, HostingCloud, HostingVPS, HostingWordpress } from "./pages";



function App() {
  return (
    <>
      <AppTopBar />
      <Box sx={{ mt: 2, "> *": { minHeight: "100vh", px: { sm: "45px", xs: "29px" }} }} component="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/hosting/wordpress" element={<HostingWordpress />} />
          <Route path="/hosting/cloud" element={<HostingCloud />} />
          <Route path="/hosting/vps" element={<HostingVPS />} />
        </Routes>        
      </Box>
    </>
  )
}

export default App
