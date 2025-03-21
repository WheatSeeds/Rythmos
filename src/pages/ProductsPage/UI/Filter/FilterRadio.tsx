type FilterRadioProps = {
  filter: radioFiler;
  setPriceFilter: (priceFilter: string) => void;
};

type radioFiler = {
  name: string;
  value: string;
  isChecked: boolean;
};

const FilterRadio = ({ filter, setPriceFilter }: FilterRadioProps) => {
  return (
    <div className="filter-radio">
      <input
        name="radio-price-filter"
        value={filter.value}
        id="radio-price-filter"
        type="radio"
        defaultChecked={filter.isChecked}
        onChange={(e) => {
          if (e.target.checked) {
            setPriceFilter(e.target.value);
          }
        }}
      />
      <label className="filter-radio-label" htmlFor="radio-price-filter">
        {filter.name}
      </label>
    </div>
  );
};

export default FilterRadio;
