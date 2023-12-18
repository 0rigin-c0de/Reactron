import React, { useContext } from 'react';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import About from './pages/about/About';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Error from './pages/error/Error';
import UserContext from './context/UserContext';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/navbar/Navbar';

function App() {
  const context = useContext(UserContext);
  const { user,progress,setProgress} = context;
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
            color='#f11946' height={3} transitionTime={600}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/write" element={user ? <Write /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={user ? <Settings /> : <Navigate to="/login" />} />
          <Route path="/post/:postId" element={user ? < Single /> : <Navigate to="/login" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
