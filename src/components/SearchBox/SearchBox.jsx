import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  //оформлення підписки
  const filter = useSelector((state) => state.filter.name);
  //ф-ця відправник
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  // {const action = setFilter(evt.target.value);
  //   dispatch(action);}

  return (
    <div className={css.containerSearch}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contact"
        className={css.inputSearch}
      />
    </div>
  );
};

export default SearchBox;
