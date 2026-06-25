import type { Profile } from 'src/types/profile';
import type { FullNumerologyReport } from 'src/engine';
import { calculateFullProfile } from 'src/engine';
import { getFullZodiacProfile } from 'src/engine/zodiac';
import type { ZodiacProfile } from 'src/engine/zodiac';
import { lifePathMeanings } from 'src/data/lifePathMeanings';
import { nameNumberMeanings } from 'src/data/nameNumberMeanings';
import { karmicDebtMeanings, karmicLessonMeanings } from 'src/data/karmicMeanings';
import { challengeMeanings } from 'src/data/challengeMeanings';
import { pinnacleMeanings } from 'src/data/pinnacleMeanings';
import { personalYearMeanings, personalMonthMeanings, personalDayMeanings } from 'src/data/cycleMeanings';
import { luckyElements } from 'src/data/luckyElements';
import { zodiacAnimalMap } from 'src/data/zodiacData';

export interface ReportSection {
  title: string;
  content: string[];
}

export interface ProfileReport {
  profileId: string;
  profileName: string;
  generatedAt: number;
  numerology: FullNumerologyReport;
  zodiac: ZodiacProfile;
  sections: ReportSection[];
  text: string;
}

function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getNumMeaning(record: Record<number, { label?: string; title?: string; corePersonality?: string }> | undefined, num: number, field: 'label' | 'title' | 'corePersonality'): string {
  if (!record) return '';
  const entry = record[num as keyof typeof record] as any;
  if (!entry) return '';
  return entry[field] ?? '';
}

export function generateReport(profile: Profile): ProfileReport {
  const birthDate = new Date(profile.dateOfBirth);
  const report = calculateFullProfile({
    firstName: profile.firstName,
    middleName: profile.middleName,
    lastName: profile.lastName,
    birthDay: birthDate.getDate(),
    birthMonth: birthDate.getMonth() + 1,
    birthYear: birthDate.getFullYear(),
  });

  const zodiac = getFullZodiacProfile(birthDate.getFullYear());
  const now = new Date();
  const py = report.personalCycles.personalYear;
  const pm = report.personalCycles.personalMonth;
  const pd = report.personalCycles.personalDay;
  const lifePathData = lifePathMeanings[report.lifePath as keyof typeof lifePathMeanings];
  const lucky = luckyElements[report.lifePath as keyof typeof luckyElements] ?? luckyElements[1];

  const karmicDebtEntries = report.karmicDebts
    .map((d) => karmicDebtMeanings[d as keyof typeof karmicDebtMeanings])
    .filter(Boolean);
  const karmicLessonEntries = report.karmicLessons
    .map((l) => karmicLessonMeanings[l as keyof typeof karmicLessonMeanings])
    .filter(Boolean);

  const sections: ReportSection[] = [
    {
      title: 'Personal Summary',
      content: [
        `Name: ${profile.firstName} ${profile.middleName ? profile.middleName + ' ' : ''}${profile.lastName}`,
        `Date of Birth: ${formatDate(profile.dateOfBirth)}`,
        `Profile Type: ${profile.type}`,
        profile.nickname ? `Also known as: ${profile.nickname}` : '',
        profile.notes ? `Notes: ${profile.notes}` : '',
        `Report Generated: ${now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`,
      ].filter(Boolean),
    },
    {
      title: 'Life Path Number',
      content: [
        `Number: ${report.lifePath}`,
        lifePathData ? `${lifePathData.label}: ${lifePathData.title}` : '',
        lifePathData ? `Core Personality: ${lifePathData.corePersonality}` : '',
        lifePathData ? `Strengths: ${lifePathData.strengths.join(', ')}` : '',
        lifePathData ? `Weaknesses: ${lifePathData.weaknesses.join(', ')}` : '',
        lifePathData ? `Career Tendencies: ${lifePathData.careerTendencies.join(', ')}` : '',
        lifePathData ? `Relationship Style: ${lifePathData.relationshipStyle}` : '',
        lifePathData ? `Compatible Numbers: ${lifePathData.compatibleNumbers}` : '',
      ].filter(Boolean),
    },
    {
      title: 'Core Name Numbers',
      content: [
        `Expression Number: ${report.expression} — ${getNumMeaning(nameNumberMeanings as any, report.expression, 'title')}`,
        `Soul Urge Number: ${report.soulUrge} — ${getNumMeaning(nameNumberMeanings as any, report.soulUrge, 'title')}`,
        `Personality Number: ${report.personality} — ${getNumMeaning(nameNumberMeanings as any, report.personality, 'title')}`,
      ],
    },
    {
      title: 'Additional Numbers',
      content: [
        `Day of Birth: ${report.dayOfBirth}`,
        `Attitude Number: ${report.attitude}`,
        `Maturity Number: ${report.maturity}`,
        `Generation Number: ${report.generation}`,
        `Cornerstone Letter: ${profile.firstName.charAt(0).toUpperCase()} (reduced to ${report.cornerstone})`,
        `Balance Number: ${report.balance}`,
        `Subconscious Self: ${report.subconsciousSelf}`,
      ],
    },
    {
      title: 'Karmic Analysis',
      content: [
        ...(karmicDebtEntries.length > 0
          ? karmicDebtEntries.flatMap((d) => [
              `Karmic Debt ${d.number}: ${d.title}`,
              `  ${d.explanation}`,
              `  Growth: ${d.growthPath.join('; ')}`,
            ])
          : ['No Karmic Debt numbers present in this chart.']),
        '',
        ...(karmicLessonEntries.length > 0
          ? karmicLessonEntries.map((l) => `${l.title}: ${l.challenge} — ${l.growthArea}`)
          : ['No Karmic Lessons (all numbers 1-9 are present in the name chart).']),
      ],
    },
    {
      title: 'Challenge Numbers',
      content: [
        ['First Challenge', report.challenges.first],
        ['Second Challenge', report.challenges.second],
        ['Third Challenge', report.challenges.third],
        ['Fourth Challenge', report.challenges.fourth],
      ].map(([label, num]) => {
        const m = challengeMeanings[num as keyof typeof challengeMeanings];
        return `${label}: ${num} — ${m?.title ?? ''}: ${m?.meaning ?? ''}`;
      }),
    },
    {
      title: 'Pinnacle Cycles',
      content: report.pinnacles.map((p, i) => {
        const ages = p.ageEnd === Infinity ? `${p.ageStart}+` : `${p.ageStart}–${p.ageEnd}`;
        const m = pinnacleMeanings[p.number as keyof typeof pinnacleMeanings];
        return `Pinnacle ${i + 1} (Ages ${ages}): Number ${p.number} — ${m?.title ?? ''}\n  Opportunities: ${m?.opportunities?.join(', ') ?? ''}\n  Challenges: ${m?.challenges?.join(', ') ?? ''}`;
      }),
    },
    {
      title: 'Current Year Forecast',
      content: [
        `Personal Year ${py}: ${personalYearMeanings[py as keyof typeof personalYearMeanings]?.title ?? ''} — ${personalYearMeanings[py as keyof typeof personalYearMeanings]?.theme ?? ''}`,
        `Personal Month ${pm}: ${personalMonthMeanings[pm as keyof typeof personalMonthMeanings]?.title ?? ''} — ${personalMonthMeanings[pm as keyof typeof personalMonthMeanings]?.energy ?? ''}`,
        `Personal Day ${pd}: ${personalDayMeanings[pd as keyof typeof personalDayMeanings]?.title ?? ''} — ${personalDayMeanings[pd as keyof typeof personalDayMeanings]?.energy ?? ''}`,
        `Universal Year ${report.universalCycles.universalYear}: The collective energy of ${now.getFullYear()}`,
      ],
    },
    {
      title: 'Lucky Elements',
      content: [
        `Lucky Numbers: ${lucky?.luckyNumbers?.join(', ') ?? ''}`,
        `Lucky Days: ${lucky?.luckyDays?.join(', ') ?? ''}`,
        `Lucky Months: ${lucky?.luckyMonths?.join(', ') ?? ''}`,
        `Lucky Colors: ${lucky?.luckyColors?.join(', ') ?? ''}`,
        `Lucky Activities: ${lucky?.luckyActivities?.join(', ') ?? ''}`,
      ],
    },
    {
      title: 'Chinese Zodiac',
      content: [
        `Animal: ${zodiac.animal}`,
        `Element: ${zodiac.element} (${zodiac.yinYang})`,
        zodiac.allianceGroup ? `Alliance: ${zodiac.allianceGroup.title} — ${zodiac.allianceGroup.description}` : '',
        zodiac.secretFriend ? `Secret Friend: ${zodiac.secretFriend}` : '',
        `About: ${zodiacAnimalMap[zodiac.animal]?.personality ?? ''}`,
      ].filter(Boolean),
    },
  ];

  const text = sections.map((s) => `=== ${s.title} ===\n${s.content.join('\n')}`).join('\n\n');

  return {
    profileId: profile.id,
    profileName: `${profile.firstName} ${profile.lastName}`,
    generatedAt: Date.now(),
    numerology: report,
    zodiac,
    sections,
    text,
  };
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function generateReportHTML(report: ProfileReport): string {
  const sectionsHtml = report.sections
    .filter((s) => s.content.some((l) => l.trim()))
    .map(
      (s) => `
    <div class="section">
      <h2>${escapeHtml(s.title)}</h2>
      ${s.content
        .filter((l) => l.trim())
        .map((l) => {
          const trimmed = l.trim();
          if (trimmed.startsWith('  ')) {
            return `<p class="indent">${escapeHtml(trimmed)}</p>`;
          }
          return `<p>${escapeHtml(trimmed)}</p>`;
        })
        .join('\n')}
    </div>`,
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Numerology Report — ${escapeHtml(report.profileName)}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      color: #1C1B1F;
      background: #FFFFFF;
      padding: 40px 32px;
      line-height: 1.6;
    }
    .header {
      text-align: center;
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 2px solid #8B5CF6;
    }
    .header h1 { font-size: 28px; color: #8B5CF6; letter-spacing: 4px; margin-bottom: 4px; }
    .header .subtitle { font-size: 14px; color: #666; }
    .meta { text-align: center; font-size: 13px; color: #888; margin-top: 8px; }
    .section {
      background: #F8F9FA;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 16px;
      page-break-inside: avoid;
    }
    .section h2 {
      font-size: 16px;
      color: #8B5CF6;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
      padding-bottom: 6px;
      border-bottom: 1px solid #E0E0E0;
    }
    .section p { font-size: 14px; margin-bottom: 4px; color: #333; }
    .section p.indent { padding-left: 16px; color: #666; font-style: italic; }
    .footer { text-align: center; font-size: 12px; color: #999; margin-top: 32px; padding-top: 16px; border-top: 1px solid #E0E0E0; }
    @media print {
      body { padding: 0; }
      .section { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>NUMO</h1>
    <p class="subtitle">Numerology &amp; Chinese Zodiac Report</p>
    <p class="meta">${escapeHtml(report.profileName)} &mdash; ${new Date(report.generatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  </div>
  ${sectionsHtml}
  <div class="footer">
    <p>Generated by NUMO &mdash; Numerology &amp; Chinese Zodiac</p>
  </div>
</body>
</html>`;
}
