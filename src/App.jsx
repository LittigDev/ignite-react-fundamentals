import { Post } from './Posts';

function App() {

  return (
    <div className="App">
      <Post 
        author="Gustavo" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum culpa cupiditate molestiae aliquid eius modi cum amet, unde cumque temporibus iste officia adipisci velit asperiores eaque, eveniet dolore, officiis reprehenderit."
      />
      <Post 
        author="Littig" 
        content="Outro Conteudo referente a este post"
      />
    </div>
  )
}

export default App
