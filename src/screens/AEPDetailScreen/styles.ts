import {StyleSheet} from 'react-native';
import {colors, typography, spacing, radii, shadows} from '../../theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.grey50,
  },
  scroll: {
    flex: 1,
  },
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
    gap: spacing.lg,
  },
  title: {
    ...typography.headingSmall,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    padding: spacing.lg,
    ...shadows.card,
  },
  infoSection: {
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  chartSection: {
    gap: spacing.lg,
    marginBottom: spacing.xl,
  },
  chartTitle: {
    ...typography.labelMediumSemibold,
    letterSpacing: -0.24,
    color: colors.grey500,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  legend: {
    flex: 1,
    gap: spacing.md,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  legendDot: {
    width: 16,
    height: 16,
    borderRadius: radii.sm,
  },
  legendLabel: {
    ...typography.labelSmallRegular,
    color: colors.grey500,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  actionButton: {
    flex: 1,
  },
});
