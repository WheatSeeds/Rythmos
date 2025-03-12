import FilterButton from "./FilterButton.tsx";
import Slider from "rc-slider";
import {useEffect, useState} from "react";



type FilterDropdownProps = {
    visible: boolean;
    setDropdownVisible: (visible: boolean) => void;
}

const FilterDropdown = ({visible, setDropdownVisible} : FilterDropdownProps) => {

    const [minPriceValue, setMinPriceValue] = useState(1);
    const [maxPriceValue, setMaxPriceValue] = useState(100);
    const [rangeValue, setRangeValue] = useState<number[]>([minPriceValue, maxPriceValue]);

    useEffect(() => {
        setMinPriceValue(rangeValue[0]);
        setMaxPriceValue(rangeValue[1]);
        console.log(rangeValue);
    }, [rangeValue]);

    useEffect(() => {
        if(maxPriceValue > 100){
            setMaxPriceValue(100);
        }
        if(minPriceValue < 1){
            setMinPriceValue(1);
        }
    }, [minPriceValue, maxPriceValue]);

    return (
        <>
            {visible
                ? (<div id="filter-dropdown-background"></div>)
                : (<></>)
            }
            <div id="filter-dropdown">
                <FilterButton setDropdownVisible={setDropdownVisible} visible={visible} />
                <div className={visible
                    ?'filter-dropdown-visible'
                    :'filter-dropdown'}>
                    <div>
                        <span>Price</span>
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
                                        if(isNaN(minPriceValue)){
                                            setMinPriceValue(1);
                                            setRangeValue([1, maxPriceValue]);
                                        }
                                        else if(minPriceValue > maxPriceValue){
                                            setMinPriceValue(maxPriceValue);
                                            setRangeValue([maxPriceValue, maxPriceValue]);
                                        }
                                        else {
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
                                        if(isNaN(maxPriceValue)){
                                            setMaxPriceValue(1);
                                            setRangeValue([minPriceValue, minPriceValue]);
                                        }
                                        else if(minPriceValue > maxPriceValue){
                                            setMaxPriceValue(minPriceValue);
                                            setRangeValue([minPriceValue, minPriceValue]);
                                        }
                                        else {
                                            setRangeValue([minPriceValue, maxPriceValue]);
                                        }
                                    }}

                                />
                            </div>
                            <Slider
                                range
                                min={1}
                                max={100}
                                step={1}
                                value={rangeValue}
                                onChange={(newValue ) => {
                                    setRangeValue(newValue as number[]);
                                }}
                                allowCross={false}
                            />
                        </div>
                    </div>
                    <button id="filter-dropdown-apply-btn">Apply filters</button>
                </div>
            </div>
        </>
    );
};


export default FilterDropdown;