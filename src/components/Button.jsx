import { Link } from "react-router-dom";
export const Button = ({title, url}) => {
    return (
        <>
            <Link to={url} className="btnLink"><button className="mainBtns" id={title.toLowerCase()}>{title}</button></Link>
        </>
    )
}