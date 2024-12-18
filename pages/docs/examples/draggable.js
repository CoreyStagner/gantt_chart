import { useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  useDroppable,
  useDraggable,
} from '@dnd-kit/core';

const COLUMNS = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'DONE', title: 'Done' },
];

const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Research Project',
    description: 'Gather requirements and create initial documentation',
    status: 'TODO',
  },
  {
    id: '2',
    title: 'Design System',
    description: 'Create component library and design tokens',
    status: 'TODO',
  },
  {
    id: '3',
    title: 'API Integration',
    description: 'Implement REST API endpoints',
    status: 'IN_PROGRESS',
  },
  {
    id: '4',
    title: 'Testing',
    description: 'Write unit tests for core functionality',
    status: 'DONE',
  },
];

const Card = ({ task, key }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        padding: '8px',
        margin: '8px',
        border: '1px solid lightgray',
        borderRadius: '4px',
        backgroundColor: 'white',
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      key={key}
      {...listeners}
      {...attributes}
      style={style}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

const Column = ({ key, column, tasks }) => {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });
  const style = {
    backgroundColor: 'lightgrey',
    borderRadius: '15px',
    padding: '20px',
    margin: '20px',
    width: '300px',
    border: isOver ? '2px solid green' : '',
  };
  return (
    <div key={key} style={style} ref={setNodeRef}>
      <h2>{column.title}</h2>
      <div>
        {tasks.map((task) => (
          <Card task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  function handleDragEnd(event) {
    const { active, over } = event;

    // Make sure we are over something that is droppable
    if (!over) return;

    // Get Local variables
    const taskId = active.id;
    const newStatus = over.id;

    // Update Tasks
    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  }

  return (
    <div style={{ padding: '15px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
}
