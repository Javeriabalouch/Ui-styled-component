import React from "react";
import { Button, Container, Heading } from "../Header.style";
import { Main, Paragraph } from "./content.style";
import bulb from "../../Assets/bulb.svg";
import sofa from "../../Assets/sofa.svg";
import dot from "../../Assets/dot.svg";

function HeroBanner() {
  return (
    <Container
      height="167px"
      flexDirection="row"
      justifyContent="space-between"
    >
      <div style = {{display:"flex"}}>
      <div>
        <div>
          <img src={bulb} width="380px" height="200px" />
        </div>

        <div style={{ marginRight: "52px" }}>
          <img src={dot} width="10px" height="10px" />
        </div>
      </div>

      <Main>
        <Paragraph>Best Furniture for your castle...</Paragraph>
        <p>
          New Furniture Collection <br />
          Trends in 2020
        </p>

        <Paragraph color="#8A8FB9">
          lorem ipsum dolor sit amet, conhghgggjggjgj,lorem Ips <br />
          lorem Ips logo lorem ipsum dolor sit
        </Paragraph>
        <Button>Shop Now</Button>
      </Main>
      </div>
     

      <div>
        <img src={sofa} width="300px" height="300px" />
      </div>
    </Container>
  );
}

export default HeroBanner;
