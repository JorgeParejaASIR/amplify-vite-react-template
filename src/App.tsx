import { useEffect, useState } from "react";

type Todo = {
  id: string;
  content: string | null;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos([
    { id: "1", content: "React sin Amplify" },
    { id: "2", content: "Que suplicio macho, ni haciendome del Hercules" },
    ]);
  }, []);


  return (
    <main>
      <h1>My todos</h1>
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 Aplicación funcionando con React y sin Amplify.
        <br />
        <a>
          Ya no se usa tyufguygyjygjgyj.
        </a>
      </div>
    </main>
  );
}

export default App;
