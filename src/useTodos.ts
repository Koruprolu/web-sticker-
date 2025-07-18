import { useEffect, useState } from "react";


export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        const data = await response.json();
        setTodos(data); 
        setLoading(false); 
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return { todos, loading };
};

export default useTodos;
