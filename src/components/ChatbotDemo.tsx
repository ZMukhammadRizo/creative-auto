'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  options?: string[];
}

export default function WorkingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Creative Auto Boutique! 🚗✨ How can I help you today?",
      sender: 'bot',
      options: ["Services & Pricing", "Book Appointment", "About Us", "Contact Info"]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const responses: { [key: string]: { text: string; options?: string[] } } = {
    "Services & Pricing": {
      text: "We offer premium auto detailing services:\n\n🔸 Premium Wash & Detail - Starting at $199\n🔸 Paint Protection & Ceramic Coating - Starting at $599\n🔸 Paint Correction - Starting at $399\n🔸 Engine Bay Detail - Starting at $179\n\nWould you like details about any specific service?",
      options: ["Premium Wash", "Paint Protection", "Paint Correction", "Engine Detail", "Back to Menu"]
    },
    "Premium Wash": {
      text: "Our Premium Wash & Detail includes:\n\n✅ Hand wash exterior\n✅ Clay bar treatment\n✅ Paint correction (minor)\n✅ Interior deep clean\n✅ Leather conditioning\n✅ Window cleaning\n\nPrice: Starting at $199\nDuration: 3-4 hours\n\nWould you like to book this service?",
      options: ["Book Now", "More Info", "Back to Services"]
    },
    "Paint Protection": {
      text: "Our Paint Protection services:\n\n🛡️ Ceramic Coating (5-year warranty)\n🛡️ Paint Protection Film\n🛡️ UV Protection\n🛡️ Professional application\n\nPrice: Starting at $599\nDuration: Full day service\n\nInterested in protecting your vehicle?",
      options: ["Book Consultation", "Learn More", "Back to Services"]
    },
    "Paint Correction": {
      text: "Professional Paint Correction:\n\n🔧 Swirl mark removal\n🔧 Scratch repair\n🔧 Multi-stage polishing\n🔧 Paint restoration\n\nPrice: Starting at $399\nDuration: 4-6 hours\n\nReady to restore your paint?",
      options: ["Schedule Service", "Get Quote", "Back to Services"]
    },
    "Engine Detail": {
      text: "Engine Bay Detailing includes:\n\n🔩 Complete degreasing\n🔩 Steam cleaning\n🔩 Component protection\n🔩 Professional finish\n\nPrice: Starting at $179\nDuration: 2-3 hours\n\nWant to book this service?",
      options: ["Book Service", "More Details", "Back to Services"]
    },
    "Book Appointment": {
      text: "Great! To book your appointment:\n\n📞 Call us: (555) 123-4567\n📧 Email: info@creativeautoboutique.com\n🌐 Visit our contact page\n\nOur team will confirm your appointment within 24 hours!",
      options: ["Call Now", "Send Email", "Contact Page", "Back to Menu"]
    },
    "About Us": {
      text: "Creative Auto Boutique - Premium Auto Detailing\n\n✨ 10+ years of experience\n✨ 1000+ satisfied customers\n✨ Certified professionals\n✨ Premium products only\n✨ Full insurance coverage\n\nWe transform vehicles into masterpieces!",
      options: ["Our Services", "Contact Us", "Back to Menu"]
    },
    "Contact Info": {
      text: "📍 Creative Auto Boutique\n\n📞 Phone: (555) 123-4567\n📧 Email: info@creativeautoboutique.com\n🕒 Hours: Mon-Sat 8AM-6PM\n📍 Location: Downtown Auto District\n\nWe're here to help!",
      options: ["Book Appointment", "Our Services", "Back to Menu"]
    },
    "Back to Menu": {
      text: "What would you like to know more about?",
      options: ["Services & Pricing", "Book Appointment", "About Us", "Contact Info"]
    },
    "Back to Services": {
      text: "Which service interests you?",
      options: ["Premium Wash", "Paint Protection", "Paint Correction", "Engine Detail", "Back to Menu"]
    },
    "Book Now": {
      text: "Perfect! Please call us at (555) 123-4567 or visit our contact page to schedule your Premium Wash & Detail service. We'll have your car looking amazing!",
      options: ["Call Now", "Contact Page", "Other Services", "Back to Menu"]
    },
    "More Info": {
      text: "Our Premium Wash & Detail is our most popular service! It's perfect for regular maintenance and includes everything your car needs for a complete refresh. The process typically takes 3-4 hours and we use only premium products.",
      options: ["Book Now", "View Pricing", "Other Services", "Back to Menu"]
    }
  };

  const addMessage = (text: string, sender: 'user' | 'bot', options?: string[]) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (option: string) => {
    // Add user message
    addMessage(option, 'user');

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      setIsTyping(false);
      const response = responses[option] || {
        text: "I'm sorry, I didn't understand that. How can I help you with our auto detailing services?",
        options: ["Services & Pricing", "Book Appointment", "About Us", "Contact Info"]
      };
      addMessage(response.text, 'bot', response.options);
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      addMessage("Thanks for your message! For the best assistance, please use the quick options above, or call us at (555) 123-4567 for immediate help.", 'bot', ["Services & Pricing", "Book Appointment", "Contact Info"]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-red-600 hover:bg-red-700 scale-95' 
            : 'bg-gradient-to-br from-red-600 via-red-700 to-red-800 hover:scale-110 hover:shadow-red-500/25'
        }`}
        whileHover={{ scale: isOpen ? 0.95 : 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <XMarkIcon className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 via-red-700 to-red-600 text-white p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Creative Auto Boutique</h3>
                <p className="text-white/80 text-sm">Premium Auto Detailing</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                  }`}>
                    <p className="whitespace-pre-line text-sm leading-relaxed">{message.text}</p>
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left px-3 py-2 text-sm bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition-colors border border-red-200 hover:border-red-300"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 rounded-2xl px-4 py-3 shadow-sm border border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
