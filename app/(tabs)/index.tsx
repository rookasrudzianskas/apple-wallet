import {SafeAreaView, StyleSheet} from 'react-native';

import { Text, View } from 'react-native';
import {StatusBar} from "expo-status-bar";
import CardList from "@/components/card-list";

export default function TabOneScreen() {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <CardList />

        <StatusBar style="light" />
      </SafeAreaView>
    // </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
