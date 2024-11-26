import { Header } from './components/header';
import{Post} from './Post'
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css'
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Flavio"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Teste"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}

export default App
