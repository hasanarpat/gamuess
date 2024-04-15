import GameButton from '../../components/game-button/GameButton';
import './home.css';

const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <div className='card'>
          <div className='wrapper'>
            <GameButton
              title='Classic'
              subtitle='Guess the game via its cover'
              href='classic'
              icon={
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 640 512'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z'></path>
                </svg>
              }
            />
            <GameButton
              title='Art'
              subtitle='Guess the game via its art'
              href='art'
              icon={
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill='none'
                    strokeMiterlimit='10'
                    strokeWidth='32'
                    d='M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z'
                  ></path>
                  <circle cx='144' cy='208' r='32'></circle>
                  <circle cx='152' cy='311' r='32'></circle>
                  <circle cx='224' cy='144' r='32'></circle>
                  <circle cx='256' cy='367' r='48'></circle>
                  <circle cx='328' cy='144' r='32'></circle>
                </svg>
              }
            />
          </div>
        </div>
        <div className='card'>
          <div className='wrapper'>
            <GameButton
              title='Infinite'
              href='infinite'
              icon={
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M456.8 182.4c-20-19.6-46.8-30.4-75.2-30.4-28.5 0-55.2 10.8-75.2 30.4l-31.2 30c-1.6 1.6-1.6 4.2 0 5.7l19.4 19.1c1.5 1.5 4 1.5 5.6 0l31-30.1c13.5-13.1 31.3-20.3 50.3-20.3 19 0 36.8 7.2 50.3 20.3 13.4 13.1 20.7 30.5 20.7 49 0 18.4-7.4 35.8-20.7 48.7-13.5 13.1-31.3 20.3-50.3 20.3-19 0-36.8-7.2-50.3-20.3L205.6 182.4c-20.2-19.6-46.9-30.4-75.2-30.4-28.5 0-55.2 10.8-75.2 30.4C35.1 202 24 228.1 24 256c0 27.8 11.1 54 31.2 73.6 20 19.6 46.8 30.4 75.2 30.4 28.5 0 55.2-10.8 75.2-30.4l31-30c1.6-1.6 1.6-4.2 0-5.7L217.2 275c-1.5-1.5-4-1.5-5.6 0l-31 29.9c-13.5 13.1-31.3 20.3-50.3 20.3-19 0-36.8-7.2-50.3-20.3-13.4-13.1-20.7-30.5-20.7-49 0-18.4 7.4-35.7 20.7-48.7 13.5-13.1 31.3-20.3 50.3-20.3 19 0 36.8 7.2 50.3 20.3l125.5 122.5c20.2 19.6 46.9 30.4 75.2 30.4 28.5 0 55.2-10.8 75.2-30.4 20.2-19.6 31.3-45.7 31.3-73.6.2-27.9-10.9-54.1-31-73.7z'></path>
                </svg>
              }
            />
          </div>
        </div>
        <div className='card'>
          <div className='wrapper'>
            <GameButton title='Coming Soon' href='coming-soon' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
