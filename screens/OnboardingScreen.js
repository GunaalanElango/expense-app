import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constant/color";

const OnboardingScreen = (props) => {
  return (
    <Onboarding
      onSkip={props.onSkipDone}
      onDone={props.onSkipDone}
      pages={[
        {
          backgroundColor: Colors.black,
          image: (
            <FontAwesome
              name="paper-plane"
              size={150}
              color={Colors.orange}
            />
          ),
          title: "Welcome To ExpenseApp",
          titleStyles: {
            fontWeight: "bold",
            fontSize: 22,
            color: Colors.white,
          },
          subTitleStyles: {
            fontSize: 15,
            color: Colors.white,
          },
          subtitle: "Manage your daily expenses",
        },
        {
          backgroundColor: Colors.black,
          image: (
            <MaterialIcons
              name="file-download-done"
              size={170}
              color={Colors.orange}
            />
          ),
          title: "Get Started",
          titleStyles: {
            fontWeight: "bold",
            fontSize: 22,
            color: Colors.white,
          },
          subTitleStyles: {
            fontSize: 15,
            color: Colors.white,
          },
          subtitle: "Get Started With Expense App",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
