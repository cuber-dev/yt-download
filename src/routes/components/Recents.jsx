import Download from "./Download";
import Loader from "./Loader";
import Nothing from "./Nothing";

function Recents({ recents, loader }) {
    return ( <>
    {
        recents.length === 0 ? <Nothing /> : 
        recents.map((item,index) => (
            <div key={index} className="result-item">
                {
                    item.loading ? <div className="loading"></div>
                    : 
                        item.error ? <p className="error"> 
                            <i className="fa fa-warning" aria-hidden="true"></i> {item.error} 
                        </p>  
                          : (<> 
                            <div className="thumbnail" >
                                <a href={item.originalUrl} className="image-link" target="_blank">
                                    <img src={item.thumbnail} alt="thumbnail" className="thumbnail-image" />
                                    <span className="duration"> {item.duration} </span>
                                </a>
                            </div>
                            <div className="content">
                                <div className="header">
                                    <p className="title"> {item.title} </p> 
                                </div>
                                <div className="download-container">
                                    <Download links={item.videoLinks} item={item.videoLinks[0]} />
                                    <Download links={item.audioLinks} item={item.audioLinks[0]} />
                                </div>
                            </div>  
                          
                        </>)
                    
                }
            </div>
        ))
    }
        {loader && <Loader />}
        
    </> );
}

export default Recents;