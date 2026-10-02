import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import MenuCard from "../components/MenuCard";
import AboutSection from "../components/AboutSection";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import MagneticButton from "../components/MagneticButton";
import { menuData } from "../data/menuData";

const HomePage = ({ onNavigate }) => (
  <>
    <Hero onNavigate={onNavigate} />
    <Marquee text="قهوة طازجة ● توصيل سريع ● جودة عالية" />

    <section className="featured">
      <div className="container">
        <Reveal variant="up">
          <div className="section-header">
            <span className="subtitle">منيو مميز</span>
            <h2>أشهر مشروباتنا</h2>
          </div>
        </Reveal>

        <div className="menu-grid">
          {menuData.slice(0, 4).map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <Reveal variant="scale" delay={0.3}>
          <div className="center-btn">
            <MagneticButton
              className="btn primary"
              onClick={() => onNavigate("menu")}
            >
              <span>اعرض المنيو كامل</span>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>

    <AboutSection onNavigate={onNavigate} />

    <section className="stats">
      <div className="container stats-grid">
        {[
          { to: 5000, suffix: "+", label: "عميل سعيد" },
          { to: 50, suffix: "+", label: "نوع قهوة" },
          { to: 10, suffix: "", label: "سنوات خبرة" },
          { to: 24, suffix: "/7", label: "خدمة متواصلة" },
        ].map((s, i) => (
          <Reveal key={i} variant="up" delay={i * 0.15}>
            <div className="stat-box">
              <h3>
                <Counter to={s.to} suffix={s.suffix} />
              </h3>
              <p>{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="features">
      <div className="container features-grid">
        {[
          { icon: "☕", title: "حبوب مختارة", desc: "نستورد أجود أنواع البن" },
          { icon: "🔥", title: "تحميص طازج", desc: "نحمص القهوة يومياً" },
          { icon: "🚚", title: "توصيل سريع", desc: "خلال 30 دقيقة" },
        ].map((f, i) => (
          <Reveal key={i} variant="up" delay={i * 0.15}>
            <div className="feature-box">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </>
);

export default HomePage;
