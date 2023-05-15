import React from 'react';

function SearchBar({
  setMates,
  search,
  setSearch,
  searchResult,
  setSearchResult,
}) {
  //   // Declare state for search data
  //   const [searchResult, setSearchResult] = useState(data);

  //   // Declare state for selected students
  //   const [mates, setMates] = useState(data);

  //   // Declare State to store user inputted search
  //   const [search, setSearch] = useState('');
  //   // Declare State for selection value
  //   const [select, setSelect] = useState('all');

  //   // Declare state for search data
  //   const [searchResult, setSearchResult] = useState(data);
  //   const copyMates = [...searchResult];

  // function for filtering students by search value
  function searchFilter(input) {
    const string = input.toLowerCase();

    const searchedStudent = copyStudents.filter(({ names }) => {
      const studentLowerCaseMiddle = `${names.preferredName.toLowerCase()} ${names.surname.toLowerCase()}`;
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

    setMates(searchedStudent);
  }

  // function for on change in search bar
  function handleSearch(e) {
    const value = e.target.value;
    setSearchResult(copyStudents);
    setSearch(value);
    searchFilter(value);
  }

  return (
    <>
      <p>
        <SearchBar
          setStudents={setStudents}
          search={search}
          setSearch={setSearch}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
        />
      </p>

      <input
        id="searchbar"
        type="text"
        placeholder="Search Students"
        value={search}
        onChange={(event) => {
          handleSearch(event);
        }}
      />
    </>
  );
}

export default SearchBar;
