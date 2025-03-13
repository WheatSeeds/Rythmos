import FilterButton from "./FilterButton.tsx";
import {useEffect, useState} from "react";
import FilterCheckbox from "./FilterCheckbox.tsx";
import FilterRadio from "./FilterRadio.tsx";
import FilterMinMaxPrice from "./FilterMinMaxPrice.tsx";

type FilterDropdownProps = {
    visible: boolean;
    setDropdownVisible: (visible: boolean) => void;
    brands: string[];
    loadProducts: (query: string,
                   uuid: string,
                   brandsFilter: string[],
                   minPrice: number,
                   maxPrice: number,
                   priceFilter: string) => void;
    uuid: string;
    query: string;
}

const FilterDropdown = ({query, uuid, visible, setDropdownVisible, brands, loadProducts} : FilterDropdownProps) => {

    const [minPriceValue, setMinPriceValue] = useState<number>(1);
    const [maxPriceValue, setMaxPriceValue] = useState<number>(500000);
    const [rangeValue, setRangeValue] = useState<number[]>([minPriceValue, maxPriceValue]);

    const [brandsFilter, setBrandsFilter] = useState<string[]>([]);
    const [priceFilter, setPriceFilter] = useState<string>('')
    const [viewAll, setViewAll] = useState<boolean>(false);

    useEffect(() => {
        console.log(brandsFilter);
    }, [brandsFilter]);

    useEffect(() => {
        loadProducts(query, uuid, brandsFilter, minPriceValue, maxPriceValue, priceFilter);
        console.log(brandsFilter);
    }, [query, uuid]);

    function applyFilters(){
        loadProducts(query, uuid, brandsFilter, minPriceValue, maxPriceValue, priceFilter);
    }

    const radioFilters = [
        {
            name: "Default",
            value: "",
            isChecked: true,
        },
        {
            name: "Low - High",
            value: "price|asc",
            isChecked: false,
        },
        {
            name: "High - Low",
            value: "price|desc",
            isChecked: false,
        }
    ]

    useEffect(() => {
        setMinPriceValue(rangeValue[0]);
        setMaxPriceValue(rangeValue[1]);
    }, [rangeValue]);

    useEffect(() => {
        if(maxPriceValue > 500000){
            setMaxPriceValue(500000);
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
                    ? 'filter-dropdown-visible'
                    : 'filter-dropdown'}>

                    <section>
                        <span className="filter-category-title">Brands</span>
                        <div id="filter-dropdown-brands-checkbox" className={viewAll
                            ? 'view-all'
                            : ''
                        }>
                            {brands.map((brand) => (
                                <FilterCheckbox
                                    brandsFilter={brandsFilter}
                                    setBrandsFilter={setBrandsFilter}
                                    key={brand}
                                    brand={brand}/>
                            ))}
                        </div>
                        <button className="filter-dropdown-view-all-btn" onClick={() => setViewAll(!viewAll)}>View
                            More
                        </button>
                    </section>

                    <div className="filter-dropdown-section-divider"></div>

                    <section>
                        <span className="filter-category-title">Price</span>

                        <div id="filter-dropdown-price">
                            {radioFilters.map((filter) => (
                                <FilterRadio
                                    setPriceFilter={setPriceFilter}
                                    key={filter.name}
                                    filter={filter}
                                />
                            ))}
                        </div>

                        <FilterMinMaxPrice
                            rangeValue={rangeValue}
                            minPriceValue={minPriceValue}
                            maxPriceValue={maxPriceValue}
                            setRangeValue={setRangeValue}
                            setMinPriceValue={setMinPriceValue}
                            setMaxPriceValue={setMaxPriceValue}
                        />
                    </section>
                    <button
                        id="filter-dropdown-apply-btn"
                        onClick={() => {
                            applyFilters()
                            setDropdownVisible(false);
                        }}
                    >Apply filters</button>
                </div>
            </div>
        </>
    );
};


export default FilterDropdown;