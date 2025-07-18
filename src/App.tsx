import React from "react";
import useTodos from "./useTodos";
import "./styles.css"; 

function App() {
  const { todos, loading } = useTodos();

  if (loading) return <p>Loading...</p>;

  const uniqueUsers = getUniqueUsers(todos);

  return (
    <div className="app">
      {uniqueUsers.map((user) => (
        <div key={user.userId} className="card">
          <p>User ID: {user.userId}</p>
        </div>
      ))}
    </div>
  );
}

const getUniqueUsers = (todos: { userId: number }[]) => {
  const seen = new Set<number>();
  return todos.filter((todo) => {
    if (!seen.has(todo.userId)) {
      seen.add(todo.userId);
      return true;
    }
    return false;
  });
};

export default App;
