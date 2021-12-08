import React, { useState } from "react";
import { Text, View, Switch } from "react-native";
import styles from "./styles";
import { globalStyles } from "../globalStyles";

export default function Header(props) {
  const { isDarkMode, toggleSwitch } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={globalStyles(isDarkMode).text}>search-in-github-live</Text>
      </View>
      <View  style={styles.center}>
        <Text style={globalStyles(isDarkMode).text}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "grey", true: "white" }}
          thumbColor={isDarkMode ? "#50C686" : "#fff"}
          ios_backgroundColor="#fff"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}
