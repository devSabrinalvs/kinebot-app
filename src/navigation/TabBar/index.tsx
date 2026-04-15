import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import HomeIcon from '../../assets/icons/home.svg';
import FolderIcon from '../../assets/icons/folder.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import {colors} from '../../theme';
import {styles} from './styles';

const TAB_ICONS = [HomeIcon, FolderIcon, SettingsIcon, ProfileIcon];

export default function TabBar({state, navigation}: BottomTabBarProps) {
  return (
    <View>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.015)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.shadow}
      />
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const Icon = TAB_ICONS[index];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              activeOpacity={0.7}
              style={[styles.tabButton, isFocused && styles.tabButtonActive]}>
              <Icon width={32} height={32} color={isFocused ? colors.blue500 : colors.grey400} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
