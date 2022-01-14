import React from "react";
import "./style.css";
import hassle1 from "../logos/hassle1.png";
import hassle2 from "../logos/hassle2.png";
import hassle3 from "../logos/hassle3.png";
import layer2 from "../logos/layer2.png";
import ghobi1 from "../logos/ghobi1.png";
import ghobi2 from "../logos/ghobi2.png";
import arrowdown from "../logos/arrowdown.png";
import circlearrow from "../logos/circlearrow.png";
import capsicum from "../logos/capsicum.png";
import tomatto from "../logos/tomatto.png";
import blackcircle from "../logos/blackcircle.png";
import darkyellowcircle from "../logos/darkyellowcircle.png";
export default function HassleFree() {
  return (
    <div className="div">
      <img className="hassle1" src={hassle1} />
      <img className="hassle2" src={hassle2} />
      <h2 className="heading2_1">Hassle-Free</h2>
      <br />
      <h2 className="heading2_2">Grocery Shopping </h2>
      <br /> <h2 className="heading2_3">at your fingertips. </h2>
      <p className="para">
        An innovation solution to shop
        <br /> African & Caribbean groceries from <br />
        your phone to your doorstep.
      </p>
      <button className="button" type="button">
        Download
      </button>
      <h6 className="heading6">Store owner?</h6>
      <p className="para2">Click here</p>
      <img className="hassle3" src={hassle3} />
      <img className="hassle4" src={hassle3} />
      <img className="hassle5" src={hassle2} />
      <img className="hassle6" src={hassle2} />
      <img className="layer2" src={layer2} />
      <img className="ghobi1" src={ghobi1} />
      <img className="ghobi2" src={ghobi2} />
      <img className="circlearrow" src={circlearrow} />
      <img className="arrowdown" src={arrowdown} />
      <img className="capsicum" src={capsicum} />
      <img className="tomatto" src={tomatto} />
      <img className="darkyellowcircle" src={darkyellowcircle} />
      <img className="blackcircle" src={blackcircle} />
    </div>
  );
}
