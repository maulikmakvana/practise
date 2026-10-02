import { useEffect, useState } from "react";

function QuestionForm({ question, onSave, onClose }) {

  const [form, setForm] = useState({
    title: "",
    category: "",
    difficulty: "Easy",
    status: "Not Solved",
    lastPracticed: "",
    notes: ""
  });

  useEffect(() => {
    if (question) {
      setForm(question);
    }
  }, [question]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.title ||
      !form.category ||
      !form.difficulty ||
      !form.status
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave(form);
  }

  return (
    <div className="modal-bg">

      <div className="modal">

        <h2>
          {question ? "Edit Question" : "Add Question"}
        </h2>

        <form onSubmit={handleSubmit}>

          <label>Question *</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter question"
          />

          <label>Category *</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option>React JS</option>
            <option>JavaScript</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>Node JS</option>
          </select>

          <label>Difficulty *</label>
          <select
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <label>Status *</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option>Not Solved</option>
            <option>To Revise</option>
            <option>Solved</option>
          </select>

          <label>Last Practiced</label>
          <input
            type="date"
            name="lastPracticed"
            value={form.lastPracticed}
            onChange={handleChange}
          />

          <label>Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Write notes..."
          />

          <div className="form-buttons">
            <button type="submit">
              Save
            </button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default QuestionForm;