import PropTypes from 'prop-types';
import style from './ContactFilter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, getFilter} from '../../redux/contactReducer'

export default function Filter ({ title }) {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();


  return (
    <label>
      <p className={style.text}>{title}</p>
      <input
        type="text"
        value={value}
        onChange={event => dispatch(changeFilter(event.currentTarget.value))}
        className={style.input}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

