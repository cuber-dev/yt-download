import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Results from "./components/Results";

function Home() {
    const baseUrl = 'http://localhost:3000';
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
            if(e instanceof TypeError && e.message === 'Failed to fetch') { 
                setResults(prev => [...prev,{error : 'Server is down (500), please try again later!'}]);
                setTimeout(() => {
                    setLoader(false);
                }, 500); 
                return;
            }else{ 
                setResults(prev => [...prev,e]);
                setTimeout(() => {
                    setLoader(false);
                }, 500);
            }
        }
    }

    return ( <>
        <LandingPage update={update} />
        <Results loader={loader} results={results} />
    </>);
}

export default Home;