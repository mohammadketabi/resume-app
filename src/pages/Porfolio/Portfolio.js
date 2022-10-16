import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import resumeData from "../../utils/resumeData";
import "./Portfolio.css";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("Website");

  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container className="section pb_45 pt_45">
      <Grid item className="section_title  mb_30">
        <span></span>
        <h6 className="section_title_text ">Portfolio</h6>
      </Grid>

      {/* Tabs */}

      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValu) => {
            return setTabValue(newValu);
          }}
        >
          {/* <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          /> */}

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag ? "customTabs_item active" : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* projects */}

      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="custom_card"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="custom_card_image"
                          image={project.images[0]}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className="custom_car_title">
                            {project.title}
                          </Typography>
                          {/* <Typography
                            variant="caption"
                            className="custom_card_des"
                          >
                            {project.caption}
                          </Typography> */}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog
        fullWidth
        maxWidth={"xl"}
        className="project_dialog"
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>

        <DialogContent>
          {projectDialog.images && (
            <ImageGallery images={projectDialog.images} />
          )}

          <Typography className="project_dialog_des">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="project_dialog_actions">
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="_blank" className="project_dialog_icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
