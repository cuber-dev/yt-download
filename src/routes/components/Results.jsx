import Recents from "./Recents";
 
function Results({ mediaCount, results,loader }) {
    return ( <>
        <section className="results-container" id="results-container">
            <div className="tabs">
                <button className="recents-tab tab">
                    <i className="fa-solid fa-bars"></i>
                    Recents {mediaCount !== 0 ? ` - ${mediaCount}` : null}
                </button>
            </div> 
            <div className="results-dumper" id="recent-results-dumper">
               <Recents loader={loader} recents={results} />
            </div>
        </section> 
    </> );
}

export default Results; 