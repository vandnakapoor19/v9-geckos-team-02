import React from 'react';
// import { prevPage } from '../../actions/changePage';

const Pagebar = ({ curPage, url, toPrevPage, toNextPage, path, toPage }) => (
    <nav aria-label="Page navigation example">
        <ul className="pagination">

            <li className="page-item">
                <a
                    className="page-link"
                    // href={`/pageNumber=${curPage}`} 
                    href={path}
                    aria-label="Previous"
                    onClick={e => {
                        e.preventDefault();
                        toPrevPage(url, curPage)
                    }}
                >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                </a>
            </li>

            <li className="page-item">
                <a
                    className="page-link"
                    // href="# "
                    href={path}
                    onClick={e => {
                        e.preventDefault();
                        toPage(url, curPage)
                    }}
                >{curPage}</a></li>
            <li className="page-item"><a className="page-link" href="# ">2</a></li>
            <li className="page-item"><a className="page-link" href="# ">3</a></li>

            <li className="page-item">
                <a
                    class="page-link"
                    href={path}
                    aria-label="Next"
                    onClick={e => {
                        e.preventDefault();
                        toNextPage(url)
                    }}
                >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>
)

export default Pagebar;