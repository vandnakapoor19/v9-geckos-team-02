import React from 'react';
import ItemsByCategoty from '../../components/containers/itemsByCategory';
import Pagination from '../../components/containers/pagination';

const SearchByCategoty = () => (
  <section >
    <div className="container"><ItemsByCategoty /></div>
    <Pagination />
  </section>
);

export default SearchByCategoty;