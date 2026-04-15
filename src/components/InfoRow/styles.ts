import {StyleSheet} from 'react-native';
import {colors, typography, spacing} from '../../theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: spacing.sm,
  },
  label: {
    ...typography.labelSmallSemibold,
    color: colors.grey500,
  },
  value: {
    ...typography.labelSmallRegular,
    color: colors.grey400,
  },
});
