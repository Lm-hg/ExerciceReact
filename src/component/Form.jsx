export default function Form(props){

    return(
        <div className="page">

            <div className="parent">
                <form action="" onSubmit={props.envoyer}>
                     <span onClick={props.close}>&times;</span>
                    <div className="a">
                        <label htmlFor="">Nom d'article :</label>
                        <input type="text" name="" id="nom" onChange={props.nomIn} placeholder="Nom" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Le prix :</label>
                    <input type="number" name="" id="prix"onChange={props.prixIn} placeholder="Prix" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Description :</label>
                      <input type="text" name="" id="details"onChange={props.detailIn} placeholder="Details" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Le lien d'image :</label>
                        <input type="url" name="lien" id="Lien" onChange={props.linkIn}required />
                    </div>
                    <div className="bouton">

                        <input className="btn outline" type="submit" value="ADD" />
                    </div>

                </form>

            </div>
        </div>
    )
}