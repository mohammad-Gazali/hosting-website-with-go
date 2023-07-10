
import { Button } from "@mui/material"
import HomeHero from "./HomeHero"
import axios from "axios";


const Home = () => {
  return (
    <div>
      <HomeHero />
      <Button variant="contained" onClick={() => axios.get("http://localhost:8000/api/validate")}>
        Send Validate
      </Button>
    </div>
  )
}

export default Home