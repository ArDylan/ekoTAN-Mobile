import React from "react";
import { Image, View, Text } from "react-native";
import { Searchbar } from 'react-native-paper';
import { Fontisto, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

import CustomAppbar from "../../components/common/CustomAppbar";
import { Logo, DefaultProfile } from "../../utils/assets";

const Profile = () => {
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

      <ScrollView>
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
            <View className="flex flex-row justify-between">
              <View className="flex flex-row gap-3 my-auto">
                <View>
                  <Text>
                    <Image source={DefaultProfile} style={{ width: 50, height: 50 }} />
                  </Text>
                </View>
                <View>
                  <Text className="text-[#2B5630] text-md font-semibold">User LOL</Text>
                  <Text className="text-[#2B5630] ">user@gmail.com</Text>
                </View>
              </View>
              <View className="my-auto bg-[#559C5E] rounded-full p-3 shadow-lg">
                <Feather name="edit" size={15} color="white" />
              </View>
            </View>
          </View>
        </View>

        <View
          className="
            px-6
            justify-center
          "
        >
          <View
            className="
              bg-[#D6FFE1]
              w-100
              rounded-lg
              shadow-lg
              px-6
              py-2
            "
          >
            <View className="flex flex-row justify-between">
              <View className="flex flex-row gap-3 my-auto">
                <View>
                  <Text>
                    <Image source={DefaultProfile} style={{ width: 50, height: 50 }} />
                  </Text>
                </View>
                <View>
                  <Text className="text-[#559C5E] text-sm">Poin Saya</Text>
                  <Text className="text-[#2B5630] text-md font-bold">15.000 Poin</Text>
                </View>
              </View>
              <View className="my-auto">
                <Fontisto name="angle-right" size={15} color="black" />
              </View>
            </View>
          </View>
        </View>

        <View
          className="
            py-4
            px-6
            justify-center
          "
        >
          <View
            className="
              bg-white
              w-100
              rounded-lg
              shadow-lg
              px-6
              py-2
            "
          >
            <View className="flex flex-row justify-between">
              <View className="flex flex-row gap-3 my-auto">
                <View >
                  <Text>
                    <Image source={DefaultProfile} style={{ width: 50, height: 50 }} />
                  </Text>
                </View>
                <View>
                  <Text className="text-sm text-[#559C5E] ">Rewards</Text>
                  <Text className="text-md text-[#2B5630] font-bold">Tukarkan Pointmu</Text>
                </View>
              </View>
              <View className="my-auto">
                <Fontisto name="angle-right" size={15} color="black" />
              </View>
            </View>

            <View className="flex flex-row justify-between border-t-[1px] border-[#2B5630]">
              <View className="flex flex-row gap-3 my-auto">
                <View >
                  <Text>
                    <Image source={DefaultProfile} style={{ width: 50, height: 50 }} />
                  </Text>
                </View>
                <View>
                  <Text className="text-sm text-[#559C5E] ">History</Text>
                  <Text className="text-md text-[#2B5630] font-bold">Riwayat Tantangan</Text>
                </View>
              </View>
              <View className="my-auto">
                <Fontisto name="angle-right" size={15} color="black" />
              </View>
            </View>

          </View>
        </View>

        <View
          className="
            py-4
            px-6
            justify-center
          "
        >
          <View
            className="
              bg-white
              w-100
              rounded-lg
              shadow-lg
              px-6
              py-2
            "
          >
            <View className="flex flex-row justify-between">
              <View className="flex flex-row gap-3 my-auto">
                <View >
                  <Text className="flex flex-col justify-center">
                    <Image source={DefaultProfile} style={{ width: 50, height: 50 }} />
                  </Text>
                </View>
                <View className="flex flex-col justify-center">
                  <Text className="text-sm text-[#2B5630] font-bold ">FAQ</Text>
                </View>
              </View>
              <View className="my-auto">
                <Fontisto name="angle-right" size={15} color="black" />
              </View>
            </View>

            <View className="flex flex-row justify-between border-t-[1px] border-[#2B5630]">
              <View className="flex flex-row gap-3 my-auto">
                <View>
                  <Text className="flex flex-col justify-center">
                    <Image source={DefaultProfile} style={{ width: 50, height: 50 }} />
                  </Text>
                </View>
                <View className="flex flex-col justify-center">
                  <Text className="text-sm text-[#2B5630] font-bold ">Pengaturan Akun</Text>
                </View>
              </View>
              <View className="my-auto">
                <Fontisto name="angle-right" size={15} color="black" />
              </View>
            </View>

          </View>
        </View>

      </ScrollView>
    </>
  );
}

export default Profile;