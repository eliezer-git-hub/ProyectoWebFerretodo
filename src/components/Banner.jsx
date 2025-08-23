import React, { useEffect, useState } from 'react'
import banner1 from '../image/banner/1.jpg'
import banner2 from '../image/banner/2.jpg'
import banner3 from '../image/banner/3.jpg'
import banner4 from '../image/banner/4.jpg'
import flechaIz from '../image/INICIO/Izquierda.png'
import flechaDE from '../image/INICIO/Derecha.png'

export const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items =[banner1,banner2,banner3,banner4];
    
    function showSlide(index) {
        let newIndex;
        if (index >= items.length) {
            newIndex = 0;
        } else {
            if (index < 0) {
                newIndex = items.length - 1;
            } else {
                newIndex = index;
            }
        }
        setCurrentIndex(newIndex);
    }
    function previo() {
        showSlide(currentIndex - 1);
    }
    function siguiente() {
        showSlide(currentIndex + 1);
    }
    // Auto avanzar cada 5s
    useEffect(() => {
        const i=setInterval(siguiente,5000);
      return () => {
        clearInterval(i);
      }
    }, [currentIndex])
    
    

return (
    <div className="carousel">
        <button onClick={previo} className="carousel-control-prev">
            <img src={flechaIz} alt="" className="carousel-control-icon"/>
        </button>
        <div className="carousel-inner" style={{transform:`translateX(-${currentIndex * 100}%)`}}>
            {
                items.map((item,index)=>(
                    <div className="carousel-item" key={index}>
                        <img src={item} alt={"no disponible" }/>
                    </div>
                ))
            }
            
        </div>
        <button onClick={siguiente} className="carousel-control-next">
             <img src={flechaDE} alt="" className="carousel-control-icon"/>
        </button>
   
    </div>
)
}
