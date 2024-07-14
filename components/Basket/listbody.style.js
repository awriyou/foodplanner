import { StyleSheet } from 'react-native';
import { SIZES, COLORS, SHADOWS } from '../../constant/styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'extraBold',
    fontSize: 24,
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  wrapperContainer: {
    width: '100%',
    backgroundColor: COLORS.wht,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  headText: {
    fontFamily: 'bold',
    fontSize: 18,
    color: COLORS.primary,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  emptyText: {
    fontFamily: 'bold',
    fontSize: 18,
    color: COLORS.primary,
    textAlign: 'center',
  },
  uncheckedList: {
    marginTop: 10,
  },
  wrapperList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.gray3,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 8,
    borderRadius: 10,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  qtyText: {
    fontFamily: 'semiBold',
    fontSize: 16,
    backgroundColor: COLORS.wht,
  },
  nameText: {
    fontFamily: 'semiBold',
    fontSize: 16,
  },
  iconWrapper: {
    flexDirection: 'row',
  },
  ModalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    opacity: 0.8,
  },
  modalView: {
    width: '80%',
    backgroundColor: COLORS.wht,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  inputWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    gap: 5,
  },
  inputName: {
    flex: 3,
    height: 45,
    backgroundColor: COLORS.gray2,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: COLORS.primary,
    fontFamily: 'semiBold',
  },
  inputQty: {
    flex: 1,
    height: 45,
    backgroundColor: COLORS.gray2,
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
    marginTop: 20,
  },
  saveListBtnText: {
    fontFamily: 'semiBold',
    color: COLORS.wht,
  },
});

export default styles;
