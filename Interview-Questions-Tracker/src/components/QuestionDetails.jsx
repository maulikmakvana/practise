function QuestionDetails({ question, onClose, onStatusChange }) {
  if (!question) {
    return null;
  }

  return (
    <div className="modal-bg">

      <div className="modal">

        <h2>Question Details</h2>

        <h3>{question.title}</h3>

        <p>
          <b>Category:</b> {question.category}
        </p>

        <p>
          <b>Difficulty:</b> {question.difficulty}
        </p>

        <p>
          <b>Status:</b> {question.status}
        </p>

        <p>
          <b>Last Practiced:</b>{" "}
          {question.lastPracticed || "-"}
        </p>

        <p>
          <b>Notes:</b>
        </p>

        <div className="notes">
          {question.notes || "No notes added."}
        </div>

        <label>Update Status</label>

        <select
          value={question.status}
          onChange={(e) =>
            onStatusChange(question, e.target.value)
          }
        >
          <option>Solved</option>
          <option>To Revise</option>
          <option>Not Solved</option>
        </select>

        <button onClick={onClose}>
          Close
        </button>

      </div>

    </div>
  );
}

export default QuestionDetails;