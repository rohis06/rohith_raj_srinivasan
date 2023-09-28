/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "RRS",
  title: "Hi all, I'm ROHITH RAJ SRINIVASAN",
  subTitle: emoji(
    "I am a Master's in Computer Science student @ University of California Davis, with over two years of experience in the tech industry, having worked at Cisco and Samsung Research. My interests lie in Application Development, Distributed Systems, and Machine Learning, and I'm passionate about driving innovation and creating impactful solutions in these areas."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "rrsri@ucdavis.edu",
  linkedin: "https://www.linkedin.com/in/rohith-raj-s/",
  github: "https://github.com/rohis06",
  instagram: "https://www.instagram.com/rohith_raj_s/",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I'm good at",
  // subTitle: "WRITE SOMETHING",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  // softwareSkills: [
  //   { skillName: "Java", fileName: "java" },
  //   { skillName: "Python", fileName: "python" },
  //   { skillName: "C", fileName: "c" },
  //   { skillName: "JavaScript (ES6)", fileName: "javascript" },
  //   { skillName: "HTML5", fileName: "html" },
  //   { skillName: "CSS", fileName: "css" },
  //   { skillName: "SQL", fileName: "mysql" },
  //   { skillName: "React.js", fileName: "react" },
  //   { skillName: "Node.js", fileName: "nodejs" },
  //   { skillName: "PyTorch", fileName: "pytorch" },
  //   { skillName: "NumPy", fileName: "numpy" },
  //   { skillName: "Pandas", fileName: "pandas-icon" },
  //   { skillName: "Matplotlib", fileName: "matplotlib-icon" },
  //   { skillName: "Spring MVC", fileName: "spring-icon" },
  //   { skillName: "Unix/Linux", fileName: "linux-tux" },
  //   { skillName: "Git", fileName: "git-icon" },
  //   { skillName: "GitHub", fileName: "github-octocat" },
  //   { skillName: "JIRA", fileName: "jira" },
  //   { skillName: "VS Code", fileName: "visual-studio-code" },
  //   { skillName: "Eclipse", fileName: "eclipse-icon" },
  // ],

  softwareSkills: [
    {
      category: "Programming Languages",
      skills: [
        { skillName: "Java", fileName: "java" },
        { skillName: "Python", fileName: "python" },
        { skillName: "C", fileName: "c" },
        { skillName: "JavaScript (ES6)", fileName: "javascript" },
        { skillName: "SQL", fileName: "mysql" },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { skillName: "React.js", fileName: "react" },
        { skillName: "Node.js", fileName: "nodejs" },
        { skillName: "HTML5", fileName: "html" },
        { skillName: "CSS", fileName: "css" },
        { skillName: "Spring MVC", fileName: "spring-icon" },
      ],
    },
    {
      category: "Machine Learning/AI",
      skills: [
        { skillName: "PyTorch", fileName: "pytorch" },
        { skillName: "NumPy", fileName: "numpy" },
        { skillName: "Pandas", fileName: "pandas-icon" },
        { skillName: "Matplotlib", fileName: "matplotlib-icon" },
        { skillName: "Jupyter", fileName: "jupyter" },
      ],
    },
    {
      category: "Other Technologies & Tools",
      skills: [
        { skillName: "Unix/Linux", fileName: "linux-tux" },
        { skillName: "Git", fileName: "git-icon" },
        { skillName: "GitHub", fileName: "github-octocat" },
        { skillName: "JIRA", fileName: "jira" },
        { skillName: "VS Code", fileName: "visual-studio-code" },
      ]
    }
    // Add more categories and skills as needed
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Davis",
      logo: require("./assets/images/UCD_logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - March 2024 (Expected)",
      desc: "GPA: 4.0 / 4.0",
      descBullets: [
        "Coursework: Design & Analysis of Algorithms, Machine Learning & Discovery, Distributed Database Systems, Software Engineering, Computational Storytelling using AI"
      ]
    },
    {
      schoolName: "R.V. College of Engineering, Bangalore, India",
      logo: require("./assets/images/rv_logo.png"),
      subHeader: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "August 2016 - August 2020",
      desc: "GPA: 3.92/4.00 (9.36 / 10.00)",
      descBullets: ["Coursework: Data Structures, Design and Analysis of Algorithms, Machine Learning, Artificial Neural Networks, Database Design, Big Data Analytics, Object Oriented Programming, Operating Systems, Software Engineering, Computer Networks, Web Programming, Linux Internals, Parallel Architecture and Distributed Programming, Cryptography and Network Security, Linear Algebra, Statistics, Graph and Probability Theory"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Front end development",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Cisco Systems",
      companylogo: require("./assets/images/cisco.png"),
      date: "August 2020 – July 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Collaborated with engineers and cross-functional teams to deliver 20+ features for Cisco’s flagship project, developing a distributed InterNetworking OS (IOS-XR) for AT&T’s x-Leaf Distributed Disaggregated Chassis platform (Open Network Linux approved white-boxes in a multi-chassis cluster) using Linux, C, Python, Git/GitHub, and Shell scripts.",
        "Developed Python automation tool with Cron Jobs, eliminating 6 hours of daily manual work for nightly sanity runs.",
        "Implemented 12 additional test cases for an existing test suite using Python, JSON & REST APIs to ingest unstructured data from the router, convert it into a structured format and validate it."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Cisco Systems",
      companylogo: require("./assets/images/cisco.png"),
      date: "January 2020 – June 2020",
      // desc: "Designed & developed an end-to-end Single-page web application (SPA) using ReactJS & NodeJS, which gives users the flexibility to design protocol stack for the packet frame of their interest and dynamically generate packet trace conditions from it. Earlier, this was done manually, and the SPA helped achieve 30x speed-up in the overall process.",
      descBullets: [
        "Designed and developed an end-to-end Single-page web application (SPA) using React.js, Node.js, and Git/GitHub.",
        "Enabled users to design custom protocol stacks for packet frames and dynamically generate packet trace conditions.",
        "Replaced manual processes with the SPA’s user-friendly UI, resulting in a 30x speed improvement in production.",
        "Utilized by 100+ global customers of Cisco’s IOS-XR on a daily basis."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Samsung Research",
      companylogo: require("./assets/images/samsung.png"),
      date: "May 2019 – July 2019",
      desc: "Collaborated with Rich Communication Service (RCS) Messaging as a Platform (MaaP) Chatbot team in developing 4 pipelines for an in-house RCS Chatbot using Google Dialogflow, Node.js, Express.js, JSON, and REST APIs."
    }
  ]
};

const academicExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teaching Assistant - Summer 2023",
      company: "University of California, Davis",
      companylogo: require("./assets/images/UCD_logo.png"),
      date: "August 2023 – Present",
      desc: "Serving as a Teaching Assistant for ECS 122A - Algorithm Design and Analysis under Prof. Yelena Frid. In this role, my responsibilities are:",
      descBullets: [
        "Lead engaging discussions for a diverse group of 80+ students, facilitating an interactive learning environment.",
        "Proctoring and meticulously grading exams to ensure accurate evaluation of student performance.",
        "Evaluating and providing constructive feedback on student assignments.",
        "Conducting regular office hours, offering one-on-one support and guidance to students seeking further clarification.",
        "Collaborating with the professor to enhance course materials and update instructional content for optimal student engagement."
      ]
    },
    {
      role: "Teaching Assistant - Spring 2023",
      company: "University of California, Davis",
      companylogo: require("./assets/images/UCD_logo.png"),
      date: "April 2023 – June 2023",
      desc: "Served as a Teaching Assistant for ECS 122B - Algorithm Design and Analysis under Prof. Setareh Rafatirad. In this role, my responsibilities were:",
      descBullets: [
        "Led engaging discussions for a diverse group of 120+ students, facilitating an interactive learning environment.",
        "Proctored and meticulously graded exams to ensure accurate evaluation of student performance.",
        "Developed challenging assignment questions to foster critical thinking and problem-solving skills.",
        "Evaluated and provided constructive feedback on student assignments.",
        "Conducted regular office hours, offering one-on-one support and guidance to students seeking further clarification.",
        "Collaborated with the professor to enhance course materials and update instructional content for optimal student engagement."
      ]
    },
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Technical Projects",
  // subtitle: "SOME",
  projects: [
    {
      image: require("./assets/images/MovCloud.png"),
      projectName: "MovCloud: Movie ticketing system using AWS",
      projectDesc: "Implemented a sophisticated cloud-based serverless movie ticketing system, utilizing 6 AWS Lambdas, 4 AWS SNS instances, DynamoDB, and AWS Step Functions. Leveraged the Saga design pattern to manage long-lived transactions and ensure seamless operations impeccably.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/GuardianVision.png"),
      projectName: "GuardianVision: AI-Powered Weapon Detection System",
      projectDesc: "Created a computer vision system using Faster R-CNN and CNN to detect and classify weapons accurately. Evaluated and improved weapon recognition using state-of-the-art YOLOv7 with transfer learning.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/WebGuard.png"),
      projectName: "WebGuard: ML-Powered Malicious Website Detection",
      projectDesc: "Developed machine learning models (Random Forest, XGBoost, GBM) to accurately classify websites as benign/malicious using 20+ features extracted from the website’s URL, and the best model achieved an accuracy of 0.889."
    },
    {
      image: require("./assets/images/AutoAudit.png"),
      projectName: "Automation of the internal audit process",
      projectDesc: "Developed a full-stack web application for DRDO, automating the internal audit process and achieving a paperless environment, utilized by 250+ employees daily."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏅"),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Developer - Associate",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/AWS.png"),
      imageAlt: "AWS certification",
      footerLink: [
        {
          name: "Credly",
          url: "https://www.credly.com/badges/f98e2f88-5514-4b80-9a44-cc14691b3f14/public_url"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/Oracle.png"),
      imageAlt: "Oracle certification",
      footerLink: [
        {
          name: "Credly",
          url: "https://www.credly.com/badges/53563191-afe1-4734-9305-4bb612edd92c/linked_in_profile"
        }
      ]
    }
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  // subtitle:
  //   "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-530-709-8098",
  email_address: "rrsri@ucdavis.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  academicExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
