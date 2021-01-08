import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  const PlayerSubmissionForm = (props) => {
    const [wordFields, setWordFields] = useState({
      adjOne: '',
      nounOne: '',
      adverb: '',
      verb: '',
      adjTwo: '',
      nounTwo: ''
    })
  
    const onInputChange = (event) => {
      console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
      const newWordFields = {
        ...wordFields,
      }
      newWordFields[event.target.name] = event.target.value;
      setWordFields(newWordFields);
    }
  
    const onFormSubmit = (event) => {
      event.preventDefault(); 
  
      props.submitPlayerLine(wordFields);
  
      setWordFields({
        adjOne: '',
        nounOne: '',
        adverb: '',
        verb: '',
        adjTwo: '',
        nounTwo: ''
      });
    };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <input type="text" placeholder="adjective" name="adjOne" value={wordFields.adjOne} onChange={onInputChange}/>
          <input type="text" placeholder="noun" name="nounOne" value={wordFields.nounOne} onChange={onInputChange}/>
          <input type="text" placeholder="adverb" name="adverb" value={wordFields.adverb} onChange={onInputChange}/>
          <input type="text" placeholder="verb" name="verb" value={wordFields.verb} onChange={onInputChange}/>
          <input type="text" placeholder="adjective" name="adjTwo" value={wordFields.adjTwo} onChange={onInputChange}/>
          <input type="text" placeholder="noun" name="nounTwo" value={wordFields.nounTwo} onChange={onInputChange}/>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
