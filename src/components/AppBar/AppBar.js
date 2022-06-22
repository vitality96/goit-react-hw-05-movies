import Naviagtion from "components/Navigation/Navigation";
import s from './AppBar.module.css';

function AppBar() {
    return (
        <header className={s.header}>
            <Naviagtion />
        </header>
    )
};

export default AppBar;