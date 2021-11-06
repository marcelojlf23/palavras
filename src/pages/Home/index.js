import React from "react";
import { View, Text } from "react-native";
import { Container, Square, Row } from "./styles";

function Home({ navigation }) {
  return (
    <Container>
      <Row>
        <Square>
          <Text>Ba</Text>
        </Square>

        <Square>
          <Text>Be</Text>
        </Square>

        <Square>
          <Text>Bi</Text>
        </Square>

        <Square>
          <Text>Bo</Text>
        </Square>
        
        <Square>
          <Text>Bu</Text>
        </Square>
      </Row>

      <Row>
        <Square>
          <Text>Ba</Text>
        </Square>

        <Square>
          <Text>Ba</Text>
        </Square>

        <Square>
          <Text>Ba</Text>
        </Square>

        <Square>
          <Text>Ba</Text>
        </Square>
        
        <Square>
          <Text>Ba</Text>
        </Square>
      </Row>
    </Container>
    );
}

export default Home;