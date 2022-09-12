import React from 'react'
import { Link } from 'react-router-dom'
const Slide = (props) => {
    const { img, title, content } = props
    console.log(props)
    return (
        <div className="item">
            <img className="d-block w-100" src={img} alt="First slide" />

            <div className="caption d-md-block">
                <div className="display">{title} </div>
                <div className="content">{content}</div>
                <Link to="/about" className="view_more" title="View More">View More</Link>
                <Link to="/contactUs" className="view_more contact_us" title="Contact Us">Contact Us</Link>
            </div>
        </div>

    )
}

export default Slide
