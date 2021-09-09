import './App.css';
import Store from './store/store'
import {Row} from "./components/Row";
import {observer} from "mobx-react-lite";
import {HashRouter, NavLink, Switch, Route} from "react-router-dom";

export const App = observer(() => {
    const {table, foodTable, date, place} = Store
    const Rows = table.map((el, i) => <div key={i}><Row obj={'table'} index={i} title={el.title} value={el.value}/>
    </div>)
    const ProductResult = table.map((el, i) => !!el.value && <p key={i}>{el.title} - {el.value}</p>)
    const FoodResult = foodTable.map((el, i) => !!el.value && <p key={i}>{el.title} - {el.value}</p>)
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
                        <input className='in' type="date" onChange={e => Store.changeDate(e.target.value)}/>
                        <input className='in' type="text" placeholder={'Введи точку'}
                               onChange={e => Store.changePlace(e.target.value)}/>
                        {food}
                    </Route>
                    <Route path='/product'>
                        <input className='in' type="date" onChange={e => Store.changeDate(e.target.value)}/>
                        <input className='in' type="text" placeholder={'Введи точку'}
                               onChange={e => Store.changePlace(e.target.value)}/>
                        {Rows}
                    </Route>
                    <Route path='/result'>
                        <span style={{marginRight: '30px'}}>{date}</span>
                        <span >{place}</span>
                        <div className='result' style={{marginTop: '10px'}}>
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

