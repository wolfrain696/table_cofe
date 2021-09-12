import './App.css';
import Store from './store/store'
import {Row} from "./components/Row";
import {observer} from "mobx-react-lite";
import {HashRouter, Switch, Route} from "react-router-dom";
import {Header} from "./components/Header";

export const App = observer(() => {
    const {table, foodTable, date, place, name, err} = Store
    const Rows = table.map((el, i) => <div key={i}><Row obj={'table'} index={i} title={el.title} value={el.value}/>
    </div>)
    const ProductResult = table.map((el, i) => !!el.value && <p key={i}>{el.title} - {el.value}</p>)
    const FoodResult = foodTable.map((el, i) => !!el.value && <p key={i}>{el.title} - {el.value}</p>)
    const food = foodTable.map((el, i) => <div key={i}>
        <Row obj={'food'} index={i} title={el.title} value={el.value}/>
    </div>)

    const send = () => {
        Store.SendMessageToBot()
    }
    return (
        <HashRouter>
            <Header/>
            <div className='table'>
                <div className={'form'}>
                    <input className='in' type="date" onChange={e => Store.changeDate(e.target.value)}/>
                    <input className='in' type="text" placeholder={'Введи точку'}
                           onChange={e => Store.changePlace(e.target.value)} value={place}/>
                    <input className='in' type="text" placeholder={'Ответственный за заказ!'}
                           onChange={e => Store.changeName(e.target.value)} value={name}/>
                </div>
                <Switch>
                    <Route path='/food'>
                        {food}
                    </Route>
                    <Route path='/product'>
                        {Rows}
                    </Route>
                    <Route path='/result'>
                        <div>{err.join('. ')}</div>
                        <span style={{marginRight: '30px'}}>{date}</span>
                        <span>{place}</span>
                        <div>{name}</div>
                        <div className='result' style={{marginTop: '10px'}}>
                            <h3>Хозы: </h3>
                            {ProductResult}
                        </div>
                        <div className='result'>
                            <h3>Выпечка: </h3>
                            {FoodResult}
                        </div>
                        <button className={'bot_btn'} onClick={send}>
                            Отправить
                        </button>
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    )
        ;
})

