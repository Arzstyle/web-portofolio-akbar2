import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Code, Smartphone, Brain, Users, Wrench } from 'lucide-react';

export default function Skills() {
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
      bg: 'bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50',
      card: 'bg-white/70 backdrop-blur-sm',
      text: 'text-gray-800',
      textSecondary: 'text-gray-600',
      accent: 'text-orange-500',
      iconBg: 'bg-orange-100',
    },
  };

  const styles = themeStyles[theme];

  const skillCategories = [
    {
      icon: Code,
      title: t('skills_web'),
      description: t('skills_web_desc'),
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'API Integration', 'Adaptive UI Logic'],
    },
    {
      icon: Smartphone,
      title: t('skills_mobile'),
      description: t('skills_mobile_desc'),
      skills: ['React Native', 'CSS', 'MockAPI'],
    },
    {
      icon: Brain,
      title: t('skills_ai'),
      description: t('skills_ai_desc'),
      skills: ['Python', 'Logistic Regression', 'Google Gemini API', 'Google Colab'],
    },
    {
      icon: Users,
      title: t('skills_soft'),
      description: t('skills_soft_desc'),
      skills: ['Leadership', 'Communication', 'Decision-making', 'Team Management'],
    },
    {
      icon: Wrench,
      title: t('skills_tools'),
      description: t('skills_tools_desc'),
      skills: ['VS Code', 'Canva', 'Figma', 'Microsoft Office'],
    },
  ];

  return (
    <section id="skills" className={`py-20 ${styles.bg} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${styles.text}`}>
              {t('skills_title')}
            </h2>
            <p className={`text-xl ${styles.accent}`}>{t('skills_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`${styles.card} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`${styles.iconBg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className={`w-7 h-7 ${styles.accent}`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${styles.text}`}>{category.title}</h3>
                <p className={`${styles.textSecondary} mb-4 text-sm`}>{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 ${styles.iconBg} ${styles.accent} rounded-full text-xs font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
