import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Weather from "./Weather";
import ReactDatePicker from "./ReactDatePicker";
// import { IoSearchSharp } from "react-icons/io5";
import logoImg from "../../public/images/TA-removebg-preview.png";
import { color } from "framer-motion";
import {
  Fade,
  Hinge,
  JackInTheBox,
  Roll,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-awesome-reveal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // time
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow when component unmounts
    };
  }, [isOpen]);

  return (
    <div className="navbar-container">
      <h1 className="h1">SAYT SINOV YOSUNIDA</h1>
      <header className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img className="logo_img" src={logoImg} alt="logoImg" />
          </NavLink>
        </div>

        <div className={`nav-items ${isOpen ? "open" : ""}`}>
          <div className="top-row">
            <div className="full__data__picer">
              <div className="live__time">
                <p>{time.toLocaleTimeString()}</p>
              </div>
              <div className="live__calendar">
                <ReactDatePicker />
              </div>
            </div>

            <div className="weather">
              <Weather />
            </div>

            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="bottom-row">
            <div className="menu-item">
              <Fade
                delay={200}
                duration={1000}
                fraction={0.5}
                // direction="up"
                direction={"left"}
                cascade
              >
                <Link to="/news">Yangiliklar</Link>
              </Fade>
            </div>

            <div className="menu-item">
              <Fade
                direction={"left"}
                delay={200}
                duration={1000}
                fraction={0.5}
                // direction="up"
                cascade
              >
                <Link to="/arxeology">Yodgorliklar</Link>
              </Fade>
            </div>

            <div className="menu-item">
              <Fade
                delay={200}
                duration={1000}
                fraction={0.5}
                // direction="up"
                direction={"left"}
                cascade
              >
                <Link to="/ashyolar">Ashyolar</Link>
              </Fade>
            </div>

            <div className="menu-item">
              <Fade
                delay={200}
                duration={1000}
                fraction={0.5}
                // direction="up"
                direction={"left"}
                cascade
              >
                <Link to="/museum">Muzeylar</Link>
              </Fade>
            </div>

            <div className="menu-item">
              <Fade
                delay={200}
                duration={1000}
                fraction={0.5}
                // direction="up"
                direction={"left"}
                cascade
              >
                <Link to="/library">Kutubxona</Link>
              </Fade>
            </div>

            <div className="menu-item">
              <Fade
                delay={200}
                duration={1000}
                fraction={0.5}
                // direction="up"
                direction={"left"}
                cascade
              >
                <Link to="/about">Biz haqimizda</Link>
              </Fade>
            </div>
          </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <div className="sidebar_logo" onClick={closeMenu}>
              <NavLink to="/">
                <img className="logo_img_sidebar" src={logoImg} alt="" />
              </NavLink>
            </div>
            <span className="close-btn" onClick={closeMenu}>
              ×
            </span>
          </div>

          <div className="sidebar-search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="live__calendar__sidebar">
            <ReactDatePicker />
          </div>

          <div className="sidebar-menu-item" onClick={closeMenu}>
            <NavLink to="/news">Yangiliklar</NavLink>
          </div>
          <div className="sidebar-menu-item" onClick={closeMenu}>
            <NavLink to="/arxeology">Yodgorliklar</NavLink>
          </div>
          <div className="sidebar-menu-item" onClick={closeMenu}>
            <NavLink to="/ashyolar">Ashyolar</NavLink>
          </div>
          <div className="sidebar-menu-item" onClick={closeMenu}>
            <NavLink to="/museum">Muzeylar</NavLink>
          </div>
          <div className="sidebar-menu-item" onClick={closeMenu}>
            <NavLink to="/library">Kutubxona</NavLink>
          </div>
          <div className="sidebar-menu-item" onClick={closeMenu}>
            <NavLink to="/about">Biz haqimizda</NavLink>
          </div>

          <div className="weather__sidebar">
            <Weather />
          </div>
        </div>
      </header>
    </div>
  );
}
