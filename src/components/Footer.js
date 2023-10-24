import React from "react";

function Footer() {
  return (
    <>
      {/* Footer needs to have a row of links and separate p and links*/}
      <section className="">
        <footer className=" text-white  footer-bottom">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">EcoCycle</h5>
                <p>
                  E-waste is not waste: it's a treasure trove of valuable metals
                  and components waiting to be recycled.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Valorant
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center p-3 footer-section footer-text">
            <pre>© 2023 Copyright by EcoCycle</pre>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
