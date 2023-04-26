import css from 'components/Event/Event.module.css';
import PropTypes from 'prop-types';

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <li className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <i className={css.icon}></i>
        {location}
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        {speaker}
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        {start}
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        {end}
      </p>
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
