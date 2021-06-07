import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Application from "expo-application";
import * as SplashScreen from "expo-splash-screen";
import * as Location from "expo-location";

import Colors from "./constant/color";
import HomeScreen from "./screens/HomeScreen";
import { Balance, Log } from "./helper/db";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Balance.createBalanceTable();
        await Log.createLogTable();

        console.log("DATABASE INITIALIZED");
      } catch (error) {
        console.error("[INITIALIZE TABLE ERROR]", error);
      } finally {
        setIsAppReady(true);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (isAppReady) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.white} />
      <HomeScreen androidID={Application.androidId} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
