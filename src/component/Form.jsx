export default function Form(props){

    return(
        <div className="page">

            <div className="parent">
                <span onClick={props.close}>&times;</span>
                <form action="">
                    <input type="text" name="" id="nom" placeholder="Nom"/>
                    <input type="number" name="" id="prix" placeholder="Prix"/>
                    <input type="text" name="" id="details" placeholder="Details"/>
                    <input type="url" name="lien" id="Lien" />
                    <div className="bouton">

                        <input type="submit" value="ADD" onClick={props.envoyer}/>
                    </div>

                </form>

            </div>
        </div>
    )
}