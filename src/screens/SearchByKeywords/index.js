import React from 'react';
import ItemsByKeywords from '../../components/containers/itemsByKeywords';
import Pagination from '../../components/containers/pagination';

const SearchByKeywords = () => (
  <section >
    <div className="container"><ItemsByKeywords /></div>
    <Pagination />
  </section>
);

export default SearchByKeywords;