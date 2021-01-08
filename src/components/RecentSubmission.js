import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';

const RecentSubmission = (props) => {
  const compiledSubmissions = props.submissions.map((submission) => {
    return(
      <PlayerSubmissionForm 
      adjOne={submission.adjOne} 
      nounOne={submission.nounOne} 
      adverb={submission.adverb} 
      verb={submission.verb} 
      adjTwo={submission.adjTwo} 
      nounTwo={submission.nounTwo} />
    )
  });

  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">
        {props.newLine}
      </p>
    </div>
  );
}

RecentSubmission.propTypes = {
  submission: PropTypes.string.isRequired,
};

export default RecentSubmission;
