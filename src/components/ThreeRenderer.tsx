import { OrbitControls } from "@react-three/drei";

export const ThreeRenderer = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <meshMatcapMaterial />
        <dodecahedronGeometry />
      </mesh>
    </>
  );
};