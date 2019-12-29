import React from "react";

import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div className="header">
      <div className="header__left">
        <NavLink to="/">
          <div className="header__logo">
            <div className="logo__name">Shruthi Subramnani</div>
          </div>
        </NavLink>
      </div>
      <div className="header__right">
        <div className="header__links">
          <NavLink to="/home" activeClassName="links__link--active links__link">
            HOME
          </NavLink>
          <NavLink
            exact
            to="/about"
            activeClassName="links__link--active links__link"
          >
            ABOUT
          </NavLink>
          <NavLink
            exact
            to="/subjectMatrix"
            activeClassName="links__link--active links__link"
          >
            SUBJECT MATRIX
          </NavLink>
          <NavLink
            exact
            to="/questLog"
            activeClassName="links__link--active links__link"
          >
            QUEST LOG
          </NavLink>
          <NavLink
            exact
            to="/contact"
            activeClassName="links__link--active links__link"
          >
            CONTACT
          </NavLink>
          {/* <span className="links__link--seperator">|</span>
				<a href="https://github.com/symmetriccurve/">
					<span className="links__link">Code</span>
				</a>
				<span className="links__link--seperator">|</span>
				<NavLink  exact to='/my-interview' activeClassName="links__link--active links__link">
						My Interview
				</NavLink>
				<span className="links__link--seperator">|</span>
				<NavLink  exact to='/contact' activeClassName="links__link--active links__link">
						Contact
				</NavLink> */}
          {/* <span className="links__link--seperator">|</span>
					<a href="https://www.linkedin.com/in/vikrambelde/">
						<span className="links__link">LinkedIn</span>
					</a>	 */}
        </div>
      </div>
    </div>
  );
};
