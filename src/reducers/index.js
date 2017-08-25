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

// Redux规定, 一个State对应一个view,只要State相同,View就相同。 知道State就知道View是什么样, 反之亦然
const noteApp = (state = initialState, action) => {
    return state;
}

export default noteApp;

// Store对象包含所有数据, 如果想得到某个时点的数据,就要对Store生成快照。这种时点的数据集合,就是State
