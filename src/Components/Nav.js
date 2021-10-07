import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p>
              <NavLink to="/" className="btn btn-primary my-2" exact>
                Home Page
              </NavLink>
              <NavLink to="/introduce" className="btn btn-secondary my-2" exact>
                Introduce
              </NavLink>
              <NavLink to="/add" className="btn btn-secondary my-2" exact>
                Add Product
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
