import { Canvas } from "@react-three/fiber";
import { ThreeRenderer } from "./components/ThreeRenderer";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 45 }}>
      <color attach="background" args={["#FAF9F6"]} />
      <ThreeRenderer />
    </Canvas>
  );
}

export default App;