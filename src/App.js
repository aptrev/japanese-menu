import './App.css';
import MenuItem from './components/MenuItem';


import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  return (
    <div>
      {/* Title Section */}
      <div className="title">
        <div className="container">
          <div className="row">
            <div className="col-2 col-sm-5 col-md-5 text-end">
              <img src="images/food_logo.jpg" alt="Logo" style={{ width: "60px" }} />
            </div>
            <div className="col-10 col-sm-7 col-md-7 text-start">
              <h1 className="name">CAMPUS CAFE</h1>
            </div>
          </div>
        </div>
      </div>


      {/* Motto Section */}
      <div className="motto text-center">
        <h4 className="description">Delicious, From-Scratch Recipes Close at Hand</h4>
        <h2 className="slogan">The Fresh Choice of UT!</h2>
      </div>

      {/* Menu Section */}
      <div className="container mt-4">
        <div className="temp">
          {menuItems.map((item) => (
            <MenuItem 
              key={item.id} 
              title={item.title} 
              description={item.description} 
              imageName={item.imageName}
              price={item.price} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
