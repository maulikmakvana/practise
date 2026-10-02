function FilterBar({
  category,
  setCategory,
  difficulty,
  setDifficulty,
  status,
  setStatus,
  setShowForm
}) {
  return (
    <div className="filter-bar">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="React JS">React JS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Node JS">Node JS</option>
      </select>

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">All Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Solved">Solved</option>
        <option value="To Revise">To Revise</option>
        <option value="Not Solved">Not Solved</option>
      </select>

      <button onClick={() => setShowForm(true)}>
        + Add Question
      </button>

    </div>
  );
}

export default FilterBar;