import Slider from "rc-slider";

type FilterMinMaxPriceProps = {
  rangeValue: number[];
  minPriceValue: number;
  maxPriceValue: number;
  setRangeValue: (rangeValue: number[]) => void;
  setMinPriceValue: (minPriceValue: number) => void;
  setMaxPriceValue: (maxPriceValue: number) => void;
};

const FilterMinMaxPrice = ({
  rangeValue,
  minPriceValue,
  maxPriceValue,
  setRangeValue,
  setMinPriceValue,
  setMaxPriceValue,
}: FilterMinMaxPriceProps) => {
  return (
    <div id="filter-dropdown-minmax">
      <div id="filter-dropdown-minmax-inputs">
        <input
          className="filter-dropdown-minmax-input"
          type="number"
          value={minPriceValue}
          onChange={(e) => {
            setMinPriceValue(parseInt(e.target.value));
          }}
          onBlur={() => {
            if (isNaN(minPriceValue)) {
              setMinPriceValue(1);
              setRangeValue([1, maxPriceValue]);
            } else if (minPriceValue > maxPriceValue) {
              setMinPriceValue(maxPriceValue);
              setRangeValue([maxPriceValue, maxPriceValue]);
            } else {
              setRangeValue([minPriceValue, maxPriceValue]);
            }
          }}
        />
        <div className="filter-input-divider"></div>
        <input
          className="filter-dropdown-minmax-input"
          type="number"
          value={maxPriceValue}
          onChange={(e) => {
            setMaxPriceValue(parseInt(e.target.value));
          }}
          onBlur={() => {
            if (isNaN(maxPriceValue)) {
              setMaxPriceValue(1);
              setRangeValue([minPriceValue, minPriceValue]);
            } else if (minPriceValue > maxPriceValue) {
              setMaxPriceValue(minPriceValue);
              setRangeValue([minPriceValue, minPriceValue]);
            } else {
              setRangeValue([minPriceValue, maxPriceValue]);
            }
          }}
        />
      </div>
      <Slider
        range
        min={1}
        max={50000}
        step={100}
        value={rangeValue}
        onChange={(newValue) => {
          setRangeValue(newValue as number[]);
        }}
        allowCross={false}
      />
    </div>
  );
};

export default FilterMinMaxPrice;
