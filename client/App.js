import React, { useState } from "react";
import { View, Modal } from "react-native";
import { globalStyles } from "./src/globalStyles";
import Header from "./src/Header/Header";
import Form from "./src/Form/Form";
import Result from "./src/Result/Result";
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [result, setResult] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const toggleSwitch = () => setIsDarkMode(!isDarkMode);
  const setResultAndOpenModal = (value) => {
    setResult(value);
    setModalVisible(true);
  };
  return (
    <View style={globalStyles(isDarkMode).container}>
      <Header isDarkMode={isDarkMode} toggleSwitch={toggleSwitch} />
      <Form isDarkMode={isDarkMode} handleResult={setResultAndOpenModal} />
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <Result
          result={result}
          isDarkMode={isDarkMode}
          toggleSwitch={toggleSwitch}
          onClose={() => setModalVisible(!modalVisible)}
        />
      </Modal>
    </View>
  );
}
