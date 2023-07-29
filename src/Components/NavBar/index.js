import React from "react";
import { Header, Heading, ListItems, Items, InputField,Button,Container } from "../Header.style";
import search from "../../Assets/serach.svg"

function NavBar() {
  return (
    <Header>
      <Heading>Hekto</Heading>
      <div>
        <ListItems>
          <Items>Home</Items>
          <Items>Pages</Items>
          <Items>Products</Items>
          <Items>Blog</Items>
          <Items>Shop</Items>
          <Items>Contact</Items>
        </ListItems>
      </div>
      <Container>
        <InputField type="text" name="" placeholder="search" />
        <Button type="button">
          <img src={search} width ="10px" height = "10px"/>
        </Button>
      </Container>
    </Header>
  );
}

export default NavBar;
