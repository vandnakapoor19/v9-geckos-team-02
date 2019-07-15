import React from 'react';
// import { prevPage } from '../../actions/changePage';

const Pagebar = ({ curPage, url, toPrevPage, toNextPage, path, toPage, pages }) => (
    <nav aria-label="Page navigation">
        <ul className="pagination">

            <li className="page-item">
                <a
                    className="page-link"
                    href="# "
                    // href={path}
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

            {pages.map((p, index) =>
                <li className="page-item" key={index}>
                    <a
                        className="page-link"
                        href="# "
                        // href={path}
                        onClick={e => {
                            e.preventDefault();
                            toPage(url, p)
                        }}
                    >{p}</a>
                </li>)}

            <li className="page-item">
                <a
                    class="page-link"
                    href="# "
                    aria-label="Next"
                    onClick={e => {
                        e.preventDefault();
                        toNextPage(url, curPage)
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