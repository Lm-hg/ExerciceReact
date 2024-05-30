export default function Form(props){

    return(
        <div className="page">

            <div className="parent">
                <form action="">
                     <span onClick={props.close}>&times;</span>
                    <div className="a">
                        <label htmlFor="">Nom d'article :</label>
                        <input type="text" name="" id="nom" placeholder="Nom"/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Le prix :</label>
                    <input type="number" name="" id="prix" placeholder="Prix"/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Description :</label>
                      <input type="text" name="" id="details" placeholder="Details"/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Le lien d'image :</label>
                        <input type="url" name="lien" id="Lien" />
                    </div>
                    <div className="bouton">

                        <input className="btn outline" type="submit" value="ADD" onClick={props.envoyer}/>
                    </div>

                </form>

            </div>
        </div>
    )
}