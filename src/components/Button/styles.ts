import {StyleSheet} from 'react-native';
import {typography, spacing, radii} from '../../theme';

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sm: {
    height: 40,
    borderRadius: radii.sm,
    gap: spacing.xs,
  },
  lg: {
    height: 56,
    borderRadius: radii.md,
    gap: spacing.sm,
  },
  labelSm: {
    ...typography.labelMediumRegular,
  },
  labelLg: {
    ...typography.labelMediumSemibold,
  },
});
