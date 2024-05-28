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
                {props.info.map((a)=>(
                    <Infos class={a.class} bouton={a.bouton}></Infos>
                ))}
            </div>
        </div>
    )
}