import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $65,987</Text>
      </View>

      <StyledButton
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.warn("custom order");
        }}
      />
    </View>
  );
};

export default CarItem;
