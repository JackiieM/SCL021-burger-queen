import { Link } from "react-router-dom";
export const Button = ({title, url}) => {
    return (
        <>
            <Link to={url} class="btnLink"><button id={title.toLowerCase()}>{title}</button></Link>
        </>
    )
}