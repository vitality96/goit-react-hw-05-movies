import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
    const [searchParams] = useSearchParams();
    const [filmRequest, setFilmRequest] = useState(() => (
        searchParams.get('query') ? searchParams.get('query') : ''
    ));

    const handleInputChange = event => {
        setFilmRequest(event.target.value.toLowerCase())
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        if (filmRequest.trim() === '') {
            return alert('Search field is empty!');
        }
        onSubmit(filmRequest);
    };


    return (
        <form onSubmit={handleSubmit}>
            <input   
                className={s.input}
                type="text"
                placeholder="Search film"
                value={filmRequest}
                onChange={handleInputChange}
            />
            <button className={s.button} type="submit">
                <span >Search</span>
            </button>
        </form>
    );
};


export default Searchbar;


Searchbar.protoType = {
    onSubmit: PropTypes.func.isRequired,
}