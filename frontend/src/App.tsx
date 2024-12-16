import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToastComponent from "./components/Toast.tsx";
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

    return (
      <>
          <div>
              <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>

          <div className="p-1">
              <Button variant="primary" className="mr-1">
                  Primary
              </Button>
              <Button variant="secondary" className="mr-1">
                  Secondary
              </Button>
              <Button variant="success" className="mr-1">
                  Success
              </Button>
              <Button variant="warning" className="mr-1">
                  Warning
              </Button>
              <Button variant="danger" className="mr-1">
                  Danger
              </Button>
              <Button variant="info" className="mr-1">
                  Info
              </Button>
              <Button variant="light" className="mr-1">
                  Light
              </Button>
              <Button variant="dark" className="mr-1">
                  Dark
              </Button>
              <Button variant="link" className="mr-1">
                  Link
              </Button>
          </div>

          <div className="row justify-content-center mt-4">
              <ToastComponent
                  title="I am a Title"
                  time="20 sec. ago"
                  message="This is a Message"
              />
          </div>
      </>
  )
}

export default App
