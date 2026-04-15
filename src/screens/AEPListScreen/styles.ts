import {StyleSheet} from 'react-native';
import {colors, typography, spacing} from '../../theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.grey50,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    gap: spacing.md,
  },
  title: {
    ...typography.headingSmall,
    textAlign: 'center',
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  count: {
    ...typography.labelSmallRegular,
    color: colors.grey300,
  },
  newButton: {
    width: 141,
  },
  list: {
    gap: spacing.md,
    paddingBottom: spacing.lg,
  },
});
