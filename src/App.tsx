/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Amplify } from "aws-amplify"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: implicitly has an 'any' type because aws-exports.js lacks a declaration file
import outputs from "./aws-exports.js"
import { generateClient } from "aws-amplify/api"
import "@aws-amplify/ui-react/styles.css"
import { useAuthenticator } from "@aws-amplify/ui-react"

Amplify.configure(outputs)

// Generate API client
const client = generateClient({
  authMode: "userPool",
})

function App() {
  const { user, signOut } = useAuthenticator((context) => [context.user])
  const [count, setCount] = useState(0)

  useEffect(() => {

  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React + Amplify</h1>
      <p>Signed in as: {user?.username}</p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Favorite Restaurant : Teriyaki Madness count : {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <button onClick={signOut} style={{ marginTop: "1rem" }}>
        Sign out
      </button>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


