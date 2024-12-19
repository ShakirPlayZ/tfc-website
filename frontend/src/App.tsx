import './App.css'
import NavbarComponent from "./components/Navbar.tsx";
import AppRoutes from "../routes/AppRoutes.tsx";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <NavbarComponent />
                <div className="pb-4">
                    <AppRoutes />
                </div>
            </Router>
        </>
  )
}

export default App
