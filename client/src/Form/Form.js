import React, { useState } from "react";
import { View, Image, TextInput } from "react-native";
import styles from "./styles";
import { globalStyles } from "../globalStyles";
import { GrSend } from "react-icons/gr";
import { fetchUser } from "../service.fetch";
export default function Form(props) {
  const { isDarkMode, handleResult } = props;
  const [username, setUsername] = useState("");
  const handleChange = (value) => setUsername(value);
  const handleClick = () => {
    if (username) {
      fetchUser(username.trim()).then((res) => {
        handleResult(res);
        //setUsername("");
      });
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        }}
      />
      <View style={styles.row}>
        <TextInput
          style={[
            globalStyles(isDarkMode).text,
            styles.input,
            globalStyles(isDarkMode).border,
          ]}
          onChangeText={handleChange}
          value={username}
          placeholder="username"
          keyboardType="text"
        />
        <GrSend fontSize={32} onClick={handleClick} />
      </View>
    </View>
  );
}
