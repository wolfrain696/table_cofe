//https://api.telegram.org/bot<token>/METHOD_NAME

import axios from "axios";

const token = "1990536205:AAEorAfze_NjlSL5QsZxilv0a6ztNbZdWPU"
const URL = "https://api.telegram.org/bot"
const chatID = '-578025210'

export const sendMessage = async (name, date, place, hozText, foodText) => {
    const response = await axios.get(
        `${URL}${token}/sendMessage?chat_id=${chatID}&parse_mode=HTML&text=
       Ответственный: ${name}%0A${date}%0A${place}%0A ${hozText && `%0AХозы: %0A${hozText}`} ${foodText && `%0AВыпечка: %0A${foodText}`}`
    )
    return response.data
}

export const getUpdates = async () => {
    const response = await axios.get(URL + token + '/getUpdates')
    console.log(response.data)
}
