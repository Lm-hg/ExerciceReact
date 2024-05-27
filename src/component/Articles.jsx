import Infos from "./Info"
export default function Articles(props){
    return(
        <div>
            <div className="image">
                <img src={props.lien} alt="" srcset="" />
            </div>
            <div className="details">
                <h1>{props.nom}</h1>
                {props.info.map((a)=>(
                    <Infos nom={a.nom} value={a.value}></Infos>
                ))}
            </div>
        </div>
    )
}