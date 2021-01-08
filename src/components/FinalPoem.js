import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const submittedPoem = props.submissions.map((line, i) => {
    return(
    <p key={i}>{line}</p>
    )
  })
  
  const onRevealPoemButtonClick = () => {
    props.revealPoem();
  }

  const revealPoem =
  <section className="FinalPoem__poem">
    <h3>Final Poem</h3>
    {submittedPoem}
  </section>;

  const revealPoemButton =
  <div className="FinalPoem__reveal-btn-container">
      <input type="button" 
      value="We are finished: Reveal the Poem" 
      className="FinalPoem__reveal-btn" 
      onClick={onRevealPoemButtonClick } />
  </div>

const content = props.isSubmitted ? revealPoem : revealPoemButton;

return (
  <div className="FinalPoem">
    { content }
  </div>
  );
};

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
