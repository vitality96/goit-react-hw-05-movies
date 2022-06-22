import { useState } from "react";
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
    const [filmRequest, setFilmRequest] = useState('');

    const handleInputChange = event => {
        setFilmRequest(event.currentTarget.value.toLowerCase())
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (filmRequest.trim() === '') {
            return alert('Search field is empty!');
        }
        onSubmit(filmRequest);
        setFilmRequest('');
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