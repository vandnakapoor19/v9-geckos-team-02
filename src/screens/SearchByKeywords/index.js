import React from 'react';
import SearchResult from '../../components/containers/searchResult';
import Pagination from '../../components/containers/pagination';

const SearchByKeywords = () => (
  <section >
    <div className="container"><SearchResult /></div>
    <Pagination />
  </section>
);

export default SearchByKeywords;