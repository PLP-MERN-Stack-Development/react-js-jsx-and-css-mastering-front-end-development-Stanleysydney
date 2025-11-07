import React from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

const TasksPage = () => {
  return (
    <Card title="Task Management">
      <TaskManager />
    </Card>
  );
};

export default TasksPage;