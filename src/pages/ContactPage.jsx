import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactPage = () => (
  <>
    <div className="page-header">
      <Reveal variant="up">
        <h1>اتصل بنا</h1>
      </Reveal>
    </div>
    <section className="page-content">
      <div className="container contact-grid">
        <Reveal variant="right">
          <div className="contact-form">
            <h2 style={{ marginBottom: 30, color: "#2c1810" }}>
              أرسل لنا رسالة
            </h2>
            <input type="text" placeholder="الاسم" />
            <input type="email" placeholder="البريد الإلكتروني" />
            <input type="text" placeholder="الموضوع" />
            <textarea placeholder="رسالتك..." />
            <MagneticButton className="btn primary">
              <span>إرسال</span>
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal variant="left" delay={0.2}>
          <div>
            <h2 style={{ marginBottom: 30, color: "#2c1810" }}>
              معلومات التواصل
            </h2>
            {[
              { icon: <FaPhone />, title: "الهاتف", value: "0100 000 0000" },
              {
                icon: <FaEnvelope />,
                title: "الإيميل",
                value: "info@brewhaven.com",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "العنوان",
                value: "شارع التحرير، القاهرة",
              },
            ].map((item, i) => (
              <div key={i} className="contact-item">
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default ContactPage;
