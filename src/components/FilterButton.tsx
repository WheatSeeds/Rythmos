interface FilterButtonProps {
    setDropdownVisible: (visible: boolean) => void
    visible: boolean;
}

const FilterButton = ({visible, setDropdownVisible}: FilterButtonProps) => {
    return (
        <button id="filter-button" onClick={
            () => {
                setDropdownVisible(!visible)
            }}>
            <img id="filter-button-icon" src='../icons/filter.svg' alt=""/>
        </button>
    );
};

export default FilterButton;