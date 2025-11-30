import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Award } from 'lucide-react';

export default function Certificates() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const themeStyles = {
    minimalist: {
      bg: 'bg-gray-50',
      card: 'bg-white',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      accent: 'text-blue-600',
      iconBg: 'bg-blue-100',
    },
    dark: {
      bg: 'bg-gray-800',
      card: 'bg-gray-900',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      accent: 'text-cyan-400',
      iconBg: 'bg-cyan-900/50',
    },
    pastel: {
      bg: 'bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50',
      card: 'bg-white/70 backdrop-blur-sm',
      text: 'text-gray-800',
      textSecondary: 'text-gray-600',
      accent: 'text-yellow-600',
      iconBg: 'bg-yellow-100',
    },
  };

  const styles = themeStyles[theme];

  const certificates = [
    {
      title: t('cert1_title'),
      issuer: t('cert1_issuer'),
    },
    {
      title: t('cert2_title'),
      issuer: t('cert2_issuer'),
    },
    {
      title: t('cert3_title'),
      issuer: t('cert3_issuer'),
    },
    {
      title: t('cert4_title'),
      issuer: t('cert4_issuer'),
    },
  ];

  return (
    <section id="certificates" className={`py-20 ${styles.bg} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${styles.text}`}>
              {t('certificates_title')}
            </h2>
            <p className={`text-xl ${styles.accent}`}>{t('certificates_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`${styles.card} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${styles.iconBg} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Award className={`w-6 h-6 ${styles.accent}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-2 ${styles.text}`}>{cert.title}</h3>
                    <p className={`text-sm ${styles.textSecondary}`}>{cert.issuer}</p>
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
