import {
  FaMapMarkedAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import css from 'components/Event/Event.module.css';
import PropTypes from 'prop-types';
// import { formatEventStart } from 'utils/formatEventStart';
// import { formatEventDuration } from 'utils/formatEventDuration';
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constants';

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <li className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkedAlt className={css.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconSize.sm} />
        {formatEventStart(start)}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={iconSize.sm} />
        {formatEventDuration(start, end)}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </li>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
