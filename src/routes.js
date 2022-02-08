/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import Author from "layouts/pages/landing-pages/author";
import EdTechFrameworks from "layouts/pages/tools/edtech-frameworks";
import Collaboration from "layouts/pages/tools/collaboration";
import AudioAndVideoProduction from "layouts/pages/tools/audio-and-video-production";
import MakerTools from "layouts/pages/tools/maker-tools";
import VirtualLearningEnvironments from "layouts/pages/tools/virtual-learning-environments";

const routes = [
  {
    name: "edtech tools",
    icon: <Icon>school</Icon>,
    collapse: [
      {
        name: "EdTech Frameworks",
        description: "How to apply EdTech",
        route: "/tools/edtech-frameworks",
        component: <EdTechFrameworks />,
      },
      {
        name: "Collaboration",
        description: "Tools to Work Together From Anywhere",
        route: "/tools/collaboration",
        component: <Collaboration />,
      },
      {
        name: "Audio and Video Production",
        description: "Basic to Professional Grade Tools to Make Content",
        route: "/tools/audio-and-video-production",
        component: <AudioAndVideoProduction />,
      },
      {
        name: "Maker Tools",
        description: "Hands On Tools for Authentic Learning",
        route: "/tools/maker-tools",
        component: <MakerTools />,
      },
      {
        name: "Virtual Learning Environments",
        description: "Tools That Make Class Accecssible Anywhere, Anytime",
        route: "/tools/virtual-learning-environments",
        component: <VirtualLearningEnvironments />,
      },
    ],
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://github.com/jake-prest/jake.prest.tech",
  },
  {
    name: "about me",
    icon: <Icon>face</Icon>,
    route: "/me",
    component: <Author />,
  },
];

export default routes;
