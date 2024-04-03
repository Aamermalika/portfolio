import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active "
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">
                  1337 Future Is Loading - software engineer 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Electrical Engineering and Automated Systems
                </h3>
                <span className="qualification__subtitle">
                  FST Settat - Bachelor Degree
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  electrical engineering mechanical engineering
                </h3>
                <span className="qualification__subtitle">
                  FST Settat - DEUST
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  electrical science and technology
                </h3>
                <span className="qualification__subtitle">
                  AL IDRISSI - High School Diploma
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2014 - 2016
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active "
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Electrical Engineer intern </h3>
                <span className="qualification__subtitle">
                Roca Morocco
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  06/2018 - 08/2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Mathematics Teacher and Event Organizer
                </h3>
                <span className="qualification__subtitle">
                  Association Assalam Missour
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              

          
              <div>
                <h3 className="qualification__title"> Volunteer</h3>
                <span className="qualification__subtitle">
                  CTDE: Student Development Techno-Share Club
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
