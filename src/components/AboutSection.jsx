import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const AboutSection = ({ onNavigate }) => (
  <section className="about-section">
    <div className="container about-grid">
      <Reveal variant="left">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800"
            alt="About"
          />
        </div>
      </Reveal>
      <div className="about-text">
        <Reveal variant="right">
          <span className="subtitle">من نحن</span>
          <h2>قصة شغف بدأت من حبة قهوة</h2>
          <p>
            بدأت رحلتنا منذ أكثر من 10 سنوات، عندما قررنا أن نشارك العالم حبنا
            للقهوة. اليوم، نفتخر بتقديم أجود أنواع البن المختارة يدوياً من أفضل
            المزارع حول العالم.
          </p>
        </Reveal>
        <Reveal variant="right" delay={0.3}>
          <MagneticButton
            className="btn primary"
            onClick={() => onNavigate("menu")}
          >
            <span>اكتشف المنيو</span>
          </MagneticButton>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
