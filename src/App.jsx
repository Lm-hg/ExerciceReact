import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Articles from './component/Articles'
import Nav from './component/Nav'
import Search from './component/Search'
import Profil from './component/Profil'
import Form from './component/Form'
import './App.css'

function App() {
 const articles=[
   {
     nom:"Fashion",
     prix:"850 euros",
     details:"consecteur adipiscing elit.",
     url:"https://th.bing.com/th/id/OIP.FdCXr7Jcc9ssP-v4jgY9FwHaGp?w=230&h=206&c=7&r=0&o=5&pid=1.7",
 
   },
   {
     nom:"Nike",
     prix:"120 euros",
     details:"consecteur adipiscing elit.",
     url:"data:image/jpeg;base64,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",

   },
   {
     nom:"Adidas",
     prix:"199 euros",
     details:"consecteur adipiscing elit.",
     url:"https://th.bing.com/th/id/OIP.GKcelbeFXKxXRx9WlXt5QAHaE8?w=274&h=183&c=7&r=0&o=5&pid=1.7",

   },
   {
     nom:"Puma",
     prix:"155 euros",
     details:"consecteur adipiscing elit.",
     url:"data:image/jpeg;base64,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",
 
   },
   {
     nom:"McQueen",
     prix:"809 euros",
     details:"consecteur adipiscing elit.",
     url:"https://th.bing.com/th?q=Alexander+McQueen+Shoes+Gucci&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=fr-FR&cc=FR&setlang=fr&adlt=strict&t=1&mw=247",

   },
   {
     nom:"Alexender",
     prix:"260 euros",
     details:"consecteur adipiscing elit.",
     url:"https://th.bing.com/th/id/OIP.KH1bxShOe0ek3OqD4K03BAHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7",

   },

   
 


   


 ]
 const nomRef= useRef();
 const tarifRef= useRef();
 const detailsRef= useRef();
 const urlRef= useRef();

 const [art, setarticle]=useState(articles)
 const nomIn=(e)=>{
  setNom(e.target.value);
 }
 const prixIn=(e)=>{
  setTarif(e.target.value)
 }
 const detailIn=(e)=>{
  setDetails(e.target.value);
 }
 const linkIn=(e)=>{
  setUrl(e.target.value);
 }
  const affiche= ()=>{
    var div=document.querySelector('.page')
      div.style.display='block';
  }
  const navLink=["Accueil","Femme","Homme","Enfant & bébé","A propos"];
  const close=()=>{
    var div=document.querySelector('.page')

    div.style.display='none'
  }
  
  const Submitformulaire = async (e) => {
    e.preventDefault();
    const nom= nomRef.current.value;
    const tarif= tarifRef.current.value;
    const details= detailsRef.current.value;
    const url= urlRef.current.value;
    const prix = tarif + " euros";
    const data = { nom, prix, details, url };
  
    try {
      if(nom!='' 
      && tarif!='' 
      && details != ''
      && url != ''){

        const response = await fetch('http://localhost:8888/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const daa=await response.json()
        console.log(daa);

          setarticle((prevArticles) => [...prevArticles, daa]);
          const form = document.querySelector('form')
          var div=document.querySelector('.page')
          form.reset();
          div.style.display='none'


      }else{
        alert("Veuilez remplir chaque champ");
      }
    } catch (error) {
      console.error('Erreur de réseau ou autre', error);
    }
  

  };
  
   return (
    <>
    <header>
      <Search></Search>
      <Nav lien={navLink}></Nav>
      <Profil></Profil>
      <button onClick={affiche}>ADD</button>
    </header>
    <main>

    {art.map((a)=>(
      <Articles nom={a.nom} url={a.url}  details={a.details} prix={a.prix} ></Articles>
    ))}
    <Form close={close} envoyer={Submitformulaire} nomRef={nomRef} prixRef={tarifRef} detailRef={detailsRef} linkRef={urlRef}></Form>
    </main>
    </>
  )
}

export default App
