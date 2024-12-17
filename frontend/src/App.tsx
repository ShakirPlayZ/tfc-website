import './App.css'
import ToastComponent from "./components/Toast.tsx";
import HomePage from "./pages/Home.tsx";
import NavbarComponent from "./components/Navbar.tsx";

function App() {
    return (
        <>
            <NavbarComponent />
            <div className="pb-4">
              <HomePage />
              <div className="row justify-content-center">
                  <ToastComponent
                      label="Test"
                      title="I am a Title"
                      time="20 sec. ago"
                      message="This is a Message"
                  />
              </div>
            </div>
        </>
  )
}

export default App
