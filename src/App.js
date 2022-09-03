import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checking from "./components/checking";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AsyncPostsList from "./features/asyncThunk/AsyncPostsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AsyncPostsList />} />
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/posts" element={<PostsList />} />
        <Route exact path="/check" element={<Checking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
