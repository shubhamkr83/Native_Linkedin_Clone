import Images from "../Utils/Images";

export default Profile = {
  INFO: {
    name: 'Shubham Kumar',
    company: 'Priyadarshini College of Engineering Nagpur',
    profile_picture: Images.PROFILE_PICTURE,
    banner: Images.BANNERS.BANNER7,
    bio: 'Computer Science Engineer | JAVA Developer | MERN Stack Developer | React-Native Developer',
    talksAbout: ['reactjs', 'react-native', 'webdevelopment', 'javascript', 'androiddevelopment'],
    followers: 3256,
    connections: 2165,
  },
  ANALYTICS: {
    profile_views: 1065,
    post_impressions: 6589,
    search_appearence: 471
  },
  ABOUT: "I am a Computer Technology student who recently graduated from Priyadarshini College of Engineering Nagpur with a Bachelor of Engineering degree. Throughout my studies, I have gained proficiency in JAVA Programming, MERN Stack development and Native App Development. I also had 2 months of internship experience in Full Stack Development in AliGn InfoTech at Nagpur. Additionally, I have experience with other technologies like Blockchain, Web3, Tailwind CSS, Bootstrap, EJS Template Engine, Rest  API and Styled Components. I also partcipated and contributed in open-source program. ",
  EXPERIENCE: [
    {
      logo: Images.LOGOS.LOGO5,
      title: 'Full Stack Developer',
      companyName: 'M.I. Solutions',
      jobType: 'Full-Time',
      startDate: 'Fab-2022',
      endDate: 'Apr-2022'
    }
  ],
  EDUCATION: [
    {
      logo: Images.LOGOS.UNIVERSITY,
      college: 'Priyadarshini College of Engineering Nagpur',
      name: "Bachelor's Degree, Computer Science",
      time: '2019-2023',
      CGPA: 7.6
    }
  ],
  LICENSE_CERTIFICATION: [
    {
      logo: Images.LOGOS.LOGO9,
      title: 'Java & DSA',
      issuedDate: 'Aug-2022',
      hasCertificate: true,
      certificate: 'https://ninjasfiles.s3.amazonaws.com/certificate2745156a3e3dce91cfcec20cb0e2b25c49a7a81.pdf'
    },
    {
      title: 'FrontEnd Excellence in HTML, CSS and JavaScript',
      logo: Images.LOGOS.LOGO4,
      issuedDate: 'Dec-2022',
      hasCertificate: true,
      certificate: 'https://ninjasfiles.s3.amazonaws.com/certificate274515892dec6bf84f2a873c3cf7a6c0abf0ac1.pdf'
    },
    {
      title: 'Backend Excellence in Nodejs',
      logo: Images.LOGOS.LOGO8,
      issuedDate: 'Mar-2023',
      hasCertificate: true,
      certificate: 'https://ninjasfiles.s3.amazonaws.com/certificate2745161922e8d3decd314807677d34778ccfb9f.pdf'
    },
    {
      title: 'Reactjs Development',
      logo: Images.LOGOS.LOGO7,
      issuedDate: 'Mar-2023',
      hasCertificate: true,
      certificate: 'https://ninjasfiles.s3.amazonaws.com/certificate27451636ed8923e5ff90c24db51eccb2a3c9991.pdf'
    },
  ],
  SKILLS: [
    {
      title: 'JAVA',
      endorsements: 7
    },
    {
      title: 'HTML & CSS',
      endorsements: 10
    },
    {
      title: 'JavaScript',
      endorsements: 8
    },
    {
      title: 'Reactjs',
      endorsements: 9
    },
    {
      title: 'React Native',
      endorsements: 6
    },
    {
      title: 'Nodejs',
      endorsements: 6
    },
    {
      title: 'Expressjs',
      endorsements: 6
    },
    {
      title: 'MongoDB',
      endorsements: 7
    }
  ],
  COURSES: [
    'React Native Tutorial',
    'React-Native Crash Course by S.G.',
    'Project Development with React-Native'
  ],
  PROJECTS: [
    {
      title: 'Foodie',
      startDate: 'Mar-2023',
      endDate: 'May-2023',
      isLinkPresent: true,
      link: 'https://github.com/shubhamkr83/Foodie-WebApp',
      description: 'Designed and developed online food ordering web application with NodeJs and ExpressJs for structure backend and MongoDB for database.'
    },
    {
      title: 'Shopperia',
      startDate: 'Mar-2021',
      endDate: 'Aug-2021',
      isLinkPresent: true,
      link: 'https://github.com/shubhamkr83/Shopperia',
      description: 'Designed and developed online food ordering web application with NodeJs and ExpressJs for structure backend and MongoDB for database.'
    },
  ],
  PEOPLE_VIEWED: [
    {
      profile_picture: Images.USERS.USER1,
      name: 'Abhishak Panday',
      title: 'SDE-1 @Google || Full Stack Developer',
      connection: '1st',
    },
    {
      profile_picture: Images.USERS.USER2,
      name: 'Oliver',
      title: 'Student at KMS College of Engineering',
      connection: '2nd',
    },
    {
      profile_picture: Images.USERS.USER4,
      name: 'Priya Sharma',
      title: 'Senior Software Developer',
      connection: '3rd',
    },
    {
      profile_picture: Images.USERS.USER5,
      name: 'Jone',
      title: 'Heading Marketing @jo',
      connection: '2nd',
    },
    {
      profile_picture: Images.USERS.USER6,
      name: 'Shivam Kalra',
      title: '50K+ Linkedin followers',
      connection: '1st',
    },
    {
      profile_picture: Images.USERS.USER9,
      name: 'Rishi Kumar',
      title: '100K+ followers | Influencer',
      connection: '2nd',
    },
  ],
};
