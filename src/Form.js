import React, { Component } from 'react'

class Form extends Component {
    
state={
    name:"",
    dept:"",
    rating:"",
    data:[]
}    

handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value
        ,[event.target.dept]:event.target.value,[event.target.rating]:event.target.value})
}

handleClick=()=>{
    const obj={
        name:this.state.name,
        dept:this.state.dept,
        rating:this.state.rating
    }
    const value=this.state.data
    value.push(obj)

    this.setState({[this.state.data]:value})
    console.log(this.state.data)
}

boxStyle={
  height:"50px",
  width:"200px",
  backgroundColor:"lightblue",
  margin: "10px",
  borderRadius:"20px",
  fontWeight:"bold"
}

  render() {
    return (
       <>
      <div>
      <label style={{fontSize:"20px",fontWeight:"bold"}}>NAME    :<input style={this.boxStyle} name='name' onChange={this.handleChange} maxLength={20} /></label><br/>

      <label style={{fontSize:"20px",fontWeight:"bold"}}>DEPARTMENT:<input style={this.boxStyle} name='dept' onChange={this.handleChange} /></label><br/>

      <label style={{fontSize:"20px",fontWeight:"bold"}}>RATING:<input style={this.boxStyle} name='rating' maxLength={1} onChange={this.handleChange} /></label><br/>

      <button style={this.boxStyle} onClick={this.handleClick}>Submit</button>
    
      </div>

<div className='outPutForm' style={{border:"2px solid black", display:"flex" ,flexWrap:"wrap",width:"90vw",margin:"auto auto",justifyContent:"center"}}>
{this.state.data.map((item,index)=>{
  return(
      <div className='wrapinputs'>
          <div id='inputboxes'>
       NAME: {item.name} | DEPARTMENT: {item.dept} | RATING: {item.rating}
       </div>
      </div>
  )
})}  </div>
    </> 
    )
  }
}

export default Form