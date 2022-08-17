import React,{Component} from 'react';
import './search.css';


class Search extends Component {
  
      
    // constructor(){
    //     super()

    //     this.state={
           
    //         filteredData: JSON
    //     }
    // }

    // filterProduct = (keyword) =>{
    //     let output = this.state.productData.filter((item) => {
    //         return item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
    //     })

    //     this.setState({filteredData:output})
    // }

    handleChange = (event) => {
        //console.log(event.target.value);
        //console.log(">>>>inside handleChange>>>>")
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }

    render(){
       
        return (
            <>
        
                <div id="Searchb"> 
                  <center>
                        <input className="searchbox"  placeholder="     Search..." onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'20px'}}></div>
                    
                    </center>
                     </div>
            
            </>
      
        )
    }
      
}


export default Search;