import AboutSection from "../components/AboutSection";
import Reveal from "../components/Reveal";

const AboutPage = ({ onNavigate }) => (
  <>
    <div className="page-header">
      <Reveal variant="up">
        <h1>من نحن</h1>
      </Reveal>
    </div>
    <AboutSection onNavigate={onNavigate} />
  </>
);

export default AboutPage;
