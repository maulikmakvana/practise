import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";
import FilterBar from "../components/FilterBar";
import QuestionTable from "../components/QuestionTable";
import QuestionForm from "../components/QuestionForm";
import QuestionDetails from "../components/QuestionDetails";

const API = "http://localhost:5000/questions";

function Dashboard() {

  const [questions, setQuestions] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [status, setStatus] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editQuestion, setEditQuestion] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Get Questions
  async function getQuestions() {
    try {
      const res = await axios.get(API);
      setQuestions(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  // Add / Edit
  async function saveQuestion(data) {

    try {

      if (editQuestion) {

        await axios.put(
          `${API}/${editQuestion.id}`,
          data
        );

      } else {

        await axios.post(API, data);

      }

      setShowForm(false);
      setEditQuestion(null);

      getQuestions();

    } catch (error) {
      console.log(error);
    }
  }

  // Delete
  async function deleteQuestion(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this question?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(`${API}/${id}`);

      getQuestions();

    } catch (error) {
      console.log(error);
    }
  }

  // Status Update
  async function updateStatus(question, newStatus) {

    try {

      const updatedQuestion = {
        ...question,
        status: newStatus,
        lastPracticed: new Date()
          .toISOString()
          .split("T")[0]
      };

      await axios.put(
        `${API}/${question.id}`,
        updatedQuestion
      );

      getQuestions();

      if (selectedQuestion) {
        setSelectedQuestion(updatedQuestion);
      }

    } catch (error) {
      console.log(error);
    }
  }

  // Search + Filters
  const filteredQuestions = questions.filter((question) => {

    const searchText =
      question.title.toLowerCase().includes(
        search.toLowerCase()
      ) ||
      question.notes
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const categoryMatch =
      category === "" ||
      question.category === category;

    const difficultyMatch =
      difficulty === "" ||
      question.difficulty === difficulty;

    const statusMatch =
      status === "" ||
      question.status === status;

    return (
      searchText &&
      categoryMatch &&
      difficultyMatch &&
      statusMatch
    );
  });

  // Progress
  const solved = questions.filter(
    (q) => q.status === "Solved"
  ).length;

  const progress =
    questions.length > 0
      ? Math.round((solved / questions.length) * 100)
      : 0;

  return (
    <div className="container">

      <Header
        search={search}
        setSearch={setSearch}
      />

      <SummaryCards questions={questions} />

      <div className="progress-box">
        <div>
          <b>Overall Progress</b>
          <span>{progress}%</span>
        </div>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <FilterBar
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        status={status}
        setStatus={setStatus}
        setShowForm={setShowForm}
      />

      <QuestionTable
        questions={filteredQuestions}
        onView={setSelectedQuestion}
        onEdit={(question) => {
          setEditQuestion(question);
          setShowForm(true);
        }}
        onDelete={deleteQuestion}
        onStatusChange={updateStatus}
      />

      {showForm && (
        <QuestionForm
          question={editQuestion}
          onSave={saveQuestion}
          onClose={() => {
            setShowForm(false);
            setEditQuestion(null);
          }}
        />
      )}

      {selectedQuestion && (
        <QuestionDetails
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)}
          onStatusChange={updateStatus}
        />
      )}

    </div>
  );
}

export default Dashboard;