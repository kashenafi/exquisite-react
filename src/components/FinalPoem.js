import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const [reveal, setReveal] = useState(false);

  const FinalPoemComponents = props.savedLines.map((line, i) => {
    return (
      <p key={i}>
        {line}
      </p>
    );
  });

  const toReveal = () => {
    setReveal(true);
  }

  return (
      <div className="FinalPoem" >
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {reveal == true ? FinalPoemComponents : '' }
      </section>

      <div className="FinalPoem__reveal-btn-container" >
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={toReveal}/>
    </div>
  );
};

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
