import FilterRadio from "./FilterRadio";
import styles from "assets/scss/filterRadios.module.scss";
import { FilterTypes } from "type/todoType";

export const filterTypes: FilterTypes[] = ["All", "Active", "Complete"];

const FilterRadios = () => {
  return (
    <fieldset className={styles.fieldset}>
      {filterTypes.map((value) => (
        <FilterRadio value={value} key={value} />
      ))}
    </fieldset>
  );
};

export default FilterRadios;
