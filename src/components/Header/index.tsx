import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import Logo from '../../assets/images/logo-kinebot.svg';
import {styles} from './styles';

interface HeaderProps {
  showBack?: boolean;
}

export default function Header({showBack = false}: HeaderProps) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.shadow}>
      <LinearGradient
        colors={['#FFFFFF', '#d9def5']}
        locations={[0.1862, 0.9399]}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={{paddingTop: insets.top}}>
        <View style={styles.row}>
          {showBack ? (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <ArrowLeft width={16} height={16} />
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder} />
          )}
          <Logo width={120} height={29} />
          <View style={styles.placeholder} />
        </View>
      </LinearGradient>
    </View>
  );
}
