import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context';

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);


  let projectName = '';

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h1 data-testid="project-name">{projectName}</h1>

      <div className="flex-container">

      {/* {projects && 'Not'} */}
        <div className="flex-insider">
          {/* <p style={{width:'84px', padding: '3px 6px', borderRadius:'3px', color: 'rgb(55, 53, 47)', fontSize: '14px', background: '#ffccd1'}}>Not Started</p> */}
          <div className="tagNotStarted">
            <div className="tagInner">Not Started</div>
          </div>
          <ul className="tasks__list">
      
            {tasks.map(task => (
              <li>
                {task.status == 'notStarted' ?  <Checkbox id={task.id} taskDesc={task.task} taskStatus={task.status} ></Checkbox> : null}
              </li>
            ))}
          </ul>
        </div>
        
        
        <div className="flex-insider">
          <div className="tagInProgress">
            <div className="tagInner">In Progress</div>
          </div>
          <ul className="tasks__list">                 
      
            {tasks.map(task => (
              <li>
                {task.status == 'inProgress' ?  <Checkbox id={task.id} taskDesc={task.task} taskStatus={task.status} ></Checkbox> : null}
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex-insider">
          <div className="tagCompleted">
            <div className="tagInner">Completed</div>
          </div>
          <ul className="tasks__list">                 
      
            {tasks.map(task => (
              <li>
                {task.status == 'completed' ?  <Checkbox id={task.id} taskDesc={task.task} taskStatus={task.status} ></Checkbox> : null}
              </li>
            ))}
          </ul>
        </div>

      </div>
        
      <AddTask />
    </div>
  );
};
