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
import {
  EventItem,
  EventName,
  Info,
  Chip,
} from 'components/Event/Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <EventItem>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkedAlt className={css.icon} size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formatEventStart(start)}
      </Info>
      <Info>
        <FaClock className={css.icon} size={iconSize.sm} />
        {formatEventDuration(start, end)}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </EventItem>
  );

};

// className={`${css.chip} ${css[type]}`}


Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
