// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "jake.prest.tech",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "/",
    },
    {
      icon: <TwitterIcon />,
      link: "/",
    },
    {
      icon: <GitHubIcon />,
      link: "/",
    },
    {
      icon: <YouTubeIcon />,
      link: "/",
    },
  ],
  menus: [
    {
      name: "tools",
      items: [
        {
          name: "EdTech Frameworks",
          href: "/tools/edtech-frameworks",
        },
        {
          name: "Collaboration",
          href: "/tools/collaboration",
        },
        {
          name: "Audio and Video Production",
          href: "/tools/audio-and-video-production",
        },
        {
          name: "Maker Tools",
          href: "/tools/maker-tools",
        },
        {
          name: "Virtual Learning Environments",
          href: "/tools/virtual-learning-environments",
        },
      ],
    },
    {
      name: "About",
      items: [
        { name: "About Me", href: "/pages/landing-pages/author" },
        { name: "GitHub", href: "https://github.com/jake-prest/jake.prest.tech" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/jakeprest/" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Find me on{" "}
      <MKTypography
        component="a"
        href="https://www.linkedin.com/in/jakeprest/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        LinkedIn
      </MKTypography>
      .
    </MKTypography>
  ),
};
