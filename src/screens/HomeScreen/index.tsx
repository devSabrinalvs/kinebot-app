import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {HomeStackParamList} from '../../navigation';
import UploadIcon from '../../assets/icons/upload.svg';
import AepIcon from '../../assets/icons/aep.svg';
import RebaIcon from '../../assets/icons/reba.svg';
import {styles} from './styles';
import {colors} from '../../theme';

type NavigationProp = NativeStackNavigationProp<HomeStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.safeArea}>
      <Header />
      <View style={styles.container}>

        <View style={styles.guestBanner}>
          <View style={styles.guestInfo}>
            <Text style={styles.guestTitle}>Convidado</Text>
            <Text style={styles.guestSubtitle}>Faça login para sincronizar os dados</Text>
          </View>
          <Button
            label="Fazer login"
            variant="primary"
            style={styles.loginButton}
          />
        </View>

        <Button
          label="Upload"
          Icon={UploadIcon}
          size="lg"
          color={colors.grey500}
        />

        <View style={styles.reportsSection}>
          <Text style={styles.sectionTitle}>Relatórios:</Text>
          <View style={styles.reportCards}>
            <Button
              label="AEP"
              Icon={AepIcon}
              size="lg"
              color={colors.grey500}
              style={styles.reportButton}
              onPress={() => navigation.navigate('AEPList')}
            />
            <Button
              label="REBA"
              Icon={RebaIcon}
              size="lg"
              active={false}
              style={styles.reportButton}
            />
          </View>
        </View>

      </View>
    </View>
  );
}
