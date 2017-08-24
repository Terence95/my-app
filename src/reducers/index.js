import { ADD_NOTE, DELETE_NOTE, SHOW_NOTE, SHOW_LAYER, SHOW_EDITER } from '../constants'
import {setStorage, getStorage} from '../utils/storage'


// 获取初始数据
const localnotes = JSON.parse(getStorage('notes'))
const localcnote = getStorage('cnote')
const initialState = {
    notes: localnotes || {},
    cnote: localcnote || {},
    isShowLayer: false,
    isShowEditer: false
}


const noteApp = (state = initialState, action) => {
    return state;
}

export default noteApp