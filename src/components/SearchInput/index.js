import "./index.css";
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
const BASE_CLASS = "ic-SearchInput";

export default function SearchInput({
  value = "",
  onChange = () => {},
  onClear = () => {},
}) {
  const [innerValue, setInnerValue] = useState(value);

  const onChangeHandler = (e) => {
    setInnerValue(e.target.value);
    onChange();
  };

  const onClearHandler = () => {
    setInnerValue("");
    onClear();
  };

  return (
    <div className={BASE_CLASS}>
      {innerValue.length === 0 && <BsSearch />}
      <input
        value={innerValue}
        onChange={onChangeHandler}
        className={`${BASE_CLASS}-input`}
        type="text"
      />
      {innerValue.length > 0 && <AiFillCloseCircle onClick={onClearHandler} />}
    </div>
  );
}
