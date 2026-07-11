// import Form from "./Form.css"

import "./Form.css";
export default function Form() {
  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text"></input>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number"></input>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2026-01-01" max="2026-12-31"></input>
      </div>
      <div className="new-expense__control">
        <button type="submit">Add your Expenses</button>
      </div>
    </div>
  );
}
