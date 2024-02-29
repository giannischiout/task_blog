import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={< Blog />} />
				<Route path="/post/:id" element={<BlogDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
