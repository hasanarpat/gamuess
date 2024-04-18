import './flip-card.css';

const FlipCard = ({ game }) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img src={game.img} alt='' className='success-card-img' />
        </div>
        <div className='flip-card-back'>
          <h1>{game.name}</h1>
          <p>{game.developer}</p>
          <div className='inline'>
            <span>Platforms</span>{' '}
            <ul>
              {game.platforms.map((platform, i) => (
                <li key={i}>{platform}</li>
              ))}
            </ul>
          </div>
          <div className='inline'>
            <span>Categories</span>
            <ul>
              {game.category.map((cat, i) => (
                <li key={i}>{cat}</li>
              ))}
            </ul>
          </div>
          <p>{game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
