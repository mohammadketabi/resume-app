import { Typography } from "@mui/material";
import React from "react";
import CustomTimeline, { CustomTimelineSeperator } from "../Timeline/Timeline";
import PersonIcon from "@mui/icons-material/Person";

import resumeData from "../../utils/resumeData";

import "./Profile.css";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import EmailIcon from "@mui/icons-material/Email";

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeperator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}</span>{" "}
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={require("../../assets/images/mohammad.png")} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem text={resumeData.name} />
          <CustomTimelineItem text={resumeData.title} />
          <CustomTimelineItem
            text={resumeData.email}
            link={resumeData.email_link}
          />

          {Object.keys(resumeData.socials).map((social) => {
            return (
              <CustomTimelineItem
                key={social}
                text={resumeData.socials[social].text}
                link={resumeData.socials[social].link}
              />
            );
          })}
        </CustomTimeline>
        <div className="button_container">
          <CustomButton
            text={"Contact Me"}
            link={resumeData.email_link}
            icon={<EmailIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
