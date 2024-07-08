import FilterRadio from "./FilterRadio";
import styles from "../assets/scss/filterRadios.module.scss";

type ListType = "All" | "Active" | "Complete";
const list: ListType[] = ["All", "Active", "Complete"];

const FilterRadios = () => {
  return (
    <fieldset className={styles.fieldset}>
      {list.map((value) => (
        <FilterRadio value={value} key={value} />
      ))}
    </fieldset>
  );
};

export default FilterRadios;
