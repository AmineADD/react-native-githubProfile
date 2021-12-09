import React from "react";
import { Text, Image, View, ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import { globalStyles } from "../globalStyles";
import { GiPositionMarker } from "react-icons/gi";
import { TiDelete, TiInfoLarge } from "react-icons/ti";
import Header from "../Header/Header";
export default function Result(props) {
  const { result, onClose } = props;
  return (
    <View style={styles.container}>
      <View>
        <TiDelete onClick={onClose} fontSize={32} />
      </View>
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
          <View>
            {result?.data.user.location && (
              <Text>
                <GiPositionMarker fontSize={20} />
                {result?.data.user.location}
              </Text>
            )}

            {result?.data.user.bio && (
              <Text>
                <TiInfoLarge fontSize={20} />
                {result?.data.user.bio}
              </Text>
            )}
          </View>
          <View>
            <Text>Followers : {result?.data.followers.length} </Text>
            <View style={styles.row}>
              {result?.data.followers.map((user) => {
                return (
                  <Image
                    key={user.id}
                    style={styles.smallImg}
                    source={{
                      uri: user.avatar_url,
                    }}
                  />
                );
              })}
            </View>
            <View>
              <Text>Repos : {result?.data.repos.length} </Text>
              <View style={styles.row}>
                <ul>
                  {result?.data.repos.map((repo) => {
                    return <li key={repo.id}>{repo.name}</li>;
                  })}
                </ul>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
