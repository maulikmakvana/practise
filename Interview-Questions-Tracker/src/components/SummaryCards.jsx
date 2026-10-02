function SummaryCards({ questions }) {
  const total = questions.length;

  const solved = questions.filter(
    (q) => q.status === "Solved"
  ).length;

  const revise = questions.filter(
    (q) => q.status === "To Revise"
  ).length;

  const notSolved = questions.filter(
    (q) => q.status === "Not Solved"
  ).length;

  return (
    <div className="summary">
      <div className="card">
        <h3>Total Questions</h3>
        <h2>{total}</h2>
      </div>

      <div className="card">
        <h3>Solved</h3>
        <h2>{solved}</h2>
      </div>

      <div className="card">
        <h3>To Revise</h3>
        <h2>{revise}</h2>
      </div>

      <div className="card">
        <h3>Not Solved</h3>
        <h2>{notSolved}</h2>
      </div>
    </div>
  );
}

export default SummaryCards;