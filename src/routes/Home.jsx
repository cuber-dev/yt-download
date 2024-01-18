import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Results from "./components/Results";

function Home() {
    const baseUrl = 'https://max-server.onrender.com';
    const [results,setResults] = useState([]);
    const [loader,setLoader] = useState(false);
    const [mediaCount,setMediaCount] = useState(0);
    const update = async (url) => {
        setLoader(true);
        try{
            const reqURL = `${baseUrl}/info?url=${url}`;
            const res = await fetch(reqURL);
            const data = await res.json();
            console.log(data);
            if(data) setResults(prev => [...prev,data]);
            if(data.originalUrl) setMediaCount(mediaCount + 1);
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
        <Results mediaCount={mediaCount} loader={loader} results={results} />
    </>);
}

export default Home;