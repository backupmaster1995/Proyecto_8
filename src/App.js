import {useState,useEffect} from "react"
import Form from "./components/Form";
import Header from "./components/Header";
import NewsList from "./components/NewsList";

function App() {

  const [category, setCategory] = useState("")
  const [APInews, setAPInews] = useState([])

  useEffect(() => {
    const getNews = async () => {
      const URL = `http://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=c2a397f440d9440a84e5b39c99515794`
      const response = await fetch(URL)
      const data = await response.json()
      setAPInews(data.articles)
    }
    getNews()
  }, [category])

  return (
    <>
        <Header 
            title="Buscador de Noticias"
        />

        <div className="container white">
          <Form 
            setCategory={setCategory}
          />
          
          <NewsList 
            APInews={APInews}
          />
        </div>
    </>
    
  );
}

export default App;
