import React from 'react';

//markdown 模块
const marked = require('marked');

class Edit extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        const _t = this.props.title;
        const _c = this.props.content;
        this.state = {
            title: _t,
            content: _c
        };

        this.saveANote = this.saveANote.bind(this);
        // this.changeTitle = this.changeTitle.bind(this);
        // this.changeContent = this.changeContent.bind(this);
      }
    
    saveANote(tit, ctt, id) {
        
    }

    render() {
        let markedString = '# ${this.state.title}\n\n${this.state.content}';
        return (
            <div>
                edit
            </div>
        )
    }
}

export default Edit;

