import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{

    submitHandler(term){
        console.log(term)
    }

    render(){
        return (
            <div>
                <SearchBar submit={this.submitHandler}className="ui conteiner" style={{marginTop: '10px'}}/>
            </div>
            );
    }
} 
export default App;