import './App.css'
import ToastComponent from "./components/Toast.tsx";
import HomePage from "./pages/Home.tsx";

function App() {
    return (
      <div className="container pb-4">
          <HomePage />
          <div className="row justify-content-center mt-4">
              <ToastComponent
                  label="Test"
                  title="I am a Title"
                  time="20 sec. ago"
                  message="This is a Message"
              />
          </div>
      </div>
  )
}

export default App
