import {makeAutoObservable} from "mobx";
import {sendMessage} from "../bot";


class Store {

    table = [
        {title: 'Кофе зерно', value: ''},
        {title: 'Кофе 1 кг (на продажу)', value: ''},
        {title: 'Кофе  0.5 кг. (на продажу)', value: ''},
        {title: 'Молоко банановое', value: ''},
        {title: 'Молоко миндальное', value: ''},
        {title: 'Молоко кокосовое', value: ''},
        {title: 'Молоко лесной орех', value: ''},
        {title: 'Сливки ', value: ''},
        {title: 'Какао', value: ''},
        {title: 'Schweppes', value: ''},
        {title: 'Сок "Santal"', value: ''},
        {title: 'Лёд', value: ''},
        {title: 'Сгущёнка ', value: ''},
        {title: 'Загатовка киви', value: ''},
        {title: 'Загатовка арбуз', value: ''},
        {title: 'Пюре манго', value: ''},
        {title: 'Пюре маракуйя', value: ''},
        {title: 'Топинг лесные ягоды', value: ''},
        {title: 'Вода газирования Aro ', value: ''},
        {title: 'Корица молотая', value: ''},
        {title: 'Лимонная кислота', value: ''},
        {title: 'Сахар Стики 5 гр', value: ''},
        {title: 'Сахарозаменитель фруктоза', value: ''},
        {title: 'Сироп "Ваниль"', value: ''},
        {title: 'Сироп "Карамель"', value: ''},
        {title: 'Сироп "Ирланский крем"', value: ''},
        {title: 'Сироп "Зеленая мята"', value: ''},
        {title: 'Сироп "Яблочный пирог"', value: ''},
        {title: 'Сироп "Амаретто"', value: ''},
        {title: 'Сироп "Имбирный пряник"', value: ''},
        {title: 'Сироп "Желтый банан"', value: ''},
        {title: 'Сироп "Кокос"', value: ''},
        {title: 'Сироп "Лесной орех"', value: ''},
        {title: 'Сироп "Малина"', value: ''},
        {title: 'Сироп "Лаванда"', value: ''},
        {title: 'Сироп "Соленая карамель"', value: ''},
        {title: 'Сироп "Поп корн"', value: ''},
        {title: 'Чай  "Черный English Breakfast"', value: ''},
        {title: 'Чай "Черный с бергамотом"', value: ''},
        {title: 'Чай  "Зеленый жу-ча"', value: ''},
        {title: 'Чай "Зеленый с жасмином"', value: ''},
        {title: 'Чай "Клубника со сливками"', value: ''},
        {title: 'Чай "Ягодный"', value: ''},
        {title: 'Чай "Ромашка"', value: ''},
        {title: 'Чай  "Баварская мята"', value: ''},
        {title: 'Чай  "Яблочный"', value: ''},
        {title: 'Вода "Vitel" 330 мл. ', value: ''},
        {title: 'Вода "Perrier" 330мл. ', value: ''},
        {title: 'Сок Вишня', value: ''},
        {title: 'Сок Яблоко', value: ''},
        {title: 'Сок "Rioba" 200 мл. Апельсин', value: ''},
        {title: 'Стакан 100 мл.', value: ''},
        {title: 'Стакан брендированный 250 мл.', value: ''},
        {title: 'Стакан брендированный 350 мл.', value: ''},
        {title: 'Стакан брендированный 450 мл.', value: ''},
        {title: 'Стаканчик пластиковый 200 мл.', value: ''},
        {title: 'Крышки 62 мм.', value: ''},
        {title: 'Крышки 80 мм.', value: ''},
        {title: 'Крышки 90 мм.', value: ''},
        {title: 'Размешиватель', value: ''},
        {title: 'Пластиковые вилки мал.', value: ''},
        {title: 'Пластиковые ложки мал.', value: ''},
        {title: 'Пластиковые ножи мал.', value: ''},
        {title: 'Салфетки бумажные', value: ''},
        {title: 'Салфетки вискозные', value: ''},
        {title: 'Салфетки вискозные (рулон)', value: ''},
        {title: 'Салфетки влажные', value: ''},
        {title: 'Салфетки из микрофибры', value: ''},
        {title: 'Полотно вафельное', value: ''},
        {title: 'Тарелки бумажные', value: ''},
        {title: 'Лента кассовая 57 мл. (для сим-терминала)', value: ''},
        {title: 'Пленка для выпечки (рулон)', value: ''},
        {title: 'Пергамент', value: ''},
        {title: 'Трубочки гофрированные 5 мм', value: ''},
        {title: 'Трубочки в индивидуальной упаковке 7 мм', value: ''},
        {title: 'Перчатки одноразовые полиэтилен', value: ''},
        {title: 'Перчатки многоразовые (нитриловые, виниловые)', value: ''},
        {title: 'Пакет мусорный 120 л.', value: ''},
        {title: 'Мыло жидкое 475 мл.', value: ''},
        {title: 'Мыло пена 1 л.', value: ''},
        {title: 'Держатель для 2-х стаканов', value: ''},
        {title: 'Держатель для 4-х стаканов', value: ''},
        {title: 'Пакет-майка', value: ''},
        {title: 'Губка', value: ''},
        {title: 'Пакет для выпечки', value: ''},
        {title: 'Контейнер ракушка РК-40', value: ''},
        {title: 'Контейнер ракушка РК-15', value: ''},
        {title: 'Моющее ср-во для поверхностей Палероль', value: ''},
        {title: 'Ср-во для мыть стёкол', value: ''},
        {title: 'Дозатор "Monin" 1 л', value: ''},
        {title: 'Дозатор "Monin" 0,7 л', value: ''},
        {title: 'Насадка для МОПа', value: ''},
        {title: 'Ветошь', value: ''},
        {title: 'Средство для мытья полов Мистер Проппер', value: ''},
        {title: 'Средство для мытья посуды', value: ''},
        {title: 'Средство Дольфин дезинфицирующее', value: ''},
        {title: 'Антисептик для рук 1 л', value: ''},
        {title: 'Пемолюкс', value: ''},
        {title: 'Кофиза химия для кофемашины', value: ''},
        {title: 'Щетка для чистки групп', value: ''},
        {title: 'Маска многоразовая', value: ''},
        {title: 'Маска одноразовая', value: ''},
        {title: 'Сумка-шоппер', value: ''},
        {title: 'Термокружка', value: ''}
    ]

    foodTable = [
        {title: 'Молоко', value: ''},
        {title: 'Круассан с миндалём', value: ''},
        {title: 'Круассан с шоколадом', value: ''},
        {title: 'Круассан с сыром', value: ''},
        {title: 'Круассан классический ', value: ''},
        {title: 'Треугольник с вишней', value: ''},
        {title: 'Кленовый пекан', value: ''},
        {title: 'Печенье шоколад-мята', value: ''},
        {title: 'Печенье 4 шоколада', value: ''},
        {title: 'Печенье клюква-бел.шоколад', value: ''},
        {title: 'Печенье апельсин-кокос', value: ''},
        {title: 'Печенье с шок.крошкой', value: ''},
        {title: 'Эклер шоколад (кратное 6)', value: ''},
        {title: 'Макаруни фисташка', value: ''},
        {title: 'Макаруни шоколад', value: ''},
        {title: 'Макаруни малина', value: ''},
        {title: 'Пряник', value: ''},
        {title: 'Пончик ваниль', value: ''},
        {title: 'Пончик шоколад ', value: ''},
        {title: 'Пончик банан', value: ''},
        {title: 'Фисташковый тарт с малиной', value: ''},
        {title: 'Тарт "Сникер"', value: ''},
        {title: 'Тарт "Сникер"', value: ''},
        {title: 'Венская вафля ', value: ''},
        {title: 'Сырники ', value: ''},
        {title: 'Лёд пакетики (кратно 5) ', value: ''},
    ]

    date = ''
    place = ''
    name = ''
    err = []

    constructor() {
        makeAutoObservable(this)
    }

    changeDate(val) {
        this.date = val.split('-').reverse().join('.')

    }

    changePlace(val) {
        this.place = val
    }

    ChangeValue(index, val, obj) {
        if (obj === 'table') {
            this.table[index].value = val
        } else if (obj === 'food') {
            this.foodTable[index].value = val
        }

    }

    changeName(val) {
        this.name = val
    }


    SendMessageToBot() {
        let foodText = this.foodTable.map(el => !!el.value ? `${el.title} - ${el.value}%0A` : null).join("")
        let hozText = this.table.map(el => !!el.value ? `${el.title} - ${el.value}%0A` : null).join("")
        this.err = []
        if (!this.name) {
            this.err.push('Забыл имя')
        }
        if (!this.place) {
            this.err.push('Забыл точку')
        }
        if (!this.date) {
            this.err.push('Забыл дату')
        }
        if (!this.err.length) {
            sendMessage(this.name, this.date, this.place, hozText, foodText).then(r => console.log(r))
        }
    }
}


export default new Store()


