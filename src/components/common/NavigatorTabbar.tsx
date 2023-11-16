import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, TouchableOpacity, View } from "react-native";
import React, { ReactElement, useEffect } from "react";
import { Surface, Text, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackNavigatorParams } from "./NavigatorStack";

import HomeScreen from "../../screen/home";
import ProfileScreen from "../../screen/profile";
import ChallengeScreen from "../../screen/challange";
import { Trophy } from "../../utils/assets";

type NavigatorTabbarProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Navigator">;
};

const Tab = createBottomTabNavigator();
const NavigatorTabbar = ({ navigation: stackNavigation, }: NavigatorTabbarProps): ReactElement => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <>
        <Tab.Navigator
          
          screenOptions={{
            headerShown: false,
          }}
          
          
          tabBar={({ state, descriptors, navigation }) => {
            return (
              <Surface
                style={{
                  flexDirection: "row",
                  backgroundColor: "#FFFFFF",
                  elevation: 12,
                  paddingBottom: insets.bottom
                }}
              >
                {state.routes.map((route, index) => {
                  const { options } = descriptors[route.key];
                  const label =
                    options.tabBarLabel !== undefined
                      ? options.tabBarLabel.toString()
                      : options.title !== undefined
                        ? options.title
                        : route.name;

                  const isFocused = state.index === index;

                  const onPress = () => {
                    const event = navigation.emit({
                      type: "tabPress",
                      target: route.key,
                      canPreventDefault: true
                    });

                    if (!isFocused && !event.defaultPrevented) {
                      navigation.navigate(route.name);
                    }
                  };

                  const renderIconName = (routeName: string) => {
                    switch (routeName) {
                      case "Beranda":
                        return "home";
                      case "Profile":
                        return "account";
                      default:
                        return "delete";
                    }
                  };

                  if (route.name === " ") {
                    return (
                      <TouchableOpacity
                        key={route.key}
                        activeOpacity={1}
                        onPress={() => {
                          stackNavigation.push("Challenge");
                        }}
                        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                      >
                        <View
                          style={{
                            position: "absolute",
                            bottom: 0,
                            padding: 14,
                            borderRadius: 28,
                            marginBottom: 8,
                            backgroundColor: isFocused ? "#2B5630" : "#559C5E",
                            flex: 1,
                            justifyContent: "center"
                          }}
                        >
                          <Image source={Trophy} style={{ width: 30, height: 30 }} />
                        </View>
                      </TouchableOpacity>
                    );
                  }

                  return (
                    <TouchableOpacity
                      key={route.key}
                      activeOpacity={0.7}
                      accessibilityRole="button"
                      accessibilityState={isFocused ? { selected: true } : {}}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={options.tabBarTestID}
                      onPress={onPress}
                      style={{ flex: 1, alignItems: "center", paddingVertical: 6 }}
                    >
                      <MaterialCommunityIcons
                        name={renderIconName(route.name)}
                        size={24}
                        color={isFocused ? "#2B5630" : "#6EBF78"}
                      />
                      <Text style={{ color: isFocused ? "#2B5630" : "#6EBF78", fontSize: 12 }}>
                        {label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </Surface>
            );
          }}
        >
          <Tab.Screen name="Beranda" component={HomeScreen} />
          <Tab.Screen name=" " component={ChallengeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </>
  );
}

export default NavigatorTabbar;