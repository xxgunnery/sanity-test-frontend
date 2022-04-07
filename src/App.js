import { BrowserRouter, Routes, Route } from "react-router-dom"

// Views
import Home from "./views/Home"

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
        <div className="max-w-full">
            <Header />
        </div>
        <Routes>
            <Route element={< Home/>} exact path="/" />
        </Routes>
        <div className="max-w-full">
            <Footer />
        </div>
    </BrowserRouter>
  )
}