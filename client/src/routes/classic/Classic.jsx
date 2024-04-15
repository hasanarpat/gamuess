import { useState } from 'react';
import './classic.css';
import useDebouncedValue from '../../lib/useDebouncedValue';

const game = {
  img: '../../public/game-sample.png',
  id: 1,
  name: 'Game Dev Tycoon',
  platforms: ['linux', 'windows', 'ios', 'android'],
  category: ['indie', 'strategy', 'simulator'],
  developer: 'greenheart Games',
  description:
    'In Game Dev Tycoon you replay the history of the gaming industry by starting your own video game development company in the 80s. Create best selling games. Research new technologies and invent new game types. Become the leader of the market and gain worldwide fans.',
};
const guessedPeople = 4218;
const averageTry = 1;

const Classic = () => {
  const [gameName, setGameName] = useState('');
  const debouncedValue = useDebouncedValue(gameName, 500);
  const [passedHeart, setPassedHeart] = useState(2);

  const handleSubmit = () => {};
  const handlePass = () => {
    if (passedHeart <= 6) {
      setPassedHeart((prev) => prev + 1);
    } else {
      return;
    }
  };

  return (
    <main className='classic'>
      <div className='wrapper'>
        <img src={game.img} alt='game' className='game-img' />
        <div className='who-guessed'>
          <p>
            <span className='guess-number'>{guessedPeople}</span>
            of people already guessed true on /
            <span className='guess-number'>{averageTry}</span>average try
          </p>
        </div>
        <div className='input-area'>
          <input
            type='text'
            placeholder='Search game...'
            className='game-input'
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
          <div className='games'></div>
          <div className='buttons'>
            <button onClick={handlePass}>Pass</button>
            <button onClick={handleSubmit}>Try it</button>
          </div>
        </div>
        {passedHeart && (
          <div className='passed-hearts'>
            {[...Array(passedHeart).keys()].map((item, i) => (
              <span key={i}>Passed</span>
            ))}
          </div>
        )}
        <div className='hearts'>
          <div className='heart-icons'>
            {[...Array(6).keys()].map((item, i) => (
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                key={i}
                className={passedHeart > i ? 'heart' : 'heart fill'}
              >
                <path
                  fillRule='evenodd'
                  d='M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386'
                ></path>
              </svg>
            ))}
          </div>
          <span>6 hearts left</span>
        </div>
      </div>
    </main>
  );
};

export default Classic;
