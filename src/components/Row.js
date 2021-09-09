import Store from '../store/store'
import {observer} from "mobx-react-lite";

export const Row = observer( ({title,value,index, obj}) => {
        const onValue = (e) =>{
            Store.ChangeValue(index, e.target.value, obj)
        }
    return (
        <div className={'row'}>
            <span>{title}</span>
            <input type="number" onChange={onValue} value={value}/>
        </div>
    );
})