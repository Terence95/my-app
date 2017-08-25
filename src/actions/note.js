import moment from 'moment'
import { getStorage } from '../utils/storage'
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


