import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';
import CustomIcon from './custom_icon';

interface GradientBGIconProps {
  name: string;
  color: string;
  size: number;
}

const GradientBGIcon: React.FC<GradientBGIconProps> = ({name, color, size}) => {
  return (
    <View style={styles.Container}>
      <linearGradient
       style={styles.LinearGradientBG}>
        <CustomIcon name={name} color={color} size={size} />
      </linearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
  },
  LinearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GradientBGIcon;
