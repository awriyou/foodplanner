import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../constant/styles';
import { useNavigation } from '@react-navigation/native';

const RecipeCardView = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerWrapper}
      onPress={() => navigation.navigate('DetailRecipe', { item })}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.recipe_img }} style={styles.image} />
        </View>
        <View style={styles.desc}>
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.difficult}>{item.level}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCardView;

const styles = StyleSheet.create({
  containerWrapper: {
    width: SIZES.width / 2 - 10,
    height: 165,
    gap: 8,
    paddingHorizontal: 2,
    alignItems: 'center',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 165,
    overflow: 'hidden',
    
    borderRadius: 20,
  },
  desc: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: COLORS.dark,
    opacity: 0.6,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontFamily: 'bold',
    width: 130,
    height: 20,
    color: COLORS.wht,
  },
  difficult: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    color: COLORS.wht,
  },
});
