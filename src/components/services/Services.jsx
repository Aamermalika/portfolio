import React, { useState } from "react";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web <br /> Developement
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal  "
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Frontend Dev</h3>
              <p className="services__modal-description">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>

              <ul className="services__modal-service grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Responsive Design</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">
                    Integration with Backend
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Animation</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">
                    Browser Performance Optimization
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">
                    Transforming Ideas into Seamless Code
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon2"></i>
            <h3 className="services__title2">
              Sometimes <br />the best
              <br /> way to solve a problem <br />
              is to help others.
            </h3>
          </div>
          {/* <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>
          </span> */}

          {/* <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal  "
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Android and IOS</h3>
              <p className="services__modal-description">
                I am currently seeking new opportunities and collaborations that
                will allow me to apply my expertise and contribute to the
                creation of cutting-edge software applications.
              </p>

              <ul className="services__modal-service grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">
                    Mobile app developement.
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">
                    Build custom API connectors.
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">
                    Transforming Ideas into Seamless Code.
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Agile Ways of Working.</p>
                </li>
              </ul>
            </div>
          </div> */}
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Code <br />
              Reviews
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal  "
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Debugging code</h3>
              <p className="services__modal-description">
                Engaging actively in code reviews, fostering effective
                collaboration with team members, and demonstrating a steadfast
                commitment to upholding code quality
              </p>

              <ul className="services__modal-service grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Code Readability</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Error Handling</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Code Duplication</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">
                    Performance Optimization
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Collaboration</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
