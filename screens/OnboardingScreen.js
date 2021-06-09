import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = (props) => {
  return (
    <Onboarding
      onSkip={props.onSkipDone}
      onDone={props.onSkipDone}
      bottomBarHeight={40}
      bottomBarColor="rgba(0,0,0,0.1)"
      transitionAnimationDuration={0}
      pages={[
        {
          backgroundColor: "white",
          image: <Image source={require("../assets/adaptive-icon.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "orange",
          image: <Image source={require("../assets/soundcloud-icon.png")} />,
          title: "Onboarding 2",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "red",
          image: <Image source={require("../assets/rupee.png")} />,
          title: "Onboarding 2",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
