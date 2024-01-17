

function Download({ links, item }) {
    return ( <>
        <table className="table">
            <thead>
                <tr className="header"><th>{item.label}</th></tr>
            </thead>
            <tbody>
                {links.map((media,index) => (
                    <tr key={index} >
                        <td className="label">
                            { media.qualityLabel ? <>
                                    <i className="fa-brands fa-youtube"></i>  {media.qualityLabel}
                                </> : <>
                                    <i className="fa-solid fa-headphones"></i>  {media.sizeLabel}
                                </> 
                            } 
                        </td>   
                        <td>
                            <a href={media.link} className="download-link" > 
                                {item.ext} <i className="fa-solid fa-download"></i> 
                            </a>  
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>                          
    </> );
}

export default Download;