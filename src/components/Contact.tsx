import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const themeStyles = {
    minimalist: {
      bg: 'bg-white',
      card: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      accent: 'text-blue-600',
      iconBg: 'bg-blue-100',
    },
    dark: {
      bg: 'bg-gray-900',
      card: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      accent: 'text-cyan-400',
      iconBg: 'bg-cyan-900/50',
    },
    pastel: {
      bg: 'bg-gradient-to-br from-green-50 via-blue-50 to-purple-50',
      card: 'bg-white/70 backdrop-blur-sm',
      text: 'text-gray-800',
      textSecondary: 'text-gray-600',
      accent: 'text-blue-500',
      iconBg: 'bg-blue-100',
    },
  };

  const styles = themeStyles[theme];

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact_email'),
      value: 'makbarrizkyspt@gmail.com',
      href: 'mailto:makbarrizkyspt@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact_phone'),
      value: '+62 857-2337-0963',
      href: 'tel:+6285723370963',
    },
    {
      icon: MapPin,
      label: t('contact_location'),
      value: 'Sukabumi, West Java',
      href: null,
    },
  ];

  return (
    <section id="contact" className={`py-20 ${styles.bg} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${styles.text}`}>
              {t('contact_title')}
            </h2>
            <p className={`text-xl ${styles.accent} mb-4`}>{t('contact_subtitle')}</p>
            <p className={`${styles.textSecondary} max-w-2xl mx-auto`}>
              {t('contact_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {item.href ? (
                  <a href={item.href} className="block text-center">
                    <div className={`${styles.iconBg} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`w-7 h-7 ${styles.accent}`} />
                    </div>
                    <h3 className={`font-semibold mb-2 ${styles.text}`}>{item.label}</h3>
                    <p className={`text-sm ${styles.textSecondary}`}>{item.value}</p>
                  </a>
                ) : (
                  <div className="text-center">
                    <div className={`${styles.iconBg} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`w-7 h-7 ${styles.accent}`} />
                    </div>
                    <h3 className={`font-semibold mb-2 ${styles.text}`}>{item.label}</h3>
                    <p className={`text-sm ${styles.textSecondary}`}>{item.value}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
