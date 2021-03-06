import React,{Component} from 'react';
import './Search.css'

const url = "https://febapi.herokuapp.com/city";
class Search extends Component{
    constructor(){
        super()
            this.state={
                city:''
            }
    }
    //Display city in option
        renderCity = (data) =>{
            if(data){
                return data.map((item)=>{
                    return(
                        <option>{item.name} | {item.city_name}</option>
                    )
                })
            }
        }
        render(){
            return(
                <React.Fragment>
                <div className="imagecontainer img-responsive container" style={{width:'100%'}}>
                        <div style={{textAlign:'right'}}>
                            <a className="yt" href="https://www.youtube.com/" target="_blank">
                            <img src="/images/youtube logo.png" height="50" width="50"/>
                            </a> 
                            <a className="fb" href="https://www.facebook.com/" target="_blank">
                                <img src="/images/Facebook-logo.png" height="45" width="45"/>
                            </a> 
                        </div>
                    
                    
                    <div id="logo">
                        <b style={{marginleft: '4px'}}>e!</b>
                    </div>
                    <div id="tagline" className="container">
                        <p>Find the Best Restaurants,Cafes and Bars</p>
                    </div>
                    
                    <div className="location " >
                        <select className=" container dropdown1  " >
                            <option>----SELECT CITY----</option>
                            {this.renderCity(this.state.city)}
                        </select> 
                    
                        
                        <select className="container dropdown2 " >
                            
                            <option  className="fa fa-search">Search Your Restaurants</ option>
                            <option>Punjab da dhaba</option>
                            <option>Ammas kitchen</option>
                            <option>Dominos</option>
                        </select>
                    </div>
                    
                </div>
                </React.Fragment>
            )

    }
    //call api to get the data
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        //setting data to state
        .then((data) => this.setState({city:data}))
    }
}
export default Search;