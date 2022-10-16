import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { NavLink, withRouter } from "react-router-dom";

import { HomeRounded, Telegram } from "@mui/icons-material";

import CustomButton from "../Button/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

import resumeData from "../../utils/resumeData";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" className="header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={
              pathName == "/" ? "header_link header_link_active" : "header_link"
            }
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio"
                ? "header_link header_link_active"
                : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((social) => (
            <a
              key={resumeData.socials[social].id}
              href={resumeData.socials[social].link}
              target="_blank"
            >
              {resumeData.socials[social].icon}
            </a>
          ))}
          <CustomButton
            link={resumeData.email_link}
            text={"Hire Me"}
            icon={<Telegram />}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
