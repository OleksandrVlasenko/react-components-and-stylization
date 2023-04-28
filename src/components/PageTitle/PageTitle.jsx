// import css from "components/PageTitle/PageTitle.module.css"
import PropTypes from 'prop-types';
import { Title } from 'components/PageTitle/PageTitle.styled';

export const PageTitle = ({ text }) => {
  return <Title>{text}</Title>;
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};