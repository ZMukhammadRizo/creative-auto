'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrophyIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';
import { getMotionProps } from '@/lib/useScrollAnimation';

const values = [
  {
    icon: TrophyIcon,
    title: 'Excellence',
    description: 'We strive for perfection in every detail, ensuring your vehicle receives the highest quality care.'
  },
  {
    icon: UserGroupIcon,
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We build lasting relationships through exceptional service.'
  },
  {
    icon: ClockIcon,
    title: 'Reliability',
    description: 'Consistent quality and timely service you can depend on, every time you choose us.'
  }
];

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '1000+', label: 'Satisfied Customers' },
  { number: '50+', label: 'Awards Won' },
  { number: '24/7', label: 'Support Available' }
];

const team = [
  {
    name: 'Michael Rodriguez',
    role: 'Founder & Master Detailer',
    bio: 'With over 15 years of experience, Michael founded Creative Auto Boutique with a vision to provide premium detailing services.'
  },
  {
    name: 'Sarah Chen',
    role: 'Paint Correction Specialist',
    bio: 'Certified in advanced paint correction techniques, Sarah ensures every vehicle leaves with a perfect finish.'
  },
  {
    name: 'David Thompson',
    role: 'Interior Specialist',
    bio: 'Expert in leather care and interior restoration, David brings new life to vehicle interiors.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-red-400">Creative Auto Boutique</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Passionate about automotive excellence since 2013. We transform vehicles into masterpieces 
                through meticulous attention to detail and unwavering commitment to quality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                {...getMotionProps('fadeInLeft', 0)}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Creative Auto Boutique was born from a simple belief: every vehicle deserves to look its absolute best. 
                  What started as a passion project in a small garage has grown into a premier auto detailing destination 
                  trusted by car enthusiasts and luxury vehicle owners alike.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our founder, Michael Rodriguez, began his journey in automotive care over 15 years ago. His dedication 
                  to perfection and innovative techniques quickly gained recognition in the local car community. Today, 
                  our team of certified professionals continues that tradition of excellence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We&apos;ve had the privilege of working on everything from classic collectibles to modern supercars, 
                  always with the same commitment to quality and attention to detail that sets us apart.
                </p>
              </motion.div>
              
              <motion.div
                {...getMotionProps('fadeInRight', 0)}
                className="relative"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 border-4 border-red-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-red-400 font-bold text-2xl">CAB</span>
                    </div>
                    <p className="text-xl font-medium">Our Journey</p>
                    <p className="text-sm text-gray-300 mt-2">From passion to profession</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              {...getMotionProps('fadeInUp', 0)}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission & <span className="text-red-600">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To provide exceptional auto detailing services that exceed expectations while building 
                lasting relationships with our clients through trust, quality, and reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  {...getMotionProps('fadeInUp', index * 0.1)}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              {...getMotionProps('fadeInUp', 0.2)}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              {...getMotionProps('fadeInUp', 0)}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-red-600">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our certified professionals bring years of experience and passion 
                to every project, ensuring your vehicle receives the best care possible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8 text-center"
                  {...getMotionProps('fadeInUp', index * 0.1)}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 