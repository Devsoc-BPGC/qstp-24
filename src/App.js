import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Register from "./pages/Register";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/register/:course" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
