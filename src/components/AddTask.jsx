import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("please add a task");
      return;
    }

    onAdd({ text, day, month, year, reminder, time });
    setText("");
    setDay("");
    setMonth("");
    setYear("");
    setTime("");
    setReminder("");
  };

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text}
          placeholder="Add task here"
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Month</label>
        <input
          type="text"
          value={month}
          placeholder="Add month here"
          onChange={(e) => setMonth(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          value={day}
          placeholder="Add day here"
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Year</label>
        <input
          type="text"
          value={year}
          placeholder="Add year here"
          onChange={(e) => setYear(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          type="text"
          value={time}
          placeholder="Add time here"
          onChange={(e) => setTime(e.target.value)}
        ></input>
      </div>
      <div className="reminderDiv">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        className="btn add-button"
        value="Save Task"
        onClick={onSubmit}
      ></input>
    </form>
  );
};

export default AddTask;
