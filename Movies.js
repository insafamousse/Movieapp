import React from 'react' ;
const Movies =({value,onChange=()=>{}})=> {
    return ( 
         
            <div className="Card-1">
                <center > 
                <input type="text"   
                   onChange={(event)=>onChange(event.target.value)}
                   id="Card-1-text" 
                   value={value}/>
                <button type="button" id="header-search" value="Search">search</button>   <h5>Minimum MovieRating 
                </h5>
        </center>
        </div>
                  
    
     )
}


export default Movies;