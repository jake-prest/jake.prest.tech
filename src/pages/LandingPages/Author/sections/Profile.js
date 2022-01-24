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
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/linkedin-photo.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Jake Prest" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Jake Prest</MKTypography>
                <MKButton
                  variant="outlined"
                  color="info"
                  size="small"
                  href="https://www.linkedin.com/in/jakeprest/"
                >
                  Connect
                </MKButton>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                I love learning. I love helping others through the learning process, too. I&apos;ve
                been described as a golden retriever (energetic and caring) during everyday work,
                and a calm leader (logical and decisive) during a crisis. I have two idols, one
                fictional and one who sadly passed away in 2020: Captain Jean-Luc Picard for his
                leadership style, and Sir Ken Robinson for his work on creativity in education.
                <br />
                <br />
                <MKTypography variant="h4">Past</MKTypography>
                During my time as a software developer, my favorite activity was helping new
                developers get up to speed on the tech stack and jump in as a second pair of eyes
                when they got stuck. As a cloud support engineer at AWS, it was my job to help some
                of the largest companies on the web migrate their solutions to the cloud, and for
                every migration there were code demos, whiteboard sessions, load tests, failed
                tests, and midnight deployments – each a lesson. As an operations manager I led a
                team of 24 engineers to help these same customers all around the world, and I loved
                teaching my team the skills they need to be successful engineers, and inspiring them
                to further their careers. Looking back at my time in tech it&apos;s now clear that I
                kept searching for more and more opportunities to help people learn, from software
                developer to manager, from individual contributor to force multiplier. In 2020 I
                realized that while I was doing great work, working with amazing people, and having
                a lot of fun, I wasn’t in the right place. I needed to fully embrace learning{" "}
                <i>as</i> my career, not just <i>in</i> my career. I combined my skill set with my
                passion, and embarked on a new career in educational technology.
                <br />
                <br />
                <MKTypography variant="h4">Present</MKTypography>
                I’m currently the Technology Integration Manager at the UCD Innovation Academy in
                Dublin, Ireland. I facilitate learning for undergraduates, postgraduates, lifelong
                learners, and fellow educators. I&apos;m a passionate and patient educational
                technologist to my colleagues when we are innovating our teaching and learning
                practice, and an engaging facilitator to students enrolled in Creative Thinking and
                Innovation. I’m the technical product manager for our Virtual Reality Transversal
                Skills learning experience, and a socratic coach to students enrolled in Design
                Thinking. I’m leading a team to build out a new makerspace and sustainable living
                lab from scratch so that our students have the space to explore, create, and
                innovate sustainably. I wear many hats because I love learning, and I love helping
                others through the learning process.
                <br />
                <br />
                <MKTypography variant="h4">Future</MKTypography>
                I&apos;m still on my learning journey, and I hope that I always will be. In my
                transition from tech guy to educational technologist, I completed a Masters of
                Education in Educational Technology Leadership. Next, I want to teach at a K-12
                institution in Richmond, Virginia. I want to make Computer Science as ubiquitous as
                Algebra, and as accessible as literature. I want to tranform biology lessons with
                technology so students can experience what&apos;s under a microscope rather than
                just see it. I want to embed creativity into every facet of education by promoting
                psychological safety, amplifying collaboration, reducing the fear of failure, and
                implementing project based learning. If you&apos;d like to help me along the way, or
                if you&apos;d like help along your way, please reach out on
                <a href="https://www.linkedin.com/in/jakeprest/"> LinkedIn</a> at any time, I&apos;d
                love to hear from you.
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
