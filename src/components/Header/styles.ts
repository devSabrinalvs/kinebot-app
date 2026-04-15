import {StyleSheet} from 'react-native';
import {spacing, shadows} from '../../theme';

export const styles = StyleSheet.create({
  shadow: {
    ...shadows.header,
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
  backButton: {
    width: 32,
  },
  placeholder: {
    width: 32,
  },
});
