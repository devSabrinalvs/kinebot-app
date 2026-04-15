import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import PieChart from '../../components/PieChart';
import Header from '../../components/Header';
import InfoRow from '../../components/InfoRow';
import Button from '../../components/Button';
import {HomeStackParamList} from '../../navigation';
import EditIcon from '../../assets/icons/edit.svg';
import DeleteIcon from '../../assets/icons/delete.svg';
import {styles} from './styles';
import {colors} from '../../theme';

type DetailRouteProp = RouteProp<HomeStackParamList, 'AEPDetail'>;

export default function AEPDetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const {report} = route.params;

  const pieData = report.results.map(item => ({
    value: item.percentage,
    color: item.color,
    label: `${item.percentage}%`,
  }));

  return (
    <View style={styles.screen}>
      <Header showBack />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>{report.title}</Text>

        <View style={styles.card}>
          <View style={styles.infoSection}>
            <InfoRow label="Empresa:" value={report.empresa} />
            <InfoRow label="Planta industrial:" value={report.plantaIndustrial} />
            <InfoRow label="Setor:" value={report.setor} />
            <InfoRow label="Posto de trabalho:" value={report.postoDeTrabalho} />
            <InfoRow label="Atividade:" value={report.atividade} />
            <InfoRow label="Avaliador" value={report.avaliador} />
            <InfoRow label="Data de análise:" value={report.dataAnalise} />
          </View>

          <View style={styles.chartSection}>
            <Text style={styles.chartTitle}>Resultado da análise</Text>
            <View style={styles.chartRow}>
              <PieChart data={pieData} radius={82} />
              <View style={styles.legend}>
                {report.results.map(item => (
                  <View key={item.label} style={styles.legendItem}>
                    <View style={[styles.legendDot, {backgroundColor: item.color}]} />
                    <Text style={styles.legendLabel}>{item.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.actions}>
          <Button
            label="Editar"
            Icon={EditIcon}
            color={colors.blue500}
            style={styles.actionButton}
          />
          <Button
            label="Excluir"
            Icon={DeleteIcon}
            color={colors.risk.veryHigh}
            style={styles.actionButton}
          />
        </View>
      </ScrollView>
    </View>
  );
}
