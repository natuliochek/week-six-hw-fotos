import { useState } from "react";
import { data } from "./data";
import './App.css';

function Slides () {
    const [slide, setSlide] = useState(0);
    const {id, name, image} = data[slide];

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

    return(
        <div className="same-width-cont">
            <h1>My travel gallery with {data.length} pictures</h1>
            <img src={ image } height="300px" alt="travel" />
            <h4>{name}</h4>
            <div className="btn">
                <button onClick={previousFoto}> ⏪ previous foto</button>
                <button onClick={nextFoto}>next foto ⏩ </button>
            </div>
        </div>
    )
}
export default Slides;