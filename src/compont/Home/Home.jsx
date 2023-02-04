import React from 'react';
import { Button, NavLink } from 'react-bootstrap';
import Navbar from '../Nav/Navbar';
import Heder from './Heder';
import "./Hom.css"
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';
import { Sdxf } from '../Spek/Sdxf';
import { Link } from 'react-scroll';
import * as Scroll from 'react-scroll';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Heder />
      <section className="section1" >
        <div className="container">
          <div className="row h22">
            <div className="col-md-3 ">
              <h2>1287+</h2>
              <p>SAVINGS</p>
            </div>
            <div className="col-md-3">
              <h2>5786+</h2>
              <p>PHOTOS</p>
            </div>
            <div className="col-md-3">
              <h2>1440+</h2>
              <p>ROCKETS</p>
            </div>
            <div className="col-md-3">
              <h2>7110+</h2>
              <p>GLOBES</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section2 my-2" >
        <div className="container">
          <div className="row h32">
            <div className="col-md-6 ">
              <img src={img1} alt="" id="abut" />
            </div>
            <div className="col-md-6 my-2">
              <h2>We pride ourselves on making real food from the best ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <Button variant="danger">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section3 ">
        <div className="container">
          <div className="row h43">
            <div className="col-md-6">
              <h2>We make everything by hand with the best possible ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="prgref">
                <p><FontAwesomeIcon icon={faCheck} color={"brown"} /> Etiam sed dolor ac diam volutpat.</p>
                <p><FontAwesomeIcon icon={faCheck} color={"brown"} /> Erat volutpat aliquet imperdiet.</p>
                <p><FontAwesomeIcon icon={faCheck} color={"brown"} /> purus a odio finibus bibendum.</p>
              </div>
              <Button variant="danger">Learn More</Button>
            </div>
            <div className="col-md-6">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="container">
          <div className="row h11">
            <div className="col-md-12 col-lg-12">
              <h2 >When a man's stomach is full it makes no<br />difference whether he is rich or poor.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a <br /> odiofinibus bibendum in sit amet leo. Mauris feugiat erat tellus. </p>
              <a href="#"><FontAwesomeIcon icon={faPlay} />   Watch Our Story</a>
            </div>
          </div>
        </div>
      </section>
      <div className="sad" id="explore food">
        <div className="container">
          <div className="row h111" >
            <div className="col-12">
              <h2>Explore Our Foods</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br />leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and ,<br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
          </div>
        </div>
      </div>
      <Card />
      <Sdxf />

      <section className="ser" id="FAQ" >
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <div className="row cv">
            <div className="col-md-6">
              <h2> Is Foodera Bread really baked fresh each day?</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.

              </p>
            </div>
            <div className="col-md-6">
              <h2>Do you bake breads containing animal fats or products?</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className="col-md-6">
              <h2>Can I order your products online?</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
            </div>
            <div className="col-md-6">
              <h2>When are you opening a shop near me?</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sert">
        <div className="gf">
          <div className="container ">
            <div className="row  ">


            </div>

          </div>
        </div>
      </section >

      <section className="qw ax" >
        <div className="container">
          <h1>Hurry up! Subscribe our newsletter
            and get 25% Off</h1>
          <p>Limited time offer for this month. No credit card required.</p>
          <div className="row mn">
            <div className="col-md-12">
              <input class="e-mail" placeholder="Email Address here" name="email" id="eaddress" data-validate="validate(required, email)" type="email" />


              <Button variant="danger" type="submit" className='ng'>Subscribe</Button>
            </div>
          </div>

        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row foot">
            <div className="col-md-12 d-flex cs ">
              <Link to="hre" spy={true} smooth={true} offset={50} duration={500}><NavLink className="s">Register</NavLink></Link>
              <Link to="" spy={true} smooth={true} offset={50} duration={500}><NavLink className="s">Forum</NavLink></Link>
              <Link to="" spy={true} smooth={true} offset={50} duration={500}><NavLink className="s">Affiliate</NavLink></Link>
              <Link to="FAQ" spy={true} smooth={true} offset={50} duration={500}><NavLink className="s">FAQ</NavLink></Link>
            </div>

            <div className="col-md-12 vs">
              <p>© 2021. Foodera. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>


    </div >
  )
}

export default Home