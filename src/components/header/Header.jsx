import "./Header.scss";
import { images } from "../../constants";
import React from "react";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-container">
        <img src={images.perruless} alt="" />
        <div className="app__container-info">
          <div className="phone">
            <span>1-415-800-4781</span>
          </div>
          <select className="versions" name="Version" id="version">
            <option value="Version 1">Version 1</option>
            <option value="Version 2">Version 2</option>
            <option value="Version 3">Version 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
