
import './App.css';
import Whotofollow from './components/pages/HOMEPAGE/Whotofollow';
import Card from './components/pages/HOMEPAGE/card';
import Main from './components/pages/HOMEPAGE/Main';


// import Signin from './components/pages/Signin';


const  carddata1 =
 [
  {
   image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80",
   Name:"Akshay Kumar ",
   title:"Akshay Kumar Akshay@gmail.com Rajiv Hari Om Bhatia (born 9 September 1967),",
   button:" follow "
  },
  {
    image:"https://c8.alamy.com/comp/PG55RP/portrait-of-a-successful-business-man-isolated-on-white-PG55RP.jpg",
    Name:"andeep Kumar..",
    title:"andeep  Kumar andeep@gmail.com Rajiv Hari Om Bhatia (born 9 September 1967),",
   button:" follow "
    
   },
   {
    image:"https://st4.depositphotos.com/18610578/21932/i/600/depositphotos_219322862-stock-photo-adult-cheerful-man-smiling-orange.jpg",
    Name:"sameer kumar",
    title:"sameer kumar@gmail.com Rajiv Hari Om Bhatia (born 9 September 1967),",
   button:" follow ",
   },
   {
    image:"https://pbs.twimg.com/media/EZHz5kDXQAEmSF3.png",
    Name:"gurav..... singh",
    title:"gurav singh gaurav@gmail.com Rajiv Hari Om Bhatia (born 9 September 1967),",
   button:" follow "
   }
]

function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      {/* <Whotofollow/> */}
      <Main/>

      {
        carddata1.map((card1)=>(
      <Card 
      image={card1.image}
      Name={card1.Name}
      title={card1.title}
      button={card1.button}
       />
        ))
      }
    </div>
  );
}

export default App;