


function LandingPage({}) {
    return ( <>
        <section className="landing-page">
            <h1 className="title" >Download YouTube Videos With <span className="accent" >MAX</span></h1>
            <form className="url-form">
                <input 
                    type="text" 
                    name="url" 
                    placeholder="Paste Youtube Video URL Here!" 
                    id="url" 
                    className="url-input"
                />
                <button type="submit" className="url-download-btn">
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </section>
    </> );
}

export default LandingPage;