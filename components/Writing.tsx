'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaMedium, FaRss } from 'react-icons/fa';

interface BlogPost {
  title: string;
  link: string;
  description: string;
  date: string;
  platform: 'substack' | 'medium';
}

const Writing = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration - in production, you'd fetch from Substack API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts([
         {
           title: "What Coding Language Should You Start With?",
           link: "https://alanvnorcott.substack.com/p/what-coding-language-should-you-start",
           description: "A comprehensive guide to choosing your first programming language, covering the pros and cons of popular languages like Python, JavaScript, C#, and more for beginners.",
           date: "2025",
           platform: "substack"
         },
         {
           title: "Understanding Big O Notation and Algorithm Efficiency",
           link: "https://alanvnorcott.substack.com/p/understanding-big-o-notation-and",
           description: "Deep dive into Big O notation, time complexity, and space complexity. Learn how to analyze algorithm efficiency and make better programming decisions.",
           date: "2025",
           platform: "substack"
         },
         {
           title: "Navigating Legacy Code: A Developer's Survival Guide",
           link: "https://alanvnorcott.substack.com/p/navigating-legacy-code",
           description: "Practical strategies for working with legacy codebases, including refactoring techniques, documentation approaches, and maintaining code quality in older systems.",
           date: "2025",
           platform: "substack"
         }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'substack':
        return <FaRss className="w-5 h-5" />;
      case 'medium':
        return <FaMedium className="w-5 h-5" />;
      default:
        return <FaExternalLinkAlt className="w-5 h-5" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'substack':
        return 'text-orange-500';
      case 'medium':
        return 'text-green-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <div className="py-20" id="writing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-700 dark:text-white mb-6">
            Technical Writing & <span className="text-blue-400">Thought Leadership</span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Sharing insights on full-stack development, cloud technologies, and software engineering best practices. 
            Follow my journey in modern web development and AI integration.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-2 ${getPlatformColor(post.platform)}`}>
                    {getPlatformIcon(post.platform)}
                    <span className="text-sm font-medium capitalize">{post.platform}</span>
                  </div>
                   <time className="text-sm text-neutral-500 dark:text-neutral-400">
                     {post.date}
                   </time>
                </div>

                <h2 className="text-xl font-semibold text-neutral-800 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                  {post.description}
                </p>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-medium transition-colors duration-300"
                >
                  <span>Read Article</span>
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Follow My Technical Journey
            </h2>
            <p className="text-lg mb-6">
              Stay updated with my latest insights on full-stack development, cloud technologies, 
              and emerging trends in software engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a 
                 href="https://alanvnorcott.substack.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 hover:animate-pulse"
               >
                 <FaRss className="w-5 h-5" />
                 <span>Subscribe on Substack</span>
               </a>
               <a 
                 href="#contact" 
                 className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 hover:animate-pulse"
               >
                 Get In Touch
               </a>
               <a 
                 href="#skills" 
                 className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 hover:animate-pulse"
               >
                 View My Skills
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Writing;
