import React from 'react';
import './style.css'

import Hello from './hello';
import Timer from './timer';

class App extends React.Component {
    constructor(){
        super();
        this.state={
            title : "سلام دوستان عزیزم"
        }
        // this.handleSetTitle = this.handleSetTitle.bind(this)
    }

    // handleSetTitle = ()=>{
    //     this.setState({
    //         title:"به کدیاد خوش آمدید"
    //     })
    // }

    render(){
        return (
        <div className="main">
            <Hello title={this.state.title}/>        
            <Timer handleSetTitle={this.handleSetTitle}/>
        </div>
        ) 
    }
}


export default App;
