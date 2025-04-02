import { useState } from "react";
import { data } from "./data";
import './App.css';


function FotoGallery () {
    const [fotos, setFotos] = useState(data);

    const removeFoto = (id)=> {
        let newFotos = fotos.filter(foto => foto.id !== id)
        setFotos(newFotos)
      }

    return(
        <div className="same-width-cont">
        <div className="container-fotos">
          {fotos.map(element => {
            const {id, name, image} = element;
            return(
              <div key={id} className="each-cont-fotos">
                <img src={image} width="100px" alt="travel"/>
                <h6>{id} - {name}</h6>
                <button onClick={()=> removeFoto(id)} className="btn-remove">remove</button>
              </div>
            )
          })}
        </div>
        <div>
        <button className="btn-delete" onClick={()=> setFotos([])}>delete all</button>
        </div>
      </div>
    )
}

export default FotoGallery;