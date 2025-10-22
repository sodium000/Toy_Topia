

import Banner from './Banner/Banner'
import Login from './Login/Login'
import NavBar from './NavBar/NavBar'
import ToyCard from "./Card/ToyCard";

function App() {
  const toyData = {
  thumbnail: "https://images.unsplash.com/photo-1616628188502-0ab8d8e6a4d0?w=400",
  toyName: "Robot Transformer",
  rating: 4.8,
  availableQuantity: 12,
  price: 39.99,
};


  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Login></Login>
    <ToyCard toy={toyData} />
    </>
  )
}

export default App
