import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

// Utility function to throttle the scroll event
const throttle = (func: Function, limit: number) => {
  let lastFunc: number;
  let lastRan: number;
  return function (...args: any) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = window.setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

const ScrollVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scene = useRef(new THREE.Scene());
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);

  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    if (canvasRef.current) {
      renderer.current = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true
      });

      renderer.current.setSize(window.innerWidth, window.innerHeight);

      camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      // Example setup (update as needed)
      scene.current.background = new THREE.Color(0x000000);
      camera.current.position.z = 5;

      // Animation loop (example)
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.current?.render(scene.current, camera.current!);
      };
      animate();

      // Cleanup on unmount
      return () => {
        renderer.current?.dispose();
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (scrollContainerRef.current && videoRef.current && videoDuration) {
        const container = scrollContainerRef.current;
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const progress = scrollTop / scrollHeight;
        const newTime = progress * videoDuration;
        videoRef.current.currentTime = newTime;
      }
    }, 16); // Throttle to 60fps

    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [videoDuration]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        setVideoDuration(videoRef.current!.duration);
      });
    }
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="scrollable-container"
        style={{ height: '100vh', overflowY: 'scroll' }}
      >
        <div style={{ height: '200vh' }}>
          <canvas ref={canvasRef} />
          <video ref={videoRef} muted loop preload="auto">
            <source src="/videos/solar.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ScrollVideo;
