import React, {useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox  from "../components/SearchBox";
import Scroll from '../components/Scroll'
import './App.css';



function App (){
    
    // constructor() {
    //     super()
    //     this.state={
    //         robots: [],
    //         searchfield: '' //this.setState state updates this searchfield
    //     }
    // }

    const [robots, setRobots] = useState([]) 
    const [searchfield, setSearchfield] = useState('');
    //hooks is  function that lets u hook into a react feature
    //

    //the next part is to hook into 

    useEffect(() => {
        
        fetch('https://jsonplaceholder.ypicode.com/users')
            .then(response => response.json())
            
            .then(users => { setRobots(users) })

            .catch(onRejected => console.log(onRejected))
    }, []);

        
    const onSearchChange =(event) => {
        // This Is The Function That Modifies The SearchBox Component's State.
        setSearchfield(event.target.value) 
   
    }

   
    const filteredRobots =
        robots.filter(robot => {
            return robot.name
                .toLowerCase()
                .includes(
                    searchfield.toLowerCase()
                );
        })
            // console.log(robots,searchfield);

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