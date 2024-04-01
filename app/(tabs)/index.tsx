import {SafeAreaView, StyleSheet} from 'react-native';
import {StatusBar} from "expo-status-bar";
import CardList from "@/components/card-list";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabOneScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <CardList />

        <StatusBar style="light" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});
