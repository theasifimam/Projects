import React from "react";
import Title from "../../common/title/Title";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              facilis. Voluptatibus, quis ipsa reiciendis quod praesentium nam,
              quaerat beatae blanditiis necessitatibus ex explicabo! Cum
              accusantium quae, architecto pariatur vero aliquid.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
