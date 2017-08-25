import moment from 'moment'
import { getStorage } from '../utils/storage'
// 这些相当于action的type,也就是action的名称, action描述当前发生的事情,改变state的唯一方法,使用action,将数据运送到store
// Action Creator, view要发送多少种消息,就会有多少种Action。如果手写会很麻烦,可以定义一个函数来生成Action 这个函数叫Action Creator
import { ADD_NOTE, DELETE_NOTE, SHOW_NOTE, SHOW_LAYER, SHOW_EDITER } from '../constants'

// Action State的变化,会导致View的变化。但是,用户接触不到State,只能接触到View, 因此,State的变化必须是View导致的,
// Action就是View发出的通知,表示State应该要发送变化了, Action是一个对象,其中的Type属性是必须的,代表Action的名称,其他属性可以自由设置

let noteId;
let notesArr2;
let notesArr = JSON.parse(getStorage('notes'));

if (notesArr instanceof Array && notesArr.length !== 0) {
    if (notesArr.length === 1) {
        notesArr2 = notesArr;
    } else {
        notesArr2 = notesArr.sort(function (a,b) {
            return a.id < b.id;
        })
    }
    noteId = notesArr2[0]['id']+1;
} else {
    noteId = 0;
}

// 增加一篇笔记 或者 编辑之后保存
// 这个addNote是一个Action Creator
export const addNote = (title, content, id, time) => {
    if (id === undefined && time === undefined) {
        return {
            type: ADD_NOTE,
            id: noteId++,
            title,
            content,
            time:moment().format("YYYY-MM-DD HH:mm")
      }
    } else {
        return {
            type: ADD_NOTE,
            id,
            title,
            content,
            time: moment().format("YYYY-MM-DD HH:mm")
        }
    }
}

// 预览一篇笔记
export const showNote = (id) => {
    return {
        type: SHOW_NOTE,
        id
    }
}

export const showLayer = (isShowLayer) => {
    return {
        type: SHOW_LAYER,
        isShowLayer
    }
}

export const showEditer = (isShowEditer) => {
    return {
        type: SHOW_NOTE,
        isShowEditer
    }
}




