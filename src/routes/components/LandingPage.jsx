import { useRef, useState } from "react";

function LandingPage({ update }) {
    const urlInputRef = useRef(null);
    const [urlInput,setUrlInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(urlInputRef.current  && urlInput.trim() !== ""){
            update(urlInput);
            setUrlInput(''); 
        } 
    }
    return ( <>
        <section className="landing-page">
            <h1 className="title" >Download YouTube Videos With <span className="accent" >MAX</span></h1>
            <form className="url-form" onSubmit={handleSubmit} >
                <input 
                    type="text"  
                    name="url" 
                    placeholder="Paste Youtube Video URL Here!" 
                    id="url" 
                    className="url-input"
                    required
                    ref={urlInputRef}
                    value={urlInput}
                    onChange={e => setUrlInput(e.target.value)}
                />
                <button type="submit" className="url-download-btn">
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </section>
    </> );
}

export default LandingPage;