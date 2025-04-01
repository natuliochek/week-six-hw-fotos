import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {
  const [slide, setSlide] = useState(0);
  const {id, name, image} = data[slide];
  const [fotos, setFotos] = useState(data);
  
  const previousFoto = ()=> {
    setSlide((slide => {
      slide --;
      if (slide < 0) {
        return data.length-1;
      }
      return slide;
    }))
  }

  const nextFoto = ()=> {
    setSlide((slide => {
      slide ++;
      if (slide > data.length-1) {
        slide = 0;
      }
      return slide;
    }))
  }

  const removeFoto = (id)=> {
    let newFotos = fotos.filter(foto => foto.id !== id)
    setFotos(newFotos)
  }

  return(
    <div className="App">
      <div className="same-width-cont">
        <h1>My travel gallery with {fotos.length} pictures</h1>
        <img src={ image } height="300px" alt="travel" />
        <h4>{name}</h4>
        <div className="btn">
          <button onClick={previousFoto}> ⏪ previous foto</button>
          <button onClick={nextFoto}>next foto ⏩ </button>
        </div>
      </div>

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

    </div>
  )
}

export default App;