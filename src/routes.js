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
import ProjectGenerator from "layouts/pages/landing-pages/project-generator";

const routes = [
  {
    name: "project generator",
    icon: <Icon>laptop_chromebook</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/project-generator",
    component: <ProjectGenerator />,
  },
  {
    name: "games",
    icon: <Icon>sports_esports</Icon>,
    collapse: [
      {
        name: "building psychological safety",
        description: "Build a Healthy Team",
        href: "/games/building-psychological-safety",
      },
      {
        name: "ideation",
        description: "Warm Up Your Brain",
        href: "/games/ideation",
      },
      {
        name: "collaborative problem solving",
        description: "Think Your Way Out of the Box",
        href: "/games/collaborative-problem-solving",
      },
      {
        name: "quiz and trivia",
        description: "Fun Demonstration of Domain Knowledge",
        href: "/games/quiz-and-trivia",
      },
      {
        name: "gamified curriculum",
        description: "Games That Teach Content",
        href: "/games/gamified-curriculum",
      },
    ],
  },
  {
    name: "edtech tools",
    icon: <Icon>school</Icon>,
    collapse: [
      {
        name: "EdTech Frameworks",
        description: "How to apply EdTech",
        href: "/tools/edtech-frameworks",
      },
      {
        name: "Collaboration",
        description: "Tools to Work Together From Anywhere",
        href: "/tools/collaboration",
      },
      {
        name: "Audio and Video Production",
        description: "Basic to Professional Grade Tools to Make Content",
        href: "/tools/audio-and-video-production",
      },
      {
        name: "Maker Tools",
        description: "Hands On Tools for Authentic Learning",
        href: "/tools/maker-tools",
      },
      {
        name: "Content Delivery",
        description: "Lectures and Lessons Designed for the Digital Age",
        href: "/tools/content-delivery",
      },
      {
        name: "Virtual Learning Environments",
        description: "Tools That Make Class Accecssible Anywhere, Anytime",
        href: "/tools/virtual-learning-environments",
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
    route: "/pages/landing-pages/author",
    component: <Author />,
  },
];

export default routes;
