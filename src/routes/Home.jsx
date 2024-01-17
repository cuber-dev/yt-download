import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Results from "./components/Results";

function Home() {
    const baseUrl = 'https://a6864657-ac0b-4b3c-b208-31b1bf8eead8-00-3cry9l8we6yhg.pike.replit.dev';
    const [results,setResults] = useState([]);
    const [loader,setLoader] = useState(false);
    const update = async (url) => {
        setLoader(true);
        try{
            const reqURL = `${baseUrl}/info?url=${url}`;
            const res = await fetch(reqURL);
            const data = await res.json();
            console.log(data);
            if(data) setResults(prev => [...prev,data]);
            setTimeout(() => {
                setLoader(false);
            }, 500);
        }catch (e){ 
            console.log(e);
            setResults( prev => [...prev,{error : e}]);
            setTimeout(() => {
                setLoader(false);
            }, 500);
        }
    }

    return ( <>
        <LandingPage update={update} />
        <Results loader={loader} results={results} />
    </>);
}

export default Home;