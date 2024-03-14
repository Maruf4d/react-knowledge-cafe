import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [reading , setReding] = useState(0);

  const handleBookmark = blog => {
     const newBookmarks = [...bookmarks , blog];
     setBookmarks(newBookmarks);
  }
 
  const handleMarkAsRead = time =>{
    const newReading = reading + time;
    setReding(newReading);
  }

  return (
    <>
    <div className='container mx-auto'>
    <Header></Header>
     <div className='md:flex'>
     <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}> </Blogs>
     <Bookmarks reading={reading} bookmarks={bookmarks}></Bookmarks>
     </div>
    </div>
    </>
  )
}

export default App
