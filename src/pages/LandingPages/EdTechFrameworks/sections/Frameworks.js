/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import picratImage from "assets/images/picrat.jpg";
import samrImage from "assets/images/samr.jpg";

function Frameworks() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Frameworks
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There are multiple frameworks available for integrating technology into the classroom,
              but here are my two favorites. Each can essentially be boiled down to the idea that
              technology is used to transform the way that content and skills are learned, not
              merely replacing previous methods. Replacing paper with a digital screen is not the
              end goal. In fact, one of the most important decisions we need to make as educators is
              to choose the right tool for the job. Sometimes the technology will be digital and
              sometimes it will not, but we should always strive to add a creative element to our
              pedagogy, and these frameworks help.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <a href="http://roycekimmons.com/tools/picrat" target="_blank" rel="noreferrer">
                <HorizontalTeamCard
                  image={picratImage}
                  name="PIC-RAT"
                  position={{ color: "info", label: "Royce Kimmons" }}
                  description="Royce Kimmons says 'Effective technology integration is a nuanced and difficult thing to decipher, but this matrix helps us to think about practice along two lines. Generally speaking, I submit that effective technology integration occurs more at the top-right of the matrix, while most of our practice lingers around the bottom-left.''"
                />
              </a>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <a
                href="https://www.commonsense.org/education/videos/introduction-to-the-samr-model"
                target="_blank"
                rel="noreferrer"
              >
                <HorizontalTeamCard
                  image={samrImage}
                  name="SAMR"
                  position={{ color: "info", label: "Dr. Ruben Puentedura" }}
                  description="commonsense.org says 'Dr. Ruben Puentedura developed the SAMR model as a way for teachers to evaluate how they are incorporating technology into their instructional practice. You can use SAMR to reflect on how you're integrating technology into your classroom. Is it an act of Substitution? Augmentation? Modification? Or Redefinition?''"
                />
              </a>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Frameworks;
