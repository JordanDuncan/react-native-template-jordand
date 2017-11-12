/**
 * app/config/styles
 * ---
 * Store global styles and style related helpers here.
 */

import { Platform } from 'react-native';

export const colors = {
  primary: '#320E3B',
  background: '#F9E2FF',
  headerText: '#F9E2FF',
  bodyText: '#110414',
  red: '#FF0000'
};

export const sizes = {
  margin: {
    regular: 15,
    small: 10
  },
  text: {
    caption: 12,
    body: 14,
    smallHeading: 16,
    title: 17,
    subHeading: 18,
    headline: 22
  },
  navbar: {
    iconHeight: 20,
    height: Platform.OS === 'ios' ? 42 : 56,
    heightTotal: Platform.OS === 'ios' ? 64 : 56
  }
};

export const fonts = {};

export const fullFlexContainer = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: colors.background
};

export const centerChildren = {
  justifyContent: 'center',
  alignItems: 'center'
};
