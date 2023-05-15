import { useState } from 'react';
import AllUsers from '../Components/AllUsers';
import SearchBar from '../Components/SearchBar';

const Index = () => {
  // Declare state for search data
  const [searchResult, setSearchResult] = useState(data);

  // Declare state for selected students
  const [mates, SetMates] = useState(data);

  // triangle
  // Declare State to store user inputted search
  const [search, setSearch] = useState('');
  // Declare State for selection value
  const [select, setSelect] = useState('all');

  // Declare state for search data
  const [searchResult, setSearchResult] = useState(data);
  return (
    <div className="Index">
      <p>
        <SearchBar
          SetMates={SetMates}
          search={search}
          setSearch={setSearch}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
        />
      </p>
      <h1 className="header">Find your best mate!</h1>
      <AllUsers />
    </div>
  );
};

export default Index;
