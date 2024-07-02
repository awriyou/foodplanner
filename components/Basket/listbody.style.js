import { StyleSheet } from 'react-native';
import { SIZES, COLORS, SHADOWS } from '../../constant/styles';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: SIZES.height,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: 'center',
    // alignItems: 'center',
    // paddingBottom: 180,
  },
  title: {
    fontFamily: 'extraBold',
    fontSize: SIZES.xLarge,
    // marginTop: 10,
    // marginLeft: 10,
    color: COLORS.primary,
  },
  wrapperContainer: {
    // flex: 1,
    width: '100%',
    height: SIZES.height - 550,
    backgroundColor: COLORS.wht,
    ...SHADOWS.medium,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },

  headText: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    color: COLORS.primary,
    textAlign: 'center',
    marginHorizontal: 10,
  },

  emptyText: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    color: COLORS.primary,
    textAlign: 'center',
  },

  uncheckedList: {
    marginTop: 10,
    paddingHorizontal: 2,
  },

  wrapperList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.gray3,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 8,
    marginHorizontal: 4,
    borderRadius: 10,
    ...SHADOWS.small,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  qtyText: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
  },
  nameText: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
  },
  iconWrapper: {
    flexDirection: 'row',
    gap: 10,
  },

  ModalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    opacity: 0.8,
  },
  modalView: {
    width: SIZES.width - 100,
    height: SIZES.height - 650,
    backgroundColor: COLORS.wht,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    //?============================
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    gap: 5,
    marginVertical: 10,
  },
  inputName: {
    flex: 3,
    height: 45,
    backgroundColor: COLORS.gray2,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: COLORS.primary,
    fontFamily: 'semiBold',
  },
  inputQty: {
    flex: 1,
    height: 45,
    backgroundColor: COLORS.gray2,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: COLORS.primary,
    fontFamily: 'semiBold',
  },
  saveListBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  saveListBtnText:{
    fontFamily: 'semiBold',
    color: COLORS.wht,
  },
});

export default styles;
