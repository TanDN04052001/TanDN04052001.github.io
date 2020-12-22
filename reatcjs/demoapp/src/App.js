import google from './google.png';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const slideImages = [
  './slide1.jpg',
  './slide2.jpg',
  './slide3.jpg',
  './slide4.jpg'
];
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  )
}


function Form() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Welcome></Welcome>
      </header>
      
    </div>
  );
}

class Welcome extends React.Component{
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render(){
    return(
      <div>
        <img src={google} className="logo-header" alt="logo" />
        <p className="useName">Tạo Tài Khoản Google</p>
        <form action="#" method="get">
          <div className="fullname index">
            <label for="fastName"></label>
            <input className="Name" type="text" id="fastName" placeholder="Đỗ Nhật" name="fast Name" required></input>
          </div>
          <div className='fade index'>
            <label for="lastName"></label>
            <input className="Name" type="text" id="lastName" placeholder="Tân" name="last Name" required></input>
          </div>
          <div className="email index">
            <label for="email"></label>
            <input className="text-form" id="email" type="email" placeholder="@gmail.com" name="txtemail" required></input>
          </div>
        </form>
      </div>
    )
  }
}
class Shoot extends React.Component{
 shoot() {
  alert("Đã Nhìn Thấy Mục Tiêu! Đấm Anh Ly");
  
    

 }
 render(){
  return(
      <button onClick={this.shoot}>Bấm đi</button>
  )

 }
}
class Slidesho extends React.Component{
  constructor(props){
    super(props);
    this.state={image:1};
  }
  next=()=>{
    this.setState({image:this.state.image==3?3:this.state.image+1})
  }
  prev=()=>{
    this.setState({image:this.state.image==1?1:this.state.image -1})
  }
  render(){
    return(
      <div>
        <img src={"images/"+"img"+this.state.image+".png" } alt="anh 1"/>
        <button type="button" onClick={this.next}>Tiep theo</button>
        <button type="button" onClick={this.prev}>Quay lai</button>
      </div>
    )
  }
    
}
ReactDOM.render(
  // <Toggle />,
  <Slidesho></Slidesho>,
  document.getElementById('root')
);
class Auto extends React.Component{
  constructor(props){
    super(props);
    this.state = {img: 1};
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({img: this.state.img +1}); 
    },2000)
  }
  componentDidUpdate(){
    setTimeout(()=>{
      this.setState({img:this.state.img==3?3:this.state.img +1}); 
    },2000)
  }
  render(){
    return (
    <div>
      <img src = {"images/"+"img"+this.state.img+".jpg"} />
    </div>
    );
  }
}
// ReactDOM.render(

//   <Shoot></Shoot>,
//   document.getElementById('root')
// )
// function Welcome(product){
//   return(
    
//   )
// }
// var decription={
//   author:{
//     name:'Đỗ Nhật Tân',
//     facebook:''
//   }
// }