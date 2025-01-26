import './App.css'
import Gallery from './components/Gallery'

function App() {
  
  return (
    <div className='container'>
      <Gallery fileName="tiger.jpg" />
      <Gallery fileName="zebra.jpg" />
      <Gallery fileName="deer.jpg" />
    </div>
  )
}

export default App
