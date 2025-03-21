type FilterCheckboxProps = {
  brand: string;
  brandsFilter: string[];
  setBrandsFilter: (brandsFilter: string[]) => void;
};

const FilterCheckbox = ({
  brand,
  brandsFilter,
  setBrandsFilter,
}: FilterCheckboxProps) => {
  return (
    <div className="filter-checkbox">
      <input
        onChange={(e) => {
          if (e.target.checked) {
            setBrandsFilter([...brandsFilter, e.target.value]);
          } else {
            setBrandsFilter(
              [...brandsFilter].filter((filter) => filter !== e.target.value),
            );
          }
        }}
        type="checkbox"
        name="filter-checkbox"
        className="filter-checkbox-field"
        value={brand}
      />
      <label htmlFor="filter-checkbox" className="filter-checkbox-label">
        {brand}
      </label>
    </div>
  );
};

export default FilterCheckbox;
