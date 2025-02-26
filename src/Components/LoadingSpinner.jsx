import { Canvas, useFrame } from "@react-three/fiber";
import { Reflector, OrbitControls, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function LoadingBar({ progress }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress * 100}%`,
        height: "5px",
        background: "#ffc107",
        transition: "width 0.3s ease-out",
        zIndex: 9999,
      }}
    ></div>
  );
}

function ImageMesh({ position = [0, 0, 0], scale = 1, ...props }) {
  const ref = useRef();
  const texture = useTexture("welcome.png");

  // Proper width and height calculations
  const width = 4 * scale;
  const height = 4 * scale;

  const geometry = useMemo(() => {
    const geom = new THREE.PlaneGeometry(width, height);
    return geom;
  }, [width, height]);

  useEffect(() => {
    return () => geometry.dispose(); // Clean up geometry to prevent memory leaks
  }, [geometry]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position} geometry={geometry} {...props}>
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

function Ground(props) {
  const [floor, normal] = useTexture([
    "/src/assets/Gemini_Generated_Image_2v2pjn2v2pjn2v2p.jpeg",
    "/src/assets/Gemini_Generated_Image_2v2pjn2v2pjn2v2p.jpeg",
  ]);

  return (
    <Reflector resolution={1024} args={[8, 8]} {...props}>
      {(Material, props) => (
        <Material
          color="#f0f0f0"
          metalness={0}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
}

const LoadingSpinner = ({ onComplete }) => {
  const [scale, setScale] = useState(1);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 600 ? 0.5 : 0.8);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (loadingProgress < 1) {
      interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 1) {
            clearInterval(interval);
            onComplete && onComplete();
            return 1;
          }
          return prev + 0.1;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [loadingProgress, onComplete]);

  return (
    <>
      <LoadingBar progress={loadingProgress} />
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.5, 5], fov: 60 }}>
        <ambientLight />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <ImageMesh position={[0, 0, 0]} scale={scale} rotation={[0, 0, 0]} />
        <Ground
          mirror={1}
          blur={[500, 100]}
          mixBlur={12}
          mixStrength={1.5}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position-y={-0.8}
        />
        <EffectComposer multisampling={8}>
          <Bloom
            kernelSize={3}
            luminanceThreshold={0}
            luminanceSmoothing={0.4}
            intensity={0.6}
          />
          <Bloom
            kernelSize={2}
            luminanceThreshold={0}
            luminanceSmoothing={0}
            intensity={0.5}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default LoadingSpinner;
