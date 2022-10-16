import React from "react";
import "./Footer.css";

import resumeData from "../../utils/resumeData";

import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">Resume & Projects</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Developed By Mohammad Ke
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
