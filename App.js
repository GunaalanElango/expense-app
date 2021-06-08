import React, { useEffect, useState } from "react";
import * as Application from "expo-application";
import * as SplashScreen from "expo-splash-screen";
import * as Location from "expo-location";

// import { Balance, Log } from "./helper/db";
import AppNavigator from "./navigator/AppNavigator";

export default function App() {
  // const [isAppReady, setIsAppReady] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await SplashScreen.preventAutoHideAsync();

  //       await Balance.createBalanceTable();
  //       await Log.createLogTable();

  //       console.log("DATABASE INITIALIZED");
  //     } catch (error) {
  //       console.error("[INITIALIZE TABLE ERROR]", error);
  //     } finally {
  //       setIsAppReady(true);
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     if (isAppReady) {
  //       await SplashScreen.hideAsync();
  //     }
  //   })();
  // }, [isAppReady]);

  // if (!isAppReady) {
  //   return null;
  // }

  return <AppNavigator />;
}
