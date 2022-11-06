import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Content from './Content';
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
    <section>
      <div className="underline">
        <div className="navbar">
          <ul>
            <li>
              <img src="https://images.indianexpress.com/2016/04/amazon-logo-480.jpg" width={105} alt=".in"></img>
            </li>
          </ul>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Content />
        <Menu items={menuItems} />
      </div>
    </section>
  );
}
export default App;