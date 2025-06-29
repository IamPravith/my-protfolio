import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';
import qaData from './bot-qa.json';
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
    { from: 'bot', text: 'Hi! I am VinayBot 🤖. Ask me anything about this portfolio, my skills, projects, or how to contact me!' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const answer = 'This chatbot is currently in testing mode. Exciting new features are on the way—stay tuned for a smarter, more interactive experience!';
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
              <span className="font-bold text-slate-900 dark:text-white text-lg">VinayBot</span>
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