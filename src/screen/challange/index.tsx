import React from "react";
import { Image, View, Text } from "react-native";
import { Searchbar } from 'react-native-paper';
import { Fontisto, Foundation, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

import CustomAppbar from "../../components/common/CustomAppbar";
import { Logo } from "../../utils/assets";

const ChallengeScreen = () => {

  const quests = [
    {
      "title": "title 1",
      "image": "../img/image1.jpeg",
      "description": "lorem ipsum dolor sit amet met the gred agung rusdi dylan",
    }, {
      "title": "title 2",
      "image": "../img/image2.jpeg",
      "description": "rusdi melingkar lingkar dipagar rumah pak agung",
    },
    {
      "title": "title 1",
      "image": "../img/image1.jpeg",
      "description": "lorem ipsum dolor sit amet met the gred agung rusdi dylan",
    }, {
      "title": "title 2",
      "image": "../img/image2.jpeg",
      "description": "rusdi melingkar lingkar dipagar rumah pak agung",
    },
    {
      "title": "title 1",
      "image": "../img/image1.jpeg",
      "description": "lorem ipsum dolor sit amet met the gred agung rusdi dylan",
    }, {
      "title": "title 2",
      "image": "../img/image2.jpeg",
      "description": "rusdi melingkar lingkar dipagar rumah pak agung",
    }
  ];

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <>
      <CustomAppbar
        type="inverse"
        title=""
        leftAccessory={
          <Image resizeMode="contain" className="w-24" source={Logo} />
        }
        rightAccessory={
          <MaterialIcons
            className="runded-full"
            name="leaderboard"
            onPress={() => { }}
            size={24} color="white"
          />
        }
      />

      <ScrollView className="px-2">
        <View className="py-4">
          <Text className="text-[#2B5630] font-bold text-2xl">Tantangan</Text>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            className="
              my-3
              bg-white
              border-2
              border-[#559C5E]

            "
          />

        </View>
        <View>
          {quests.map((quest) => {
            return (
              <View
                className="
                flex 
                flex-row
                bg-white
                rounded-lg 
                shadow-lg 
                mb-3
                h-44
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
                <View className="flex-1 flex flex-col justify-between ml-2 px-2">
                  <View className="mt-2">
                    <Text className="text-lg font-semibold text-[#2B5630]">{quest.title.toUpperCase()}</Text>
                    <Text className="text-md font-semibold text-[#2B5630]">{quest.description}</Text>
                  </View>
                  <View className="flex flex-row justify-between py-3">
                    <Text className="text-[14px] text-yellow-600">ekoTAN </Text>
                    <Text>16, Nov 2023</Text>

                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </>
  );
}

export default ChallengeScreen;