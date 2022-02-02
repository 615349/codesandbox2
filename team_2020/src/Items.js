import Icon from './Icon';
import './Items.css';

const Items = ({ items, setActiveId }) => {
  const toggleExpand = (e, item) => {
    e.preventDefault();
    if (item.isExpanded === null) {
      return;
    }
    setActiveId(item.id);
  }

  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <div style={{ marginLeft: item.depth * 10 }}>
            <Icon isExpanded={item.isExpanded} />
            <span className={`${item.isExpanded !== null ? 'item-name' : ''}`} onClick={(e) => toggleExpand(e, item)}>{item.name}</span>
            {item.isExpanded && item.children && <Items items={item.children} setActiveId={setActiveId} />}
          </div>
        </div>
      ))}
    </>
  )
}

export default Items;