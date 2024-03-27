import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from "./SearchBox.module.css";

export default function SearchBox() {
    const dispatch = useDispatch();
    const searchWord = useSelector(selectNameFilter);

    const handleSearch = (event) => {
        dispatch(changeFilter(event.target.value));
    };

    return (
        <div className={css.sb}>
            <label className={css.label}>Find contacts by name:</label>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchWord}
                onChange={handleSearch}
                className={css.input}
            />
        </div>
    );
}
