import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
    submitHandler(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 89577192b5cc2901ce5634382e9ca92731545a54513deda75f1f634e1a80fe83'
            }
        })
        .then(res => {
            console.log(res.data.results)
        });
            
    }

    render(){
        return (
            <div>
                <SearchBar submit={this.submitHandler} className="ui conteiner" style={{marginTop: '10px'}}/>
            </div>
            );
    }
} 
export default App;