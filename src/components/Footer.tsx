import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const themeStyles = {
    minimalist: {
      bg: 'bg-gray-900',
      text: 'text-gray-300',
      accent: 'text-blue-400',
    },
    dark: {
      bg: 'bg-black',
      text: 'text-gray-400',
      accent: 'text-cyan-400',
    },
    pastel: {
      bg: 'bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100',
      text: 'text-gray-700',
      accent: 'text-pink-600',
    },
  };

  const styles = themeStyles[theme];
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.bg} py-8 transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className={`${styles.text} mb-2 flex items-center justify-center gap-2`}>
            {t('footer_text')}
            <Heart className={`w-4 h-4 ${styles.accent}`} fill="currentColor" />
          </p>
          <p className={`text-sm ${styles.text}`}>
            © {currentYear} Muhamad Akbar Rizky Saputra. {t('footer_rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
