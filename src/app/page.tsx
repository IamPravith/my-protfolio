"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowDown, FaRocket, FaBrain, FaCode, FaAward, FaGraduationCap } from "react-icons/fa";
import { SiPython, SiMysql, SiGit, SiTableau, SiR, SiJupyter, SiPlotly } from "react-icons/si";
import { useEffect, useState } from "react";
import ChatBot from './ChatBot';
import { MdAccessTime, MdArticle, MdAttachMoney, MdAutorenew, MdChatBubble, MdGroups, MdLightbulb, MdOutlineHowToReg, MdOutlineSupervisorAccount, MdPsychology, MdSearch, MdStackedBarChart } from "react-icons/md";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'publications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
      
      // Advanced scroll-triggered animations for timeline
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          item.classList.add('revealed');
          // Stagger animation for timeline dots
          const dot = item.querySelector('.timeline-dot-advanced') as HTMLElement;
          if (dot) {
            setTimeout(() => {
              dot.style.animation = `timeline-dot 0.8s ease-out ${index * 0.2}s forwards, timeline-glow 2s ease-in-out ${index * 0.2}s infinite`;
            }, index * 200);
          }
        }
      });
      
      // Parallax effect for background elements
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(window.scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial trigger
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: "R", level: 95, icon: SiR, color: "#3776AB" },
    { name: "PYTHON", level: 90, icon: SiPython, color: "#FF6F00" },
    { name: "SQL", level: 88, icon: SiMysql, color: "#EE4C2C" }, // or SiMysql if using MySQL
  // { name: "ML(Python)", level: 85, icon: SiTensorflow, color: "#61DAFB" },
    { name: "MS EXCEL", level: 82, icon: MdArticle, color: "#3178C6" },
    { name: "TABLEAU", level: 80, icon: SiTableau, color: "#512BD4" },
    { name: "POWER BI", level: 85, icon: MdStackedBarChart, color: "#FFC107"},
    { name: "DBMS", level: 78, icon: SiMysql, color: "#4479A1" },
    { name: "Git", level: 90, icon: SiGit, color: "#F05032" },
    { name: "TALLY ERP 9", level: 80, icon: MdAttachMoney, color: "#0F52BA" },
    { name: "Statistics & Data Modeling", level: 88, icon: SiJupyter, color: "#F37626" },
    { name: "Data Visualization & Plotting", level: 90, icon: SiPlotly, color: "#FF5733" },
    { name: "Attention to Detail", level: 90, icon: MdSearch, color: "#8E44AD" },
    { name: "Leadership", level: 90, icon: MdOutlineSupervisorAccount, color: "#6C5CE7" },
    { name: "Teamwork", level: 88, icon: MdGroups, color: "#00B894" },
    { name: "Critical Thinking", level: 92, icon: MdPsychology, color: "#FD79A8" },
    { name: "Problem Solving", level: 91, icon: MdLightbulb, color: "#FDCB6E" },
    { name: "Time Management", level: 85, icon: MdAccessTime, color: "#0984E3" },
    { name: "Communication", level: 90, icon: MdChatBubble, color: "#00CEC9" },
    { name: "Adaptability", level: 87, icon: MdAutorenew, color: "#D63031" },
    { name: "Decision Making", level: 89, icon: MdOutlineHowToReg, color: "#E17055" }

 ];

  return (
    <div className="relative min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: "8%", top: "12%", delay: "0s", duration: "8s" },
            { left: "18%", top: "22%", delay: "1s", duration: "9s" },
            { left: "28%", top: "32%", delay: "2s", duration: "10s" },
            { left: "38%", top: "42%", delay: "3s", duration: "11s" },
            { left: "48%", top: "52%", delay: "4s", duration: "8.5s" },
            { left: "58%", top: "62%", delay: "5s", duration: "9.5s" },
            { left: "68%", top: "72%", delay: "6s", duration: "10.5s" },
            { left: "78%", top: "82%", delay: "7s", duration: "11.5s" },
            { left: "88%", top: "92%", delay: "0.5s", duration: "8.2s" },
            { left: "15%", top: "35%", delay: "1.5s", duration: "9.2s" },
            { left: "25%", top: "45%", delay: "2.5s", duration: "10.2s" },
            { left: "35%", top: "55%", delay: "3.5s", duration: "11.2s" },
            { left: "45%", top: "65%", delay: "4.5s", duration: "8.7s" },
            { left: "55%", top: "75%", delay: "5.5s", duration: "9.7s" },
            { left: "65%", top: "85%", delay: "6.5s", duration: "10.7s" },
            { left: "75%", top: "95%", delay: "7.5s", duration: "11.7s" },
            { left: "85%", top: "15%", delay: "0.8s", duration: "8.8s" },
            { left: "95%", top: "25%", delay: "1.8s", duration: "9.8s" },
            { left: "5%", top: "55%", delay: "2.8s", duration: "10.8s" },
            { left: "10%", top: "75%", delay: "3.8s", duration: "11.8s" }
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-particle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className={`text-xl font-bold transition-all duration-300 ${
                scrollY > 50 ? 'text-slate-900 dark:text-white' : 'text-white'
              }`}>
                <a href="#home" className="animate-gradient-text focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-shadow duration-200 hover:underline cursor-pointer">Pravith Kumar J</a>
              </div>
              <div className="hidden md:flex space-x-8">
                {[
                  { id: 'home', label: 'HOME🏠' },
                  { id: 'about', label: 'ABOUT🗝️' },
                  { id: 'skills', label: 'SKILLS💡' },
                  { id: 'career', label: ' CAREER🏹' },
                  { id: 'additional', label: 'ADDITIONAL✨' },
                  { id: 'projects', label: 'PROJECTS📁' },
                  { id: 'publications', label: 'ACHIVEMENTS🎖️' },
                  { id: 'contact', label: 'CONTACT📞' }
                ].map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`} 
                    className={`capitalize transition-all duration-300 hover:scale-110 relative ${
                      scrollY > 50 
                        ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400' 
                        : 'text-white/80 hover:text-white'
                    } ${activeSection === item.id ? 'font-semibold' : ''}`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden">
          {/* Advanced Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Geometric Shapes */}
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-500/30 rounded-lg animate-spin-slow transform rotate-45"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-500/30 rounded-full animate-bounce-slow"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-pink-500/20 transform rotate-12 animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-cyan-500/30 rounded-lg animate-spin-slow-reverse"></div>
            
            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
            
            {/* Particle System */}
            {[
              { left: "10%", top: "20%", delay: "0s", duration: "6s" },
              { left: "20%", top: "40%", delay: "1s", duration: "7s" },
              { left: "30%", top: "60%", delay: "2s", duration: "8s" },
              { left: "40%", top: "80%", delay: "3s", duration: "9s" },
              { left: "50%", top: "10%", delay: "4s", duration: "6s" },
              { left: "60%", top: "30%", delay: "5s", duration: "7s" },
              { left: "70%", top: "50%", delay: "6s", duration: "8s" },
              { left: "80%", top: "70%", delay: "7s", duration: "9s" },
              { left: "90%", top: "90%", delay: "8s", duration: "6s" },
              { left: "15%", top: "25%", delay: "0.5s", duration: "7.5s" },
              { left: "25%", top: "45%", delay: "1.5s", duration: "8.5s" },
              { left: "35%", top: "65%", delay: "2.5s", duration: "9.5s" },
              { left: "45%", top: "85%", delay: "3.5s", duration: "6.5s" },
              { left: "55%", top: "15%", delay: "4.5s", duration: "7.5s" },
              { left: "65%", top: "35%", delay: "5.5s", duration: "8.5s" },
              { left: "75%", top: "55%", delay: "6.5s", duration: "9.5s" },
              { left: "85%", top: "75%", delay: "7.5s", duration: "6.5s" },
              { left: "95%", top: "95%", delay: "8.5s", duration: "7.5s" },
              { left: "5%", top: "5%", delay: "0.2s", duration: "8.2s" },
              { left: "12%", top: "35%", delay: "1.2s", duration: "9.2s" },
              { left: "22%", top: "55%", delay: "2.2s", duration: "6.2s" },
              { left: "32%", top: "75%", delay: "3.2s", duration: "7.2s" },
              { left: "42%", top: "95%", delay: "4.2s", duration: "8.2s" },
              { left: "52%", top: "25%", delay: "5.2s", duration: "9.2s" },
              { left: "62%", top: "45%", delay: "6.2s", duration: "6.2s" },
              { left: "72%", top: "65%", delay: "7.2s", duration: "7.2s" },
              { left: "82%", top: "85%", delay: "8.2s", duration: "8.2s" },
              { left: "92%", top: "15%", delay: "0.8s", duration: "9.8s" },
              { left: "8%", top: "45%", delay: "1.8s", duration: "6.8s" },
              { left: "18%", top: "65%", delay: "2.8s", duration: "7.8s" },
              { left: "28%", top: "85%", delay: "3.8s", duration: "8.8s" },
              { left: "38%", top: "5%", delay: "4.8s", duration: "9.8s" },
              { left: "48%", top: "35%", delay: "5.8s", duration: "6.8s" },
              { left: "58%", top: "55%", delay: "6.8s", duration: "7.8s" },
              { left: "68%", top: "75%", delay: "7.8s", duration: "8.8s" },
              { left: "78%", top: "95%", delay: "8.8s", duration: "9.8s" },
              { left: "88%", top: "25%", delay: "0.3s", duration: "7.3s" },
              { left: "98%", top: "45%", delay: "1.3s", duration: "8.3s" },
              { left: "3%", top: "65%", delay: "2.3s", duration: "9.3s" },
              { left: "13%", top: "85%", delay: "3.3s", duration: "6.3s" },
              { left: "23%", top: "5%", delay: "4.3s", duration: "7.3s" },
              { left: "33%", top: "25%", delay: "5.3s", duration: "8.3s" },
              { left: "43%", top: "45%", delay: "6.3s", duration: "9.3s" },
              { left: "53%", top: "65%", delay: "7.3s", duration: "6.3s" },
              { left: "63%", top: "85%", delay: "8.3s", duration: "7.3s" },
              { left: "73%", top: "5%", delay: "0.7s", duration: "8.7s" },
              { left: "83%", top: "25%", delay: "1.7s", duration: "9.7s" },
              { left: "93%", top: "45%", delay: "2.7s", duration: "6.7s" },
              { left: "7%", top: "65%", delay: "3.7s", duration: "7.7s" },
              { left: "17%", top: "85%", delay: "4.7s", duration: "8.7s" },
              { left: "27%", top: "5%", delay: "5.7s", duration: "9.7s" },
              { left: "37%", top: "25%", delay: "6.7s", duration: "6.7s" },
              { left: "47%", top: "45%", delay: "7.7s", duration: "7.7s" },
              { left: "57%", top: "65%", delay: "8.7s", duration: "8.7s" },
              { left: "67%", top: "85%", delay: "0.1s", duration: "9.1s" },
              { left: "77%", top: "5%", delay: "1.1s", duration: "6.1s" },
              { left: "87%", top: "25%", delay: "2.1s", duration: "7.1s" },
              { left: "97%", top: "45%", delay: "3.1s", duration: "8.1s" }
            ].map((particle, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full animate-particle-float"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration
                }}
              />
            ))}
            
            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Advanced Animated Avatar */}
              <div className="flex justify-center mb-12">
                <div className="relative group">
                  {/* Outer Glow Ring */}
                  <div className="absolute inset-0 w-40 h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse-glow"></div>
                  
                  {/* Main Avatar Container */}
                  <div className="relative w-32 h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-float-advanced shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                    <FaBrain className="text-white text-5xl animate-pulse-slow" />
                    
                    {/* Rotating Rings */}
                    <div className="absolute inset-0 w-full h-full border-2 border-white/30 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-2 w-full h-full border-2 border-white/20 rounded-full animate-spin-slow-reverse"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg">
                      <FaRocket className="text-white text-sm" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-500 rounded-full animate-float-slow shadow-lg"></div>
                    <div className="absolute top-1/2 -right-12 w-4 h-4 bg-yellow-400 rounded-full animate-float-slow shadow-lg" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 -left-12 w-5 h-5 bg-cyan-400 rounded-full animate-float-slow shadow-lg" style={{ animationDelay: '2s' }}></div>
                  </div>
                  
                  {/* Interactive Hover Effects */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
              </div>
              
              {/* Advanced Typing Effect */}
              <div className="mb-8">
                <h1 className="text-7xl md:text-9xl font-black text-white mb-6 animate-fade-in">
                  Hi, I&apos;m{" "}
                  <span className="animate-gradient-text-neon relative">
                    Pravith Kumar
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-50 animate-pulse"></div>
                  </span>
                </h1>
                
                {/* Animated Subtitle */}
                <div className="text-3xl md:text-4xl text-white/90 mb-8 max-w-5xl mx-auto animate-slide-up">
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    <span className="inline-block animate-slide-in-left">Data Analyst</span>
                    <span className="inline-block text-blue-300 animate-pulse">|</span>
                    <span className="inline-block animate-slide-in-right">Business Intelligence & Analytics Enthusiast</span>
                    <span className="inline-block text-blue-300 animate-pulse">|</span>
                    <span className="inline-block animate-slide-in-left">Transforming Data into Strategic Insights</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Description */}
              <p className="text-xl md:text-2xl text-white/70 mb-16 max-w-4xl mx-auto animate-slide-up-delay leading-relaxed">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold animate-gradient-text">
                  data-driven solutions
                </span>{" "}
                and analytics dashboards to generate actionable business insights.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold animate-gradient-text">
                  Passionate
                </span>{" "}
                about leveraging data to support decision-making and drive impactful outcomes.
              </p>
              
              {/* Advanced Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                
                {/* Primary CTA Button */}
                <a
                  href="#contact"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover-glow btn-advanced"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    Get in Touch
                    <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                
                {/* Secondary CTA Button */}
                <a
                  href="#projects"
                  className="group relative overflow-hidden border-2 border-white/30 text-white px-12 py-5 rounded-full font-bold hover:bg-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-sm btn-advanced"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View Projects
                    <FaCode className="group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </div>
              
              {/* Interactive Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { number: "4", label: "Projects Completed", icon: "\ud83d\udcbb", color: "from-green-500 to-emerald-500" },
                  { number: "8.5", label: "CGPA Upto 2nd sem", icon: "\ud83c\udf93", color: "from-purple-500 to-pink-500" },
                  { number: "100%", label: "Predictive Mindset", icon: "\ud83e\udde0", color: "from-orange-500 to-red-500" }
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="group stats-card-advanced rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 hover-lift magnetic-element"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl mb-2 animate-bounce-slow floating-element">{stat.icon}</div>
                    <div className={`text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${stat.color} transition-all duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                    
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Advanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="relative">
              <FaArrowDown className="text-white/60 text-3xl animate-pulse" />
              <div className="absolute inset-0 text-white/30 animate-ping">
                <FaArrowDown className="text-3xl" />
              </div>
            </div>
          </div>
          
          {/* Interactive Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-slide-up"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Main Content */}
              <div className="lg:col-span-2 animate-slide-in-left">
                <div className="glass-card p-8 mb-8">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    <FaBrain className="text-blue-600" />
                    Professional Summary
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                   Data & Business Analyst with expertise in data visualization, statistical modeling, 
                   and business intelligence. Skilled in transforming raw data into actionable insights using tools like Power BI, 
                   Tableau, SQL, and Python, with a focus on driving strategic decision-making and operational efficiency.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Turning numbers into compelling stories using tools like Power BI, Excel, and Python visualizations.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { icon: FaGraduationCap, label: "Education", value: "MBA", sub: "Pursuing" },
                    { icon: FaAward, label: "Awards", value: "BEST MANAGER 2023", sub: "Leadership & Team Management" },
                    { icon: FaCode, label: "Projects", value: "4", sub: "Completed" }
                  ].map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl text-center hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <stat.icon className="text-3xl text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="animate-slide-in-right">
                <div className="glass-card p-6 mb-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Quick Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-blue-600" />
                      <span className="text-slate-600 dark:text-slate-300">pravithpravith88@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-green-600" />
                      <span className="text-slate-600 dark:text-slate-300">+91-7539906947</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGraduationCap className="text-purple-600" />
                      <span className="text-slate-600 dark:text-slate-300">MBA. BUSINESS ANALYST</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    Social Links
                    <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 font-medium animate-pulse-glow">Let&apos;s connect!</span>
                  </h3>
                  <div className="flex gap-6 justify-center">
                    {/* GitHub Button */}
                    <a
                      href="https://github.com/IamPravith"
            target="_blank"
            rel="noopener noreferrer"
                      className="relative group flex flex-col items-center"
                    >
                      <span className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-900 via-blue-600 to-purple-600 flex items-center justify-center shadow-lg border-2 border-white/10 group-hover:scale-110 group-hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:from-blue-700 hover:to-purple-700 animate-float-advanced">
                        <FaGithub size={32} className="text-white group-hover:text-blue-400 transition-colors duration-300" />
                        {/* Glowing ring on hover */}
                        <span className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-60 animate-pulse-glow pointer-events-none"></span>
                      </span>
                      <span className="mt-2 text-sm text-slate-700 dark:text-slate-200 font-medium opacity-80 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-300 animate-slide-in-up"></span>
                    </a>
                    {/* LinkedIn Button */}
                    <a
                      href="https://linkedin.com/in/pravith-kumar-a8619a340"
            target="_blank"
            rel="noopener noreferrer"
                      className="relative group flex flex-col items-center"
                    >
                      <span className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 flex items-center justify-center shadow-lg border-2 border-white/10 group-hover:scale-110 group-hover:shadow-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/30 hover:from-cyan-700 hover:to-blue-700 animate-float-advanced">
                        <FaLinkedin size={34} className="text-white group-hover:text-cyan-300 transition-colors duration-300" />
                        {/* Glowing ring on hover */}
                        <span className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-60 animate-pulse-glow pointer-events-none"></span>
                      </span>
                      <span className="mt-2 text-sm text-slate-700 dark:text-slate-200 font-medium opacity-80 group-hover:opacity-100 group-hover:text-cyan-500 transition-all duration-300 animate-slide-in-up"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in">
                🖥️Tech Skills & 🧠Soft skills
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-slide-up"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <skill.icon 
                      className="text-3xl transition-transform group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-bold text-white mb-6 animate-fade-in">
                <span className="animate-gradient-text">CAREER EXPERIENCE🌐</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto animate-slide-up rounded-full"></div>
              <p className="text-xl text-white/70 mt-6 animate-slide-up-delay">
                My Future-Focused Journey in Data Analysis 🚀
              </p>
            </div>
            
            {/* OUTSTANDING ADVANCED TIMELINE */}
            <div className="relative">
              {/* Central Timeline Line with Glow */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 blur-sm animate-pulse"></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { left: "10%", top: "20%", delay: "0s", duration: "4s" },
                  { left: "20%", top: "40%", delay: "1s", duration: "5s" },
                  { left: "30%", top: "60%", delay: "2s", duration: "6s" },
                  { left: "40%", top: "80%", delay: "3s", duration: "7s" },
                  { left: "50%", top: "10%", delay: "4s", duration: "4s" },
                  { left: "60%", top: "30%", delay: "0.5s", duration: "5s" },
                  { left: "70%", top: "50%", delay: "1.5s", duration: "6s" },
                  { left: "80%", top: "70%", delay: "2.5s", duration: "7s" },
                  { left: "90%", top: "90%", delay: "3.5s", duration: "4s" },
                  { left: "15%", top: "25%", delay: "0.2s", duration: "5s" },
                  { left: "25%", top: "45%", delay: "1.2s", duration: "6s" },
                  { left: "35%", top: "65%", delay: "2.2s", duration: "7s" },
                  { left: "45%", top: "85%", delay: "3.2s", duration: "4s" },
                  { left: "55%", top: "15%", delay: "0.8s", duration: "5s" },
                  { left: "65%", top: "35%", delay: "1.8s", duration: "6s" }
                ].map((particle, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                    style={{
                      left: particle.left,
                      top: particle.top,
                      animationDelay: particle.delay,
                      animationDuration: particle.duration
                    }}
                  />
                ))}
              </div>

              {[
                {
                  title: "JOB",
                  period: "",
                  STATUS: "Loading…⏳",
                  color: "from-blue-500 to-cyan-500",
                  glowColor: "blue",
                  icon: "🚀",
                  items: [
                    ""
                  ],
                  link: "",
                  delay: 0
                },
                {
                  title: "INTERNSHIP",
                  period: "",
                  STATUS: "Loading…⏳",
                  color: "from-green-500 to-emerald-500",
                  glowColor: "green",
                  icon: "🎯",
                  items: [
                    ""
                  ],
                  link: "",
                  delay: 0.2
                },
                {
                  title: "Data Analytics Student",
                  focusArea: "Data Analysis & Visualization",
                  learningMode: "Self-Learning & Academic Projects | Hybrid",
                  color: "from-purple-500 to-pink-500",
                  glowColor: "purple",
                  icon: "⚡",
                  items: [
                    "📊 Technical Skills:Gaining hands-on experience in Python, R, SQL, Power BI, and Excel through academic projects and self-learning",
  "📈 Data Projects:Building dashboards and analytical reports on real-world datasets to extract actionable insights",
  "🧹 Data Management:Exploring data cleaning, preprocessing, and visualization techniques to develop practical analytics capabilities",
  "🎯 Applied Analytics:Working on mini-projects like IPL performance analysis and Netflix viewership trends to strengthen problem-solving and data storytelling" 
                  ],
                  link: "https://app.powerbi.com/reportEmbed?reportId=9b00bb00-f728-4220-8a24-d4158717965a&autoAuth=true&ctid=a6dbc183-3bd5-46bc-8f30-e30bf936be7e",
                  delay: 0.4
                }
              ].map((job, index) => (
                <div key={job.title} className={`relative mb-20 group timeline-item ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}>
                  {/* Timeline Dot with Advanced Effects */}
                  <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-20">
                    {/* Outer Glow Ring */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r ${job.color} blur-lg opacity-50 animate-pulse`}></div>
                    {/* Main Dot */}
                    <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${job.color} flex items-center justify-center text-white text-xl font-bold shadow-2xl border-4 border-white transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 timeline-dot-advanced magnetic`}>
                      {job.icon}
                    </div>
                    {/* Pulsing Rings */}
                    <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-white/30 animate-ping"></div>
                    <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-white/20 animate-ping" style={{ animationDelay: '1s' }}></div>
                    {/* Sparkle Particles */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full particle"></div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full particle" style={{ animationDelay: '2s' }}></div>
                  </div>
                  {/* Content Card */}
                  <div className={`relative ${index % 2 === 0 ? 'ml-auto md:w-5/12 md:pr-12' : 'mr-auto md:w-5/12 md:pl-12'} w-full`}>
                    <div className="group-hover:scale-105 transition-all duration-700 ease-out timeline-card">
                      {/* 3D Card with Glassmorphism */}
                      <div className="relative glass-card-advanced rounded-2xl p-8 shadow-2xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:rotate-1 hover:-translate-y-2 ripple">
                        {/* Animated Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${job.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-float particle"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-float particle" style={{ animationDelay: '1s' }}></div>
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300 text-glow">
                                {job.title}
                              </h3>
                              {/* If you want to show job.STATUS, use: */}
                              <p className="text-lg text-white/80 font-medium">{job.STATUS}</p>
                            </div>
                            <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border-pulse">
                              {job.period}
                            </span>
                          </div>
                          {/* Description List */}
                          <ul className="space-y-3">
                            {job.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3 group/item">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${job.color} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}></div>
                                <span className="text-white/80 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                          {/* Hover Effect Line */}
                          <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${job.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}></div>
                          {/* Interactive Elements */}
                          <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <a href={job.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 btn-advanced border border-blue-400/30 flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                              Projects & Company Page 
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Connection Line */}
                  {index < 2 && (
                    <div className="absolute left-1/2 top-20 bottom-0 w-1 bg-gradient-to-b from-white/30 to-transparent transform -translate-x-1/2 z-0">
                      <div className="absolute top-0 left-1/2 w-4 h-4 bg-white/20 rounded-full transform -translate-x-1/2 animate-pulse"></div>
                      <div className="absolute top-4 left-1/2 w-2 h-2 bg-white/40 rounded-full transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Experience Section */}
        <section id="additional" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
                <span className="animate-gradient-text">Additional Experience</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto animate-slide-up rounded-full"></div>
              <p className="text-xl text-slate-600 dark:text-slate-300 mt-6 animate-slide-up-delay">
                Leadership, Mentorship & Community Building
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                
                {
                  title: "Campus Hiring Team",
                  description: "Mentored 50+ candidates for job preparation and interview skills",
                  icon: "👥",
                  color: "from-green-500 to-emerald-500",
                  participants: "50+ Candidates",
                  category: "Mentorship"
                },
                {
                  title: "MGT Club Relaunch",
                  description: "Organized leadership workshops & management career sessions to enhance student development",
                  icon: "🏛️",
                  color: "from-purple-500 to-pink-500",
                  participants: "Club Members",
                  category: "Leadership"
                },
                {
                  title: "Best Manager Award",
                  description: "Recognized for outstanding leadership and effective team management in a college-wide management competition",
                  icon: "🏆",
                  color: "from-orange-500 to-red-500",
                  participants: "College Students",
                  category: "Leadership"
                }
              ].map((activity, index) => (
                <div 
                  key={activity.title}
                  className="group bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl hover-lift border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {activity.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full mt-1">
                      {activity.category}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                  {activity.description}
                </p>
                
                {/* Participants Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {activity.participants}
                    </span>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`w-8 h-8 bg-gradient-to-r ${activity.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center`}>
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
                
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
              </div>
            ))}
          </div>
          
          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "100+", label: "Total Participants", icon: "👥" },
              { number: "3", label: "Events Organized", icon: "🎯" },
              { number: "1", label: "Leadership Roles", icon: "⭐" },
              { number: "100%", label: "Success Rate", icon: "🚀" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-slide-up"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IPL ANALYSIS DASHBOARD",
                description: "Personalized nutrition platform with LLM-powered dietary insights, calorie tracking, and food recommendations.",
                tags: ["Power Bi", "Excel", "Kaggle"],
                tagColors: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
                linkColor: "text-blue-600 dark:text-blue-400",
                delay: 0,
                icon: FaBrain,
                gradient: "from-blue-500 to-cyan-500",
                link:"https://app.powerbi.com/reportEmbed?reportId=9b00bb00-f728-4220-8a24-d4158717965a&autoAuth=true&ctid=a6dbc183-3bd5-46bc-8f30-e30bf936be7e",
              },
              {
                title: "NETFLIX ANALYSIS DASHBOARD",
                description: "AI productivity platform with NLP-based auto-categorization of tasks and real-time analytics.",
                tags: ["Power Bi", "Excel", "Kaggle"],
                tagColors: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
                linkColor: "text-green-600 dark:text-green-400",
                delay: 0.1,
                icon: FaCode,
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Retail Sales Analysis",
                description: "Analyzed retail sales data to uncover trends, optimize performance, and support data-driven business decisions.",
                tags: ["SQL", "PostgreSQL", "pgAdmin 4"],
                tagColors: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
                linkColor: "text-purple-600 dark:text-purple-400",
                delay: 0.2,
                icon: FaRocket,
                gradient: "from-purple-500 to-pink-500",
              }
            ].map((project) => (
              <div 
                key={project.title}
                className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover-lift group"
                style={{ animationDelay: `${project.delay}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <project.icon className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={`px-3 py-1 ${project.tagColors} text-sm rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-md`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/IamPravith"
          target="_blank"
          rel="noopener noreferrer"
                    className={`${project.linkColor} hover:underline font-medium hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2 group-hover:translate-x-1`}
                  >
                    View Project 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Achievements Section */}
      <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in">
              <span className="animate-gradient-text">Achievements</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto animate-slide-up rounded-full"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 mt-6 animate-slide-up-delay">
              Professional Development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Leadership Summit",
                description: "Presented a case study on innovative management strategies and won recognition for problem-solving skills",
                icon: "🏆",
                color: "from-orange-500 to-red-500",
                metric: "Awarded",
                category: "Management",
              },
              {
                title: "BEST MANAGER AWARDS 2022",
                description: "Demonstrated the ability to inspire, guide, and collaborate effectively with teams to achieve common goals.",
                icon: "🏆",
                color: "from-yellow-500 to-orange-500",
                metric: "Leadership & Teamwork",
                category: "Recognition",
                badge: "Award",
              },

              {
                title: "Business Quiz",
                description: "A knowledge-driven competition that tests participants on business, management, finance, current affairs, and corporate trends through a series of challenging quiz rounds.",
                icon: "🎓",
                color: "from-purple-500 to-pink-500",
                metric: "Inter-College",
                category: "Recognition"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`group bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl hover-lift border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:scale-105 relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}

              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    item.badge === 'Best Seller' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    item.badge === 'Published' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    item.badge === 'Ongoing' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                    item.badge === 'Award' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    item.badge === 'Appreciation' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                    'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {item.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full mt-1">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                  {item.description}
                  {item.title === "NeuroGraph Publication" && (
                    <span className="block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      Part of the &quot;Neural Networks & Deep Machine Learning&quot; series
                    </span>
                  )}
                </p>
                
                {/* Metric Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.metric}
                    </span>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center`}>
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
            
                
                {/* Two badges for Aavishkar Research */}
                {item.title === 'Aavishkar Research' && (
                  <div className="flex gap-2 mt-4">
                    <span 
                      className="text-xs text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded-full cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://drive.google.com/file/d/1gu5hSxHONGDHyVttLtAr6_UhDEBzCWVM/view', '_blank');
                      }}
                    >
                      Appreciation Cert
                    </span>
                    <span 
                      className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full cursor-pointer hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://drive.google.com/file/d/1tINbZWNELXl__g9RYJMyTnuvXi-A8m1f/view', '_blank');
                      }}
                    >
                      Participation Cert
                    </span>
                  </div>
                )}
                
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
              </div>
            ))}
          </div>
          
          {/* Additional Certificates Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center animate-fade-in">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Database Management Systems (DBMS)",
                  issuer: "NPTEL – IIT Kharagpur",
                  date: "2025",
                  link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS145S63210043609139344",
                  icon: "🛢️",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Generative AI: Introduction and Applications",
                  issuer: "IBM",
                  date: "2025",
                  link: "https://coursera.org/verify/NPZ42PADU1B5",
                  icon: "🤖",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Generative AI: Prompt Engineering Basics",
                  issuer: "IBM",
                  date: "2025",
                  link: "https://coursera.org/verify/PPMRRX9SQOV5",
                  icon: "🤖",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: " Generative AI: Prompt Engineering",
                  issuer: "IBM",
                  date: "2025",
                  link: "https://www.credly.com/badges/7eb40537-58bc-478a-b295-62373db20083",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: " Work Smarter with Microsoft PowerPoint",
                  issuer: "Microsoft",
                  date: "2025",
                  link: "https://coursera.org/verify/98DA1UAZKFRW",
                  icon: "⚡",
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Work Smarter with Microsoft Word",
                  issuer: "Microsoft",
                  date: "2025",
                  link: "https://coursera.org/verify/669DDNDSLZ2B",
                  icon: "⚡",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: " Creating a Budget with Microsoft Excel",
                  issuer: "Coursera",
                  date: "2025",
                  link: "https://coursera.org/verify/JN0S9JYMN989",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: " Financial Statement and Ratio Analysis for Accountants",
                  issuer: "I ILLINOIS",
                  date: "2025",
                  link: "https://coursera.org/verify/AD7E3S5C1PJ9",
                  icon: "⚡",
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Introduction to Economic Theories",
                  issuer: "Erasmus university Rotterdom",
                  date: "2025",
                  link: "https://coursera.org/verify/4DWQAKUHQKO0",
                  icon: "⚡",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: " Get Started with Mail and Calendar Applications: Outlook",
                  issuer: "SKillUp EDTECH",
                  date: "2025",
                  link: "https://coursera.org/verify/U44BF3XMTP1N",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: " Organisational behaviour: Know your people",
                  issuer: "MACQUARIE UNIVERSITY",
                  date: "2025",
                  link: "https://coursera.org/verify/0Q98GA5AGYVP",
                  icon: "⚡",
                  color: "from-orange-500 to-red-500"
                },
                 {
                  title: "Understanding Research Methods",
                  issuer: "UNIVERSITY OF LONDON",
                  date: "2025",
                  link: "https://coursera.org/verify/QXLKLGCFV5KU",
                  icon: "⚡",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: " Foundations of Business Strategy",
                  issuer: "UNIVERSITY OF VIRGINIA",
                  date: "2024",
                  link: "https://coursera.org/verify/Y099N2BFEMCY",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: " Advanced Business Strategy",
                  issuer: "UNIVERSITY OF VIRGINIA",
                  date: "2025",
                  link: "https://coursera.org/verify/5LP3Y1TGILAV",
                  icon: "⚡",
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Business Growth Strategy",
                  issuer: "UNIVERSITY OF VIRGINIA",
                  date: "2025",
                  link: "https://coursera.org/verify/FD2HS5QFYIQN",
                  icon: "⚡",
                  color: "from-green-500 to-emerald-500"
                },
                 {
                  title: "Strategic Planning and Execution",
                  issuer: "UNIVERSITY OF VIRGINIA",
                  date: "2025",
                  link: "https://coursera.org/verify/U0DOGBSIB58D",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: " Business Strategy",
                  issuer: "UNIVERSITY OF VIRGINIA",
                  date: "2025",
                  link: "https://coursera.org/verify/specialization/DWO0CUQWP2T2",
                  icon: "⚡",
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Making Successful Decisions through the Strategy, Law & Ethics Model",
                  issuer: "UNIVERSITY OF MICHIGAN",
                  date: "2025",
                  link: "https://coursera.org/verify/N57T8EFV77VT",
                  icon: "⚡",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Trademark Law",
                  issuer: "UNIVERSITY OF PENNSYLVANIA",
                  date: "2025",
                  link: "coursera.org/verify/FF513204OS05",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Innovation and emerging technology: Be disruptive",
                  issuer: "MACQUARIE UNIVERSITY",
                  date: "2025",
                  link: "https://coursera.org/verify/92C8BOI9CPZP",
                  icon: "⚡",
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Getting Started with Data Visualization in R",
                  issuer: "JOHNS HOPKINS UNIVERSITY",
                  date: "2025",
                  link: "https://coursera.org/verify/QA1J6RCQDO1H",
                  icon: "⚡",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((cert, index) => (
                <div 
                  key={cert.title}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover-lift group cursor-pointer transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="text-white text-xl">{cert.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-slate-800 dark:text-slate-200 font-semibold group-hover:text-slate-900 dark:group-hover:text-white transition-colors mb-1">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-medium">{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                          Verified
                        </span>
                        <span className="text-xs text-blue-600 dark:text-blue-400 group-hover:underline">
                          View Certificate →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Google Cloud Summary */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-blue-200 dark:border-slate-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">☁️</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                 IBM skill badge
                </h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                 Earned the IBM Generative AI: Prompt Engineering badge, demonstrating skills in designing effective prompts to optimize AI-driven outcomes
                </p>
                <div className="flex justify-center gap-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full">
                    Prompt Engineering
                  </span>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full">
                   Generative AI
                  </span>
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full">
                    Prompt Design
                  </span>
                  <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-3 py-1 rounded-full">
                    AI Tools
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "-", label: "Publications", icon: "📚" },
              { number: "-", label: "Research Papers", icon: "🔬" },
              { number: "2", label: "Awards & Recognition", icon: "🏆" },
              { number: "21", label: "Certifications", icon: "📜" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-slide-up"></div>
          </div>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto animate-slide-up">
            Leveraging data to solve real-world challenges ⚡ Open to collaborative opportunities in analytics and data intelligence 🚀
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 animate-slide-in-left">
              <FaEnvelope className="text-blue-600 text-3xl mx-auto mb-4" />
              <a href="mailto:gupta.vinayC@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                pravithpravith88@gmail.com
              </a>
            </div>
            
            <div className="glass-card p-8 animate-slide-in-right">
              <FaPhone className="text-green-600 text-3xl mx-auto mb-4" />
              <a href="tel:+917738927663" className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                +91-7539906947
              </a>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/IamPravith"
          target="_blank"
          rel="noopener noreferrer"
              className="relative group flex flex-col items-center"
            >
              <span className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-900 via-blue-600 to-purple-600 flex items-center justify-center shadow-lg border-2 border-white/10 group-hover:scale-110 group-hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:from-blue-700 hover:to-purple-700 animate-float-advanced">
                <FaGithub size={32} className="text-white group-hover:text-blue-400 transition-colors duration-300" />
                <span className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-60 animate-pulse-glow pointer-events-none"></span>
              </span>
        </a>
        <a
              href="https://linkedin.com/in/pravith-kumar-a8619a340"
          target="_blank"
          rel="noopener noreferrer"
              className="relative group flex flex-col items-center"
            >
              <span className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 flex items-center justify-center shadow-lg border-2 border-white/10 group-hover:scale-110 group-hover:shadow-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/30 hover:from-cyan-700 hover:to-blue-700 animate-float-advanced">
                <FaLinkedin size={34} className="text-white group-hover:text-cyan-300 transition-colors duration-300" />
                <span className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-60 animate-pulse-glow pointer-events-none"></span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 dark:bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-slate-400 mb-4">
            © 2025 Pravith Kumar J.
          </p>
          <p className="text-slate-500 text-sm">
            Data Analyst | Business Intelligence & Analytics Enthusiast | Turning Data into Actionable Insights
          </p>
        </div>
      </footer>
    </div>
    <ChatBot />
    </div>
  );
}