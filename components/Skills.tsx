'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: ".NET (versions 4–9)", description: "Comprehensive .NET development with C# and ASP.NET Core" },
        { name: "C#", description: "Object-oriented programming and enterprise development" },
        { name: "ASP.NET Core", description: "Web APIs, MVC, and microservices architecture" },
        { name: "Python", description: "FastAPI, Django, and data science applications" },
        { name: "Node.js", description: "JavaScript runtime for scalable server applications" },
        { name: "RESTful APIs", description: "Design and implementation of RESTful web services" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", description: "Modern React with hooks, context, and performance optimization" },
        { name: "TypeScript", description: "Type-safe JavaScript development" },
        { name: "Next.js", description: "Full-stack React framework with SSR and SSG" },
        { name: "JavaScript", description: "ES6+, async programming, and modern web development" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
        { name: "HTML5/CSS3", description: "Semantic markup and modern CSS features" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Microsoft Azure", description: "Cloud services, App Service, Functions, and DevOps" },
        { name: "AWS", description: "Amazon Web Services for scalable cloud solutions" },
        { name: "Docker", description: "Containerization for consistent deployment" },
        { name: "Kubernetes", description: "Container orchestration and microservices management" },
        { name: "Terraform", description: "Infrastructure as Code for cloud provisioning" },
        { name: "CI/CD", description: "Continuous Integration and Deployment pipelines" }
      ]
    },
    {
      title: "Database & Data",
      skills: [
        { name: "SQL Server", description: "Microsoft SQL Server with stored procedures and optimization" },
        { name: "PostgreSQL", description: "Open-source relational database management" },
        { name: "MongoDB", description: "NoSQL document database for flexible data storage" },
        { name: "Entity Framework", description: "ORM for .NET applications" },
        { name: "Data Analytics", description: "Data processing and business intelligence" }
      ]
    },
    {
      title: "Security & Authentication",
      skills: [
        { name: "Azure AD", description: "Microsoft identity and access management" },
        { name: "SSL/TLS", description: "Secure communication protocols" },
        { name: "Security Standards", description: "ISO, FedRAMP, StateRAMP compliance" }
      ]
    },
    {
      title: "AI Integration",
      skills: [
        { name: "OpenAI API", description: "GPT integration and prompt engineering for AI-powered applications" },
        { name: "LangChain", description: "Framework for building applications with LLMs and AI agents" },
        { name: "Vector Databases", description: "Weaviate, Pinecone, Milvus for semantic search and AI applications" },
        { name: "AI-Powered Applications", description: "Building intelligent applications with modern AI technologies" }
      ]
    },
    {
      title: "Observability & Monitoring",
      skills: [
        { name: "Prometheus", description: "Metrics collection and monitoring for distributed systems" },
        { name: "Grafana", description: "Data visualization and dashboard creation for system monitoring" },
        { name: "ELK Stack", description: "Elasticsearch, Logstash, Kibana for log analysis and search" },
        { name: "System Monitoring", description: "Comprehensive observability for production applications" }
      ]
    },
    {
      title: "Security & Access Control",
      skills: [
        { name: "RBAC", description: "Role-Based Access Control implementation and management" },
        { name: "2FA", description: "Two-Factor Authentication setup and integration" },
        { name: "Security Auditing", description: "Compliance auditing and security assessment" },
        { name: "Access Management", description: "User authentication and authorization systems" }
      ]
    }
  ];

  return (
    <div className="py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-700 dark:text-white mb-6">
            Technical Skills & <span className="text-blue-400">Expertise</span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Comprehensive full-stack development skills spanning modern web technologies, 
            cloud platforms, and emerging AI technologies. Open to relocation and remote opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4">
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="border-l-2 border-blue-400 pl-3">
                    <h3 className="font-medium text-neutral-800 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg mb-6">
            Looking for a .NET Developer and Python Specialist with expertise in enterprise solutions and cloud technologies? 
            I'm open to new opportunities and relocation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                View My Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
