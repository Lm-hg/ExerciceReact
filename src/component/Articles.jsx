import Infos from "./Info"
export default function Articles(props){
    return(
        <div className="container">
            <div className="wrapper">

            <div className="banner-image">
                <img src={props.url} alt="" srcset="" />
            </div>
                <h1>{props.nom}</h1>
                <p>{props.prix}</p>
                <p>{props.details}</p>

                </div>
            <div className="button-wrapper">
                <button className="btn outline">DETAILS</button>
                <button className="btn fill">BUY NOW</button>

            </div>
        </div>
    )
}