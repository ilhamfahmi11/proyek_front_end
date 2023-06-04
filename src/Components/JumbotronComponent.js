import { Button, Jumbotron } from "react-bootstrap";
import React from "react";

const JumbotronComponent = (props) => {
  const redirectToInstagram = () => {
    window.location.assign("https://github.com/ilhamfahmi11");
  };

  return (
    <div>
      <Jumbotron style={{ backgroundColor: "#C0C0C0", textAlign: "center" }}>
        <p>
          <Button variant="info" onClick={redirectToInstagram}>
            github
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
