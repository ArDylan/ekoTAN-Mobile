import React, { Fragment, ReactElement, useEffect, useRef, useState } from "react";
import { Text, ScrollView, View, Dimensions, Image, Pressable } from "react-native";
import { IconButton, Paragraph, Surface, Title, useTheme } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { Fontisto, Foundation, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Avatar, Button, Card } from 'react-native-paper';
import { SliderBox } from "react-native-image-slider-box";

import { StackNavigatorParams } from "../../components/common/NavigatorStack";
import { Logo } from "../../utils/assets";
import CustomAppbar from "../../components/common/CustomAppbar";

type HomeScreenProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Navigator">;
};

const HomeScreen = () => {

  const { colors } = useTheme();
  const width = Dimensions.get("window").width;
  const carouselRef = useRef<ICarouselInstance>(null);
  const articles = [
    {
      "title": "title 1",
      "image": "../img/image1.jpeg",
      "description": "description 1.",
    }, {
      "title": "title 2",
      "image": "../img/image2.jpeg",
      "description": "description 2.",
    },
    {
      "title": "title 1",
      "image": "../img/image1.jpeg",
      "description": "description 1.",
    }, {
      "title": "title 2",
      "image": "../img/image2.jpeg",
      "description": "description 2.",
    },
    {
      "title": "title 1",
      "image": "../img/image1.jpeg",
      "description": "description 1.",
    }, {
      "title": "title 2",
      "image": "../img/image2.jpeg",
      "description": "description 2.",
    }
  ];

  const banners = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]


  return (
    <>
      <CustomAppbar
        type="inverse"
        title=""
        leftAccessory={
          <Image resizeMode="contain" className="w-24" source={Logo} />
        }
        rightAccessory={
          <MaterialIcons name="leaderboard"
            onPress={() => { }}
            size={24} color="white"
          />
        }
      />
      <ScrollView className=" bg-[#F9F9F9]">

        <SliderBox
          images={banners ? banners : []}
          autoplay
          circleLoop
          imageLoadingColor={colors.primary}
          resizeMode="cover"
        />


        {/* Point View */}
        <View
          className="
            p-6
            justify-center
          "
        >
          <View
            className="
              bg-[#FFFFFF]
              w-100
              rounded-lg
              shadow-lg
              p-5
            "
          >
            <Text className="text-md">
              Hi, <Text className="font-semibold">User</Text>
            </Text>
            <View className="flex flex-row gap-3 my-1">
              <View className="flex flex-row flex-1 shadow justify-center bg-[#D6FFE1] rounded-md px-2 py-4">
                <View className="my-auto">
                  <Text className="text-[#2B5630] font-bold text-lg">Poin Saya</Text>
                  <Text className="text-[#2B5630] font-semibold ">5000</Text>
                </View>
                <View className="my-auto ml-4">
                  <MaterialCommunityIcons name="star-four-points" size={24} color="black" />
                </View>
              </View>
              <View className="flex flex-row flex-1 shadow justify-center bg-[#D6FFE1] rounded-md px-2 py-4">
                <View className="my-auto">
                  <Text className="text-[#2B5630] font-bold text-lg">Honor</Text>
                  <Text className="text-[#2B5630] font-semibold ">Basic</Text>
                </View>
                <View className="my-auto ml-4">
                  <MaterialCommunityIcons name="medal" size={24} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Quest View */}
        <View
          className="
            mb-5
            py-3
          "
        >
          <View className="flex flex-row justify-between px-5">
            <View className="flex-1">
              <Text className="text-xl text-[#2B5630] font-semibold">Event Terbaru</Text>
              <Text className="text-sm py-1 text-[#2F5F35]">Temukan Tantangan untuk diikuti</Text>
            </View>
            <View className="py-1">
              <Pressable
                className="
                  p-3
                  bg-white
                  rounded-full
                  shadow-lg
                  items-center
                "
                onPress={() => { }}
              >
                <Fontisto name="angle-right" size={13} color="black" />
              </Pressable>
            </View>
          </View>

          <Carousel
            ref={carouselRef}
            width={width}
            height={width / 1.5}
            pagingEnabled
            snapEnabled
            loop={false}
            onSnapToItem={() => { }}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50
            }}
            data={[...new Array(6).keys()]}
            renderItem={({ item }) => (
              <Surface
                className="
                rounded-lg
                flex
                "
              >
                <Card className="shadow-lg">
                  <Card.Cover className="rounded-b-none h-36" source={{ uri: 'https://picsum.photos/700' }} />
                  {/* <Card.Title title="Tantangan Kebersihan" subtitle="Membersihkan daerah sekitar erau" /> */}
                  <Card.Content className="py-4 px-2 h-28">
                    <Text className="text-lg font-semibold text-[#2B5630]">Tantangan Kebersihan</Text>
                    <Text className="text-md text-[#2F5F35]">Membersihakn daerah sekitar erau</Text>
                  </Card.Content>
                </Card>
              </Surface>
            )}
          />
        </View>

        <View className="px-5 py-3">
          <View className="flex flex-row">
            <View className="flex-1">
              <View
                className="
                  flex
                  flex-row
                  items-center
                "
              >
                {/* <Surface className="rounded-full bg-[#2B5630] p-1 h-8 w-8 items-center">
                  <Foundation name="lightbulb" size={25} color="white" />
                </Surface> */}
                <Title className="ml-3 text-2xl font-bold text-[#2B5630]">Bacaan</Title>
              </View>
              <Paragraph
                className="
                  py-2
                  px-2
                text-[#2F5F35]
            "
              >
                Tambah pengetahuanmu sekarang
              </Paragraph>
            </View>
            <View className="py-1">
              <Pressable
                className="
                  p-3
                  bg-white
                  rounded-full
                  shadow-lg
                  items-center
                "
                onPress={() => { }}
              >
                <Fontisto name="angle-right" size={13} color="black" />
              </Pressable>
            </View>
          </View>

          {articles.map((article) => {
            return (
              <View
                className="
                flex 
                flex-row
                bg-white
                rounded-lg 
                shadow-lg 
                mb-3
                h-36
              "
              >
                <Image
                  // resizeMode="contain"
                  className="
                  rounded-l-lg
                  flex-1
                "
                  source={{ uri: 'https://picsum.photos/700' }}
                />
                <View className="flex-1 flex flex-col justify-between ml-2 py-2 px-2">
                  <Text className="text-lg font-semibold text-[#2B5630]">Balikpapan Kota Asap</Text>
                  <Text className="text-[13px] "><Text className="text-yellow-600">ekoTAN </Text> <Text className="text-[2px]">{'\u2B24'}</Text> 16, Nov 2023</Text>
                </View>
              </View>
            )
          })}
        </View>

      </ScrollView>
    </>
  );
}

export default HomeScreen;