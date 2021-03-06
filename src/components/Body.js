import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import persionalData from "../data/PersionalData";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Card, Box, Paper, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import FacebookIcon from "@mui/icons-material/Facebook";
import CakeIcon from '@mui/icons-material/Cake';
import { Cake } from "@mui/icons-material";

function Body(props) {
  const getExp = persionalData.experianceJobs.map((exp) => (
    <>
      <Grid
        sx={{ mt: 3 }}
        container
        spacing={1}
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography align="left" variant="h6" gutterBottom>
            {" "}
            {`${exp.from}-${exp.to}`}{" "}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography
            align="left"
            sx={{ fontStyle: "italic" }}
            variant="inherit"
            gutterBottom
          >
            {exp.position}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography
            align="right"
            sx={{ fontStyle: "italic" }}
            variant="inherit"
            gutterBottom
          >
            <LocationOnIcon />
            {exp.location}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{ mt: 1 }}
        container
        spacing={1}
        wrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography
            sx={{ textDecoration: "underline", fontWeight: "bold" }}
            gutterBottom
            align="left"
            variant="text"
          >
            Description :
          </Typography>
          <ul>
            {exp.desc.map((data) => (
              <li>
                <Typography
                  align="left"
                  sx={{ fontStyle: "italic" }}
                  variant="inherit"
                  gutterBottom
                >
                  {data}
                </Typography>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </>
  ));

  const getEducation = persionalData.education.map((dataEducation) => (
    <>
      <Grid
        sx={{ mt: 2 }}
        container
        spacing={1}
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <ImportContactsIcon />
        </Grid>
        <Grid item>
          <Typography align="right" variant="h6" gutterBottom>
            {" "}
            {dataEducation.major}{" "}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{ mt: 2 }}
        container
        spacing={1}
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <SchoolIcon />
        </Grid>
        <Grid item>
          <Typography
            align="right"
            sx={{ fontStyle: "italic" }}
            variant="inherit"
            gutterBottom
          >
            {dataEducation.schoolName}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{ mt: 2 }}
        container
        spacing={1}
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <LocationOnIcon />
        </Grid>
        <Grid item>
          <Typography
            align="right"
            sx={{ fontStyle: "italic" }}
            variant="inherit"
            gutterBottom
          >
            {dataEducation.site}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{ mt: 2 }}
        container
        spacing={1}
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <DateRangeIcon />
        </Grid>
        <Grid item>
          <Typography
            align="right"
            sx={{ fontStyle: "italic" }}
            variant="inherit"
            gutterBottom
          >
            {dataEducation.year}
          </Typography>
        </Grid>
      </Grid>
    </>
  ));

  //SKILLS
  const Skills = () => {
    const FrontEnd = ["HTML", "CSS", "JAVASCRIPT", "REACTJS", "JQUERY", "SASS","MATERIAL UI"];
    const BackEnd = ["NODEJS", "EXPRESS"];
    const DATABASE = ["MONGODB", "ORACLE-SQL", "SQL-SERVER"];
    const OTHERSKILLS = ["C#(WINFORM)", "DEVEXPRESS","GITHUB"];
    const BLOCKCHAIN = ["SOLIDITY", "ETHERS", "METAMASK"];

    const BLOCKCHAINData = BLOCKCHAIN.map((val, index) => (
      <Typography
        sx={{ mt: 1, ml: 3 ,fontStyle: "italic"}}
        align="left" 
        variant="inherit"
        gutterBottom
      >
        {val}
      </Typography>
    ));
    
    const FrontEndData = FrontEnd.map((val, index) => (
      <Typography
        sx={{ mt: 1, ml: 3 ,fontStyle: "italic"}}
        align="left" 
        variant="inherit"
        gutterBottom
      >
        {val}
      </Typography>
    ));

    const BackEndData = BackEnd.map((val, index) => (
      <Typography
      sx={{ mt: 1, ml: 3 ,fontStyle: "italic"}}
      align="left" 
      variant="inherit"
      gutterBottom
      >
        {val}
      </Typography>
    ));

    const DATABASEData = DATABASE.map((val, index) => (
      <Typography
      sx={{ mt: 1, ml: 3 ,fontStyle: "italic"}}
      align="left" 
      variant="inherit"
      gutterBottom
      >
        {val}
      </Typography>
    ));

    const OTHERSKILLSData = OTHERSKILLS.map((val, index) => (
      <Typography
      sx={{ mt: 1, ml: 3 ,fontStyle: "italic"}}
      align="left" 
      variant="inherit"
      gutterBottom
      >
        {val}
      </Typography>
    ));

    return (
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item sm={6} lg={4}>
          <Typography sx={{ mt: 2, ml: 1,textDecoration: "underline", fontWeight: "bold" }}  component="div"  
            gutterBottom
            align="left"
            variant="text">
            FRONT-END
          </Typography>
          {FrontEndData}
        </Grid>

        <Grid item sm={6} lg={4}>
        <Typography sx={{ mt: 2, ml: 1,textDecoration: "underline", fontWeight: "bold" }}  component="div"  
            gutterBottom
            align="left"
            variant="text">
            BACK-END
          </Typography>
          {BackEndData}
        </Grid>

        <Grid item sm={6} lg={4}>
        <Typography sx={{ mt: 2, ml: 1,textDecoration: "underline", fontWeight: "bold" }}  component="div"  
            gutterBottom
            align="left"
            variant="text">
            DATABASE
          </Typography>
          {DATABASEData}
        </Grid>

        <Grid item sm={6} lg={4}>
        <Typography sx={{ mt: 2, ml: 1,textDecoration: "underline", fontWeight: "bold" }}  component="div"  
            gutterBottom
            align="left"
            variant="text">
            BLOCKCHAIN
          </Typography>
          {BLOCKCHAINData}
        </Grid>

        <Grid item sm={6} lg={4}>
        <Typography sx={{ mt: 2, ml: 1,textDecoration: "underline", fontWeight: "bold" }}  component="div"  
            gutterBottom
            align="left"
            variant="text">
            OTHER SKILLS
          </Typography>
          {OTHERSKILLSData}
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid
          Contact
          item
          sm={12}
          lg={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Paper sx={{ my: 5, mx: "auto", p: 2 }} elevation={6} id="CONTACT">
            <Typography
              sx={{ mb: 4, fontWeight: 500, letterSpacing: 13 }}
              variant="h4"
              gutterBottom
              component="div"
              align="center"
            >
              CONTACT
            </Typography>

            <Grid
              sx={{ mt: 2 }}
              container
              spacing={1}
              wrap="nowrap"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Cake />
              </Grid>
              <Grid item>
                <Typography
                  align="right"
                  sx={{ fontStyle: "italic" }}
                  variant="inherit"
                  gutterBottom
                >
                  17/02/1997
                </Typography>
              </Grid>
            </Grid>

            <Grid
              sx={{ mt: 2 }}
              container
              spacing={1}
              wrap="nowrap"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <HomeIcon />
              </Grid>
              <Grid item>
                <Typography
                  align="right"
                  sx={{ fontStyle: "italic" }}
                  variant="inherit"
                  gutterBottom
                >
                  {persionalData.contact.address}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              sx={{ mt: 2 }}
              container
              spacing={1}
              wrap="nowrap"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <PhoneIcon />
              </Grid>
              <Grid item>
                <Typography
                  align="right"
                  sx={{ fontStyle: "italic" }}
                  variant="inherit"
                  gutterBottom
                >
                  {persionalData.contact.phone}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              sx={{ mt: 2 }}
              container
              spacing={1}
              wrap="nowrap"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <EmailIcon />
              </Grid>
              <Grid item>
                <Typography
                  align="right"
                  sx={{ fontStyle: "italic" }}
                  variant="inherit"
                  gutterBottom
                >
                  {persionalData.contact.email}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              sx={{ mt: 2 }}
              container
              spacing={1}
              wrap="nowrap"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <FacebookIcon />
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  align="right"
                  sx={{ fontStyle: "italic" }}
                  onClick={() => {
                    window.open(persionalData.contact.fb, "_blank");
                  }}
                >
                  Click to contact !
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid Skills item sm={12} lg={8} id="SKILLS">
          <Paper
            sx={{
              my: 5,
              mx: "auto",
              p: 2,
              // backgroundImage:'url(https://www.fourthday.co.uk/wp-content/uploads/2018/09/check-1-18_1100x600_acf_cropped.png)'
            }}
            elevation={6}
          >
            <Typography
              sx={{ mb: 4, fontWeight: 500, letterSpacing: 13 }}
              variant="h4"
              gutterBottom
              component="div"
              align="center"
            >
              SKILLS
            </Typography>
            <Grid container spacing={1} alignItems="center">
              {Skills()}
            </Grid>
          </Paper>
        </Grid>

        <Grid Education item sm={12} lg={4} id="EDUCATION">
          <Paper sx={{ my: 5, mx: "auto", p: 2 }} elevation={6}>
            <Typography
              sx={{ mb: 4, fontWeight: 500, letterSpacing: 13 }}
              variant="h4"
              gutterBottom
              component="div"
              align="center"
            >
              EDUCATION
            </Typography>
            {getEducation}
          </Paper>
        </Grid>

        <Grid Experiance item sm={12} lg={8} id="EXPERIENCE">
          <Paper sx={{ my: 5, mx: "auto", p: 2 }} elevation={6}>
            <Typography
              sx={{ mb: 4, fontWeight: 500, letterSpacing: 13 }}
              variant="h4"
              gutterBottom
              component="div"
              align="center"
            >
              EXPERIENCE
            </Typography>
            {getExp}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Body;
