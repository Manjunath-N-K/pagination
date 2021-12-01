import React from 'react';

import Form from './Form';
import { useParams } from 'react-router-dom';

const EditTask = ({ history, employee, setEmployee }) => {
  const { id } = useParams();
  const taskToEdit = employee.find((task) => task.id === id);

  const handleOnSubmit = (task) => {
    const filteredTasks = employee.filter((task) => task.id !== id);
    setEmployee([task, ...filteredTasks]);
    console.log(task,filteredTasks);
    history.push('/');
  };

  return (
    <div>
      <Form task={taskToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditTask;