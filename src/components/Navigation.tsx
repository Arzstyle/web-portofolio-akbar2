import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme, Theme } from '../contexts/ThemeContext';
import { Menu, X, Globe, Palette } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const themeStyles = {
    minimalist: {
      bg: isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent',
      text: 'text-gray-900',
      textHover: 'hover:text-blue-600',
      accent: 'text-blue-600',
      button: 'bg-gray-100 hover:bg-gray-200',
      mobile: 'bg-white',
    },
    dark: {
      bg: isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-md' : 'bg-transparent',
      text: 'text-white',
      textHover: 'hover:text-cyan-400',
      accent: 'text-cyan-400',
      button: 'bg-gray-800 hover:bg-gray-700',
      mobile: 'bg-gray-900',
    },
    pastel: {
      bg: isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent',
      text: 'text-gray-800',
      textHover: 'hover:text-pink-500',
      accent: 'text-pink-500',
      button: 'bg-pink-50 hover:bg-pink-100',
      mobile: 'bg-white',
    },
  };

  const styles = themeStyles[theme];

  const navItems = [
    { key: 'nav_home', id: 'home' },
    { key: 'nav_about', id: 'about' },
    { key: 'nav_skills', id: 'skills' },
    { key: 'nav_projects', id: 'projects' },
    { key: 'nav_experience', id: 'experience' },
    { key: 'nav_certificates', id: 'certificates' },
    { key: 'nav_contact', id: 'contact' },
  ];

  const themes: { value: Theme; label: string }[] = [
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'dark', label: 'Dark Tech' },
    { value: 'pastel', label: 'Soft Pastel' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${styles.bg}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold ${styles.accent} hover:opacity-80 transition-opacity`}
          >
            MARS
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium ${styles.text} ${styles.textHover} transition-colors`}
              >
                {t(item.key)}
              </button>
            ))}

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                className={`p-2 rounded-lg ${styles.button} transition-colors flex items-center gap-2`}
                title="Toggle Language"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-semibold">{language.toUpperCase()}</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className={`p-2 rounded-lg ${styles.button} transition-colors`}
                  title="Change Theme"
                >
                  <Palette className="w-5 h-5" />
                </button>

                {showThemeMenu && (
                  <div className={`absolute right-0 mt-2 ${styles.mobile} rounded-lg shadow-lg py-2 min-w-[150px]`}>
                    {themes.map((t) => (
                      <button
                        key={t.value}
                        onClick={() => {
                          setTheme(t.value);
                          setShowThemeMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 ${styles.text} hover:bg-gray-100 transition-colors ${
                          theme === t.value ? 'font-bold' : ''
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${styles.text}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`lg:hidden ${styles.mobile} shadow-lg`}>
          <div className="container mx-auto px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 ${styles.text} ${styles.textHover} transition-colors`}
              >
                {t(item.key)}
              </button>
            ))}

            <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                className={`w-full p-3 rounded-lg ${styles.button} transition-colors flex items-center justify-center gap-2`}
              >
                <Globe className="w-5 h-5" />
                <span className="font-semibold">{language === 'en' ? 'Bahasa Indonesia' : 'English'}</span>
              </button>

              <div className="space-y-2">
                {themes.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => {
                      setTheme(t.value);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full p-3 rounded-lg ${styles.button} transition-colors ${
                      theme === t.value ? 'font-bold' : ''
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
