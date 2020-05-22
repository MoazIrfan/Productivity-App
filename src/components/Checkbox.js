import React, { useState } from 'react';
import {
  FaChevronDown,
  FaChevronCircleDown,
  FaTimes
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';

export const Checkbox = ({ id, taskDesc, taskStatus }) => {

  const [showProjects, setShowProjects] = useState(false);

  const archiveTask = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        archived: true,
      });
  };
  const notStarted = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        status: 'notStarted',
      });
  };
  const inProgress = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        status: 'inProgress',
      });
  };
  const completed = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        status: 'completed',
      });
  };
  // const setStatus = () => {
  //   // const projectId = project || selectedProject;
  //   // let collatedDate = '';

  //   // if (projectId === 'TODAY') {
  //   //   collatedDate = moment().format('DD/MM/YYYY');
  //   // } else if (projectId === 'NEXT_7') {
  //   //   collatedDate = moment()
  //   //     .add(7, 'days')
  //   //     .format('DD/MM/YYYY');
  //   // }

  //   return (
  //     // task &&
  //     // projectId &&
  //     firebase
  //       .firestore()
  //       .collection('tasks')
  //       .add({
  //         // archived: false,
  //         // projectId,
  //         // task,
  //         status: 'completed',
  //         // date: collatedDate || taskDate,
  //         userId: 'jlIFXIwyAL3tzHMtzRbw',
  //       })
  //       .then(() => {
  //         // setTask('');
  //         // setProject('');
  //         // setShowMain('');
  //         // setShowProjectOverlay(false);
  //       })
  //   );
  // };

  return (

    <div className="card"
      // className="checkbox-holder"
      // data-testid="checkbox-action"
      // // onClick={() => archiveTask()}
      // // onKeyDown={() => archiveTask()}
      // aria-label={`Mark ${taskDesc} as done?`}
      // role="button"
      // tabIndex={0}
    >
      
      <span  onClick={() => archiveTask()} style={{ fontSize: '13px', cursor: "pointer", float: "right" }} >
        <FaTimes
          className={!showProjects ? 'hidden-projects' : undefined}
        /> 
      </span>

      <span className="checkbox" >
      <p>{taskDesc}</p>
      </span>

      <span  onClick={() => setShowProjects(!showProjects)} style={{ fontSize: '13px', cursor: "pointer" }} >
          <FaChevronCircleDown
            className={!showProjects ? 'hidden-projects' : undefined}
          /> add status
        </span>

      {showProjects ? (
         <ul className="set-status" style={{ cursor: "pointer" }}>
           <li className="set-status" onClick={() => notStarted() }>Not Started</li>
           <li className="set-status" onClick={() => inProgress() }>In Progress</li>
           <li className="set-status" onClick={() => completed() }>Completed</li>
         </ul>
        
        ) : null}

    </div>

  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  taskDesc: PropTypes.string.isRequired,
};
