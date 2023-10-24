import React from "react";
import Navigation from "./Navigation";

function Track() {
  return (
    <>
    <Navigation />
      <div
        id="track"
        class="container-fluid justify-content-center align-items-center text-center mb-2  bgGrn"
      >
        <div class="container-fluid p-md-2 mt-5 bg-light  bgGrn">
          <div class="container-fluid d-flex justify-content-center txt--White bgGrn">
            <div class="row justify-content-around  bgGrn">
              <div class="col-md-3 my-md-1 mx-md-2 p-2 text-center justify-content-center ">
                <img
                  class="rounded-circle w-50 h-75"
                  src={require("../assets/img/Donate-480x480.png")}
                  alt="Donate"
                />
                <h5 class="md-2 txt--White--wFont-h">Donate</h5>
              </div>
              <div class="col-md-3 my-md-1 mx-md-2 p-2 text-center justify-content-center ">
                <img
                  class="rounded-circle w-50 h-75"
                  src={require("../assets/img/star.png")}
                  alt="Measure"
                />
                <h5 class="md-2 txt--White--wFont-h">Measure</h5>
              </div>
              <div class="col-md-3 my-md-1 mx-md-2 p-2 text-center justify-content-center">
                <img
                  class="rounded-circle w-50 h-75"
                  src={require("../assets/img/money.png")}
                  alt="Redeem"
                />
                <h5 class="md-2 txt--White--wFont-h">Redeem</h5>
              </div>
            </div>
          </div>
          <div class="container-fluid ehe bgGrn p-5">
            <h2 className="txt--White--wFont-h">Claimable Rewards</h2>
            <ul className=" txt--White--wFont">
              <li>Money</li>
              <li>Starbs Gift Card</li>
              <li>School Supplies</li>
              <li>Choices of Food in Student Plaza</li>
            </ul>
            <p className=" txt--White--wFont">
              Note: Only 2kg or more can redeem these rewards
            </p>
            <div class="container-fluid text-center mt-3">
              <h2 className="txt--White--wFont-h">Drop-Off</h2>
              <div
                class="embed-responsive embed-responsive-16by9 mb-3"
                style={{ maxWidth: "100%" }}
              >
                <iframe
                  class="embed-responsive-item box w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.3653105815706!2d120.33882677595815!3d16.046522040043698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339167fe6bba4d67%3A0xf54b516c2c5d10b6!2sPHINMA-University%20of%20Pangasinan!5e0!3m2!1sen!2sph!4v1692780323919!5m2!1sen!2sph"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Track;
