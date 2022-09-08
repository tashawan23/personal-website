import NavigationBar from '../components/NavigationBar';
import './Homepage.css';

function Homepage() {
  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/tasha-marion-wan-166314202/")
  }

  const goToGithub = () => {
    window.open("https://github.com/tashawan23")
  }

    return (
      <div className='Home'>
        <NavigationBar/>
        <div className='home-container'>
        <div className='app-header'>
          <div className='profile-section'>
          <img
            src={require("../assets/me-cropped.png")}
            alt='Me'
            className='profile-pic'/>
              <button className='social-button' onClick={goToLinkedin}>LinkedIn</button>
          <button className='social-button' onClick={goToGithub}>Github</button>
          </div>
             <div className='intro'>
               <div className='intro-header'>Hi, I am Tasha!</div>
               <div className='intro-text'>Year 4 Computer Science undergradute studying in NUS and an aspiring software engineer.
               I have experience in full stack development and I am always looking for new experiences to discover my interests further!
               I have a passion for solving problems and building things and I am excited to learn more about things I am interested in. 
               </div>
               </div>
        </div>
        <ul className='home-content'>
        <li className='home-section'>
          <div className='section-header'>ABOUT ME</div>
          <div className='section-para'>
            <div>I am currently pursuing my final year in Computer Science at the National University of
          Singapore. I am interested in both frontend and backend development and have experience in web development and both IOS and Android app development.
          </div>
          </div>
        </li>
        <li className='home-section'>
          <div className='section-header' id='experience'>EXPERIENCE</div>
          <div>
          <div className='section-para'>
            <div className='exp-title'>Full Stack Software Developer Intern at Wise, May 2022 – Aug 2022</div>
            <br />
            <div className='exp-desc'>Developed internal tools and API for the ordering and issuance of virtual and physical cards</div>
            <ul>
              <li>Built new API endpoints for internal end to end services with gRPC by implementing server and client code, increasing the speed and efficiency of message transmission</li>
              <li>Developed an internal mass card order fee refund tool with the integration of an internal double approval system to refund customers, increasing the efficiency of the process significantly and eliminating the reliance of the operations team on the engineering team to execute this manually using Postman</li>
              <li>Configured authorization rules using JW Bouncer and SPIFFE to comply with security regulations and ensure that the approval and execution of the fee refund can only be done by authorized team members</li>
              <li>Implemented search for card details by card order id for an internal platform using Apache Camel Elasticsearch, Kafka to subscribe to stream of events and Angular for frontend implementation</li>
              <li>Deployed code to Production with Octopus and monitored performance with Kibana, Grafana and Rollbar</li>
            </ul>
          </div>
          <br />
          <div className='section-para'>
            <div className='exp-title'>Frontend Software Developer Intern at TicTag, May 2021 – Nov 2021</div>
            <br />
            <div className='exp-desc'>Designed and developed features for a data tagging mobile application and web application for the distribution of tasks and labelling of data</div>
            <ul>
              <li>Designed and developed a redemption feature to allow users to redeem prizes with awarded coins by using Figma, React Native and Redux, reducing the time needed for users to submit their requests and admins to manually process their redemptions by 40%</li>
              <li>Designed and implemented a Job Board feature for users to select jobs based on their badge levels and be assigned to these jobs automatically by using Figma, React Native and Rematch, reducing the time needed for admins to manually assign tasks by 80%</li>
              <li>Developed a referral code system for new users to sign up and be verified automatically by using Expo Linking and Redux to parse deep links and maintain referrer’s information, improving initial sign-up rates by 20%</li>
              <li>Implemented a flow to save user’s tags and progress to LocalStorage by using React Native and Redux, improving tagging accuracy by 50%</li>
            </ul>
          </div>
          <br />
          <div className='section-para'>
            <div className='exp-title'>Full Stack Software Developer Intern at SILENUS, Nov 2021- Jan 2022</div>
            <br />
            <div className='exp-desc'>Designed and developed a mobile party game, DrinkLah!</div>
            <ul>
              <li>Developed components and implemented state management for multiple mini-games within the mobile app by using React Native and Redux</li>
              <li>Implemented back end for card game by using Firebase Realtime database to connect the application to Google Sheets</li>
            </ul>
          </div>
          </div>
        </li>
        <li className='home-section'>
          <div className='section-header' id='projects'>PROJECTS</div>
          <div>
          <div className='section-para'>
            <div className='exp-title'>Posetography</div>
            <br />
            <div className='exp-desc'>Designed and developed an iOS photography application that provides on the spot guidelines for photo taking, 2D pose simulation frames and pose ideas</div>
            <ul>
              <li>Developed components for social media feed and uploading and storage of user images by using Swift and Firebase</li>
              <li>Implemented pose frame display and step by step instructions on how to position camera and pose by using Swift</li>
            </ul>
          </div>
          <br />
          <div className='section-para'>
            <div className='exp-title'>Covid-19 Data Analysis and Case Prediction</div>
            <br />
            <ul>
              <li>Analyzed trends such as the correlation between number of cases and GDP, death rate and GDP, death rate and age band, in Covid-19 cases on a per country basis by using Python and Pandas</li>
              <li>Developed a decision tree machine learning model to predict the number of future Covid-19 cases based on the historical number of cases per day in Singapore by using scikit-learn</li>
            </ul>
          </div>
          <br />
          <div className='section-para'>
            <div className='exp-title'>Secret Santa</div>
            <br />
            <div className='exp-desc'>Developed a web application for users to organize events and manage the sharing of wish lists by using a MERN stack</div>
            <ul>
              <li>Designed and developed a wish list and event creation feature by using React and Redux and used MongoDB to store user data</li>
            </ul>
          </div>
          </div>
        </li>
        <li className='home-section'>
          <div className='section-header' id='skills'>SKILLS</div>
          <div className='section-para'>
          <div>Java, JavaScript, React, React Native, HTML5, CSS3, C, Python, Ruby on Rails, Redux, Figma</div>
          <div className='section-para'>Languages: Fluent in English and Mandarin </div>
          </div>
        </li>
        </ul>
        </div>
      </div>
    );
  }
  
  export default Homepage;
