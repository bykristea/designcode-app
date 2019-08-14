import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import Card from "./components/card.js";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <Avatar source={require("./assets/avatar.jpg")} />
          <Title>Welcome back,</Title>
          <Name>Kristea</Name>
        </TitleBar>
        <Subtitle>Workout like a Boss</Subtitle>
        <Card />
      </Container>
    );
  }
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  background-color: #f0f3f5;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
