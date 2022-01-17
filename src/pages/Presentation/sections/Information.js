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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import mountainRangeLeft from "assets/images/mountainrange-left.png";
import mountainRangeCenter from "assets/images/mountainrange-center.png";
import mountainRangeRight from "assets/images/mountainrange-right.png";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={mountainRangeLeft}
                icon="laptop_chromebook"
                color="info"
                title={
                  <>
                    Creative
                    <br />
                    Projects
                  </>
                }
                description="Here are some examples of projects for you to experiment with, modify, assign, and share."
              />
              <RotatingCardBack
                image={bgBack}
                color="info"
                title="Start Creating"
                description=""
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Projects",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={mountainRangeCenter}
                icon="sports_esports"
                color="secondary"
                title={
                  <>
                    Interactive
                    <br />
                    Games
                  </>
                }
                description="Fun and learning are not mutually exclusive. Check out these collaborative games built for creativity."
              />
              <RotatingCardBack
                image={bgBack}
                color="secondary"
                title="Play Together"
                description=""
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Games",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={mountainRangeRight}
                icon="school"
                color="info"
                title={
                  <>
                    Educational
                    <br />
                    Tools
                  </>
                }
                description="In order to transform education, you'll need some educational tools to help you."
              />
              <RotatingCardBack
                image={bgBack}
                color="info"
                title="Start Testing"
                description=""
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Tools",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
