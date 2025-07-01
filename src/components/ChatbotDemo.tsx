import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

export default function ChatbotDemo() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' },
    { from: 'user', text: 'Just checking out your services.' },
    { from: 'bot', text: 'Great! Let me know if you have any questions.' },
  ]);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [open, messages]);

  // Simulate bot typing indicator
  useEffect(() => {
    if (messages.length && messages[messages.length - 1].from === 'user') {
      setTyping(true);
      const timer = setTimeout(() => setTyping(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-red-600 to-yellow-400 text-white rounded-full shadow-2xl w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform border-4 border-white/30"
        aria-label="Open chat"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <ChatBubbleLeftRightIcon className="w-8 h-8" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-6 z-50 w-80 max-w-xs rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-lg bg-white/70 border border-white/30"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-black via-gray-900 to-red-700/90 text-white/90">
              <div className="flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-yellow-400" />
                <span className="font-bold tracking-wide text-base">AutoBot</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="hover:text-yellow-400 transition-colors">
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gradient-to-br from-white/80 to-gray-100/80" style={{ maxHeight: 320 }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`px-4 py-2 rounded-2xl text-sm shadow-md max-w-[80%] ${msg.from === 'user' ? 'bg-gradient-to-br from-yellow-400 to-red-400 text-black' : 'bg-black/90 text-yellow-200'}`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="px-4 py-2 rounded-2xl text-sm bg-black/80 text-yellow-200 flex items-center gap-2 shadow-md"
                  >
                    <span className="block w-2 h-2 bg-yellow-400 rounded-full animate-bounce mr-1"></span>
                    <span className="block w-2 h-2 bg-yellow-400 rounded-full animate-bounce mr-1" style={{ animationDelay: '0.2s' }}></span>
                    <span className="block w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    <span className="ml-2">Typing...</span>
                  </motion.div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <form onSubmit={handleSend} className="flex border-t border-white/20 bg-white/60 backdrop-blur px-2 py-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 text-sm rounded-xl focus:outline-none bg-white/80 placeholder-gray-400 text-gray-900 shadow-inner"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus
              />
              <button type="submit" className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-br from-yellow-400 to-red-500 text-white font-bold shadow hover:from-yellow-500 hover:to-red-600 transition-all">Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 