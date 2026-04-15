import {StyleSheet} from 'react-native';
import {colors, spacing, radii} from '../../theme';

export const styles = StyleSheet.create({
  shadow: {
    position: 'absolute',
    top: -8,
    left: 0,
    right: 0,
    height: 8,
    zIndex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: 64,
    gap: spacing.xl,
  },
  tabButton: {
    width: 48,
    height: 48,
    borderRadius: radii.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: colors.blue100,
  },
});
