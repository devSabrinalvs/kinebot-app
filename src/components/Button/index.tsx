import React from 'react';
import {TouchableOpacity, Text, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {colors} from '../../theme';
import {styles} from './styles';

interface ButtonProps {
  label: string;
  Icon?: React.FC<SvgProps>;
  size?: 'sm' | 'lg';
  variant?: 'outlined' | 'primary';
  active?: boolean;
  color?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function Button({
  label,
  Icon,
  size = 'sm',
  variant = 'outlined',
  active = true,
  color,
  onPress,
  style,
}: ButtonProps) {
  const isPrimary = variant === 'primary';
  const isInactive = !active;
  const isLg = size === 'lg';

  const resolvedColor = isPrimary
    ? colors.white
    : isInactive
    ? colors.grey300
    : color ?? colors.grey500;

  const bgColor = isPrimary
    ? colors.blue500
    : isInactive
    ? colors.grey100
    : colors.white;

  const borderStyle: ViewStyle =
    isPrimary || isInactive
      ? {}
      : isLg
      ? {borderWidth: 2, borderColor: colors.grey100}
      : {borderWidth: 1, borderColor: colors.grey150};

  return (
    <TouchableOpacity
      style={[styles.base, isLg ? styles.lg : styles.sm, {backgroundColor: bgColor}, borderStyle, style]}
      onPress={onPress}
      activeOpacity={isPrimary || isInactive ? 0.9 : 0.7}>
      {Icon && <Icon width={24} height={24} fill={resolvedColor} />}
      <Text style={[isLg ? styles.labelLg : styles.labelSm, {color: resolvedColor}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

