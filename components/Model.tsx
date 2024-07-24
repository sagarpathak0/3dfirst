import { useGLTF, useAnimations, useScroll } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

useGLTF.preload('/dodo.glb');

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF('/dodo.glb');
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play().paused = false;
    }
  }, [actions]);

  useFrame(({ clock }) => {
    if (actions["Experiment"]) {
      actions["Experiment"].time = (actions["Experiment"].getClip().duration * scroll.offset) / 3;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
