import { useNavigate } from "react-router-dom"

function Home () {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to the Todo App</h1>
      <button onClick={() => navigate("/appdev1-final-exam/login")}>Go to Login</button>
    </div>
  )
}

export default Home