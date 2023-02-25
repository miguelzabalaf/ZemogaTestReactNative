import { TextStyle } from 'react-native/types';
import { fonts } from '../fonts';

export const title: TextStyle = {
  fontSize: 24,
  fontFamily: fonts.montserratBlack,
};

export const titlePage: TextStyle = {
  fontSize: 16,
  fontFamily: fonts.montserratBlack,
};

export const subTitle: TextStyle = {
  fontSize: 20,
  fontFamily: fonts.montserratBlack,
};

export const text: TextStyle = {
  fontSize: 14,
  fontWeight: '400',
  fontFamily: fonts.montserratRegular,
};

export const smallText: TextStyle = {
  fontSize: 12,
  fontWeight: '400',
  fontFamily: fonts.montserratRegular,
};

export const lowercase: TextStyle = {
  textTransform: 'lowercase',
  fontFamily: fonts.montserratRegular,
};

export const textCenter: TextStyle = {
  textAlign: 'center',
  fontFamily: fonts.montserratRegular,
};
