import React from "react";
import { Card, Content, MainImage } from "../StyledComponents/Card.style";
import { Paragraph } from "../HeroBanner/content.style";
import chair from "../../Assets/chair.svg";

function FeaturedProduct() {
  return (
    <div>
      <Paragraph>Featured Products</Paragraph>

      <Card>
        <MainImage>
          <img src={chair} width="120px" height="100px" />
        </MainImage>

        <Content>
          <p>Cantilever chair</p>
          <p>Code - Y523201</p>
          <p>$42.00</p>
          <p>$42.00</p>
        </Content>
      </Card>
    </div>
  );
}

export default FeaturedProduct;
