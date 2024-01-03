import FilterRadio from "./FiterRadio";
import styles from "./filterRadios.module.scss";

const FilterRadios = () => {
  return (
    <fieldset className={styles.fieldset}>
      <FilterRadio value='All' />
      <FilterRadio value='Active' />
      <FilterRadio value='Complete' />
    </fieldset>
  );
};

export default FilterRadios;
