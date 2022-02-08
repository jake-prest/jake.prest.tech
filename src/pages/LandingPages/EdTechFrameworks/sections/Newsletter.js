/* eslint-disable react/jsx-no-duplicate-props */
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

import HubspotForm from "react-hubspot-form";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <MKTypography variant="h4">Sign up for my occasional newsletter</MKTypography>
        <MKTypography variant="body2" color="text" mb={3}>
          Every now and then I like to share a great example of tech in education. Sign up here to
          hear all about it!
        </MKTypography>
        <HubspotForm
          portalId="25341529"
          formId="43a7bc51-0e77-4eb3-b12f-e10c897ed462"
          region="eu1"
          loading={<div>Loading...</div>}
        />
      </Container>
    </MKBox>
  );
}

export default Newsletter;
