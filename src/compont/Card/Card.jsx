import React from 'react'
import { Button } from 'react-bootstrap'
import '../../Data'
import Data from '../../Data'
import './Card.css'
const Card = () => {
    const Datnb = Data.map((res) => {
        return (
           <div className="col-md-4" key={res.id}>
                            <img src={res.img} alt="" />
                            <h2>{res.titel}</h2>
                            <p>{res.time}</p>
                            <h3>{res.pric} <del>{res.pres}</del></h3>
                            <div className="cx"></div>
                            <Button variant="danger">Order Now</Button>
                        </div>
                )
        })
  return (
    <div className="container mb-3">
        <div className="row">
                  {Datnb}
  
        </div>
    </div>
  )
}

export default Card