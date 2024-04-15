import './gameButton.css';
import { NavLink } from 'react-router-dom';

const GameButton = ({ href, title, subtitle, icon }) => {
  return (
    <div className='gameButton'>
      <NavLink to={href} className='game-link'>
        <span className='game-link-title'>
          {title} {subtitle && <span>{subtitle}</span>}
        </span>
        <span className='game-link-icon'>{icon}</span>
      </NavLink>
    </div>
  );
};

export default GameButton;
