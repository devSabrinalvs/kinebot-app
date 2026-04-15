import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../../components/Header';
import ReportCard from '../../components/ReportCard';
import Button from '../../components/Button';
import {aepReports} from '../../data/mock';
import {HomeStackParamList} from '../../navigation';
import PlusIcon from '../../assets/icons/plus.svg';
import {styles} from './styles';

type NavigationProp = NativeStackNavigationProp<HomeStackParamList>;

export default function AEPListScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.screen}>
      <Header showBack />
      <View style={styles.container}>
        <Text style={styles.title}>AEP</Text>

        <View style={styles.listHeader}>
          <Text style={styles.count}>{aepReports.length} relatórios</Text>
          <Button
            label="Nova análise"
            Icon={PlusIcon}
            style={styles.newButton}
          />
        </View>

        <FlatList
          data={aepReports}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ReportCard
              report={item}
              onPress={() => navigation.navigate('AEPDetail', {report: item})}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}
