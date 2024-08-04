/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tushar's Portfolio",
  description:
    "An enthusiastic individual who consistently strives to contribute to the development of comprehensive products that establish sustainable and scalable social and technical systems, with the aim of generating significant impact.",
  og: {
    title: "Tushar Sharma Portfolio",
    type: "website",
    url: "http://tushar-5harma.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Tushar Sharma",
  logo_name: "Tushar",

  subTitle:
    "An enthusiastic individual who consistently strives to contribute to the development of comprehensive products that establish sustainable and scalable social and technical systems, with the aim of generating significant impact.",
  resumeLink:
    "https://tushar-mahalya.github.io/images-repo/Tushar-Sharma-CV-(Latest).pdf",
  portfolio_repository: "https://github.com/tushar-mahalya/Portfolio-Website",
  githubProfile: "https://github.com/tushar-mahalya",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/tushar-mahalya",
  // linkedin: "https://www.linkedin.com/in/tushar-5harma/",
  // gmail: "tusharmahalya@gmail.com",
  // twitter: "https://twitter.com/Tushar_Mahalya",
  // hackerrank: "https://www.hackerrank.com/tushar_5harma",
  // leetcode: "https://leetcode.com/tushar_5harma/",
  // oracle dev gym: "https://devgym.oracle.com/pls/apex/f?p=10001:26:13748499023620:::RP,26:P26_USER_ID:343935",
  // kaggle: "https://www.kaggle.com/tushar5harma"
  // instagram: "https://www.instagram.com/tushar_mahalya/"

  {
    name: "Github",
    link: "https://github.com/tushar-mahalya",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tushar-5harma/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:tusharmahalya@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Tushar_Mahalya",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/tushar_mahalya/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/TusR#7152",
    fontAwesomeIcon: "fa-discord", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#5865F2", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Specialize in creating scalable and optimized models for Machine Learning, Deep Learning and Statistical use cases that support critical business decisions.",
        "⚡ Acquires the ability to analyze complex datasets, identify patterns, and draw meaningful insights.",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis.",
        "⚡ Knowledgeable about cutting-edge AI technologies like NLP, GANs, LLMs, Transformers & Autoencoders.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "devicon:keras",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "devicon:azure",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Anaconda",
          fontAwesomeClassname: "devicon:anaconda",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Data Analytics & Visualizations",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in end-to-end data analytics solutions, employing agile methodologies and best practices for data collection, cleaning, visualization, and reporting.",
        "⚡ Expert in data analytics and visualization tools, including Tableau, MS Excel, Google Sheets, and Python libraries (Pandas, NumPy, Matplotlib, Seaborn).",
        "⚡ Experienced in working with large datasets from different sources (databases, APIs, flat files), utilizing SQL for extracting insights and patterns.",
      ],
      softwareSkills: [
        {
          skillName: "MS Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon:matplotlib",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "devicon:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },

    {
      title: "Derivatives & Stock Trading",
      fileName: "DesignImg",
      skills: [
        "⚡ Experienced in analyzing market trends and economic indicators to find profitable investment opportunities and manage risks, using fundamental and technical analysis methods.",
        "⚡ Skilled in using trading platforms like Sensibull, Opstra, and Trading View to execute trades and efficiently manage portfolios.",
        "⚡ Capable of designing F&O trading strategies (delta hedging, straddle/strangle, butterfly, calendar spread, iron condor, etc.) and applying them in various market conditions and risk profiles.",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/tushar_5harma",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#ff8300",
      },
      profileLink: "https://leetcode.com/tushar_5harma/",
    },
    {
      siteName: "Oracle Dev Gym",
      iconifyClassname: "cib:oracle",
      style: {
        color: "#E34321",
      },
      profileLink:
        "https://devgym.oracle.com/pls/apex/f?p=10001:26:13748499023620:::RP,26:P26_USER_ID:343935",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/tushar5harma",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology, Madras",
      subtitle: "BS in Data Science & Applications",
      logo_path: "iitmadras.png",
      alt_name: "IIT Madras",
      duration: "2021 - Present",
      descriptions: [
        "⚡ Currently pursuing a comprehensive education in data science, covering a wide range of subjects such as Mathematics, Statistics, Python programming and Database systems.",
        "⚡ Actively developing practical skills in Data analysis, Business Data Management, Machine Learning, and Deep Learning through hands-on projects and Research Papers.",
        "⚡ Engaged in data science projects both individually and as part of collaborative teams, showcasing proficiency in analyzing intricate datasets, extracting valuable insights, and effectively presenting findings.",
        "⚡ Awarded 75% scholarship based on a record of consistent academic performance and exceptional scores in Qualifier exam.",
      ],
      website_link: "https://onlinedegree.iitm.ac.in/",
    },
    {
      title: "Dayanand Anglo-Vedic College, Kanpur",
      subtitle: "BS in Electronics & Communication Technology",
      logo_path: "csjmu.png",
      alt_name: "CSJMU",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ Acquired comprehensive knowledge of electronics principles, circuit, electronic devices, digital electronics, and communication systems.",
        "⚡ Developed practical skills in designing and analyzing electronic circuits, utilizing software tools for circuit simulation and PCB design, and troubleshooting electronic devices.",
        "⚡ Explored specialized areas such as microprocessors, microcontrollers, embedded systems, and gained exposure to emerging technologies like IoT, robotics, and automation.",
      ],
      website_link: "https://www.davcollegekanpur.ac.in/",
    },
    {
      title: "Gulmohar Public School",
      subtitle: "High School (10th & 12th)",
      logo_path: "cbse.png",
      alt_name: "CBSE",
      duration: "2016, 2018",
      descriptions: [
        "Class 10th:",
        "\t\t⚡ Strong foundation in core subjects: Mathematics, Science, Social Science, Languages.",
        "\t\t⚡ Practical application of knowledge: Experiments, problem-solving, Quantatative & Logical reasoning.",
        "\t\t⚡ Holistic development: Physical Education, fitness, sportsmanship, teamwork & communications skills.",
        '\t\t⚡ Scored perfect 10 CGPA and received "Academic Excellence" award from District and Session Judge - O.P. Verma.',
        "\nClass 12th:",
        "\t\t⚡ In-depth study of Physics, Chemistry, Mathematics: Mechanics, electricity, thermodynamics, organic and inorganic chemistry, calculus.",
        "\t\t⚡ Practical experiments and lab work: Scientific equipment, observation recording, data analysis.",
        "\t\t⚡ Language proficiency and communication skills: English literature, grammar, writing. Critical thinking, effective communication.",
        "\t\t⚡ Attained an 8 CGPA in the Science stream during Class 12th.",
      ],
      website_link: "https://www.gpsknp.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Specialization",
      subtitle: "- Andrew Ng, Eddy Shyu",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/U7RC4766YPQ6",
      alt_name: "Stanford University | DeepLearning.AI",
      color_code: "#ecfcfc",
    },
    {
      title: "Foundational Level Certificate",
      subtitle: "- Andrew Thangaraj",
      logo_path: "iitmadrasbsc.png",
      certificate_link:
        "https://drive.google.com/file/d/1KuSadHneiQjrDvCG4KxNjPSZBArEo76R/view?usp=sharing",
      alt_name: "Indian Institute of Techonology, Madras",
      color_code: "#ecfcfc",
    },
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/G22B8KEAGDB2",
      alt_name: "Stanford University",
      color_code: "#ecfcfc",
    },
    {
      title: "Google Data Analytics",
      subtitle: "- GCC (Coursera)",
      logo_path: "google.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/LJYZDCRKC3JE",
      alt_name: "Google",
      color_code: "#ecfcfc",
    },
    {
      title: "Python Developer",
      subtitle: "- Mohit Chouhan",
      logo_path: "edyoda.png",
      certificate_link:
        "https://edyodalms.s3.amazonaws.com/files/certificates/Tushar_Sharma_achivement_Python_Certification_5291.png",
      alt_name: "deeplearning.ai",
      color_code: "#E7F2F8",
    },
    {
      title: "IBM Data Analyst",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/ZUJE2YR5AMNG",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "AI-1 : Basics of AI & ML",
      subtitle: "- (Dr.) Ignacio Becker",
      logo_path: "univ.png",
      certificate_link: "https://certificate.univ.ai/c/39733u83cAC",
      alt_name: "Univ.AI",
      color_code: "#1d2973",
    },
    {
      title: "Data Analysis & Visualization",
      subtitle: "- Kevin McFaul, Steve Ryan",
      logo_path: "ibm.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/WTX322KGGBSF",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "AI-2 : Convolutional Neural Networks",
      subtitle: "- Raghu Meka",
      logo_path: "univ.png",
      certificate_link: "https://certificate.univ.ai/c/39733u87cAC",
      alt_name: "Univ.AI",
      color_code: "#1d2973",
    },
    {
      title: "Trading Algorithms",
      subtitle: "- Prasanna Tantri",
      logo_path: "isb.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/4Z3AZA642CKF",
      alt_name: "ISB",
      color_code: "#E6E6FA",
    },
    {
      title: "Databases for Developers : Foundations",
      subtitle: "- Chris Saxon",
      logo_path: "oracle.png",
      certificate_link:
        "https://drive.google.com/file/d/11EXRAnMPneYcgJ73lljjZq7ynO1IjmJY/view",
      alt_name: "Coursera",
      color_code: "#E6E6FA",
    },
    {
      title: "Databases & SQL for Data Science with Python",
      subtitle: "- Hima Vasudevan, Rav Ahuja",
      logo_path: "ibm.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/ZUJE2YR5AMNG",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "Digital Marketing Analytics in Practice",
      subtitle: "- Kevin Hartman",
      logo_path: "illinois.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/PS24DEQBMZJZ",
      alt_name: "University of Illinois",
      color_code: "#FFBB0099",
    },
    {
      title: "Financial Markets",
      subtitle: "- Robert J. Shiller",
      logo_path: "yale.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/CULRJ523EYHR",
      alt_name: "Yale",
      color_code: "#4285F499",
    },
    {
      title: "Introduction to Capital Markets",
      subtitle: "- ",
      logo_path: "cfi-logo.webp",
      certificate_link:
        "http://credentials.corporatefinanceinstitute.com/662e0f80-c7db-4295-9bac-1870f8f199e2",
      alt_name: "CFI",
      color_code: "#E6E6FA",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have gained valuable experience as a Data Analyst, successfully completing multiple projects in the fields of data science, machine learning, and data analytics. These projects were conducted online for prominent tech startups and companies, providing me with a solid foundation in the practical application of these domains.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "GenAI/ML Engineer",
          company: "Ascendion",
          company_url: "https://ascendion.com/",
          logo_path: "ascendion_logo.jpeg",
          duration: "Jul 2024 - Present",
          location: "Pune, Maharashtra",
          description:
            "Ascendion is a leading provider of AI-first software engineering services. Recently joined; detailed updates on my contributions and responsibilities will be provided soon.",
          color: "#ee3c26",
        },
        {
          title: "ML Engineer [Freelance]",
          company: "Nasscom Foundation | Cisco ThingQbator",
          company_url: "https://thingqbator.nasscomfoundation.org/",
          logo_path: "thingqbator.jpeg",
          duration: "May 2023 - Jul 2023",
          location: "Remote (Online)",
          description:
            "Designed a Machine Learning-based web application for plant disease detection as a Proof of Concept at an AgTech startup backed by Cisco ThingQbator. Deployed Multi-Quant CNN models tailored for different plant varieties, achieving 95% accuracy across 21 disease categories in real-time while optimizing resource usage. Curated and processed a comprehensive training dataset of over 67,000 images of diseased and healthy leaves from 9 plant species. Created a responsive frontend interface using HTML, CSS, and JavaScript, ensuring intuitive user interaction across all devices, and integrated it with a Flask backend for model communication, deploying the application on Microsoft Azure for scalable performance and widespread accessibility.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Analyst - Intern",
          company: "QualDigiIn Technologies",
          company_url: "https://qualdigiin.com/",
          logo_path: "qualdigiin_logo.png",
          duration: "Nov 2022 - May 2023",
          location: "Kanpur, Uttar Pradesh",
          description:
            "QualDigiIn is a software solutions company. As a intern, I have following responsibilities:\n(1) Managed and optimized SQL databases for 25+ clients, ensuring efficient data storage and retrieval.\n(2) Gathered, cleaned, and organized data using MS Excel extensively, ensuring data integrity and facilitating analysis.\n(3) Utilized Tableau to create dynamic dashboards connected to SQL databases, providing live feeds and insights for multiple clients. (4) Led 5 analytical projects, extracting valuable insights and identifying patterns from primary data sources, resulting in enhanced business strategies and increased revenues for clients.\n(5) Implemented a machine learning-based recommendation engine for an e-commerce website, achieving 5% (estimate) projected sales growth and improving user experience.",
          color: "#ee3c26",
        },
        {
          title: "Data Science & Analytics - Virtual Intern",
          company: "Forage",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "forage.png",
          duration: "Jul 2022 - Sept 2022",
          location: "Remote (Online)",
          description:
            "Forage.com is an esteemed and widely recognized online platform that provides a unique and immersive experience in the form of virtual internships and career exploration opportunities.\n(1) Prepared insightful report and strategic plan for 'Zilinka' at Quantium, utilizing PowerPoint for data visualizations and recommendations.\n(2) Presented findings to 'Social Buzz' at Accenture, leveraging Python, SQL, and Tableau to increase engagement by 20% and improve content conversion rates by 15%.\n(3) Analyzed natural gas prices for JP Morgan Chase & Co., applying time series analysis, pricing model development, machine learning, and quantization techniques.\n(4) Identified key churn factors for 'PowerCo' in BCG, achieving 85% accuracy and potential $10K cost savings using Random Forest model.\n(5) Analyzed supply chain data for 'Gala Groceries' in Cognizant, providing stock optimization recommendations and developing a strategic plan using sales and sensor data. Created business-friendly PowerPoint slides and a production-ready Python module for the machine learning algorithm.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Club Volunteer",
          company: "Academic Societies",
          company_url: "https://study.iitm.ac.in/ds/student_life.html",
          logo_path: "iitmadras.png",
          duration: "Jul 2023 - Present",
          location: "Remote (Online)",
          description:
            "Actively engaged as a participant in the Apostrophe Oratory Club, Corbett House #206, and the Ramanujan Society for Research at IIT-M, contributing to group activities aimed at fostering a vibrant and inclusive community. By actively participating in these esteemed organizations, I have had the opportunity to collaborate with fellow members, exchange ideas, and collectively contribute to the growth and development of our respective fields.",
          color: "#0C9D58",
        },
        {
          title: "Fundraising Intern",
          company: "Muskurahat Foundation",
          company_url: "https://csjmu.ac.in/",
          logo_path: "muskurahat.png",
          duration: "Nov 2022 - Jan 2023",
          location: "Remote (Online)",
          description:
            "Volunteered to raise funds through crowdfunding for the education of underprivileged children living in orphanages, low-income communities, and rural villages under Project KEYtaab initiated by Muskurahat Foundation.",
          color: "#000000",
        },
        {
          title: "Teacher | Mentor",
          company: "A+ Classes",
          logo_path: "a+classes.png",
          duration: "July 2019 - Jul 2024",
          location: "Kanpur, Uttar Pradesh",
          description:
            "Experienced teacher/mentor at A+ Classes, providing affordable education to primary and secondary grade students.",
          color: "#181717",
        },
        {
          title: "Accessibility Scribe",
          company: "C.S.J.M. University",
          company_url: "https://csjmu.ac.in/",
          logo_path: "csjmu.png",
          duration: "May 2022",
          location: "Kanpur, Uttar Pradesh",
          description:
            "Provided exam-time support to multiple Z visually impaired and physically challenged students, ensuring their smooth participation and promoting inclusivity.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

/*const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};*/

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tushar.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "developerActivity.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7652064884",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
