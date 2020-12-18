import React, {useState} from 'react';
import items from './data';
import Book from './Book';
import Categories from './Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
   const[books,setBooks] = useState(items);
   const [categories, setCategories] = useState(allCategories);
    
   const filterItems = (category) => {
      if(category === 'all'){
        setBooks(items);
        return
      }
      const newItems = items.filter((item) => item.category === category);
      console.log(newItems);
      setBooks(newItems);
   }

  return (
    <div>
    <header className="showcase">
      <div className="content">
        <div className="title">
          BookShelf
        </div>
        <div className="text">
          We have a lot of books to offer from AutoBiography, children's & self help.
        </div>
      </div>
    </header>
       <Categories filterItems={filterItems} categories={categories}/> 
       <Book items={books} />
    
    </div>

  );
}

export default App;
