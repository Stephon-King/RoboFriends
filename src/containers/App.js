import React, {useState, useEffect } from "react";
import CardList from "../components/CardList";
import { SearchBox } from "../components/SearchBox";
import Scroll from '../components/Scroll'
import './App.css';



function App (){
    
    // constructor() {
    //     super()
    //     this.state={
    //         robots: robots,
    //         searchfield: '' //this.setState state updates this searchfield
    //     }
    // }

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('');

        //without = && => this won't work
        //always include it 
    const onSearchChange = (event) => {
        //everytime the input changes we get 
        // an event
        setSearchfield(event.target.value) //used everytime we want to set the state (this.setState() method)
        //that setState ensures that the searchfield always gets updated
   
    }

   
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); 
        })

      return !robots.length ?
            <h1 className="tc f1">Loading</h1> :
            
            (
                    <div className ='tc' > 
                    
                    <h1 className="tc f1">RoboFriends</h1>
                    
                    <SearchBox searchChange ={onSearchChange}/>                  
                    <Scroll>
                    <CardList robots ={filteredRobots} />
                    </Scroll>
            
                    </div>
                );

        }
            
    


export default App;