import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    nav_home: 'Beranda',
    nav_about: 'Tentang Saya',
    nav_skills: 'Keahlian',
    nav_projects: 'Proyek',
    nav_experience: 'Pengalaman',
    nav_certificates: 'Sertifikat',
    nav_contact: 'Kontak',

    hero_greeting: 'Halo, Saya',
    hero_title: 'Front-End Developer & AI Engineer',
    hero_subtitle: 'Mahasiswa Teknik Informatika Semester 5 di Universitas Nusa Putra dengan fokus pada pengembangan web adaptif, aplikasi berbasis AI, dan keamanan jaringan.',
    hero_cta_projects: 'Lihat Proyek',
    hero_cta_contact: 'Hubungi Saya',

    about_title: 'Tentang Saya',
    about_subtitle: 'Pengenalan Singkat',
    about_description: 'Saya adalah mahasiswa Teknik Informatika semester 5 di Universitas Nusa Putra dengan IPK 3.71/4.00. Passion saya terletak pada pengembangan Front-End dan AI Engineering. Saya memiliki pengalaman membangun website adaptif, aplikasi terintegrasi AI, aplikasi mobile, dan API. Selain itu, saya memiliki pemahaman dasar tentang keamanan jaringan dan pengalaman kepemimpinan yang kuat dalam proyek akademik yang berfokus pada komunitas.',
    about_location: 'Lokasi',
    about_location_value: 'Sukabumi, Jawa Barat',
    about_education: 'Pendidikan',
    about_education_value: 'Teknik Informatika, Universitas Nusa Putra',
    about_gpa: 'IPK',
    about_focus: 'Fokus',
    about_focus_value: 'Front-End Development & AI Engineering',

    skills_title: 'Keahlian',
    skills_subtitle: 'Kemampuan & Teknologi',
    skills_web: 'Pengembangan Web',
    skills_web_desc: 'Membangun antarmuka web yang responsif dan adaptif dengan teknologi modern',
    skills_mobile: 'Pengembangan Mobile',
    skills_mobile_desc: 'Membuat aplikasi mobile dengan desain yang intuitif dan terintegrasi API',
    skills_ai: 'AI & Data',
    skills_ai_desc: 'Mengimplementasikan model machine learning dan integrasi AI untuk solusi cerdas',
    skills_soft: 'Soft Skills',
    skills_soft_desc: 'Kepemimpinan kolaboratif, komunikasi efektif, dan manajemen tim',
    skills_tools: 'Tools',
    skills_tools_desc: 'Mahir menggunakan berbagai tools untuk pengembangan dan desain',

    projects_title: 'Proyek',
    projects_subtitle: '5 Proyek Unggulan',
    projects_visit: 'Kunjungi Website',
    projects_open_app: 'Buka Aplikasi',
    projects_open_streamlit: 'Buka Streamlit',
    projects_docs_only: 'Dokumentasi Saja',

    project1_title: 'AI-HealthPlanner',
    project1_subtitle: 'Aplikasi Web Cerdas (2025–Sekarang)',
    project1_desc: 'Platform kesehatan cerdas dengan kalkulasi BMI & kalori, mesin rekomendasi nutrisi dan workout adaptif, serta target makronutrien yang dipersonalisasi.',

    project2_title: 'FitnessXApp',
    project2_subtitle: 'Aplikasi Mobile (2025)',
    project2_desc: 'UI dibangun berdasarkan desain Figma dengan sistem goal pengguna yang dipersonalisasi dan fitur terintegrasi API.',

    project3_title: 'Plant Reminder',
    project3_subtitle: 'Integrasi AI & Web (2025)',
    project3_desc: 'Asisten perawatan tanaman responsif terintegrasi dengan Google Gemini API dan OpenWeatherMap API. Dikembangkan menggunakan React + Tailwind CSS.',

    project4_title: 'Churn Prediction',
    project4_subtitle: 'Model Machine Learning (2025)',
    project4_desc: 'Model prediktif untuk klasifikasi churn pelanggan Telco. Menggunakan Logistic Regression dengan akurasi 82%–87%. Dataset: Telco Customer Churn. Dibangun untuk deployment web Streamlit.',

    project5_title: 'Network Security & Firewall Analysis',
    project5_subtitle: 'Proyek Dokumentasi (2024)',
    project5_desc: 'Konfigurasi keamanan server Ubuntu dengan aturan firewall (UFW), penetration testing sederhana menggunakan Kali Linux, dan analisis log serangan. Proyek dokumentasi edukatif yang berfokus pada fundamental cybersecurity.',

    experience_title: 'Pengalaman',
    experience_subtitle: 'Kepemimpinan & Proyek',
    experience_role: 'Koordinator – Divisi PDD',
    experience_org: 'Proyek Pengabdian Masyarakat',
    experience_date: '2024',
    experience_desc1: 'Memimpin tim beranggotakan 7 orang',
    experience_desc2: 'Mengelola dokumentasi & publikasi',
    experience_desc3: 'Mengawasi komunikasi visual dan pelaporan akademik akhir',

    certificates_title: 'Sertifikat',
    certificates_subtitle: 'Pelatihan & Pencapaian',
    cert1_title: 'IBM Granite – Klasifikasi & Summarisasi Data',
    cert1_issuer: 'IBM',
    cert2_title: 'Ethical Hacker for Dummies',
    cert2_issuer: 'Digitalent',
    cert3_title: 'Introduction to Cyber Security',
    cert3_issuer: 'Digitalent',
    cert4_title: 'Complete Full-Stack Web Development Bootcamp',
    cert4_issuer: 'Udemy',

    contact_title: 'Kontak',
    contact_subtitle: 'Mari Terhubung',
    contact_description: 'Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya!',
    contact_email: 'Email',
    contact_phone: 'Telepon',
    contact_location: 'Lokasi',

    footer_text: 'Dibuat dengan passion untuk teknologi dan inovasi.',
    footer_rights: 'Hak Cipta Dilindungi',
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_certificates: 'Certificates',
    nav_contact: 'Contact',

    hero_greeting: 'Hello, I\'m',
    hero_title: 'Front-End Developer & AI Engineer',
    hero_subtitle: '5th-semester Informatics Engineering student at Universitas Nusa Putra with focus on adaptive web development, AI-integrated applications, and network security.',
    hero_cta_projects: 'View Projects',
    hero_cta_contact: 'Contact Me',

    about_title: 'About Me',
    about_subtitle: 'Brief Introduction',
    about_description: 'I am a 5th-semester Informatics Engineering student at Universitas Nusa Putra with a GPA of 3.71/4.00. My passion lies in Front-End Development and AI Engineering. I have experience building adaptive websites, AI-integrated apps, mobile applications, and APIs. Additionally, I have a basic understanding of network security and strong leadership experience in academic community-focused projects.',
    about_location: 'Location',
    about_location_value: 'Sukabumi, West Java',
    about_education: 'Education',
    about_education_value: 'Informatics Engineering, Universitas Nusa Putra',
    about_gpa: 'GPA',
    about_focus: 'Focus',
    about_focus_value: 'Front-End Development & AI Engineering',

    skills_title: 'Skills',
    skills_subtitle: 'Abilities & Technologies',
    skills_web: 'Web Development',
    skills_web_desc: 'Building responsive and adaptive web interfaces with modern technologies',
    skills_mobile: 'Mobile Development',
    skills_mobile_desc: 'Creating mobile applications with intuitive design and API integration',
    skills_ai: 'AI & Data',
    skills_ai_desc: 'Implementing machine learning models and AI integration for smart solutions',
    skills_soft: 'Soft Skills',
    skills_soft_desc: 'Collaborative leadership, effective communication, and team management',
    skills_tools: 'Tools',
    skills_tools_desc: 'Proficient in using various tools for development and design',

    projects_title: 'Projects',
    projects_subtitle: '5 Featured Projects',
    projects_visit: 'Visit Website',
    projects_open_app: 'Open App',
    projects_open_streamlit: 'Open Streamlit',
    projects_docs_only: 'Documentation Only',

    project1_title: 'AI-HealthPlanner',
    project1_subtitle: 'Smart Web Application (2025–Present)',
    project1_desc: 'Smart health platform with BMI & calorie calculation, adaptive nutrition and workout recommendation engine, and personalized macronutrient targets.',

    project2_title: 'FitnessXApp',
    project2_subtitle: 'Mobile App (2025)',
    project2_desc: 'UI built based on Figma designs with personalized user goal system and API-integrated features.',

    project3_title: 'Plant Reminder',
    project3_subtitle: 'AI & Web Integration (2025)',
    project3_desc: 'Responsive plant-care assistant integrated with Google Gemini API and OpenWeatherMap API. Developed using React + Tailwind CSS.',

    project4_title: 'Churn Prediction',
    project4_subtitle: 'Machine Learning Model (2025)',
    project4_desc: 'A predictive model for classifying Telco customer churn. Uses Logistic Regression with 82%–87% accuracy. Dataset: Telco Customer Churn. Built for Streamlit web deployment.',

    project5_title: 'Network Security & Firewall Analysis',
    project5_subtitle: 'Documentation Project (2024)',
    project5_desc: 'Configured Ubuntu server security with firewall rules (UFW), simple penetration testing using Kali Linux, and attack log analysis. Educational documentation project focused on cybersecurity fundamentals.',

    experience_title: 'Experience',
    experience_subtitle: 'Leadership & Projects',
    experience_role: 'Coordinator – PDD Division',
    experience_org: 'Community Service Project',
    experience_date: '2024',
    experience_desc1: 'Led a team of 7 members',
    experience_desc2: 'Managed documentation & publication',
    experience_desc3: 'Oversaw visual communication and final academic reporting',

    certificates_title: 'Certificates',
    certificates_subtitle: 'Training & Achievements',
    cert1_title: 'IBM Granite – Data Classification & Summarization',
    cert1_issuer: 'IBM',
    cert2_title: 'Ethical Hacker for Dummies',
    cert2_issuer: 'Digitalent',
    cert3_title: 'Introduction to Cyber Security',
    cert3_issuer: 'Digitalent',
    cert4_title: 'Complete Full-Stack Web Development Bootcamp',
    cert4_issuer: 'Udemy',

    contact_title: 'Contact',
    contact_subtitle: 'Let\'s Connect',
    contact_description: 'Interested in collaborating or have questions? Feel free to reach out to me!',
    contact_email: 'Email',
    contact_phone: 'Phone',
    contact_location: 'Location',

    footer_text: 'Made with passion for technology and innovation.',
    footer_rights: 'All Rights Reserved',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.id] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
