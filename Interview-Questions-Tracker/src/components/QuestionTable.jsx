function QuestionTable({
  questions,
  onView,
  onEdit,
  onDelete,
  onStatusChange
}) {
  return (
    <div className="table-box">

      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Status</th>
            <th>Last Practiced</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {questions.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty">
                No questions found.
              </td>
            </tr>
          ) : (
            questions.map((question) => (
              <tr key={question.id}>

                <td>{question.title}</td>

                <td>{question.category}</td>

                <td>{question.difficulty}</td>

                <td>
                  <select
                    className={`status ${question.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    value={question.status}
                    onChange={(e) =>
                      onStatusChange(question, e.target.value)
                    }
                  >
                    <option>Solved</option>
                    <option>To Revise</option>
                    <option>Not Solved</option>
                  </select>
                </td>

                <td>{question.lastPracticed || "-"}</td>

                <td className="actions">
                  <button onClick={() => onView(question)}>
                    View
                  </button>

                  <button onClick={() => onEdit(question)}>
                    Edit
                  </button>

                  <button
                    className="delete"
                    onClick={() => onDelete(question.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
}

export default QuestionTable;