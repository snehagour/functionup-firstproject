import image from "./image";
import ImageSlider from "./ImageSlider";
import About from "./Pages/About";
import Classes from "./Pages/Classes";
import Navbar from "./Pages/Navbar";
import Pricing from "./Pages/Pricing";



function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <ImageSlider image={image} />
      <Pricing />
      <Classes />

    </div>
  )
}

export default App;