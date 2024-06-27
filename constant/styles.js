import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const COLORS = {
  primary: '#23074D',
  primary2: '#5E1AC5',
  secondary: '#CC5333',
  wht: '#FFF',
  dark: '#000',
  gray: '#83829A',
  gray2: '#C1C0C8',
  gray3: '#F5F5F5',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

export {COLORS, SIZES};
