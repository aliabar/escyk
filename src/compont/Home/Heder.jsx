import { faCartShopping, faLightbulb, faShop, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './Zxc.css';
function Heder() {
  return (
    <header id="hre">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <h2 className="my-4">Good food choices are good investments.</h2>
            <p  className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
            <Button variant="danger" className="me-4"><FontAwesomeIcon icon={faCartShopping}/> Order Now</Button>
            <Button variant="light"><FontAwesomeIcon icon={faLightbulb}/>  Learn More</Button>
          </div>
          <div className="col-md-6">

          </div>
        </div>
      </div>
    </header>
  )
}

export default Heder