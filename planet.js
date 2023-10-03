import React from 'react'
import Img0 from './milkyway.jpg';
import Img1 from './whirlpool.jpg';


export default function planet(props) {
    return (
        <>
            <div style={{ backgroundColor: "black" }} class="card mb-3">
                <div class="card-body">
                    <h5 style={{ color: "white", textalign: "center" }} class="card-title">Milky Way</h5>
                    <p style={{ color: "white", textalign: "center" }} class="card-text">The Milky Way is the galaxy that includes the Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye</p>
                </div>
                <img src={Img0} style={{ width: 668, height: 291 }} class="card-img-top" alt="..."></img>
            </div>
            <div style={{ backgroundColor: "black" }} class="card">
                <div class="card-body">
                    <h5 style={{ color: "white", textalign: "center" }} class="card-title">Whirlpool</h5>
                    <p style={{ color: "white", textalign: "center" }} class="card-text">The Whirlpool Galaxy, also known as Messier 51a or NGC 5194, is an interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus. It lies in the constellation Canes Venatici, and was the first galaxy to be classified as a spiral galaxy. It is 32 million light-years away and 109,000 ly in diameter.</p>
                </div>
                <img src={Img1} style={{ width: 668, height: 291 }} class="card-img-bottom" alt="..."></img>
            </div>
        </>
    )
}
