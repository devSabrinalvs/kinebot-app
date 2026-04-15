import {StyleSheet} from 'react-native';
import {colors, typography, spacing, radii, shadows} from '../../theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.white,
    borderRadius: radii.md,
    padding: spacing.md,
    height: 72,
    ...shadows.card,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: radii.sm,
    backgroundColor: colors.grey100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    gap: spacing.sm,
  },
  title: {
    ...typography.labelSmallSemibold,
    color: colors.grey500,
  },
  date: {
    ...typography.labelSmallRegular,
    color: colors.grey300,
  },
});
