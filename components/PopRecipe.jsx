import { FlatList, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './poprecipe.style';
import { SIZES } from '../constant/styles';
import PopRecipeCardView from './PopRecipeCardView';

const PopRecipe = () => {
  const recipeData = [
    {
      name: 'Nasi Goreng Kemangi',
      imageUrl:
        'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficult: 'Easy',
      ingredients: [
        'chicken fillet',
        'sugar',
        'chicken',
        'salt',
        'sasa',
        'chicken',
        'chicken',
        'salt',
        'sasa',
        'chicken',
        'chicken',
        'salt',
        'sasa',
      ],
      steps: [
        'Cuci bersih ayam dan lumuri dengan air jeruk nipis / lemon. Simpan didalam kulkas kurang kebih 15 menit.',
        'Haluskan semua bahan bumbu halus. Panaskan minyak diwajan dengan api sedang dan kemudian tumis bumbu yang sudah dihaluskan beserta Serah dan Daun salam. Tumis hingga warna kuning dan jangan sampai berubah warna coklat.',
        'Masukkan air dan ayam. Aduk hingga bumbu merata. masukkan Madu dan kecap manis dan aduk hingga bumbu merata. Tambahkan sedikit garam. Dan Masak ayam selama kurang lebih 20 menit.',
        'Sambil menunggu ayam masak, siapkan bumbu oles untuk bakar ayamnya. Campurkan Margarin, Madu, kecap manis dalam 1 wadah.',
        'Jika ayam sudah masak, tambahkan 3sdm sisa bumbu ayam yang dimasak tadi ke dalam bumbu oles. Olesi Teflon / Happy Call dengan Margarin agar tidak lengket. Kemudian olesi ayam bolak balik dengan bumbu oles sebelum dibakar. Jika sudah merata dibakar, angkat dan sajikan dengan lalapan dan sambal.',
      ],
    },
    {
      name: 'Ikan Salmon Goreng',
      imageUrl:
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficult: 'Easy',
      ingredients: [
        'chicken fillet',
        'sugar',
        'chicken',
        'salt',
        'sasa',
        'chicken',
        'chicken',
        'salt',
        'sasa',
        'chicken',
        'chicken',
        'salt',
        'sasa',
      ],
      steps: [
        'Cuci bersih ayam dan lumuri dengan air jeruk nipis / lemon. Simpan didalam kulkas kurang kebih 15 menit.',
        'Haluskan semua bahan bumbu halus. Panaskan minyak diwajan dengan api sedang dan kemudian tumis bumbu yang sudah dihaluskan beserta Serah dan Daun salam. Tumis hingga warna kuning dan jangan sampai berubah warna coklat.',
        'Masukkan air dan ayam. Aduk hingga bumbu merata. masukkan Madu dan kecap manis dan aduk hingga bumbu merata. Tambahkan sedikit garam. Dan Masak ayam selama kurang lebih 20 menit.',
        'Sambil menunggu ayam masak, siapkan bumbu oles untuk bakar ayamnya. Campurkan Margarin, Madu, kecap manis dalam 1 wadah.',
        'Jika ayam sudah masak, tambahkan 3sdm sisa bumbu ayam yang dimasak tadi ke dalam bumbu oles. Olesi Teflon / Happy Call dengan Margarin agar tidak lengket. Kemudian olesi ayam bolak balik dengan bumbu oles sebelum dibakar. Jika sudah merata dibakar, angkat dan sajikan dengan lalapan dan sambal.',
      ],
    },
    {
      name: 'Nasi Goreng Kemangi',
      imageUrl:
        'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficult: 'Easy',
      ingredients: [
        'chicken fillet',
        'sugar',
        'chicken',
        'salt',
        'sasa',
        'chicken',
        'chicken',
        'salt',
        'sasa',
        'chicken',
        'chicken',
        'salt',
        'sasa',
        'salt',
        'sasa',
        'chicken',
        'chicken',
        'salt',
        'sasa',
        'salt',
        'sasa',
        'chicken',
        'chicken',
        'salt',
        'sasaaaa',
      ],
      steps: [
        'Cuci bersih ayam dan lumuri dengan air jeruk nipis / lemon. Simpan didalam kulkas kurang kebih 15 menit.',
        'Haluskan semua bahan bumbu halus. Panaskan minyak diwajan dengan api sedang dan kemudian tumis bumbu yang sudah dihaluskan beserta Serah dan Daun salam. Tumis hingga warna kuning dan jangan sampai berubah warna coklat.',
        'Masukkan air dan ayam. Aduk hingga bumbu merata. masukkan Madu dan kecap manis dan aduk hingga bumbu merata. Tambahkan sedikit garam. Dan Masak ayam selama kurang lebih 20 menit.',
        'Sambil menunggu ayam masak, siapkan bumbu oles untuk bakar ayamnya. Campurkan Margarin, Madu, kecap manis dalam 1 wadah.',
        'Jika ayam sudah masak, tambahkan 3sdm sisa bumbu ayam yang dimasak tadi ke dalam bumbu oles. Olesi Teflon / Happy Call dengan Margarin agar tidak lengket. Kemudian olesi ayam bolak balik dengan bumbu oles sebelum dibakar. Jika sudah merata dibakar, angkat dan sajikan dengan lalapan dan sambal.',
      ],
    },
  ];
  return (
    <View style={styles.popRecipeContainer}>
      <Text style={styles.popRecipeText}>Popular Recipes</Text>
      <FlatList
        data={recipeData}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => <PopRecipeCardView item={item} />}
      />
    </View>
  );
};

export default PopRecipe;
