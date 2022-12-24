import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Content from './Content';
import Header from './components/Header/frontbanner';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)

  };
  return (
    <section className='menu section'>
      <div className="title">
        <Header />
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Content />
      <Menu items={menuItems} />
    </section >

  );
}
export default App;