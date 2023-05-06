import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="eight"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.13}>
          <div class="animation_layer parallax" id="seven"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.015}>
          <div class="animation_layer parallax" id="six"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="five"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div class="animation_layer parallax" id="four"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.08}>
          <div class="animation_layer parallax" id="three"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={.05}>
          <div class="animation_layer parallax" id="two"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={.03}>
          <div class="animation_layer parallax" id="one"></div>
        </ParallaxLayer>
      </Parallax>
      <div className="max"></div>
    </div>
  );
}

export default App;
