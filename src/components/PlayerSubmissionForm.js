import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

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

  const isValid = (val) => {
    return val && val.length
  }

  const formSubmission = () => props.fields.map(field => {
    if (typeof field === 'object') {
      return wordFields[field.key]
    }
    return field
  }).join(' ')

  const onFormSubmit = (event) => { // stops browser from trying to submit the form

    event.preventDefault();
    props.sendSubmission(formSubmission());

    setWordFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={ onFormSubmit } >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            props.fields.map((field, i) => {

              if (typeof field === 'object') {
                return(
                  <input
                    key={i}
                    value={wordFields[field.key]}
                    name={field.key}
                    placeholder={field.placeholder}
                    type="text" 
                    onChange={onInputChange}
                    className={isValid(wordFields[field.key]) ? 'PlayerSubmissionForm__input' : 'PlayerSubmissionForm__input--invalid'}
                  />
                )
              } else {
                return(
                  <span key={i}>
                    {field}
                  </span>
                )
              }
            })
          }
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
