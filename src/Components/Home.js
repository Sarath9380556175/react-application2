import React from "react";
import Wallpaper from './wallpaper';
import Quicksearch from './QuickSearch';
import axios from "axios";
class Home extends React.Component{
    constructor()
    {
        super();
        this.state={
            locations:[],
            mealtypes:[],
            filter:[]
        }
    }

    shouldComponentUpdate()
    {
        return true;
    }
    componentDidMount()
    {
        sessionStorage.clear();
        axios({
            url:'https://young-springs-40402.herokuapp.com/locations',
            method:'GET',
            headers:{'content-Type':'application/json'}
        }) 
        .then(res=>this.setState({locations:res.data.locations}))
        .catch(err=>console.log(err))


        axios({
            url:'https://young-springs-40402.herokuapp.com/mealtypes',
            method:'GET',
            headers:{'content-Type':'application/json'}
        })
        .then(res=>this.setState({mealtypes:res.data.mealtype}))
        .catch(err=>console.log(err))



        
    }





    render()
    {
        const {locations, mealtypes}=this.state;

        return(
            <div>
    <Wallpaper locations={locations}/>
    <Quicksearch mealtypes={mealtypes}/>
    </div>
        );
    }
}

export default Home;