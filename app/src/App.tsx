import { QueryClient, QueryClientProvider } from "react-query";
import PostList from "./components/PostList";
import { HtmlHTMLAttributes } from "react";

const queryClient = new QueryClient();
function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  // If you pass in a param
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {};
  return (
    <QueryClientProvider client={queryClient}>
      <header className="App-header">
        <PostList />
      </header>
    </QueryClientProvider>
  );
}

export default App;
