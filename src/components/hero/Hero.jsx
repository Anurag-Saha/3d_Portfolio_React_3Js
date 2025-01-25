import "./hero.css";
import Speech from "./Speech";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        <h1 className="hTitle">
          Hey There,
          <br />
          <span>I'm Anurag!</span>
        </h1>

        {/* cv download button */}

        {/* scroll svg */}

        <a href="#services" className="scroll">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}

        <div className="follow">
          <a href="https://www.instagram.com/___mr._morningstar_/">
            <img src="./instagram-50.png"></img>
          </a>
          <a href="https://x.com/anuragsaha9183">
            <img src="./twitter-50.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/anurag-saha-26585b308/">
            <img src="./linkedin-50.png"></img>
          </a>
          <a href="https://github.com/Anurag-Saha">
            <img src="./github-50.png"></img>
          </a>
          <div className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </div>
        </div>

        {/* BUBBLE */}
        <Speech />

        {/* LOGO */}

        <div className="certificate">
          <img src="./icons8-react-native-50.png" />
          REACT <br />
          DEVLOPER
        </div>
        {/* CONTACT BUTTON */}
        <a href=" /#Contact" className="contactLink">
          <div className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Let's Talk •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="47%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Hero;
