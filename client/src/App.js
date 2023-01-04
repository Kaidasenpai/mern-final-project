import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Blogs from './pages/Blogs';
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';
import BlogDetails from './pages/BlogDetails';
import BlogForm from './pages/blogForm';
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()
  return (
    <Router>
      <div>

        {/* navbar imported here */}
        <Navbar />

        <div className="bg-[#ABF4AA] p-5  ">
          <div className='bg-white rounded-md drop-shadow-2xl'>
            {/* content starts here */}

            <Routes>

              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />

              <Route
                path="/create"
                element={user ? <BlogForm /> : <Navigate to="/login" />}
              />

              <Route
                path="/Register"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />

              <Route
                path="/Blogs"
                element={<Blogs />}
              />
              <Route
                path="/Blog/:id"
                element={<BlogDetails />}
              />

              <Route
                path="/Donate"
                element={<Donate />}
              />

              <Route
                path="*"
                element={<NotFound />}
              />

            </Routes>

            {/* content ends here */}
          </div>
        </div>


        {/* footer imported here */}
        <Footer />
      </div>
    </Router>
  );
}




export default App;
