import './Icon.css';

const Icon = ({ isExpanded }) => {
  switch(isExpanded) {
    case true:
      return <span className='icon'>▼</span>;
    case false:
      return <span className='icon flip'>▼</span>
    case null:
    default:
      return <span className='icon'>•</span>;
  }
}

export default Icon;