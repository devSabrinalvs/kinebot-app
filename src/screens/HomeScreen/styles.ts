import {StyleSheet} from 'react-native';
import {colors, typography, spacing, radii} from '../../theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.grey50,
  },
  container: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.xl,
  },
  guestBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    gap: spacing.md,
    backgroundColor: colors.grey100,
    borderRadius: radii.md,
  },
  guestInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  guestTitle: {
    ...typography.labelMediumSemibold,
    color: colors.grey500,
  },
  guestSubtitle: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
    letterSpacing: -0.06,
    color: colors.grey400,
  },
  loginButton: {
    width: 100,
  },
  reportsSection: {
    gap: spacing.md,
  },
  sectionTitle: {
    ...typography.labelMediumSemibold,
    color: colors.grey500,
  },
  reportCards: {
    flexDirection: 'row' as const,
    gap: spacing.sm,
  },
  reportButton: {
    flex: 1,
  },
});
