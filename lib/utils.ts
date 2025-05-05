import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return format(date, 'MMMM dd, yyyy');
}

// Mock data generation utilities (to be replaced with actual data from Sanity.io)

export const generateMockProjects = () => {
  return [
    {
      id: '1',
      title: 'AI-Powered Customer Support Chatbot',
      slug: 'ai-customer-support-chatbot',
      description: 'Developed an intelligent chatbot using NLP to handle 70% of customer inquiries automatically, reducing support costs by 45%.',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'AI',
      tags: ['Machine Learning', 'NLP', 'Python', 'ReactJS'],
    },
    {
      id: '2',
      title: 'E-commerce Recommendation Engine',
      slug: 'ecommerce-recommendation-engine',
      description: 'Built a personalized product recommendation system that increased average order value by 28% and conversion rates by 15%.',
      imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Machine Learning',
      tags: ['Recommendation Systems', 'Python', 'AWS', 'BigData'],
    },
    {
      id: '3',
      title: 'Real-time Logistics Optimization Platform',
      slug: 'logistics-optimization-platform',
      description: 'Created an ML-powered route optimization system that reduced delivery times by 23% and fuel costs by 18% for a national delivery service.',
      imageUrl: 'https://images.pexels.com/photos/7648484/pexels-photo-7648484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Web Apps',
      tags: ['Optimization Algorithms', 'React', 'Node.js', 'Google Maps API'],
    },
    {
      id: '4',
      title: 'Healthcare Patient Monitoring System',
      slug: 'healthcare-monitoring-system',
      description: 'Developed an IoT-based remote patient monitoring system with real-time alerts and predictive health insights.',
      imageUrl: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Mobile',
      tags: ['IoT', 'Flutter', 'Firebase', 'TensorFlow'],
    },
    {
      id: '5',
      title: 'Automated Document Processing API',
      slug: 'document-processing-api',
      description: 'Built an intelligent document extraction and processing API that automates form data entry with 96% accuracy.',
      imageUrl: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'APIs',
      tags: ['OCR', 'Computer Vision', 'REST API', 'Python'],
    },
    {
      id: '6',
      title: 'Financial Fraud Detection System',
      slug: 'financial-fraud-detection',
      description: 'Implemented an AI-based anomaly detection system that identified fraudulent transactions with 99.3% accuracy.',
      imageUrl: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'AI',
      tags: ['Anomaly Detection', 'Python', 'Machine Learning', 'Financial Tech'],
    },
  ];
};

export const generateMockTestimonials = () => {
  return [
    {
      id: '1',
      quote: "Gardezi.ai transformed our customer support operations. Their AI chatbot handles 70% of our inquiries and has significantly improved customer satisfaction scores.",
      author: "Sarah Johnson",
      role: "Head of Customer Experience",
      company: "TechRetail Inc.",
      imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: '2',
      quote: "Their machine learning expertise helped us build a recommendation engine that increased our average order value by 28%. The ROI has been remarkable.",
      author: "Michael Chen",
      role: "CTO",
      company: "ShopStream",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: '3',
      quote: "We hired Gardezi.ai to develop our logistics optimization platform, and they delivered a solution that reduced our delivery times by 23%. Highly recommended.",
      author: "Lisa Rodriguez",
      role: "VP of Operations",
      company: "FastFreight Logistics",
      imageUrl: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
};

export const generateMockBlogPosts = () => {
  return [
    {
      title: "The Future of AI in Business Automation",
      slug: "future-ai-business-automation",
      excerpt: "Explore how artificial intelligence is transforming business processes and creating new opportunities for automation across industries.",
      coverImage: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-06-15",
      author: {
        name: "Dr. Aisha Gardezi",
        picture: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      categories: ["Artificial Intelligence", "Business"],
    },
    {
      title: "Building Scalable Machine Learning Systems",
      slug: "building-scalable-ml-systems",
      excerpt: "Learn the architecture patterns and best practices for creating machine learning systems that can scale to handle millions of predictions.",
      coverImage: "https://images.pexels.com/photos/8386739/pexels-photo-8386739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-05-22",
      author: {
        name: "Zain Ahmad",
        picture: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      categories: ["Machine Learning", "Engineering"],
    },
    {
      title: "Natural Language Processing: Latest Advances",
      slug: "nlp-latest-advances",
      excerpt: "Discover the recent breakthroughs in NLP that are enabling computers to understand and generate human language with unprecedented accuracy.",
      coverImage: "https://images.pexels.com/photos/9034664/pexels-photo-9034664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2023-04-10",
      author: {
        name: "Maria Sanchez",
        picture: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      categories: ["NLP", "Research"],
    },
  ];
};

export const generateMockServices = () => {
  return [
    {
      title: "Custom AI Development",
      slug: "custom-ai-development",
      description: "Custom AI solutions tailored to your business needs and integrated with your existing systems.",
      icon: "BrainCircuit",
      features: [
        "Machine learning model development",
        "Natural language processing",
        "Computer vision systems",
        "Predictive analytics",
        "AI integration with existing systems",
      ],
    },
    {
      title: "Web & Mobile Applications",
      slug: "web-mobile-applications",
      description: "Scalable, high-performance web and mobile applications built with modern technologies.",
      icon: "Smartphone",
      features: [
        "Progressive web applications",
        "Cross-platform mobile apps",
        "Responsive UI/UX design",
        "Real-time data processing",
        "Cloud-native architecture",
      ],
    },
    {
      title: "Data Engineering",
      slug: "data-engineering",
      description: "End-to-end data pipelines and infrastructure to collect, process, and analyze your data.",
      icon: "Database",
      features: [
        "Big data architecture design",
        "ETL pipeline development",
        "Data warehouse implementation",
        "Stream processing systems",
        "Data quality monitoring",
      ],
    },
    {
      title: "API Development",
      slug: "api-development",
      description: "Robust, scalable APIs that connect your systems and enable seamless data exchange.",
      icon: "Workflow",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "API gateway configuration",
        "Third-party API integration",
        "API documentation and testing",
      ],
    },
    {
      title: "Machine Learning Ops",
      slug: "machine-learning-ops",
      description: "Tools and processes for deploying, monitoring, and maintaining machine learning models in production.",
      icon: "Cpu",
      features: [
        "Model deployment automation",
        "Model monitoring and observability",
        "A/B testing infrastructure",
        "Feature store implementation",
        "CI/CD for ML pipelines",
      ],
    },
    {
      title: "AI Consulting",
      slug: "ai-consulting",
      description: "Strategic guidance on AI adoption, implementation, and scaling within your organization.",
      icon: "Lightbulb",
      features: [
        "AI opportunity assessment",
        "Technology stack evaluation",
        "AI roadmap development",
        "Team training and upskilling",
        "Ethical AI framework design",
      ],
    },
  ];
};