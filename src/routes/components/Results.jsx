import { useEffect, useState } from "react";

 
function Results() {
    const [results,setResults] = useState({
        recents: [{
            "title": "React Native Course – Android and iOS App Development",
            duration : '10:12',
            "thumbnail": "https://i.ytimg.com/vi_webp/obH0Po_RdWk/maxresdefault.webp",
            "videoLinks": [
                {
                    "id": "https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532|+|7c3d-7ae1",
                    "sizeLabel": "unknown",
                    "qualityLabel": "720p",
                    "link": "http://localhost:3000/video?url=https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532&quality=720p"
                },
                {
                    "id": "https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532|+|8133-1b6c",
                    "sizeLabel": "unknown",
                    "qualityLabel": "360p",
                    "link": "http://localhost:3000/video?url=https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532&quality=360p"
                }
            ],
            "audioLinks": [
                {
                    "id": "https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532|+|b938-4aa3",
                    "sizeLabel": "259.90 MB",
                    "link": "http://localhost:3000/audio?url=https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532&size=272521056"
                },
                {
                    "id": "https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532|+|5b31-ea66",
                    "sizeLabel": "158.95 MB",
                    "link": "http://localhost:3000/audio?url=https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532&size=166669988"
                },
                {
                    "id": "https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532|+|6e3e-dafb",
                    "sizeLabel": "92.74 MB",
                    "link": "http://localhost:3000/audio?url=https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532&size=97246575"
                },
                {
                    "id": "https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532|+|dd33-9af4",
                    "sizeLabel": "84.25 MB",
                    "link": "http://localhost:3000/audio?url=https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532&size=88346222"
                }
            ],
            "originalUrl": "https://youtu.be/obH0Po_RdWk?si=CDjepn1bY19Ap532",
            time : 'Today'
     }],
        history : []
    })
    useEffect(() => {
        // fetching from api 
    },[]) 
    return ( <>
        <section className="results">
            <div className="tabs">
                <button className="recents-tab tab active">
                    <i className="fa-solid fa-bars"></i>
                    Recents
                </button>
                <button className="history-tab tab">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    History
                </button>
            </div>
            <div className="results-dumper active" id="recent-results-dumper">
                {results.recents.map((item,index) => (
                    <div key={index} className="result">
                        <div className="thumbnail" >
                            <img src={item.thumbnail} alt="thumbnail" className="thumbnail-image" />
                            <span className="duration"> {item.duration} </span>
                        </div>
                        <div className="content">
                            <div className="title">
                                <h3 className=""> {item.title} </h3> 
                                <p className="time"> {item.time} </p>
                            </div>
                            <div className="download-container">
                                <div className="column">
                                    <h3>Video</h3>
                                    {item.videoLinks.map((video,index) => (
                                        <div className="row"  key={index} >
                                            <p className="label"> {video.qualityLabel} </p>
                                            <a href={video.link} className="download-link" > 
                                                .mp4 <i className="fa-solid fa-download"></i> 
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <div className="column">
                                    <h3>Audio</h3>
                                    {item.audioLinks.map((audio,index) => (
                                        <div className="row"  key={index} >
                                            <p className="label"> {audio.sizeLabel} </p>
                                            <a href={audio.link} className="download-link" > 
                                                .m4a <i className="fa-solid fa-download"></i> 
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className="results-dumper" id="history-results-dumper">
                
            </div>
        </section>
    </> );
}

export default Results; 