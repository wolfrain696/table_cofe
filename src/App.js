import './App.css';
import Store from  './store/store'
import {Row} from "./components/Row";
import {observer} from "mobx-react-lite";

export const  App = observer( () => {
    const {table} = Store
    const Rows = table.map((el,i)=><div key={i}> <Row index={i} title={el.title} value={el.value}/></div>)
    const result = table.map((el,i) => !!el.value && <li key={i}>{el.title} - {el.value}</li>)
  return (
      <div className='table'>
          {Rows}
          {result}
      </div>
  );
})

