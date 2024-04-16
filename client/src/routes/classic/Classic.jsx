import { useEffect, useState } from 'react';
import './classic.css';
import useDebouncedValue from '../../lib/useDebouncedValue';
import dummy from '../../lib/dummy.json';
import { game, averageTry, guessedPeople } from '../../lib/constants';

const Classic = () => {
  const [gameName, setGameName] = useState('');
  const [gameSearch, setGameSearch] = useState([]);
  const [passedHeart, setPassedHeart] = useState(0);
  const [isGuessedTrue, setIsGuessedTrue] = useState(0);
  const [finish, setFinish] = useState(false);

  const debouncedValue = useDebouncedValue(gameName, 500);

  const handleSubmit = () => {
    // check if input matches with game name

    // if input is null, do not do anything
    if (debouncedValue.length < 0) {
      return;
    }

    // make all chars lower case, trim white spaces and delete spaces between chars to find exact match
    setIsGuessedTrue(
      gameName.toLocaleLowerCase().trim().replace(/\s/g, '') ===
        game.name.toLocaleLowerCase().trim().replace(/\s/g, '')
    );

    finishGame();
  };

  const handlePass = () => {
    if (passedHeart < 6) {
      setPassedHeart((prev) => prev + 1);
    } else {
      finishGame();
    }
  };

  useEffect(() => {
    if (debouncedValue.length > 0) {
      const arr = dummy.filter((d) =>
        d['game_title'].toLowerCase().includes(debouncedValue.toLowerCase())
      );
      setGameSearch(arr);
    } else {
      setGameSearch([]);
    }
  }, [debouncedValue]);

  const finishGame = () => {
    setFinish(true);
  };

  const handleGameName = (name) => {
    setGameName(name);
  };

  return (
    <main className='classic'>
      <div className='wrapper'>
        <img
          src={game.img}
          alt='game'
          className='game-img'
          style={
            isGuessedTrue
              ? { filter: `blur(0px)` }
              : { filter: `blur(${(6 - passedHeart) * 5}px)` }
          }
        />
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
            onChange={(e) => handleGameName(e.target.value)}
          />
          {gameSearch.length > 0 && (
            <ul className='search-result'>
              {gameSearch.map((game, i) => (
                <li
                  key={i}
                  className='searc-result-item'
                  onClick={() => {
                    handleGameName(game.game_title);
                    setGameSearch([]);
                  }}
                >
                  {game.game_title}
                </li>
              ))}
            </ul>
          )}
        </div>
        {finish && (
          <div className='finish-game'>{isGuessedTrue ? 'Yeay' : ':/'}</div>
        )}
        <div className='buttons'>
          <button onClick={handlePass}>Pass</button>
          <button onMouseDown={handleSubmit}>Try it</button>
        </div>
        {passedHeart > 0 && (
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
