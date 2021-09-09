import './App.css';
import Store from './store/store'
import {Row} from "./components/Row";
import {observer} from "mobx-react-lite";
import {HashRouter, NavLink, Switch, Route} from "react-router-dom";

export const App = observer(() => {
    const {table, foodTable} = Store
    const Rows = table.map((el, i) => <div key={i}><Row obj={'table'} index={i} title={el.title} value={el.value}/>
    </div>)
    const ProductResult = table.map((el, i) => !!el.value && <li key={i}>{el.title} - {el.value}</li>)
    const FoodResult = foodTable.map((el, i) => !!el.value && <li key={i}>{el.title} - {el.value}</li>)
    const food = foodTable.map((el, i) => <div key={i}>
        <Row obj={'food'} index={i} title={el.title} value={el.value}/>
    </div>)
    return (
        <HashRouter>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink className={'link'} activeClass={'active'} to={'/food'}>Заказ выпечка</NavLink>
                            </li>
                            <li><NavLink className={'link'} activeClass={'active'} to={'/product'}>Заказ хозы</NavLink>
                            </li>
                            <li><NavLink className={'link'} activeClass={'active'} to={'/result'}>Результат</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className='table'>
                    <Switch>
                        <Route path='/food'>
                            {food}
                        </Route>
                        <Route path='/product'>
                            {Rows}
                        </Route>
                        <Route path='/result'>
                            <div className='result'>
                                <h3>Хозы: </h3>
                                {ProductResult}
                            </div>
                            <div className='result'>
                                <h3>Выпечка: </h3>
                                {FoodResult}
                            </div>
                        </Route>
                    </Switch>
                </div>
        </HashRouter>
    )
        ;
})

