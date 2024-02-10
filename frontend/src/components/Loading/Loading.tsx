import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="container">
      <FaSpinner size={25} className="loading-icon" />
      <h3>Loading... Wait...</h3>
    </div>)
}

export default Loading;