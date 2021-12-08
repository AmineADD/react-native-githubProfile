import React from "react";
import { Text, Image, View, ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import { globalStyles } from "../globalStyles";

import { TiDelete } from "react-icons/ti";
import Header from "../Header/Header";
export default function Result(props) {
  const { isDarkMode, result, onClose, toggleSwitch } = props;
  console.log(result);
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.column}>
            <Image
              style={styles.img}
              source={{
                uri: result?.data.user.avatar_url,
              }}
            />
            <Text>{result?.data.user.name}</Text>
          </View>
        </SafeAreaView>
        <TiDelete onClick={onClose} fontSize={32} />
      </ScrollView>
    </View>
  );
}
