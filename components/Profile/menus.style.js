import { StyleSheet } from 'react-native';
import { SIZES, COLORS, SHADOWS } from '../../constant/styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 3,
    borderRadius: 6,
    ...SHADOWS.small,
    backgroundColor: COLORS.wht,
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  descIcon: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 15,
  },
  buttonText:{
    marginTop: 2,
    fontFamily: 'bold',
    color: COLORS.primary,
    fontSize: SIZES.large -2,
  },
  toggleWrapper:{
    width: 43,
    height: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.dark
  },
  toggle:{
    height: 20,
    width: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    position: 'absolute',
    top: 1,
    bottom: 1,
    
  }
});

export default styles;
