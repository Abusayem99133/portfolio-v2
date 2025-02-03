import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera & Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    camera.position.z = 5;

    // Create Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1500;
    const starPosition = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPosition[i] = (Math.random() - 0.5) * 100; // (-50 to 50)
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPosition, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Mouse Move Effect
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      starField.rotation.x = mouseY * 0.2;
      starField.rotation.y = mouseX * 0.2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.x += 0.0005;
      starField.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup Function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 w-full h-full" />;
};

export default ThreeBackground;
