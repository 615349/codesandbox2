import backendData from './backendData';
import { useState, useEffect } from 'react';
import Items from './Items'

function App() {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const fetchData = () => new Promise((resolve) => setTimeout(resolve, 100, backendData));

    const modifyData = (array, depth = 1) => {
      for(const item of array) {
        item.depth = depth;
        if (Array.isArray(item.children) && item.children.length > 0) {
          modifyData(item.children, depth + 1);
          item.isExpanded = true;
        } else {
          item.isExpanded = null;
        }
      }
    }

    fetchData().then((response) => {
      modifyData(response);
      setItems(response);
    })
  }, []);

  useEffect(() => {
    if (activeId === '') {
      return;
    }
    const _items = JSON.parse(JSON.stringify(items));
    const modifyIsExpanded = (array) => {
      for(const item of array) {
        if (item.id === activeId) {
          item.isExpanded = !item.isExpanded;
        } else if (item.id !== activeId && item.children?.length > 0) {
          modifyIsExpanded(item.children);
        }
      }
    }
    modifyIsExpanded(_items);
    setItems(_items);
    // to void calling the functions constantly
    setActiveId('');
  }, [activeId, items])


  return (
    <Items items={items} setActiveId={setActiveId} />
  );
}

export default App;
