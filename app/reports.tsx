import React, { useMemo, useState } from 'react';
import { Alert, Platform, ScrollView, Share, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useTheme } from 'src/contexts/ThemeContext';
import type { MaterialColors } from 'src/contexts/ThemeContext';
import { useProfileStore } from 'src/stores/profileStore';
import { generateReport, generateReportHTML } from 'src/reports/generator';
import type { ProfileReport } from 'src/reports/generator';

export default function ReportsScreen() {
  const { theme } = useTheme();
  const { colors } = theme;
  const profiles = useProfileStore((s) => s.profiles);
  const [selectedReport, setSelectedReport] = useState<ProfileReport | null>(null);

  const reports = useMemo(() => {
    return profiles
      .filter((p) => p.dateOfBirth)
      .map((p) => generateReport(p))
      .sort((a, b) => b.generatedAt - a.generatedAt);
  }, [profiles]);

  const handleShare = async (report: ProfileReport) => {
    try {
      await Share.share({
        message: report.text,
        title: `Numerology Report — ${report.profileName}`,
      });
    } catch {}
  };

  const handleExportPDF = async (report: ProfileReport) => {
    try {
      const html = generateReportHTML(report);
      const { uri } = await Print.printToFileAsync({ html, base64: false });
      if (Platform.OS === 'web') {
        Alert.alert('PDF Generated', `Report saved to: ${uri}`);
        return;
      }
      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(uri, {
          mimeType: 'application/pdf',
          dialogTitle: `Share ${report.profileName} Report`,
        });
      } else {
        Alert.alert('PDF Generated', `Report saved to: ${uri}`);
      }
    } catch {
      Alert.alert('Export Error', 'Could not generate PDF. Please try again.');
    }
  };

  if (selectedReport) {
    return (
      <ReportDetailView
        report={selectedReport}
        colors={colors}
        onBack={() => setSelectedReport(null)}
        onShare={() => handleShare(selectedReport)}
        onExportPDF={() => handleExportPDF(selectedReport)}
      />
    );
  }

  if (reports.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: colors.onSurface, marginBottom: 8 }}>
          No Reports Yet
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.onSurfaceVariant,
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Create a profile first to generate a numerology report.
        </Text>
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/profiles/new')}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 12,
            paddingVertical: 12,
            paddingHorizontal: 24,
          }}>
          <Text style={{ fontSize: 15, fontWeight: '700', color: colors.onPrimary }}>
            Create Profile
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', color: colors.onSurface, marginBottom: 4 }}>
        Reports
      </Text>
      <Text style={{ fontSize: 14, color: colors.onSurfaceVariant, marginBottom: 20 }}>
        Tap a report to view the full numerology analysis.
      </Text>
      {reports.map((report) => (
        <ReportCard
          key={report.profileId}
          report={report}
          colors={colors}
          onPress={() => setSelectedReport(report)}
          onShare={() => handleShare(report)}
        />
      ))}
    </ScrollView>
  );
}

function ReportCard({
  report,
  colors,
  onPress,
  onShare,
}: {
  report: ProfileReport;
  colors: MaterialColors;
  onPress: () => void;
  onShare: () => void;
}) {
  const date = new Date(report.generatedAt);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.surfaceVariant,
        borderRadius: 14,
        padding: 16,
        marginBottom: 12,
      }}>
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 17, fontWeight: '700', color: colors.onSurface }}>
            {report.profileName}
          </Text>
          <Text style={{ fontSize: 13, color: colors.onSurfaceVariant, marginTop: 2 }}>
            Life Path {report.numerology.lifePath} · {report.zodiac.animal} ·{' '}
            {date.toLocaleDateString()}
          </Text>
        </View>
        <TouchableOpacity
          onPress={onShare}
          style={{
            backgroundColor: colors.primaryContainer,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 6,
          }}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: colors.onPrimaryContainer }}>
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function ReportDetailView({
  report,
  colors,
  onBack,
  onShare,
  onExportPDF,
}: {
  report: ProfileReport;
  colors: MaterialColors;
  onBack: () => void;
  onShare: () => void;
  onExportPDF: () => void;
}) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          paddingHorizontal: 16,
          paddingTop: 8,
          paddingBottom: 8,
        }}>
        <TouchableOpacity onPress={onBack} style={{ paddingVertical: 4, paddingRight: 4 }}>
          <Text style={{ fontSize: 16, color: colors.primary, fontWeight: '600' }}>‹ Back</Text>
        </TouchableOpacity>
        <Text
          style={{ fontSize: 16, fontWeight: '700', color: colors.onSurface, flex: 1 }}
          numberOfLines={1}>
          {report.profileName}
        </Text>
        <TouchableOpacity
          onPress={onExportPDF}
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 6,
          }}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: colors.onSurfaceVariant }}>
            PDF
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onShare}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}>
          <Text style={{ fontSize: 13, fontWeight: '600', color: colors.onPrimary }}>Share</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
        {report.sections.map((section, si) => (
          <View
            key={si}
            style={{
              backgroundColor: colors.surfaceVariant,
              borderRadius: 12,
              padding: 14,
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: colors.primary,
                textTransform: 'uppercase',
                letterSpacing: 1,
                marginBottom: 8,
              }}>
              {section.title}
            </Text>
            {section.content.map((line, li) => {
              if (!line.trim()) return null;
              const isHeading = line.startsWith('  ');
              return (
                <Text
                  key={li}
                  style={{
                    fontSize: 14,
                    color: isHeading ? colors.onSurfaceVariant : colors.onSurface,
                    lineHeight: 20,
                    marginBottom: 4,
                    paddingLeft: isHeading ? 8 : 0,
                  }}>
                  {line.trim()}
                </Text>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
