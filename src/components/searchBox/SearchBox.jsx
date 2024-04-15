import css from "./SearchBox.module.css";

const SearchBox = ({ value, onInputValue }) => {
  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input className={css.input}
        type="text"
        value={value}
        onChange={(e) => onInputValue(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
