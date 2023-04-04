import './App.css';
import Productlist from './components/Productlist';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Phone", price:"21,000", imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPq8VN0d2nLxcq_j_rMIXFHzFvIBx5wiPWxA&usqp=CAU"},{no:"2",name:"Car", price:"70,00,000", imageUrl:"https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}]}/>
    </div>
  );
}


export default App;
