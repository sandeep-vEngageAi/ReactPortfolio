import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 60,

              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
          shape:{
            type:"star",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
          }
        }}
      />

      <Navbar />
      <Header />
    </>
  );
}

export default App;
