import { FilterLabel, FilterInput } from "./SearchBox.styled";

export default function SearchBox({ value, onSubmit }) {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={value}
        onChange={onSubmit}
        type="text"
        name="filter"
        placeholder="Filter"
      />
    </FilterLabel>
  );
}
