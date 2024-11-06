import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainder } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainder>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainder>
  );
}
