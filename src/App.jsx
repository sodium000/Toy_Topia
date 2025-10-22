

import Banner from './Banner/Banner'
import Login from './Login/Login'
import NavBar from './NavBar/NavBar'
import ToyCard from "./Card/ToyCard";
import Registration from './Registration/Registration';
import MyProfile from './Myprofile/MyProfile';

function App() {
  const toyData = {
  thumbnail: "https://images.unsplash.com/photo-1616628188502-0ab8d8e6a4d0?w=400",
  toyName: "Robot Transformer",
  rating: 4.8,
  availableQuantity: 12,
  price: 39.99,
};


const userData = {
  name: "John Doe",
  email: "johndoe@example.com",
  photo: "https://randomuser.me/api/portraits/men/75.jpg",
  phone: "+1 555-1234",
  address: "New York, USA",
};



  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Login></Login>
    <ToyCard toy={toyData} />
    <Registration></Registration>
    <MyProfile user={userData} />
    </>
  )
}

export default App
