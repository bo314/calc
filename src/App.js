import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

//help from https://www.geeksforgeeks.org/reactjs-calculator-app-adding-functionality/
//and https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    //react to what button is selected equal/clear/delete
    onClick = button => {

        if(button === "="){
            this.equal()
        }

        else if(button === "clear"){
            this.clear()
        }
        else if(button === "del"){
            this.del()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    //functional components to equal/clear/delete
    equal = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "Math Error"
            })

        }
    };

    clear = () => {
        this.setState({
            result: ""
        })
    };

    del = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Mona's Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;