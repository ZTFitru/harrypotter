import { Link } from 'react-router-dom';
import './Pagination.css'
import PropTypes from 'prop-types'

const Pagination = ({ charPerPage, total, paginate, currentPage }) => {
    const pageNums = [];

    for (let i = 1; i <= Math.ceil(total / charPerPage); i++) {
        pageNums.push(i);
    }

    return (
        <div className='pagin-out'>
            <nav>
                <ul className="pagination">
                    {pageNums.map((number) => (
                        <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
                            <Link href="#!" className="page-link" onClick={() => paginate(number)}>
                                {number}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

Pagination.propTypes = {
    charPerPage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination