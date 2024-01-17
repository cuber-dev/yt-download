

function Contact() {
    const labelLinks = [
        {
            label : 'Product',
            link : '/'
        },
        {
            label : 'Features',
            link : '/features'
        },
        {
            label : 'MAX',
            link : '/'
        },
        {
            label : 'About',
            link : '/about'
        },
        {
            label : 'Support',
            link : '/'
        },
    ]
    const iconLinks = [
        {
            class : 'fa-brands fa-github',
            link : '/'
        },
        {
            class : 'fa-brands fa-twitter',
            link : '/'
        },
        {
            class : 'fa-brands fa-facebook',
            link : '/'
        },
        {
            class : 'fa-brands fa-instagram',
            link : '/'
        }
    ]
    return ( <>
        <section className="contact">
            <ul className="label-links links">
                {labelLinks.map((item,index) => (
                    <li key={index} ><a href={item.link} className="link">{item.label}</a></li>
                ))}
            </ul>
            <div className="divider"></div>
            <ul className="icon-links links">
                {iconLinks.map((item,index) => (
                    <li key={index} ><a href={item.link} className="link"> <i className={item.class} ></i> </a></li>
                ))}
            </ul>
            <p className="copy-right"> <i class="fa fa-copyright" aria-hidden="true"></i> All Rights Reserved 2024-2025.</p>
        </section>
    </> );
} 

export default Contact;