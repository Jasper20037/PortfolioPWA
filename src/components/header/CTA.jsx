// Component for call to action buttons in the header
import React from "react";

// Importing CV file
import ReadingGuide from "../../assets/PDF/ReadingGuide1.pdf";

const CTA = () => {
  return (
    <article className="cta">
      {/* CV can also be reading guide */}
      <a className="button" href={ReadingGuide} download>
        Download Reading Guide
      </a>
      <a className="button primary-button" href="#contact">
        Get in Contact
      </a>
    </article>
  );
};

export default CTA;
