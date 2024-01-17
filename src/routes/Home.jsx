import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import Results from "./components/Results";


function Home() {
    const baseUrl = 'https://a6864657-ac0b-4b3c-b208-31b1bf8eead8-00-3cry9l8we6yhg.pike.replit.dev';
    const [results,setResults] = useState([]);

    const update = async (url) => {
        try{
            const reqURL = `${baseUrl}/info?url=${url}`;
            const res = await fetch(reqURL);
            const data = await res.json();
            console.log(data);
            setResults( prev => [...prev,data]); 
        }catch (e){
            console.log(e);
            setResults( prev => [...prev,e]); 
        }
    }
    return ( <>
        <LandingPage update={update} />
        <Results results={results} />
    </>);
}

export default Home;