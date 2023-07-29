import React from 'react'
import { Button, Container } from '../Header.style';
import { Paragraph } from './content.style';
import bulb from "../../Assets/bulb.svg"

function HeroBanner() {
  return (
    <Container width = "100vh" height= "167px" flexDirection = "column">
      <img src = {bulb} width="100px"/>
        <Paragraph>
            Best Furniture for your castle...
        </Paragraph>
        <h3>
            New Furniture Collection <br/> Trends in 2020
        </h3>

        <p>
            lorem ipsum dolor sit amet, conhghgggjggjgj,lorem Ips  <br />
            lorem Ips logo lorem ipsum dolor sit
        </p>
        <Button>Shop Now</Button>
    </Container>
  )
}

export default HeroBanner;