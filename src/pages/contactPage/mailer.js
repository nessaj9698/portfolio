import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

export const sendToTelegram = ({from, name, message}) => {
    console.log(process.env)
    axios.post(`https://api.telegram.org/bot${process.env.REACT_APP_token}/sendMessage?chat_id=${process.env.REACT_APP_chatID}&parse_mode=HTML&text=from:${from}%0Aname:${name}%0Amessage:${message}`);
}