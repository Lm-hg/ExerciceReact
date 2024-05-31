export default function Form(props){

    return(
        <div className="page">

            <div className="parent">
                <form action="" onSubmit={props.envoyer}>
                     <span onClick={props.close}>&times;</span>
                    <div className="a">
                        <label htmlFor="">Nom d'article :</label>
                        <input type="text" name="" id="nom" ref={props.nomRef} placeholder="Nom" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Le prix :</label>
                    <input type="number" name="" id="prix"ref={props.prixRef} placeholder="Prix" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Description :</label>
                      <input type="text" name="" id="details"ref={props.detailRef} placeholder="Details" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Le lien d'image :</label>
                        <input type="url" name="lien" id="Lien" ref={props.linkRef}required />
                    </div>
                    <div className="bouton">

                        <input className="btn outline" type="submit" value="ADD" />
                    </div>

                </form>

            </div>
        </div>
    )
}