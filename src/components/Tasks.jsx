import SingleTask from "./SingleTask"


const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    <>
    <div className="taskCard strong">
    <div className='task'>
        <h3 className='taskTitle strong'>Discription</h3>
        <p className='taskP'>MONTH</p>
        <p className='taskP'>DAY</p>
        <p className='taskP'>YEAR</p>
        <p className='taskP'>TIME</p>
    </div>
    <p>
      ACTION
    </p>
    </div>
    {
        tasks.map
        (
            (task)=>
            (
                <SingleTask
                key ={task.id}
                task = {task}
                onDelete={onDelete}
                onToggle={onToggle}/>
            )
        )
    }
    </>
  )
}

export default Tasks