import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import { SearchBox } from "../components/SearchBox";
import Scroll from '../components/Scroll'
import './App.css';



class App extends Component {
    
    constructor() {
        super()
        this.state={
            robots: robots,
            searchfield: '' //this.setState state updates this searchfield
        }
    }

        //without = && => this won't work
        //always include it 
    onSearchChange = (event) => {
        //everytime the input changes we get 
        // an event
        this.setState({searchfield: event.target.value }) //used everytime we want to set the state (this.setState() method)
        //that setState ensures that the searchfield always gets updated
   
    }

    render() {

        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })

        if (this.state.robots.length === 0){
            return <h1 className="tc f1">Loading</h1>
        }else{

                return(
                    <div className ='tc' > 
                    
                    <h1 className="tc f1">RoboFriends</h1>
                    
                    <SearchBox searchChange ={this.onSearchChange}/>

                    {/* <CardList robots ={robots} /> old code before search functionality added */}


                    <Scroll>
                    <CardList robots ={filteredRobots} />
                    </Scroll>
            
                    </div>
                );

        }
            
    }
}

export default App;