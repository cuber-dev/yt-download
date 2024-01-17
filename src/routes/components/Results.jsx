import Recents from "./Recents";
 
function Results({ results }) {
    return ( <>
        {
            results.length !== 0 && <section className="results-container" id="results-container">
            <div className="tabs">
                <button className="recents-tab tab">
                    <i className="fa-solid fa-bars"></i>
                    Recents 
                </button>
            </div> 
            <div className="results-dumper active" id="recent-results-dumper">
               <Recents recents={results} />
            </div>
        </section> 
        }
    </> );
}

export default Results; 