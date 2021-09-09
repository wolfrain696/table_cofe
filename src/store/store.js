import {makeAutoObservable} from "mobx";


class Store{

    table = [
        {title: 'Кофе зерно', value: 0},
        {title: 'Кофе 1 кг (на продажу)', value: 0},
        {title: 'Кофе  0.5 кг. (на продажу)', value: 0},
        {title: 'Молоко банановое', value: 0},
        {title: 'Молоко миндальное', value: 0},
        {title: 'Молоко кокосовое', value: 0},
        {title: 'Молоко лесной орех', value: 0},
        {title: 'Сливки ', value: 0},
        {title: 'Какао', value: 0},
        {title: 'Schweppes', value: 0},
        {title: 'Сок "Santal"', value: 0},
        {title: 'Лёд', value: 0},
        {title: 'Сгущёнка ', value: 0},
        {title: 'Загатовка киви', value: 0},
        {title: 'Загатовка арбуз', value: 0},
        {title: 'Пюре манго', value: 0},
        {title: 'Пюре маракуйя', value: 0},
        {title: 'Топинг лесные ягоды', value: 0},
        {title: 'Вода газирования Aro ', value: 0},
        {title: 'Корица молотая', value: 0},
        {title: 'Лимонная кислота', value: 0},
        {title: 'Сахар Стики 5 гр', value: 0},
        {title: 'Сахарозаменитель фруктоза', value: 0},
        {title: 'Сироп "Ваниль"', value: 0},
        {title: 'Сироп "Карамель"', value: 0},
        {title: 'Сироп "Ирланский крем"', value: 0},
        {title: 'Сироп "Зеленая мята"', value: 0},
        {title: 'Сироп "Яблочный пирог"', value: 0},
        {title: 'Сироп "Амаретто"', value: 0},
        {title: 'Сироп "Имбирный пряник"', value: 0},
        {title: 'Сироп "Желтый банан"', value: 0},
        {title: 'Сироп "Кокос"', value: 0},
        {title: 'Сироп "Лесной орех"', value: 0},
        {title: 'Сироп "Малина"', value: 0},
        {title: 'Сироп "Лаванда"', value: 0},
        {title: 'Сироп "Соленая карамель"', value: 0},
        {title: 'Сироп "Поп корн"', value: 0},
        {title: 'Чай  "Черный English Breakfast"', value: 0},
        {title: 'Чай "Черный с бергамотом"', value: 0},
        {title: 'Чай  "Зеленый жу-ча"', value: 0},
        {title: 'Чай "Зеленый с жасмином"', value: 0},
        {title: 'Чай "Клубника со сливками"', value: 0},
        {title: 'Чай "Ягодный"', value: 0},
        {title: 'Чай "Ромашка"', value: 0},
        {title: 'Чай  "Баварская мята"', value: 0},
        {title: 'Чай  "Яблочный"', value: 0},
        {title: 'Вода "Vitel" 330 мл. ', value: 0},
        {title: 'Вода "Perrier" 330мл. ', value: 0},
        {title: 'Сок Вишня', value: 0},
        {title: 'Сок Яблоко', value: 0},
        {title: 'Сок "Rioba" 200 мл. Апельсин', value: 0},
        {title: 'Стакан 100 мл.', value: 0},
        {title: 'Стакан брендированный 250 мл.', value: 0},
        {title: 'Стакан брендированный 350 мл.', value: 0},
        {title: 'Стакан брендированный 450 мл.', value: 0},
        {title: 'Стаканчик пластиковый 200 мл.', value: 0},
        {title: 'Крышки 62 мм.', value: 0},
        {title: 'Крышки 80 мм.', value: 0},
        {title: 'Крышки 90 мм.', value: 0},
        {title: 'Размешиватель', value: 0},
        {title: 'Пластиковые вилки мал.', value: 0},
        {title: 'Пластиковые ложки мал.', value: 0},
        {title: 'Пластиковые ножи мал.', value: 0},
        {title: 'Салфетки бумажные', value: 0},
        {title: 'Салфетки вискозные', value: 0},
        {title: 'Салфетки вискозные (рулон)', value: 0},
        {title: 'Салфетки влажные', value: 0},
        {title: 'Салфетки из микрофибры', value: 0},
        {title: 'Полотно вафельное', value: 0},
        {title: 'Тарелки бумажные', value: 0},
        {title: 'Лента кассовая 57 мл. (для сим-терминала)', value: 0},
        {title: 'Пленка для выпечки (рулон)', value: 0},
        {title: 'Пергамент', value: 0},
        {title: 'Трубочки гофрированные 5 мм', value: 0},
        {title: 'Трубочки в индивидуальной упаковке 7 мм', value: 0},
        {title: 'Перчатки одноразовые полиэтилен', value: 0},
        {title: 'Перчатки многоразовые (нитриловые, виниловые)', value: 0},
        {title: 'Пакет мусорный 120 л.', value: 0},
        {title: 'Мыло жидкое 475 мл.', value: 0},
        {title: 'Мыло пена 1 л.', value: 0},
        {title: 'Держатель для 2-х стаканов', value: 0},
        {title: 'Держатель для 4-х стаканов', value: 0},
        {title: 'Пакет-майка', value: 0},
        {title: 'Губка', value: 0},
        {title: 'Пакет для выпечки', value: 0},
        {title: 'Контейнер ракушка РК-40', value: 0},
        {title: 'Контейнер ракушка РК-15', value: 0},
        {title: 'Моющее ср-во для поверхностей Палероль', value: 0},
        {title: 'Ср-во для мыть стёкол', value: 0},
        {title: 'Дозатор "Monin" 1 л', value: 0},
        {title: 'Дозатор "Monin" 0,7 л', value: 0},
        {title: 'Насадка для МОПа', value: 0},
        {title: 'Ветошь', value: 0},
        {title: 'Средство для мытья полов Мистер Проппер', value: 0},
        {title: 'Средство для мытья посуды', value: 0},
        {title: 'Средство Дольфин дезинфицирующее', value: 0},
        {title: 'Антисептик для рук 1 л', value: 0},
        {title: 'Пемолюкс', value: 0},
        {title: 'Кофиза химия для кофемашины', value: 0},
        {title: 'Щетка для чистки групп', value: 0},
        {title: 'Маска многоразовая', value: 0},
        {title: 'Маска одноразовая', value: 0},
        {title: 'Сумка-шоппер', value: 0},
        {title: 'Термокружка', value: 0},
    ]

    foodTable = [
        {title:'Молоко', value: 0},
        {title:'Круассан с миндалём', value: 0},
        {title:'Круассан с шоколадом', value: 0},
        {title:'Круассан с сыром', value: 0},
        {title:'Круассан классический ', value: 0},
        {title:'Треугольник с вишней', value: 0},
        {title:'Кленовый пекан', value: 0},
        {title:'Печенье шоколад-мята', value: 0},
        {title:'Печенье 4 шоколада', value: 0},
        {title:'Печенье клюква-бел.шоколад', value: 0},
        {title:'Печенье апельсин-кокос', value: 0},
        {title:'Печенье с шок.крошкой', value: 0},
        {title:'Эклер шоколад (кратное 6)', value: 0},
        {title:'Макаруни фисташка', value: 0},
        {title:'Макаруни шоколад', value: 0},
        {title:'Макаруни малина', value: 0},
        {title:'Пряник', value: 0},
        {title:'Пончик ваниль', value: 0},
        {title:'Пончик шоколад ', value: 0},
        {title:'Пончик банан', value: 0},
        {title:'Фисташковый тарт с малиной', value: 0},
        {title:'Тарт "Сникер"', value: 0},
        {title:'Тарт "Сникер"', value: 0},
        {title:'Венская вафля ', value: 0},
        {title:'Сырники ', value: 0},
        {title:'Лёд пакетики (кратно 5) ', value: 0},
    ]

    date = ''
    place = ''

    constructor() {
        makeAutoObservable(this)
    }

    changeDate(val){
        this.date = val.split('-').reverse().join('.')
    }
    changePlace(val){
        this.place = val
    }

    ChangeValue(index,val,obj){
        if(obj === 'table'){
            this.table[index].value = val
        }
        else if(obj === 'food'){
            this.foodTable[index].value = val
        }

    }
}

export default new Store()