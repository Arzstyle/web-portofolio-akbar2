import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Briefcase, CheckCircle } from 'lucide-react';

export default function Experience() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const themeStyles = {
    minimalist: {
      bg: 'bg-white',
      card: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      accent: 'text-blue-600',
      border: 'border-gray-200',
    },
    dark: {
      bg: 'bg-gray-900',
      card: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      accent: 'text-cyan-400',
      border: 'border-gray-700',
    },
    pastel: {
      bg: 'bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50',
      card: 'bg-white/70 backdrop-blur-sm',
      text: 'text-gray-800',
      textSecondary: 'text-gray-600',
      accent: 'text-green-500',
      border: 'border-green-200',
    },
  };

  const styles = themeStyles[theme];

  const responsibilities = [
    t('experience_desc1'),
    t('experience_desc2'),
    t('experience_desc3'),
  ];

  return (
    <section id="experience" className={`py-20 ${styles.bg} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${styles.text}`}>
              {t('experience_title')}
            </h2>
            <p className={`text-xl ${styles.accent}`}>{t('experience_subtitle')}</p>
          </div>

          <div className={`${styles.card} rounded-xl p-8 shadow-lg border-l-4 ${styles.border}`}>
            <div className="flex items-start gap-4">
              <div className={`${styles.accent} mt-1`}>
                <Briefcase className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className={`text-2xl font-bold ${styles.text}`}>{t('experience_role')}</h3>
                  <span className={`${styles.accent} font-semibold`}>{t('experience_date')}</span>
                </div>
                <p className={`text-lg ${styles.textSecondary} mb-6`}>{t('experience_org')}</p>

                <div className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 ${styles.accent} flex-shrink-0 mt-0.5`} />
                      <p className={`${styles.textSecondary}`}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
