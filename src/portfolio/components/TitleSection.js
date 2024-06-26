const TitleSection = ({ mainTitle, highlightText, backgroundText }) => (
  <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
    <h1>
      {mainTitle} <span>{highlightText}</span>
    </h1>
    <span className="title-bg">{backgroundText}</span>
  </section>
);

export default TitleSection;
