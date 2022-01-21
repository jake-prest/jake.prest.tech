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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <MKTypography variant="h4" color="white" fontWeight="bold">
          My Paradigm
        </MKTypography>
        <MKTypography variant="h1" color="white" mb={1}>
          Creativity Everywhere
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
          We can&apos;t predict the future, and educators are really futurists after all. To prepare
          for an unpredictable world ripe with change, innovation, transition, and transformation we
          must foster and promote creativity through every facet of education. We must learn how to
          adapt. We can&apos;t afford to rely on &lsquo;how it has always been done&rsquo; to work
          in a world so different from &lsquo;how it used to be&rsquo;. We must embrace creativity,
          and we must do so without fear, with passion, and with ferocity.
        </MKTypography>
        <MKTypography
          component="a"
          href="/pages/landing-pages/author"
          target="_blank"
          rel="noreferrer"
          variant="body2"
          color="white"
          fontWeight="regular"
          sx={{
            display: "flex",
            alignItems: "center",

            "& .material-icons-round": {
              fontSize: "1.125rem",
              transform: `translateX(3px)`,
              transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
            },

            "&:hover .material-icons-round, &:focus .material-icons-round": {
              transform: `translateX(6px)`,
            },
          }}
        >
          About me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
        </MKTypography>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
