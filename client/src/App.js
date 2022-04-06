import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <PostList />
      <Routes>
        <Route path="/post/:id" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
