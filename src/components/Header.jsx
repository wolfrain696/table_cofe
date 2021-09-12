import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink className={'link'} activeClassName={'active'} to={'/food'}>Заказ выпечка</NavLink>
                    </li>
                    <li><NavLink className={'link'} activeClassName={'active'} to={'/product'}>Заказ хозы</NavLink>
                    </li>
                    <li><NavLink className={'link'} activeClassName={'active'} to={'/result'}>Результат</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};