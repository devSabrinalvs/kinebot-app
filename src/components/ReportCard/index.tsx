import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FileIcon from '../../assets/icons/file.svg';
import {AEPReport} from '../../data/mock';
import {styles} from './styles';
import { colors } from '../../theme';

interface ReportCardProps {
  report: AEPReport;
  onPress: () => void;
}

export default function ReportCard({report, onPress}: ReportCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <FileIcon width={24} height={24} fill={colors.blue500} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{report.title}</Text>
        <Text style={styles.date}>{report.date}</Text>
      </View>
    </TouchableOpacity>
  );
}
