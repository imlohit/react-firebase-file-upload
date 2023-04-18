import React from "react"
import Signup from "./authentication/signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./authentication/login"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/forgotPassword"
import UpdateProfile from "./authentication/updateProfile"

function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path="/updateProfile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
            <Route  path="/signup" element={<Signup/>} />
            <Route  path="/login" element={<Login/>} />
            <Route  path="/forgotPassword" element={<ForgotPassword/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  </Container>
  );
}

export default App;



    
      