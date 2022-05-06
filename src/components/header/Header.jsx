import "./Header.scss";
import { images } from "../../constants";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiCaretRightCircle } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-container">
        <img src={images.perruless} alt="" />
        <div className="app__container-info">
          <div className="phone">
            <BsFillTelephoneFill className="icon" size={10} />
            <div>1-415-800-4781</div>
          </div>
          <select className="versions" name="Version" id="version">
            <option value="Version 1">Version 1</option>
            <option value="Version 2">Version 2</option>
            <option value="Version 3">Version 3</option>
          </select>
        </div>
        <div className="app__header-greetins">
          <span>Hello Luis</span>
          <p>
            My name is Ryle,
            <br />
            I'll be your personal travel advisor.
          </p>
          <span>Let's start planning!</span>
          <div className="app__header-linkwhyus">
            <a href="http://">Why us?</a>
            <BiCaretRightCircle size={15} />
          </div>

          <div className="app__header-awards">
            <div className="awards">
              Ranked <span>#1</span> <br />
              in the word
            </div>
            <div className="trustpilot">
              <IoIosStar />
              Trustpilot
            </div>
          </div>
        </div>
        <div className="app__header-advisor-info">
          <figure>
            <img src={images.advisor} alt="" />
          </figure>
          <div className="app__header-advisor" >
            <span>Rylee McGowan</span>
            <div className="phoneAdvisor">
              <BsFillTelephoneFill className="icon" size={10} />
              <div>1-415-800-4781</div>
            </div>
            <a className="buttonReadme" href="#">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
