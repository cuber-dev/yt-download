import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Results from "./components/Results";


function Home() {
    const [results,setResults] = useState([])
    return ( <>
        <LandingPage />
        <Results results={results} />
    </>);
}

export default Home;