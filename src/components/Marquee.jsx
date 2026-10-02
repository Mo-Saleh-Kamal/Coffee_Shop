const Marquee = ({ text }) => (
  <div className="marquee">
    <div className="marquee-track">
      {[...Array(4)].map((_, i) => (
        <span key={i}>{text} ● </span>
      ))}
    </div>
  </div>
);

export default Marquee;
