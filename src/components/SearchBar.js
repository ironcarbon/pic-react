import React,{Component} from 'react';

class SearchBar extends Component {
onChangeHandler(event) {
    console.log(event.target.value)
}

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Research</label>
                        <input type="text" onChange={this.onChangeHandler} />
                        {/*Alternate event handler syntax  <input type="text" onChange={(e) => e.target.value} /> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;