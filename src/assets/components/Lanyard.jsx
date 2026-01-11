import "@dimforge/rapier3d-compat";
'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

// Custom hook for WebGL detection
const useWebGLSupport = () => {
  const [webglSupported, setWebglSupported] = useState(null);
  const [webglError, setWebglError] = useState(null);

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
          setWebglSupported(false);
          setWebglError('WebGL is not supported by your browser.');
          return false;
        }
        
        // Test actual WebGL functionality
        const testShader = gl.createShader(gl.VERTEX_SHADER);
        if (!testShader) {
          setWebglSupported(false);
          setWebglError('WebGL context creation failed.');
          return false;
        }
        
        // Additional WebGL feature check
        const ext = gl.getExtension('WEBGL_depth_texture');
        if (!ext) {
          console.warn('WebGL depth texture extension not available');
        }
        
        setWebglSupported(true);
        return true;
      } catch (e) {
        console.warn('WebGL detection failed:', e);
        setWebglSupported(false);
        setWebglError('WebGL detection failed. Please check your browser settings.');
        return false;
      }
    };

    checkWebGL();
  }, []);

  return { webglSupported, webglError };
};

// Error boundary component for Canvas
const CanvasErrorBoundary = ({ children, onError }) => {
  try {
    return children;
  } catch (error) {
    console.error('Canvas rendering error:', error);
    onError?.(error);
    return null;
  }
};

// replace with your own imports, see the usage snippet for details
const cardGLB = '/assets/lanyard/card.glb';
const lanyard = '/assets/lanyard/lanyard.png';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, 0, 30], gravity = [0, -40, 0], fov = 20, transparent = true }) {
  const { webglSupported, webglError } = useWebGLSupport();

  // Fallback component when WebGL is not available
  const WebGLFallback = () => (
    <div className="relative z-0 w-full h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700">
        <div className="text-6xl mb-4">🎮</div>
        <h2 className="text-2xl font-bold text-white mb-2">3D Lanyard Demo</h2>
        <p className="text-gray-300 mb-4 max-w-md">
          {webglError || 'This interactive 3D demo requires WebGL support.'}
        </p>
        <div className="space-y-2 text-sm text-gray-400 mb-6">
          <p>• Try enabling WebGL in your browser settings</p>
          <p>• Update your graphics drivers</p>
          <p>• Use a modern browser like Chrome, Firefox, or Edge</p>
          <p>• Check if WebGL is blocked by security software</p>
        </div>
        <div className="text-xs text-gray-500">
          In the meantime, enjoy this static preview of the 3D lanyard animation.
        </div>
      </div>
    </div>
  );

  // If WebGL support is still being checked, show loading
  if (webglSupported === null) {
    return (
      <div className="relative z-0 w-full h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  // If WebGL is not supported, show fallback
  if (!webglSupported) {
    return <WebGLFallback />;
  }

  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <CanvasErrorBoundary onError={(error) => {
          console.error('Canvas error:', error);
          // Note: webglError is already set by the hook
        }}>
        <Canvas
          camera={{ position: position, fov: fov }}
          gl={{ alpha: transparent }}
          onCreated={({ gl }) => {
            try {
              gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
            } catch (error) {
              console.warn('Failed to set canvas clear color:', error);
            }
          }}
          onError={(error) => {
            console.error('Canvas error:', error);
            // Note: webglError is already set by the hook
          }}
        >
          <ambientLight intensity={Math.PI} />
          <Physics gravity={gravity} timeStep={1 / 60}>
            <Band />
          </Physics>
          <Environment blur={0.75}>
            <Lightformer
              intensity={2}
              color="white"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={10}
              color="white"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0 }) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  
  // Add error handling for GLTF and texture loading
  let nodes, materials, texture;
  try {
    const gltfResult = useGLTF(cardGLB);
    nodes = gltfResult.nodes;
    materials = gltfResult.materials;
  } catch (error) {
    console.warn('Failed to load GLTF model:', error);
    // Fallback empty objects
    nodes = { card: { geometry: null }, clip: { geometry: null }, clamp: { geometry: null } };
    materials = { base: { map: null }, metal: null };
  }
  
  try {
    texture = useTexture(lanyard);
  } catch (error) {
    console.warn('Failed to load texture:', error);
    texture = null;
  }
  
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);
  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            <mesh geometry={nodes.card?.geometry || undefined}>
              <meshPhysicalMaterial
                map={materials?.base?.map || undefined}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip?.geometry || undefined} material={materials?.metal || undefined} material-roughness={0.3} />
            <mesh geometry={nodes.clamp?.geometry || undefined} material={materials?.metal || undefined} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap={!!texture}
          map={texture || undefined}
          repeat={texture ? [-4, 1] : undefined}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}