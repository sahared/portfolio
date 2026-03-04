import React from 'react';
import type { Project } from '../types';
import { Code2 } from 'lucide-react';
import {
  SiReact, 
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTerraform,
  SiDocker,
  SiOpenai,
  SiPython,
  SiMysql,
  SiRedux,
  SiSocketdotio,
  SiJupyter,
} from 'react-icons/si';
import { FaAws, FaMicrosoft, FaJava } from 'react-icons/fa';

export const projects: Project[] = [
  {
    id: 'apphealthx',
    title: 'AppHealthX – Cloud-Native Health Monitoring',
    description:
      'Enterprise-grade AWS platform with auto-scaling infrastructure, real-time observability, and automated CI/CD delivering resilient file management services.',
    longDescription:
      'Production-ready cloud-native web platform showcasing enterprise-level AWS architecture, intelligent auto-scaling, and comprehensive observability. Built to demonstrate mastery of cloud infrastructure, DevOps practices, and scalable backend development.\n\nKey Achievements:\n\n• Architected highly available AWS infrastructure using Terraform IaC with EC2 Auto Scaling Groups, Application Load Balancer, and multi-tier VPC with isolated public/private subnets for maximum reliability\n\n• Engineered scalable RESTful backend with Node.js, Express.js, and PostgreSQL enabling secure file operations (upload/retrieve/delete) with robust validation and fault-tolerant error handling\n\n• Built end-to-end observability framework with Amazon CloudWatch, custom StatsD metrics, and Winston structured logging to monitor API latency, database performance, and S3 operations in real-time\n\n• Automated complete infrastructure and application delivery pipeline using GitHub Actions with Packer-based AMI creation, automated testing, security scanning, and least-privilege IAM role deployments\n\n• Implemented intelligent auto-scaling policies driven by CPU metrics, CloudWatch dashboards for centralized monitoring, and log aggregation for optimized performance and cost efficiency\n\n• Hardened security posture with IAM roles/policies, restrictive security groups, SSL-encrypted RDS connections, and secure S3 integration for scalable object storage\n\nImpact:\n\nDemonstrates production-grade cloud engineering with infrastructure automation, security best practices, and enterprise observability standards.',
    image: '/images/projects/apphealthx-project.png',
    tags: [
      { name: 'AWS', icon: React.createElement(FaAws, { className: 'w-3.5 h-3.5' }) },
      { name: 'Node.js', icon: React.createElement(SiNodedotjs, { className: 'w-3.5 h-3.5' }) },
      { name: 'PostgreSQL', icon: React.createElement(SiPostgresql, { className: 'w-3.5 h-3.5' }) },
      { name: 'Terraform', icon: React.createElement(SiTerraform, { className: 'w-3.5 h-3.5' }) },
      { name: 'Docker', icon: React.createElement(SiDocker, { className: 'w-3.5 h-3.5' }) },
    ],
    link: '',
    github: 'https://github.com/sahared',
    featured: true,
    category: 'development',
  },
  {
    id: 'homebase',
    title: 'HomeBase – Real Estate Platform',
    description:
      'Full-stack PWA for property listings with real-time chat, JWT/OAuth auth, Redux state management, offline capabilities, and multilingual support.',
    longDescription:
      'Modern real estate platform built as a Progressive Web Application featuring property listings, co-working space rentals, real-time communication, and offline-first architecture. Demonstrates full-stack development expertise with scalable backend design and polished user experience.\n\nKey Achievements:\n\n• Developed complete full-stack application using Node.js, Express.js, React.js, TypeScript, and MongoDB with comprehensive CRUD operations for property listings and user management\n\n• Implemented secure authentication and authorization with JWT and OAuth, establishing role-based access control for different user types (buyers, sellers, property managers)\n\n• Architected RESTful APIs following Domain-Driven Design principles and Microsoft REST API guidelines ensuring maintainability, scalability, and clean separation of concerns\n\n• Integrated Redux for predictable global state management and i18next for complete internationalization, enabling seamless multilingual experience across the platform\n\n• Built Progressive Web App capabilities including offline access, responsive mobile-first design, and service worker caching for enhanced performance and reliability\n\n• Delivered real-time bidirectional chat functionality using Socket.io, dramatically improving communication flow between buyers, sellers, and co-working space users\n\n• Optimized MongoDB performance with strategic indexing and aggregation pipelines, achieving ~30% reduction in query latency and improved scalability under load\n\n• Engineered modular, reusable React components with TypeScript type safety and comprehensive documentation, ensuring code quality and long-term maintainability\n\nImpact:\n\nFull-featured real estate platform combining modern web technologies, real-time features, and offline-first architecture for superior user experience.',
    image: '/images/projects/homebase-project.png',
    tags: [
      { name: 'React', icon: React.createElement(SiReact, { className: 'w-3.5 h-3.5' }) },
      { name: 'TypeScript', icon: React.createElement(SiTypescript, { className: 'w-3.5 h-3.5' }) },
      { name: 'Node.js', icon: React.createElement(SiNodedotjs, { className: 'w-3.5 h-3.5' }) },
      { name: 'MongoDB', icon: React.createElement(SiMongodb, { className: 'w-3.5 h-3.5' }) },
      { name: 'Socket.io', icon: React.createElement(SiSocketdotio, { className: 'w-3.5 h-3.5' }) },
      { name: 'Redux', icon: React.createElement(SiRedux, { className: 'w-3.5 h-3.5' }) },
    ],
    link: '',
    github: 'https://github.com/sahared',
    featured: true,
    category: 'development',
  },
  {
    id: 'finley',
    title: 'Finley – AI Financial Advisory Chatbot',
    description:
      'Production-ready conversational AI delivering personalized investment guidance through advanced prompt engineering, achieving 92-95% consistency and 34% higher user satisfaction.',
    longDescription:
      'Intelligent financial advisory chatbot democratizing access to personalized investment guidance through systematic AI optimization and rigorous testing. Capstone project demonstrating end-to-end AI system development from prototyping through security hardening.\n\nTechnical Architecture:\n\n• Fine-tuned GPT-4o-mini model using supervised learning on 50 curated examples incorporating Decomposition with Socratic Questioning, Self-Consistency, and Self-Criticism techniques for nuanced reasoning\n\n• Engineered 6-stage LangChain/LangGraph workflow: Input Validation → Risk Assessment → Financial Health Check → Allocation Generation → Quality Assurance → Output Formatting\n\n• Integrated Azure Prompt Flow for systematic A/B testing, variant management, and comprehensive performance evaluation with LangSmith tracing for debugging and monitoring\n\n• Built dual-pipeline architecture with intelligent routing: validation-first path for ambiguous inputs (4.64s) and fast-track path for complete inputs (22.02s), optimizing computational efficiency\n\n• Developed conversation memory system using JSON-based persistent storage enabling multi-turn context retention and personalized follow-up recommendations\n\n• Created visual analytics capabilities with matplotlib for allocation charts, risk breakdowns, and financial health visualizations\n\nPerformance Impact:\n\n• Increased recommendation consistency from 60% to 92-95% through multi-path cross-validation techniques\n\n• Improved user satisfaction scores by 34% (3.2/5.0 → 4.3/5.0) through transparent reasoning\n\n• Achieved 95% safety enforcement rate with comprehensive financial health checks preventing harmful advice\n\n• Enhanced educational value by 70% through step-by-step explanations and scenario-based learning\n\n• Overall quality improvement of 50% (6.2/10 → 9.3/10) validated through systematic testing\n\n• Achieved 100% ambiguous input detection with zero false clarifications\n\n• Reduced response latency by 14.9% through iterative prompt optimization\n\nAdvanced Capabilities:\n\n• Socratic questioning for nuanced risk tolerance assessment through scenario-based dialogue\n\n• Multi-path validation using age-based rules, risk buckets, and goal-based approaches for reliability\n\n• Self-criticism quality gates preventing harmful advice (emergency fund verification, debt assessment)\n\n• Transparent reasoning showing validation across multiple methodologies for user trust\n\n• Comprehensive security testing against prompt injection and jailbreaking attacks\n\nImpact:\n\nProduction-grade AI system serving young professionals (25-40), mid-career investors (40-55), and near-retirees (55-70) with evidence-based, personalized investment guidance.',
    image: '/images/projects/finley-project.png',
    tags: [
      { name: 'Python', icon: React.createElement(SiPython, { className: 'w-3.5 h-3.5' }) },
      { name: 'GPT-4o', icon: React.createElement(SiOpenai, { className: 'w-3.5 h-3.5' }) },
      { name: 'LangChain', icon: React.createElement(SiPython, { className: 'w-3.5 h-3.5' }) },
      { name: 'Azure', icon: React.createElement(FaMicrosoft, { className: 'w-3.5 h-3.5' }) },
      { name: 'Jupyter', icon: React.createElement(SiJupyter, { className: 'w-3.5 h-3.5' }) },
    ],
    link: '',
    github: 'https://github.com/sahared',
    featured: true,
    category: 'development',
  },
  {
    id: 'medilink',
    title: 'MediLink – Healthcare Ecosystem',
    description:
      'Role-based Java healthcare platform integrating hospitals, ambulance services, diagnostics, and pharmacies with secure RBAC and automated workflows.',
    longDescription:
      'Comprehensive healthcare ecosystem designed to unify disparate medical services into a cohesive digital platform. Improves care coordination, resource allocation, and operational transparency across enterprises while ensuring data security and regulatory compliance.\n\nKey Achievements:\n\n• Built enterprise Java Swing application with MySQL backend managing patient records, appointments, emergency dispatch, and pharmaceutical workflows across multiple healthcare providers\n\n• Implemented robust Role-Based Access Control (RBAC) ensuring secure data handling across patients, doctors, administrators, ambulance services, diagnostics labs, and pharmacy staff\n\n• Developed intelligent automated workflows for ambulance dispatch, hospital intake coordination, diagnostic test scheduling, and pharmacy integration reducing care delivery delays\n\n• Designed secure medical record storage system with encryption mechanisms ensuring HIPAA compliance and patient data privacy across the healthcare network\n\n• Integrated real-time alerts and notifications system dramatically improving emergency response times and patient engagement throughout the care journey\n\n• Architected platform around enterprises, organizations, and roles enabling scalability and extensibility for future healthcare service integrations and expansion\n\n• Optimized database schema and queries for efficient handling of high-volume healthcare transactions with proper indexing and normalization\n\n• Built comprehensive audit logging system tracking all access and modifications to sensitive medical records for compliance and security monitoring\n\nImpact:\n\nUnified healthcare platform connecting multiple service providers, reducing coordination overhead, and improving patient outcomes through streamlined care delivery and enhanced inter-organizational communication.',
    image: '/images/projects/medilink-project.png',
    tags: [
      { name: 'Java', icon: React.createElement(FaJava, { className: 'w-3.5 h-3.5' }) },
      { name: 'MySQL', icon: React.createElement(SiMysql, { className: 'w-3.5 h-3.5' }) },
      { name: 'Java Swing', icon: React.createElement(FaJava, { className: 'w-3.5 h-3.5' }) },
    ],
    link: '',
    github: 'https://github.com/sahared',
    featured: true,
    category: 'development',
  },
];

export const categories = [
  { key: 'development', label: 'Web', icon: Code2 },
];

export const categoryMeta: Record<string, { label: string; Icon: React.ElementType }> = {
  development: { label: 'Web', Icon: Code2 },
};

