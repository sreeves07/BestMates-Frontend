import React from 'react';
import { middleName } from '../data/helperFunctions';

function SearchBar({
  setStudents,
  search,
  setSearch,
  searchResult,
  setSearchResult,
}) {
  const copyStudents = [...searchResult];

  // function for filtering students by search value
  function searchFilter(input) {
    const string = input.toLowerCase();

    const searchedStudent = copyStudents.filter(({ names }) => {
      const studentLowerCaseMiddle = `${names.preferredName.toLowerCase()} ${middleName(
        names.middleName,
      )
        .toLowerCase()
        .replace(`.`, ``)} ${names.surname.toLowerCase()}`;

      const studentLowerCaseLast = `${names.preferredName.toLowerCase()} ${names.surname.toLowerCase()}`;

      if (input === '') {
        return names;
      } else {
        return (
          studentLowerCaseMiddle.includes(string) ||
          studentLowerCaseLast.includes(string)
        );
      }
    });

    setStudents(searchedStudent);
  }

  // function for on change in search bar
  function handleSearch(e) {
    const value = e.target.value;
    setSearchResult(copyStudents);
    setSearch(value);
    searchFilter(value);
  }

  return (
    <input
      id="searchbar"
      type="text"
      placeholder="Search Students"
      value={search}
      onChange={(event) => {
        handleSearch(event);
      }}
    />
  );
}

export default SearchBar;
