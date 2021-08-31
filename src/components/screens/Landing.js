import "../styles/landing.css";
import menu from "../../assets/menu.png";
import "../styles/landing-responsive.css";
import React from "react";
import { Dimensions } from "react-native";

export default function Landing() {
  function hideNav() {
    if (Dimensions.get("window").width < 1000)
      if (document.querySelector(".navbar").style.display === "block") {
        var el = document.querySelector(".navbar");
        el.style.display = "none";
      }
  }
  return (
    <div className="main-container">
      <div id="home" className="header">
        <button
          onClick={() => {
            var el = document.querySelector(".navbar");
            el.style.display = "block";
          }}
          className="navbar-toggle"
        >
          <img className="menuicon" src={menu} alt="menu"></img>
        </button>
        <nav className="navbar">
          <ul>
            <li>
              <a onClick={hideNav} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={hideNav} href="#about">
                About Us
              </a>
            </li>
            <li>
              <a onClick={hideNav} href="#meal">
                Meal Reviews
              </a>
            </li>
            <li>
              <a onClick={hideNav} href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <h1>Tomato Foods</h1>
      </div>
      <section id="about">
        <div className="about">
          <h1>About Us</h1>
          <div className="aboutpara">
            <p>
              Sunt occaecat veniam dolor incididunt tempor qui. Officia ea
              consequat culpa dolor aliquip officia sunt excepteur consectetur
              quis officia sint officia nisi. Ipsum in proident ex commodo
              tempor. Tempor ullamco pariatur sunt anim eu sint nulla est culpa.
              Eiusmod aute fugiat qui nisi veniam sint voluptate esse aliqua
              adipisicing occaecat.
              <br />
              <br /> Esse duis aute velit aliquip mollit id deserunt elit
              commodo. Esse ipsum qui ut deserunt ex. Aute magna commodo enim
              qui excepteur deserunt laboris est ullamco dolore. Dolore magna
              elit velit ea. Ex nostrud duis excepteur sit excepteur ullamco sit
              nostrud. Occaecat aliquip ad aliqua enim dolor nisi et qui tempor
              enim sint eiusmod nulla. Ut labore aliquip eu enim tempor nisi ea
              cupidatat nostrud officia.
              <br />
              <br /> Enim consequat exercitation dolore consequat duis cupidatat
              dolor id fugiat consectetur. Non proident dolore aute fugiat
              labore enim esse. Velit anim voluptate eu adipisicing veniam est
              veniam do et ullamco. Est ea id nisi occaecat consequat laborum
              aliqua amet ea magna. Dolor adipisicing nisi reprehenderit
              pariatur officia pariatur reprehenderit dolore. <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      <section id="meal">
        <div className="meal-div">
          <h1>Why Everyone Loves our Meal</h1>
          <p className="meal-content">
            Aute duis labore occaecat est ea laboris aliqua excepteur proident
            fugiat adipisicing est officia dolore. Et nisi sunt ullamco
            incididunt tempor laborum velit Lorem dolore nulla do. Commodo
            aliquip ex mollit deserunt adipisicing est cillum do ipsum.
            Cupidatat tempor dolore sunt mollit. Quis ad ut do cupidatat dolor
            ad nostrud laboris. Deserunt ea officia consectetur sit elit velit
            tempor proident.
          </p>
          <button className="meal-details-button" href="https://google.com">
            See Details
          </button>
        </div>
        <div className="cards">
          <div className="card">
            <img
              className="card-image"
              src="https://images.unsplash.com/photo-1536675672178-9c7570ca1357?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="food"
            ></img>
            <h3>Lorem Ipsum</h3>
            <p>
              Reprehenderit quis nostrud deserunt incididunt veniam velit
              pariatur dolor incididunt nulla ex. Qui excepteur commodo tempor
              sit excepteur tempor ea consequat. Nostrud sint non non labore
              incididunt anim elit nostrud nulla excepteur. Consectetur sunt
              incididunt et enim voluptate.
            </p>
            <a className="meal-details-button" href="abc">
              See More
            </a>
          </div>
          <div className="card">
            <img
              className="card-image"
              src="https://images.unsplash.com/photo-1625938147772-bbb03b924106?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRhcmslMjBmb29kfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="food"
            ></img>
            <h3>Lorem Ipsum</h3>
            <p>
              Reprehenderit quis nostrud deserunt incididunt veniam velit
              pariatur dolor incididunt nulla ex. Qui excepteur commodo tempor
              sit excepteur tempor ea consequat. Nostrud sint non non labore
              incididunt anim elit nostrud nulla excepteur. Consectetur sunt
              incididunt et enim voluptate.
            </p>
            <a className="meal-details-button" href="abc">
              See More
            </a>
          </div>
          <div className="card">
            <img
              className="card-image"
              src="https://images.unsplash.com/photo-1604296706014-1780746d6f57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="food"
            ></img>
            <h3>Lorem Ipsum</h3>
            <p>
              Reprehenderit quis nostrud deserunt incididunt veniam velit
              pariatur dolor incididunt nulla ex. Qui excepteur commodo tempor
              sit excepteur tempor ea consequat. Nostrud sint non non labore
              incididunt anim elit nostrud nulla excepteur. Consectetur sunt
              incididunt et enim voluptate.
            </p>
            <a className="meal-details-button" href="abc">
              See More
            </a>
          </div>
          <div className="card">
            <img
              className="card-image"
              src="https://images.unsplash.com/photo-1626203313658-886791f37e46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmslMjBmb29kfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="food"
            ></img>
            <h3>Lorem Ipsum</h3>
            <p>
              Reprehenderit quis nostrud deserunt incididunt veniam velit
              pariatur dolor incididunt nulla ex. Qui excepteur commodo tempor
              sit excepteur tempor ea consequat. Nostrud sint non non labore
              incididunt anim elit nostrud nulla excepteur. Consectetur sunt
              incididunt et enim voluptate.
            </p>
            <a className="meal-details-button" href="abc">
              See More
            </a>
          </div>
        </div>
      </section>
      <section id="contact">
        <h1 className="contact-heading"> Lets Talk About Us</h1>
        <div className="people">
          <div className="person">
            <img
              className="person-img"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="user"
            />
            <p>
              Est consequat dolore dolor qui magna dolor fugiat eu amet amet
              nulla.Est consequat dolore dolor qui magna dolor fugiat eu amet
              amet nulla.
            </p>
            <div className="icon-container">
              <a href="abc">
                <img
                  className="icon"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-28.png"
                  alt="icon"
                ></img>
              </a>
              <a href="abc">
                <img
                  className="icon"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-28.png"
                  alt="icon"
                ></img>
              </a>
              <a href="abc">
                <img
                  className="icon"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-28.png"
                  alt="icon"
                ></img>
              </a>
            </div>
          </div>
          <div className="person">
            <img
              className="person-img"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="user"
            />
            <p>
              Est consequat dolore dolor qui magna dolor fugiat eu amet amet
              nulla.Est consequat dolore dolor qui magna dolor fugiat eu amet
              amet nulla.
            </p>
            <div className="icon-container">
              <a href="abc">
                <img
                  className="icon"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-28.png"
                  alt="icon"
                ></img>
              </a>
              <a href="abc">
                <img
                  className="icon"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-28.png"
                  alt="icon"
                ></img>
              </a>
              <a href="abc">
                <img
                  className="icon"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-28.png"
                  alt="icon"
                ></img>
              </a>
            </div>
          </div>
          <div className="person">
            <img
              className="person-img"
              src="https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="user"
            />
            <p>
              Est consequat dolore dolor qui magna dolor fugiat eu amet amet
              nulla.Est consequat dolore dolor qui magna dolor fugiat eu amet
              amet nulla.
            </p>
            <div className="icon-container">
              <a href="abc">
                <img
                  className="icon"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-28.png"
                  alt="icon"
                ></img>
              </a>
              <a href="abc">
                <img
                  className="icon"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-28.png"
                  alt="icon"
                ></img>
              </a>
              <a href="abc">
                <img
                  className="icon"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-28.png"
                  alt="icon"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="contactfooter">
          <h1>Keep In Touch</h1>
          <div className="outer-form-container">
            <div className="left-form-container">
              <label htmlFor="name"> Name </label>
              <label htmlFor="email"> Email </label>
            </div>
            <div className="right-form-container">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
              ></input>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
              ></input>
            </div>
          </div>
          <button className="btn-submit">Submit</button>
        </div>
      </section>
    </div>
  );
}
