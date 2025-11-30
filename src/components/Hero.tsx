import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const themeStyles = {
    minimalist: {
      bg: 'bg-white',
      text: 'text-gray-900',
      accent: 'text-blue-600',
      button: 'bg-gray-900 hover:bg-gray-800 text-white',
      buttonSecondary: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      accent: 'text-cyan-400',
      button: 'bg-cyan-500 hover:bg-cyan-600 text-gray-900',
      buttonSecondary: 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900',
    },
    pastel: {
      bg: 'bg-gradient-to-br from-pink-50 via-blue-50 to-green-50',
      text: 'text-gray-800',
      accent: 'text-pink-500',
      button: 'bg-pink-400 hover:bg-pink-500 text-white',
      buttonSecondary: 'border-2 border-pink-400 text-pink-500 hover:bg-pink-400 hover:text-white',
    },
  };

  const styles = themeStyles[theme];

  return (
    <section id="home" className={`min-h-screen flex items-center ${styles.bg} transition-colors duration-300 pt-20`}>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className={`text-5xl md:text-6xl font-bold mb-16 ${styles.text} text-center`}>
            Portofolio
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="flex justify-center animate-fade-in">
              <div className={`w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 ${
                theme === 'minimalist' ? 'border-gray-200' :
                theme === 'dark' ? 'border-gray-700' :
                'border-pink-200'
              }`}>
                <img
                  src="/src/assets/Foto M Akbar.jpg"
                  alt="Muhamad Akbar Rizky Saputra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className={`text-xl md:text-2xl font-light mb-4 ${styles.text} animate-slide-up`}>
                {t('hero_greeting')}
              </h2>

              <h3 className={`text-4xl md:text-5xl font-bold mb-4 ${styles.text} animate-slide-up`} style={{ animationDelay: '0.1s' }}>
                Muhamad Akbar Rizky Saputra
              </h3>

              <p className={`text-xl md:text-2xl font-semibold mb-6 ${styles.accent} animate-slide-up`} style={{ animationDelay: '0.2s' }}>
                {t('hero_title')}
              </p>

              <p className={`text-base md:text-lg mb-8 ${styles.text} opacity-80 animate-slide-up`} style={{ animationDelay: '0.3s' }}>
                {t('hero_subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${styles.button}`}
                >
                  {t('hero_cta_projects')}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${styles.buttonSecondary}`}
                >
                  {t('hero_cta_contact')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
