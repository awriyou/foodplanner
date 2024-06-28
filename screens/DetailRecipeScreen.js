import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './detailrecipe.style';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constant/styles';
import BackButton from '../components/Header/BackButton';
import { useRoute } from '@react-navigation/native';

const DetailRecipeScreen = ({ navigation }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [toggle, setToggle] = useState(true);
  const route = useRoute();
  const { item } = route.params;
  return (
    <SafeAreaView>
      <BackButton />
      <View style={styles.container}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />

        <View style={styles.containerInfoWrapper}>
          <View style={styles.infoWrapper}>
            <View style={styles.titleIconWrapper}>
              <Text style={styles.title}>{item.name}</Text>
              <View style={styles.iconWrapper}>
                <TouchableOpacity>
                  <Ionicons
                    name="share-social"
                    size={24}
                    color={COLORS.primary}
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setIsLiked(!isLiked);
                  }}
                >
                  <Ionicons
                    name={isLiked ? 'heart' : 'heart-outline'}
                    size={24}
                    color={COLORS.secondary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.detailWrapper}>
              <View style={styles.detail}>
                <Ionicons
                  name="time-outline"
                  size={24}
                  color={COLORS.secondary}
                />
                <Text style={styles.detailText}>15 Minutes</Text>
              </View>
              <View style={styles.detail}>
                <Ionicons name="alert" size={24} color={COLORS.secondary} />
                <Text style={styles.detailText}>8 Ingredients</Text>
              </View>
              <View style={styles.detail}>
                <Ionicons name="analytics" size={24} color={COLORS.secondary} />
                <Text style={styles.detailText}>10 Steps</Text>
              </View>
            </View>
            <View style={styles.likedBy}>
              <Text style={styles.likedByText}>Liked By 10 people</Text>
            </View>
          </View>
          <View style={styles.descWrapper}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[
                  styles.toggle,
                  {
                    backgroundColor: toggle ? COLORS.primary : COLORS.wht,
                  },
                ]}
                onPress={() => setToggle(!toggle)}
              >
                <Text style={styles.toggleText}>Ingredients</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggle,
                  {
                    backgroundColor: !toggle ? COLORS.primary : COLORS.wht,
                  },
                ]}
                onPress={() => setToggle(!toggle)}
              >
                <Text style={styles.toggleText}> Steps </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.list}>
              <FlatList
                data={toggle ? item.ingredients : item.steps}
                renderItem={({ item }) =>
                  toggle ? (
                    <View style={styles.ingredients}>
                      <Ionicons
                        name="alert"
                        size={24}
                        color={COLORS.secondary}
                      />
                      <Text style={styles.gram}>200g</Text>
                      <Text style={styles.infoList}>{item}</Text>
                    </View>
                  ) : (
                    <View style={styles.ingredients}>
                      <MaterialCommunityIcons
                        name="chef-hat"
                        size={24}
                        color={COLORS.secondary}
                      />
                      <Text
                        style={[
                          styles.infoList,
                          {
                            fontSize: SIZES.small - 2,
                          },
                        ]}
                      >
                        {item}
                      </Text>
                    </View>
                  )
                }
              />
              {/* <FlatList /> */}
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailRecipeScreen;
