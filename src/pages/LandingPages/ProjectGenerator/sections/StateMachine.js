/*
by jake prest for jake.prest.tech
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import PropTypes from "prop-types";

import MKButton from "components/MKButton";

const choicesExample = [
  { currentChoice: "Button", nextActionIfChosen: "Smith", myid: "1456" },
  { currentChoice: "Button2", nextActionIfChosen: "Jones", myid: "2876" },
  { currentChoice: "Button3", nextActionIfChosen: "Wong", myid: "3453" },
];

function MyButton(props) {
  const { currentChoice, myid } = props;
  const childId = myid * 4;
  return (
    <MKButton key={childId.toString()} color="info">
      {currentChoice}
    </MKButton>
  );
}

MyButton.propTypes = {
  currentChoice: PropTypes.string,
  myid: PropTypes.string,
};

MyButton.defaultProps = {
  currentChoice: "hello",
  myid: "0",
};

function Choices(props) {
  const { choicesArray } = props;
  const choices = choicesArray.map((choice) => (
    <MyButton key={choice.myid} myid={choice.myid} currentChoice={choice.currentChoice} />
  ));

  return choices;
}

Choices.propTypes = {
  choicesArray: PropTypes.arrayOf(PropTypes.object),
};

Choices.defaultProps = {
  choicesArray: [{ currentChoice: "Jane", nextActionIfChosen: "Smith", myid: "0" }],
};

function StateMachine() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      Coming soon! Work in progress
      <Container>
        <Grid container item justifyContent="center" mx="auto">
          <Choices choicesArray={choicesExample} />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default StateMachine;
