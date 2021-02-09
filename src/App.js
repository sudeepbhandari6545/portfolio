import React from 'react';
import Mynavbar from './components/mynavbar/Mynavbar';
import Mycarousal from './components/my-carousal/Mycarousal';
import TitleMessage from './components/title-message/Titlemessage';
import About from './pages/aboutme/Aboutme';
import Skill from './pages/skill/Skill';
import Experience from './pages/experience/Experience';
import Projecttimeline from './components/Project-timeline/Projecttimeline';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Mynavbar />
      <Mycarousal />
      <TitleMessage />
      <hr />
      <About />
      <Skill />
      <Experience />
      <Projecttimeline />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </>
  );
};
export default App;
