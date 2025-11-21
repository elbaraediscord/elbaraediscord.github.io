/**
 * Managed Services Data
 * Contains all skills and solutions/products for the Managed Services page
 * Type-safe data structures for skills and solutions
 */

export interface Skill {
  category: string;
  subcategories: {
    name: string;
    items: string[];
  }[];
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const solutions: Solution[] = [
  {
    id: "ai-strategy",
    title: "AI Strategy",
    description: "Develop comprehensive AI strategies tailored to your business goals",
    icon: "Brain",
  },
  {
    id: "mlops",
    title: "MLOps",
    description: "Build and deploy machine learning models at scale with confidence",
    icon: "Zap",
  },
  {
    id: "product-prototyping",
    title: "Product Prototyping",
    description: "Rapid prototyping and MVP development for innovative ideas",
    icon: "Lightbulb",
  },
  {
    id: "iot-solutions",
    title: "IoT Solutions",
    description: "Design and deploy end-to-end IoT systems, from device integration to cloud platforms and real-time data visualization",
    icon: "Radio",
  },
  {
    id: "software-development",
    title: "End-to-End Software Development",
    description: "Complete software solutions including mobile apps, web applications, backend systems, and cloud infrastructure",
    icon: "Code",
  },
  {
    id: "api-testing",
    title: "API Performance & Stress Testing",
    description: "Ensure the reliability, scalability, and robustness of your APIs through professional load, stress, and performance testing",
    icon: "Activity",
  },
];

export const skills: Skill[] = [
  {
    category: "Backend Development",
    subcategories: [
      {
        name: "Core Languages",
        items: ["Python", "PHP", "JavaScript / TypeScript", "SQL"],
      },
      {
        name: "Django Framework",
        items: [
          "Django REST Framework (DRF)",
          "OAuth2 / OpenID Connect (Keycloak)",
          "Role-based access control",
          "REST APIs for mobile/web",
          "Background processing (Celery + Redis)",
          "File handling (APK processing, Excel imports)",
          "Dashboard and data visualization backends",
        ],
      },
      {
        name: "Laravel Framework",
        items: [
          "MVC architecture",
          "REST API development",
          "Authentication & authorization",
          "MySQL-based CRUD systems",
          "Scheduled tasks & job queues",
        ],
      },
      {
        name: "Databases",
        items: ["PostgreSQL (primary)", "MySQL", "Redis (cache, queues, rate limiting)"],
      },
      {
        name: "API Performance & Testing",
        items: [
          "K6 Load testing REST APIs",
          "Stress and spike testing",
          "Authentication and session durability tests",
          "Performance baselining & regression detection",
          "Postman",
          "Swagger / Redoc",
          "WebSockets for real-time features",
        ],
      },
      {
        name: "Security",
        items: [
          "OAuth2, OpenID Connect",
          "JWT tokens",
          "HTTPS, SSL configuration",
          "CORS, CSRF, input validation",
          "Role-based access control (RBAC)",
        ],
      },
    ],
  },
  {
    category: "Frontend Development",
    subcategories: [
      {
        name: "Frameworks & Libraries",
        items: ["React (hooks, context, functional components)", "Material UI", "Tailwind CSS"],
      },
      {
        name: "Dashboard & Visualization",
        items: ["ECharts", "Recharts", "Chart.js"],
      },
      {
        name: "Build Tools",
        items: ["Vite", "Webpack"],
      },
    ],
  },
  {
    category: "Mobile Development",
    subcategories: [
      {
        name: "Flutter (Dart)",
        items: [
          "Cross-platform development",
          "State management: Riverpod, BLoC, Provider",
          "Local storage: sqflite",
          "REST API integration",
          "Clean Architecture conventions",
          "Material Design 3 UI",
        ],
      },
      {
        name: "Android Native (Kotlin + Java)",
        items: [
          "Kotlin / Java development",
          "MVVM architecture",
          "Android Jetpack: ViewModel, LiveData, Room, WorkManager",
          "Material Design 3 interfaces",
          "Secure API integrations using Retrofit + OkHttp",
          "JSON Web Tokens, OAuth, and secure authentication",
        ],
      },
      {
        name: "Transaction & Inventory Workflows",
        items: [
          "Secure form submissions",
          "Encrypted storage",
          "Offline-first architecture",
          "User role management",
          "Local caching using Room Database",
          "Background synchronization",
          "Efficient list rendering with RecyclerView + DiffUtil",
        ],
      },
      {
        name: "Hardware & Device Integrations",
        items: [
          "USB HID (keyboard emulation, low-level HID reports)",
          "Bluetooth HID (BLE reports and input handling)",
          "Bluetooth SPP (serial communication with external devices)",
          "Background services",
        ],
      },
    ],
  },
  {
    category: "IoT / Embedded Engineering",
    subcategories: [
      {
        name: "Industrial Protocols",
        items: [
          "SNMP: Power systems telemetry, Environmental sensor data, SNMP traps & periodic polling, OID mapping and structured parsing",
          "Modbus RTU/TCP: RS485 (RTU) and Ethernet (TCP), Register mapping, Industrial sensors, energy meters, PDUs, power equipment, Gateway communication using Python, Data decoding, scaling, validation",
          "MQTT: Telemetry publishing, IoT gateway design, Broker integration (Mosquitto), Cloud/dashboard data pipelines",
        ],
      },
      {
        name: "Embedded & Hardware Experience",
        items: [
          "ESP32 (ESP-IDF, FreeRTOS tasks)",
          "STM32",
          "Raspberry Pi / Pi Zero (IoT gateway scripting)",
          "I²C communication",
          "BLE Beacon",
        ],
      },
      {
        name: "RTOS",
        items: ["FreeRTOS", "Task scheduling, queues"],
      },
    ],
  },
  {
    category: "Artificial Intelligence / ML / Automation",
    subcategories: [
      {
        name: "Python AI Ecosystem",
        items: ["Pandas, NumPy", "scikit-learn", "PyTorch / TensorFlow (model inference)"],
      },
      {
        name: "LLM Systems",
        items: [
          "OpenAI API integrations",
          "Hugging Face models",
          "Local inference (Llama, Qwen, Mistral)",
          "Document intelligence & text extraction",
          "Prompt engineering & agent workflows",
        ],
      },
      {
        name: "AI Applications",
        items: [
          "Automated APK metadata analysis",
          "Pattern extraction and classification",
          "Anomaly detection for IoT/energy data",
          "AI-generated analytics and summaries",
          "Automated workflows for dashboards and backend tasks",
        ],
      },
    ],
  },
  {
    category: "DevOps & Cloud Engineering",
    subcategories: [
      {
        name: "Containers",
        items: ["Docker", "Multi-container development setups", "CI pipeline container builds"],
      },
      {
        name: "Orchestration",
        items: [
          "Kubernetes: Deployment and Service objects, Ingress controllers, ConfigMaps & Secrets, Rolling deployments, Horizontal scaling, Liveness/readiness probes, Resource quota management, Logs and monitoring",
        ],
      },
      {
        name: "CI/CD",
        items: [
          "GitHub Actions",
          "Automated testing & building",
          "Dockerized deployments",
          "Cloud-based workflows",
        ],
      },
      {
        name: "Servers / Cloud",
        items: [
          "DigitalOcean",
          "AWS EC2, S3",
          "Cloudflare DNS, caching, and security",
          "Nginx reverse proxy configuration",
        ],
      },
    ],
  },
  {
    category: "UI / UX Design",
    subcategories: [
      {
        name: "Design Tools",
        items: ["Figma", "FigJam", "Adobe Illustrator"],
      },
      {
        name: "Design Systems",
        items: ["Material Design 3", "Material UI", "Tailwind component libraries"],
      },
      {
        name: "User Behavior & Analytics",
        items: ["Hotjar", "Microsoft Clarity", "Google Analytics GA4"],
      },
    ],
  },
];

/**
 * High-level summary of expertise areas
 */
export const expertiseSummary = {
  backend: "Django · DRF · Laravel · PostgreSQL · MySQL · Redis · Docker · Kubernetes · k6 · AI/LLM automation",
  frontend: "React · Material UI · Tailwind · ECharts · Recharts",
  mobile: "Flutter · Kotlin · Java · USB/Bluetooth HID · Transaction systems · Inventory workflows · Camera/Barcode scanning",
  iot: "SNMP · Modbus · MQTT · ESP32 · STM32 · FreeRTOS · Raspberry Pi",
  ai: "LLMs · ML models · anomaly detection · automation",
  devops: "Docker · Kubernetes · CI/CD · Cloudflare · Nginx",
  design: "Figma · Material Design · Analytics tools",
};
