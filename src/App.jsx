import { Header } from "./components/header"
import Post from "./post"
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <Post authror="Flavio" content="My Content" />
      <Post authror="John Doe" content="lorem ipsum dolor sit amet" />
    </div>
  )
}

export default App
