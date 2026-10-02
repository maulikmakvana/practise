function Header({ search, setSearch }) {
  return (
    <header className="header">
      <div>
        <h1>Interview Questions Tracker</h1>
        <p>Practice and track your interview questions</p>
      </div>

      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="profile">
        <span>Student</span>
      </div>
    </header>
  );
}

export default Header;