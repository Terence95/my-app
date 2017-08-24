import React from 'react'
import { connect } from 'react-redux'

import Head from './Head'

class Root extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            showNoteDetail: false,
            isFullScreen: false
        };
          this.changeStatusShow = this.changeStatusShow.bind(this)
          this.changeFullScreen = this.changeFullScreen.bind(this)
      }

    changeStatusShow(status) {
        this.setState({
            showNoteDetail: status
        })
    }

    changeFullScreen(status) {
        this.setState({
            isFullScreen: status
        })
    }
    
    render() {
        return (
            <div className="App">
                <Head></Head>
                <main></main>
            </div>
        )
    }
}


