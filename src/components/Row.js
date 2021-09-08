import Store from '../store/store'
import {observer} from "mobx-react-lite";

export const Row = observer( ({title,value,index}) => {
        const onValue = (e) =>{
            Store.ChangeValue(index, e.target.value)
        }
    return (
        <div className={'row'}>
            <span>{title}</span>
            <input type="number" onChange={onValue} value={value}/>
        </div>
    );
})