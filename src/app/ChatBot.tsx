import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { PropsWithChildren } from 'react';

const markdownComponents = {
  ul: (props: PropsWithChildren<object>) => (
    <ul className="list-disc pl-5 space-y-0.5 mb-1 last:mb-0">{props.children}</ul>
  ),
  ol: (props: PropsWithChildren<object>) => (
    <ol className="list-decimal pl-5 space-y-0.5 mb-1 last:mb-0">{props.children}</ol>
  ),
  li: (props: PropsWithChildren<object>) => (
    <li className="ml-1 leading-snug text-base">{props.children}</li>
  ),
  a: (props: React.ComponentProps<'a'>) => (
    <a {...props} className="text-blue-600 dark:text-blue-400 underline break-all">{props.children}</a>
  ),
  strong: (props: PropsWithChildren<object>) => (
    <strong className="font-semibold text-slate-900 dark:text-white">{props.children}</strong>
  ),
  p: (props: PropsWithChildren<object>) => (
    <p className="mb-1 last:mb-0 leading-snug">{props.children}</p>
  ),
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am Pravith Bot 🤖. Ask me anything about this portfolio, my skills, projects, or how to contact me!' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

// Global chat history
const chatHistory: string[] = [];

function sendMessage() {
    if (!input.trim()) return;

    const userMsg = { from: 'user', text: input.toLowerCase() };

    // Save user input in history
    chatHistory.push(userMsg.text);

    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-IN', { hour12: true });
    const currentDate = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    let answer = "🤖 I didn't understand that. Please try asking about: name, education, mail, mobile, location, about, skills, certifications, projects, experience, internship, interest, github, linkedin, achievements, contact, time, day, date.";

    // ========================== Original bot responses ==========================
    if (userMsg.text.includes("name")) {
        answer = "🧑‍💼 Name: Pravith Kumar J";
    } else if (userMsg.text.includes("education")) {
        answer = "🎓 Education: MBA in Data & Business Analytics, Garden City University";
    } else if (userMsg.text.includes("college")) {
        answer = "🏫 College: Garden City University";
    } else if (userMsg.text.includes("mail") || userMsg.text.includes("email")) {
        answer = "✉️ Email: pravithpravith88@gmail.com";
    } else if (userMsg.text.includes("mobile") || userMsg.text.includes("phone")) {
        answer = "📱 Mobile: +91 7539906947";
    } else if (userMsg.text.includes("location")) {
        answer = "📍 Location: Bangalore, India";
    } else if (userMsg.text.includes("about")) {
        answer = "🗝️ About: Data & Business Analyst with expertise in data visualization, statistical modeling, and business intelligence. Skilled in transforming raw data into actionable insights using tools like Power BI, Tableau, SQL, and Python, with a focus on driving strategic decision-making and operational efficiency.\n\nTurning numbers into compelling stories using tools like Power BI, Excel, and Python visualizations.";
    } else if (userMsg.text.includes("skills")) {
        if(userMsg.text.includes("tech")) {
            answer = "💻 Technical Skills:\n- R\n- Python 🐍\n- SQL 🛢️\n- Machine Learning (Python) 🤖\n- MS Excel 📊\n- Tableau 📈\n- Power BI 💻\n- DBMS 🛠️\n- Git 🔗\n- Tally ERP9 💼\n- Statistics & Data Modeling 📐\n- Data Visualization & Plotting 📊";
        } else if(userMsg.text.includes("soft")) {
            answer = "🏆 Soft Skills:\n- Attention to Detail 👀\n- Leadership 🏆\n- Problem Solving 🧩\n- Team Work 🤝\n- Critical Thinking 💡\n- Time Management ⏰\n- Communication 🗣️\n- Adaptability 🌱\n- Decision Making 🎯";
        } else {
            answer = "💻💡 Skills (Tech + Soft):\n\nTechnical Skills:\n- R\n- Python 🐍\n- SQL 🛢️\n- Machine Learning (Python) 🤖\n- MS Excel 📊\n- Tableau 📈\n- Power BI 💻\n- DBMS 🛠️\n- Git 🔗\n- Tally ERP9 💼\n- Statistics & Data Modeling 📐\n- Data Visualization & Plotting 📊\n\nSoft Skills:\n- Attention to Detail 👀\n- Leadership 🏆\n- Problem Solving 🧩\n- Team Work 🤝\n- Critical Thinking 💡\n- Time Management ⏰\n- Communication 🗣️\n- Adaptability 🌱\n- Decision Making 🎯";
        }
    } else if (userMsg.text.includes("certification") || userMsg.text.includes("certifications")) {
        answer = "📜 Certifications:\n- NPTEL: Database Management Systems (IIT Kharagpur)\n- IBM: Data Analytics with Excel & Python\n- Google Cloud: BigQuery & AI/ML APIs\n- Power BI Advanced Training";
    } else if (userMsg.text.includes("projects")) {
        answer = "📊 Projects:\n- IPL Analysis Dashboard 🏏\n- Netflix Analysis Dashboard 🎬\n- Retail Sales Analysis 🛍️";
    } else if (userMsg.text.includes("experience") || userMsg.text.includes("career")) {
        answer = "🧭 Career Experience: Student";
    } else if (userMsg.text.includes("internship")) {
        answer = "🔍 Internship: Looking for internship opportunities";
    } else if (userMsg.text.includes("interest")) {
        answer = "🎯 Interested in: Data Analyst roles";
    } else if (userMsg.text.includes("github")) {
        answer = "🐙 GitHub: [https://github.com/IamPravith]";
    } else if (userMsg.text.includes("linkedin")) {
        answer = "🔗 LinkedIn: [https://linkedin.com/in/pravith-kumar-a8619a340]";
    } else if (userMsg.text.includes("achievements")) {
        answer = "🏅 Achievements:\n- Strategic Leadership Summit 🏅\n- Best Manager Award 2022 🏆\n- Business Quiz Champion 🎯";
    } else if (userMsg.text.includes("contact")) {
        answer = "📬 Contact Me:\n✉️ Email: pravithpravith88@gmail.com\n📱 Mobile: +91 7539906947\n🔗 LinkedIn: linkedin.com/in/pravith-kumar-a8619a340\n🐙 GitHub: github.com/IamPravith";
    } else if (userMsg.text.includes("time")) {
        answer = `⏰ Current Time: ${currentTime}`;
    } else if (userMsg.text.includes("date") || userMsg.text.includes("day")) {
        answer = `📅 Today is: ${currentDate}`;
    } else if (userMsg.text.includes("hi") || userMsg.text.includes("hello")) {
        answer = "👋 Hi there! I’m Pravith Bot. Ask me about my projects, skills, career, or how to contact me.";
    } else if (userMsg.text.includes("good morning")) {
        answer = "🌅 Good Morning! Hope you have a productive day!";
    } else if (userMsg.text.includes("good afternoon")) {
        answer = "☀️ Good Afternoon! Keep up the great work!";
    } else if (userMsg.text.includes("good evening")) {
        answer = "🌇 Good Evening! Hope you had a successful day!";
    } else if (userMsg.text.includes("good night")) {
        answer = "🌙 Good Night! Rest well and recharge for tomorrow!";
    } else if (userMsg.text.includes("bye") || userMsg.text.includes("goodbye")) {
        answer = "👋 Goodbye! Thanks for visiting my portfolio. Have a great day!";
    } else if (userMsg.text.includes("thanks") || userMsg.text.includes("thank you")) {
        answer = "🙏 You're welcome! Glad to help.";
    }

    // ========================== Professional & Interactive Q&A ==========================
    else if (userMsg.text.includes("objective") || userMsg.text.includes("career goal")) {
        answer = "🎯 Career Objective: To leverage data analytics, visualization, and machine learning skills to help organizations make data-driven decisions and achieve business growth.";
    } else if (userMsg.text.includes("strengths")) {
        answer = "💪 Strengths: Analytical Thinking, Problem Solving, Quick Learner, Communication, Team Collaboration";
    } else if (userMsg.text.includes("weaknesses")) {
        answer = "⚠️ Weaknesses: Perfectionist, working on prioritization.";
    } else if (userMsg.text.includes("tools")) {
        answer = "🛠️ Tools I Use: Power BI, Tableau, Excel, SQL Server, Python (Pandas, NumPy, Matplotlib, Seaborn), R, Git, Tally ERP9.";
    } else if (userMsg.text.includes("work style") || userMsg.text.includes("approach")) {
        answer = "🔹 Work Style: Detail-oriented, data-driven, and collaborative. Focus on turning raw data into actionable insights.";
    } else if (userMsg.text.includes("portfolio")) {
        answer = "📁 Portfolio: Check my projects and dashboards here: GitHub: [https://github.com/IamPravith]";
    } else if (userMsg.text.includes("recommendation") || userMsg.text.includes("endorsement")) {
        answer = "📝 Recommendations: Available on LinkedIn profile: [https://linkedin.com/in/pravith-kumar-a8619a340]";
    } else if (userMsg.text.includes("availability") || userMsg.text.includes("hire")) {
        answer = "📌 Availability: Open to internship and full-time opportunities in data analytics and business intelligence.";
    } else if (userMsg.text.includes("salary expectation") || userMsg.text.includes("package")) {
        answer = "💰 Salary Expectation: Open for discussion based on role and responsibilities.";
    } else if (userMsg.text.includes("hobbies") || userMsg.text.includes("interest outside work")) {
        answer = "🎨 Hobbies: Reading, exploring new data technologies, and problem-solving challenges.";
    } else if (userMsg.text.includes("feedback") || userMsg.text.includes("review")) {
        answer = "📝 Feedback: I’d love to hear your thoughts on my portfolio or projects!";
    } else if (userMsg.text.includes("availability for call") || userMsg.text.includes("schedule meeting")) {
        answer = "📅 I am available for a call or meeting. Please reach out via email or LinkedIn to schedule.";
    } else if (userMsg.text.includes("fun fact") || userMsg.text.includes("interesting fact")) {
        answer = "🤓 Fun Fact: I enjoy turning raw data into stories that help decision-making!";
    } else if (userMsg.text.includes("advice")) {
        answer = "💡 Advice: Always let data guide your decisions, but consider business context.";
    } else if (userMsg.text.includes("motivation") || userMsg.text.includes("quote")) {
        answer = "🌟 Motivation: 'Data is the new oil – analyze it wisely!'";
    } else if (userMsg.text.includes("favorite project")) {
        answer = "📊 Favorite Project: Netflix Analysis Dashboard – visualized trends and subscriptions that guided content strategy decisions.";
    } else if (userMsg.text.includes("biggest achievement")) {
        answer = "🏆 Biggest Achievement: Best Manager Award 2022 for leading data-driven initiatives.";
    } else if (userMsg.text.includes("learning path")) {
        answer = "📚 Learning Path: Started with Python & SQL, specialized in Data Analytics via IBM & NPTEL, then practical dashboards in Power BI and Tableau.";
    } else if (userMsg.text.includes("current focus")) {
        answer = "🔍 Current Focus: Building predictive models for retail sales trends to improve inventory decisions.";
    } else if (userMsg.text.includes("work philosophy")) {
        answer = "💡 Work Philosophy: Validate insights with data and ensure decisions align with business objectives.";
    } else if (userMsg.text.includes("problem-solving approach")) {
        answer = "🧩 Problem-Solving Approach: Identify root cause → Analyze data → Visualize patterns → Recommend actionable solutions.";
    } else if (userMsg.text.includes("team role")) {
        answer = "🤝 Team Role: Collaborative analyst bridging technical insights with business strategy.";
    } else if (userMsg.text.includes("challenge me")) {
        answer = "🧠 Data Challenge: If a dataset has 200 entries and 25% missing values, how many valid entries remain?";
    } else if (userMsg.text.includes("daily tip")) {
        answer = "💡 Daily Tip: Always document your analysis steps—it makes insights reproducible and credible.";
    } else if (userMsg.text.includes("tech trend")) {
        answer = "📈 Tech Trend: Augmented analytics and AI-powered dashboards are transforming business intelligence.";
    } else if (userMsg.text.includes("why hire you")) {
        answer = "🌟 Why Hire Me: I combine strong analytical skills with business understanding, delivering actionable insights that drive decisions.";
    } else if (userMsg.text.includes("linkedin tip")) {
        answer = "🔗 LinkedIn Tip: Showcase projects and metrics to demonstrate practical analytics skills.";
    } else if (userMsg.text.includes("portfolio highlight")) {
        answer = "📁 Portfolio Highlight: IPL Analysis Dashboard with interactive charts for match & player statistics.";
    } else if (userMsg.text.includes("favorite dataset")) {
        answer = "📊 Favorite Dataset: Netflix viewing trends – great for understanding customer behavior.";
    } else if (userMsg.text.includes("data insight")) {
        answer = "💡 Data Insight: Retail sales analysis shows weekend promotions increase revenue by 20% on average.";

    // ========================== History & Analytics Features ==========================
    } else if (userMsg.text.includes("show history")) {
        answer = "🗂️ Chat History:\n" + chatHistory;
    }


  setMessages(msgs => [...msgs, userMsg, { from: 'bot', text: answer }]);
  setInput('');
}
  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed z-50 bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl flex items-center justify-center animate-float-advanced border-4 border-white/20 hover:scale-110 hover:shadow-pink-500/40 transition-all duration-300 focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Open ChatBot"
        style={{ boxShadow: '0 0 40px 8px rgba(147,51,234,0.2)' }}
      >
        <FaRobot className="text-white text-3xl animate-pulse-glow" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed z-50 bottom-28 right-8 w-80 max-w-[95vw] bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-purple-400/30 animate-fade-in flex flex-col" style={{ boxShadow: '0 8px 64px 0 rgba(59,130,246,0.15)' }}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-purple-400/20 bg-gradient-to-r from-blue-100/60 to-purple-100/60 dark:from-blue-900/30 dark:to-purple-900/30 rounded-t-3xl">
            <div className="flex items-center gap-3">
              <FaRobot className="text-purple-600 text-2xl animate-pulse-glow" />
              <span className="font-bold text-slate-900 dark:text-white text-lg">Pravith kumar J Bot</span>
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 font-medium animate-pulse-glow">Ask me anything!</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-pink-500 transition-colors text-xl"><FaTimes /></button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-blue-900" style={{ maxHeight: 400 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-2xl px-4 py-2 max-w-[80%] text-base shadow-md whitespace-pre-line break-words ${msg.from === 'user' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white self-end' : 'bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white border border-purple-400/10'} !leading-snug`}>
                  {msg.from === 'bot' ? <ReactMarkdown components={markdownComponents}>{msg.text}</ReactMarkdown> : msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <form className="flex items-center gap-2 px-5 py-4 border-t border-purple-400/20 bg-gradient-to-r from-blue-100/60 to-purple-100/60 dark:from-blue-900/30 dark:to-purple-900/30 rounded-b-3xl" onSubmit={e => { e.preventDefault(); sendMessage(); }}>
            <input
              className="flex-1 rounded-full px-4 py-2 bg-white/80 dark:bg-slate-900/70 border border-purple-400/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              autoFocus
              maxLength={200}
            />
            <button type="submit" className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 text-white hover:scale-110 transition-transform shadow-md"><FaPaperPlane /></button>
          </form>
        </div>
      )}
    </>
  );
} 