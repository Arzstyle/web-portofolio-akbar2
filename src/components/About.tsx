import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin, GraduationCap, Award, Target } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const themeStyles = {
    minimalist: {
      bg: 'bg-gray-50',
      card: 'bg-white',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      accent: 'text-blue-600',
      border: 'border-gray-200',
    },
    dark: {
      bg: 'bg-gray-800',
      card: 'bg-gray-900',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      accent: 'text-cyan-400',
      border: 'border-gray-700',
    },
    pastel: {
      bg: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50',
      card: 'bg-white/70 backdrop-blur-sm',
      text: 'text-gray-800',
      textSecondary: 'text-gray-600',
      accent: 'text-pink-500',
      border: 'border-pink-200',
    },
  };

  const styles = themeStyles[theme];

  const highlights = [
    {
      icon: MapPin,
      label: t('about_location'),
      value: t('about_location_value'),
    },
    {
      icon: GraduationCap,
      label: t('about_education'),
      value: t('about_education_value'),
    },
    {
      icon: Award,
      label: t('about_gpa'),
      value: '3.71 / 4.00',
    },
    {
      icon: Target,
      label: t('about_focus'),
      value: t('about_focus_value'),
    },
  ];

  return (
    <section id="about" className={`py-20 ${styles.bg} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${styles.text}`}>
              {t('about_title')}
            </h2>
            <p className={`text-xl ${styles.accent}`}>{t('about_subtitle')}</p>
          </div>

          <div className={`${styles.card} rounded-2xl p-8 shadow-lg border ${styles.border} mb-8`}>
            <p className={`text-lg leading-relaxed ${styles.textSecondary}`}>
              {t('about_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} rounded-xl p-6 shadow-md border ${styles.border} hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${styles.accent} mt-1`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${styles.text}`}>{item.label}</h3>
                    <p className={`${styles.textSecondary}`}>{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
