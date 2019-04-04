import React from 'react';


class RefClass extends React.Component{
    constructor(props){
        super(props);
        this.inputElement = null;
    }
    componentDidMount(){
        console.log("in componentDidMount")
        this.inputElement.focus();
    }
    render(){
        return(
            <div>
                <div>RefClass</div>
                <div>
                    <input 
                        type="text" 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        ref={(inp) => this.inputElement=inp}
                    />
                </div>
            </div>
        )
    }
}

export default RefClass;



