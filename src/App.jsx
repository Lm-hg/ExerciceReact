import React from 'react'
import Articles from './component/Articles'
import Lien from './component/Lien'
import './App.css'

function App() {
  console.log("hello");
  const articles=[
    {
      url:"https://th.bing.com/th?id=ORMS.4f9fc4cb6aafd68a42e61a46e50b3319&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0",
      liens:["Accueil","Inscription","Connexion","A propos",],
      info:[{
        nom:"Prix",
        value:"5500"
      },
    {nom:"Numero d'article",
      value:1
    },{
      nom:"Description",
      value:"Couleur noire"
    },{
      nom:"Statut",
      value:"En vente"
    },
  {
    nom:"Livraison",
    value:"Pas disponible"
  }]
    },

  ]
  const premier=articles[0];
  console.log(premier);
  return (
    <>
    <div>
    {premier.liens.map((a)=>(
      <Lien nom={a}></Lien>
    ))}

    </div>
    {articles.map((a)=>(
      <Articles lien={a.url} info={a.info}></Articles>
    ))}
    </>
  )
}

export default App
