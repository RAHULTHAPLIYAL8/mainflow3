import React from 'react'
import Img2 from './pallasites.jpg';
import Img3 from './iron.jpg';

export default function meteors() {
    return (
        <>
            <div style={{ backgroundColor: "black" }} class="card mb-3">
                <div class="card-body">
                    <h5 style={{ color: "white", textalign: "center" }} class="card-title">Pallasites</h5>
                    <p style={{ color: "white", textalign: "center" }} class="card-text">The pallasites are a class of stony–iron meteorite. They are relatively rare, and can be distinguished by the presence of large olivine crystal inclusions in the ferro-nickel matrix</p>
                </div>
                <img src={Img2} style={{ width: 668, height: 291 }} class="card-img-top" alt="..."></img>
            </div>
            <div style={{ backgroundColor: "black" }} class="card">
                <div class="card-body">
                    <h5 style={{ color: "white", textalign: "center" }} class="card-title">Irom meteroid</h5>
                    <p style={{ color: "white", textalign: "center" }} class="card-text">Iron meteorites, also called siderites or ferrous meteorites, are a type of meteorite that consist overwhelmingly of an ironnickel alloy known as meteoric iron that usually consists of two mineral phases: kamacite and taenite</p>
                </div>
                <img src={Img3} style={{ width: 668, height: 291 }} class="card-img-bottom" alt="..."></img>
            </div>
        </>
    )
}
