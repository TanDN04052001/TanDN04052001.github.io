import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//function clock(){
//   var element=(
//       <div>
//         <img src={person.avatar} alt="lycute"/>
//         <p>bay h la: {new Date().toLocaleDateString()}</p>
//         {greeting(person)}
//       </div>
  // );

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// function greeting(user){
//   if(user){
//     return <h1>Hello {fullName(person)}</h1>
//   }
//   else {
//     return <h1>Nguoi La A</h1>
//   }
// }
// //setInterval(clock,100);

class Slideshow extends React.Component{
  constructor(props){
    super(props);
    this.state={slide:1};
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({slide:this.state.slide==11?1:this.state.slide +1}) 
    },2000)
  }
  next=()=>{
    this.setState({slide:this.state.slide==11?1:this.state.slide +1})
  }
  prev=()=>{
    this.setState({slide:this.state.slide==1?11:this.state.slide -1})
  }
  render(){
    return(
      <div className='Slide'>
        <img className='Images' src={"images/"+"slide"+this.state.slide+".jpg" } alt="anh 1"/>
        <button className='button1' type="button" onClick={this.prev}><i className="fas fa-hand-point-left"></i></button>
        <button className='button' type="button" onClick={this.next}><i className="fas fa-hand-point-right"></i></button>
        <div>
        <button>nhan</button>
        </div>
       </div>
    )
  }
    
}

ReactDOM.render(
  <Slideshow></Slideshow>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
