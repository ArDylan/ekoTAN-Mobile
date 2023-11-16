import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { green600, white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CustomAppbarProps {
  leftAccessory?: React.ReactNode;
  rightAccessory?: React.ReactNode;
  title: string | React.ReactNode;
  backgroundColor?: string;
  type?: "primary" | "inverse";
}

const CustomAppbar: FunctionComponent<CustomAppbarProps> = ({
  leftAccessory,
  rightAccessory,
  title,
  backgroundColor,
  type = "primary"
}) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();


  return (
    <>
      <View
        style={{
          height: insets.top,
          backgroundColor: "#2F5F35"
        }}
      />
      <View
        style={{
          // marginTop: insets.top,
          height: 56,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 6
        }}
      >
        {leftAccessory ? leftAccessory : <View />}
        <View
          pointerEvents="none"
          style={{
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2B5630"
          }}
        >
          {typeof title === "string" ? (
            <Text
              style={{
                position: "absolute",
                fontSize: 22,
                fontWeight: "bold",
                color: "#ffffff"
              }}
            >
              {title}
            </Text>
          ) : (
            title
          )}
        </View>
        {rightAccessory}
      </View>
    </>
  );
}

export default CustomAppbar;