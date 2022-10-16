import { Grid, Icon, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import "./Resume.css";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import TimelineItem from "@mui/lab/TimelineItem";

import TimelineContent from "@mui/lab/TimelineContent";
import SchoolIcon from "@mui/icons-material/School";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";

const Resume = () => {
  return (
    <>
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title  mb_30">
          <span></span>
          <h6 className="section_title_text ">About me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="about_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="section pb_45">
        <Grid item className="section_title  mb_30">
          <span></span>
          <h6 className="section_title_text ">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Experience"} icon={<WorkIcon />}>
                {resumeData.experiences.map((exp) => (
                  <TimelineItem key={exp.id}>
                    <CustomTimelineSeperator />
                    <TimelineContent>
                      <Typography className="timeline_title">
                        {exp.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {exp.date}
                      </Typography>
                      <Typography variant="body2" className="timeli_des">
                        {exp.des}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Education"} icon={<SchoolIcon />}>
                {resumeData.education.map((edu) => (
                  <TimelineItem key={edu.id}>
                    <CustomTimelineSeperator />
                    <TimelineContent>
                      <Typography className="timeline_title">
                        {edu.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {edu.date}
                      </Typography>
                      <Typography variant="body2" className="timeli_des">
                        {edu.des}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item sm={12} md={6}></Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}

      <Grid container className="section pb_45">
        <Grid item className="section_title  mb_30">
          <span></span>
          <h6 className="section_title_text ">Skills</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            <Grid item xs={12} sm={6}>
              <CustomTimeline title={"Front-End"} icon={<HtmlIcon />}>
                {resumeData.skills[0].description.map((skill, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeperator />
                    <TimelineContent>
                      <Typography className="timeline_title">
                        {skill}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTimeline title={"Back-End"} icon={<JavascriptIcon />}>
                {resumeData.skills[1].description.map((skill, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeperator />
                    <TimelineContent>
                      <Typography className="timeline_title">
                        {skill}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Recommendations */}

      <Grid container className="section pb_45">
        <Grid item className="section_title  mb_30">
          <span></span>
          <h6 className="section_title_text ">Recommendations</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="space-between">
            <Grid item xs={12}>
              <Typography variant="body2" className="about_text">
                {resumeData.Recommendations[0].des}
              </Typography>
              <Typography variant="body2" className="rec_name">
                {resumeData.Recommendations[0].name}
              </Typography>
              <Typography variant="caption" className="rec_role">
                {resumeData.Recommendations[0].role}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* contact */}
      <Grid container className="section pb_45 graybg pt_45">
        {/* contact info */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <Grid item className="section_title  mb_30">
                  <span></span>
                  <h6 className="section_title_text ">Contact Info</h6>
                </Grid>
                <Grid item>
                  <Typography className="contact_info_item">
                    <span>Address: </span>
                    {resumeData.address}
                  </Typography>
                </Grid>{" "}
                <Grid item>
                  <Typography className="contact_info_item">
                    <span>Phone: </span>
                    {resumeData.phone}
                  </Typography>
                </Grid>{" "}
                <Grid item>
                  <Typography className="contact_info_item">
                    <span>Email: </span>
                    <a href={resumeData.email_link}>{resumeData.email}</a>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container className="contact_socials">
                    {Object.keys(resumeData.socials).map((key) => (
                      <Grid
                        key={resumeData.socials[key].id}
                        item
                        className="contact_socil"
                      >
                        <a href={resumeData.socials[key].link}>
                          {resumeData.socials[key].icon}
                        </a>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
