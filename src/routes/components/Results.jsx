import Recents from "./Recents";
 
function Results({ results,loader }) {
    return ( <>
        <section className="results-container" id="results-container">
            <div className="tabs">
                <button className="recents-tab tab">
                    <i className="fa-solid fa-bars"></i>
                    Recents 
                </button>
            </div> 
            <div className="results-dumper" id="recent-results-dumper">
               <Recents loader={loader} recents={results} />
            </div>
        </section> 
    </> );
}

export default Results; 