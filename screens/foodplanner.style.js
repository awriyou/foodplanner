import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constant/styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.wht,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'extraBold',
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  imageBg: {
    position: 'absolute',
    top: SIZES.height / 2 - 200,
    left: SIZES.width / 2 - 100,
    zIndex: -1,
    width: 200,
    height: 200,
  },
  calendarWrapper: {
    width: '100%',
    alignItems: 'center',
    opacity: 0.5,
    backgroundColor: COLORS.wht,
    elevation: 10,
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: SIZES.width - 60,
    height: SIZES.height / 1.4,
    backgroundColor: COLORS.grayInput,
    borderRadius: 20,
    padding: 25,
  },
  
  inputName: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.wht,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: COLORS.primary,
    fontFamily: 'semiBold',
    marginBottom: 15,
  },
  titleModal: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginBottom: 20,
  },
  listFavorite: {
    height: 70,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    ...SHADOWS.small,
    marginBottom: 10,
    backgroundColor: COLORS.wht,
    borderRadius: 10,
  },
  imageList: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 10,
  },
  titleList: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  footer: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    gap: 10,
  },
  timeBtn: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 9,
    flexDirection: 'row',
    backgroundColor: COLORS.wht,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  timeText: {
    fontFamily: 'semiBold',
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  addBtn: {
    flex: 2,
    // paddingHorizontal: 10,
    paddingVertical: 9,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    ...SHADOWS.medium,
  },
  addText: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
    color: COLORS.wht,
  },
  timeListBtn:{
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: COLORS.wht,
  },

  //! ====
});

// export default styles;


// import { StyleSheet } from 'react-native';
// import { COLORS, SIZES } from '../constant/styles';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
//   imageBg: {
//     position: 'absolute',
//     top: SIZES.height / 2 - 300,
//     left: SIZES.width / 2 - 100,
//     zIndex: -1,
//     width: 200,
//     height: 200,
//   },
//   calendarWrapper: {
//     width: '100%',
//     opacity: 0.6,
//     backgroundColor: COLORS.wht,
//     elevation: 10,
//     borderRadius: 20,
//   },
//   headerWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: SIZES.medium,
//   },
//   headerTitle: {
//     fontSize: SIZES.large,
//     fontWeight: 'bold',
//   },
//   modal: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContainer: {
//     width: '80%',
//     padding: SIZES.medium,
//     backgroundColor: COLORS.wht,
//     borderRadius: SIZES.small,
//   },
//   inputWrapper: {
//     marginBottom: SIZES.medium,
//   },
//   inputName: {
//     height: 40,
//     borderColor: COLORS.gray,
//     borderWidth: 1,
//     paddingHorizontal: SIZES.small,
//     borderRadius: SIZES.small,
//   },
//   likedRecipeWrapper: {
//     marginBottom: SIZES.medium,
//   },
//   titleModal: {
//     fontSize: SIZES.medium,
//     fontWeight: 'bold',
//     marginBottom: SIZES.small,
//   },
//   listFavorite: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: SIZES.small,
//     borderRadius: SIZES.small,
//     borderColor: COLORS.gray,
//     borderWidth: 1,
//     marginBottom: SIZES.small,
//   },
//   imageList: {
//     width: 40,
//     height: 40,
//     borderRadius: SIZES.small,
//     marginRight: SIZES.small,
//   },
//   titleList: {
//     fontSize: SIZES.medium,
//     flex: 1,
//   },
//   footer: {
//     marginBottom: SIZES.medium,
//   },
//   input: {
//     height: 40,
//     borderColor: COLORS.gray,
//     borderWidth: 1,
//     paddingHorizontal: SIZES.small,
//     borderRadius: SIZES.small,
//     justifyContent: 'center',
//   },
//   inputText: {
//     fontSize: SIZES.medium,
//   },
//   wrapperTime: {
//     borderColor: COLORS.gray,
//     borderWidth: 1,
//     borderRadius: SIZES.small,
//     marginTop: SIZES.small,
//   },
//   listTime: {
//     padding: SIZES.small,
//     borderBottomWidth: 1,
//     borderBottomColor: COLORS.lightGray,
//   },
//   buttonAdd: {
//     backgroundColor: COLORS.primary,
//     padding: SIZES.medium,
//     borderRadius: SIZES.small,
//     alignItems: 'center',
//   },
//   buttonAddText: {
//     color: COLORS.white,
//     fontSize: SIZES.medium,
//     fontWeight: 'bold',
//   },
// });

export default styles;