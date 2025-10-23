

import Banner from './Banner/Banner'
import Login from './Login/Login'
import NavBar from './NavBar/NavBar'
import ToyCard from "./Card/ToyCard";
import Registration from './Registration/Registration';
import MyProfile from './Myprofile/MyProfile';
import ToyDetails from './ToyDetailes/ToyDetails';

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

const ToyData = {
  toyName: "Classic Board Game",
  sellerName: "Board Fun",
  sellerEmail: "hello@boardfun.com",
  price: 35.99,
  rating: 4.8,
  availableQuantity: 100,
  description:
    "Classic family board game that helps improve strategy and teamwork skills.",
  pictureURL:
    "https://cdn.pixabay.com/photo/2017/09/06/14/51/board-game-2729640_1280.jpg",
  subCategory: "Board Games",
};



  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Login></Login>
    <ToyCard toy={toyData} />
    <Registration></Registration>
    <MyProfile user={userData} />
    <ToyDetails toy={ToyData} />
    </>
  )
}

export default App
