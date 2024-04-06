/* eslint-disable react/no-unknown-property */
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";

export default function Esfera(props) {
  const colorMap = useLoader(TextureLoader, [
    "/textures/tierra-texture.jpeg",
    "/textures/marte-texture.png",
  ]);
  const earthRef = useRef("tierra");
  const [keyPressed, setKeyPressed] = useState("");
  const [keyPlanet, setKeyPlanet] = useState("1");
  const [keyDown, setKeyDown] = useState(false);

  useFrame((state, delta) => {
    if (keyPressed === "w" && keyDown) earthRef.current.rotation.x -= delta / 2;
    if (keyPressed === "s" && keyDown) earthRef.current.rotation.x += delta / 2;
    if (keyPressed === "a" && keyDown) earthRef.current.rotation.y -= delta / 2;
    if (keyPressed === "d" && keyDown) earthRef.current.rotation.y += delta / 2;
  });

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      // console.log(e.key);
      setKeyPressed(e.key);
      setKeyDown(true);

      if (e.key === "1") setKeyPlanet("1");
      if (e.key === "2") setKeyPlanet("2");
    });
    document.addEventListener("keyup", () => {
      setKeyDown(false);
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        setKeyPressed(e.key);
        setKeyDown(true);
      });
      document.removeEventListener("keyup", () => {
        setKeyDown(false);
      });
    };
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2.5, 32, 32]} />
        {keyPlanet === "1" ? <meshStandardMaterial map={colorMap[0]} /> : ""}
        {keyPlanet === "2" ? <meshStandardMaterial map={colorMap[1]} /> : ""}
      </mesh>
    </group>
  );
}
