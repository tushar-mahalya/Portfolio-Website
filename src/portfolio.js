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
  logo_name: "Tushar Sharma",

  subTitle:
    "An enthusiastic individual who consistently strives to contribute to the development of comprehensive products that establish sustainable and scalable social and technical systems, with the aim of generating significant impact.",
  resumeLink:
    "https://tushar-mahalya.github.io/images-repo/Tushar_Sharma_Resume.pdf",
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
        "⚡ Knowledgeable about cutting-edge AI technologies like NLP, GANs, LLMs, Transformers & Autoencoders."
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "devicon:keras",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "devicon:azure",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Anaconda",
          fontAwesomeClassname: "devicon:anaconda",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent"
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
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon:matplotlib",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn-icon",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent"
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "devicon:numpy",
          style: {
            backgroundColor: "transparent"
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
      softwareSkills: [
        
      ]
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
      profileLink: "https://devgym.oracle.com/pls/apex/f?p=10001:26:13748499023620:::RP,26:P26_USER_ID:343935",
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
        "⚡ Awarded 75% scholarship based on a record of consistent academic performance and exceptional scores in Qualifier exam."
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
        "    ⚡ Strong foundation in core subjects: Mathematics, Science, Social Science, Languages.",
        "    ⚡ Practical application of knowledge: Experiments, problem-solving, Quantatative & Logical reasoning.",
        "    ⚡ Holistic development: Physical Education, fitness, sportsmanship, teamwork & communications skills.",
        "    ⚡ Scored perfect 10 CGPA and received "Academic Excellence" award from District and Session Judge - O.P. Verma.",
        "Class 12th:",
        "    ⚡ In-depth study of Physics, Chemistry, Mathematics: Mechanics, electricity, thermodynamics, organic and inorganic chemistry, calculus.",
        "    ⚡ Practical experiments and lab work: Scientific equipment, observation recording, data analysis.",
        "    ⚡ Language proficiency and communication skills: English literature, grammar, writing. Critical thinking, effective communication.",
        "    ⚡ Attained an 8 CGPA in the Science stream during Class 12th.",
        ],
      website_link: "https://www.gpsknp.in/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Foundational Level Certificate",
      subtitle: "- Andrew Thangaraj",
      logo_path: "iitmadrasbsc.png",
      certificate_link:
        "https://drive.google.com/file/d/1KuSadHneiQjrDvCG4KxNjPSZBArEo76R/view?usp=sharing",
      alt_name: "Indian Institute of Techonology, Madras",
      color_code: "#FFFFFF",
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
      certificate_link:
        "https://certificate.univ.ai/c/39733u83cAC",
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
      certificate_link:
        "https://certificate.univ.ai/c/39733u87cAC",
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
      certificate_link: "https://drive.google.com/file/d/11EXRAnMPneYcgJ73lljjZq7ynO1IjmJY/view",
      alt_name: "Coursera",
      color_code: "#443C3C",
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
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Analyst Intern",
          company: "QualDigiIn Technologies Pvt. Ltd.",
          company_url: "https://qualdigiin.com/",
          logo_path: "qualdigiin_logo.png",
          duration: "Jun 2022 - Nov 2022",
          location: "Kanpur, Uttar Pradesh",
          description: "QualDigiIn is a software solutions company. As a intern, I have following responsibilities: (1) Managed and optimized SQL databases for 25+ clients, ensuring efficient data storage and retrieval. (2) Gathered, cleaned, and organized data using MS Excel extensively, ensuring data integrity and facilitating analysis. (3) Utilized Tableau to create dynamic dashboards connected to SQL databases, providing live feeds and insights for multiple clients. (4) Led 5 analytical projects, extracting valuable insights and identifying patterns from primary data sources, resulting in enhanced business strategies and increased revenues for clients. (5) Implemented a machine learning-based recommendation engine for an e-commerce website, achieving 5% (estimate) projected sales growth and improving user experience.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Fundraising Campaign Manager",
          company: "Muskurahat Foundation",
          company_url: "https://muskurahat.org.in/",
          logo_path: "muskurahat.png",
          duration: "June 2019 - April 2020",
          location: "Work from Home",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Administrative Professional",
          company: "Apostrophe Oratory Club | IIT-M",
          company_url: "https://instagram.com/oratoryclub_apostrophe?igshid=MDM4ZDc5MmU=",
          logo_path: "apostrophe.jpg",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Scribe",
          company: "Volunteer for a Cause (VFC)",
          company_url: "https://www.vfcindia.in/penpals",
          logo_path: "vfc.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Club Volunteer",
          company: "Corbett House | IIT-M",
          company_url: "https://sites.google.com/student.onlinedegree.iitm.ac.in/corbetthouse/",
          logo_path: "corbett.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Teacher | Mentor",
          company: "A+ Classes",
          logo_path: "a+classes.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
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
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
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
    subtitle: "+91 8320758513",
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
