"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Vector2, Color, SRGBColorSpace, NoToneMapping, type ShaderMaterial } from "three"

const vertexShader = `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  uniform vec3 dotColor;
  uniform vec3 bgColor;
  uniform vec2 mouse;
  uniform float rotation;
  uniform float gridSize;
  uniform float dotOpacity;

  vec2 rotate(vec2 uv, float angle) {
      float s = sin(angle);
      float c = cos(angle);
      mat2 rotationMatrix = mat2(c, -s, s, c);
      return rotationMatrix * (uv - 0.5) + 0.5;
  }

  vec2 coverUv(vec2 uv) {
    vec2 s = resolution.xy / max(resolution.x, resolution.y);
    vec2 newUv = (uv - 0.5) * s + 0.5;
    return clamp(newUv, 0.0, 1.0);
  }

  float sdfCircle(vec2 p, float r) {
      return length(p - 0.5) - r;
  }
  
  float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  void main() {
    vec2 screenUv = gl_FragCoord.xy / resolution;
    vec2 uv = coverUv(screenUv);

    vec2 rotatedUv = rotate(uv, rotation);

    vec2 gridUv = fract(rotatedUv * gridSize);
    vec2 gridCenter = (floor(rotatedUv * gridSize) + 0.5) / gridSize;
    vec2 gridUvCenterInScreenCoords = rotate(gridCenter, -rotation);
    
    vec2 gridId = floor(rotatedUv * gridSize);

    float baseDot = sdfCircle(gridUv, 0.25);

    float screenMask = smoothstep(0.0, 1.0, 1.0 - uv.y);
    vec2 centerDisplace = vec2(0.5, 0.5);
    float circleMaskCenter = length(uv - centerDisplace);
    float circleMaskFromCenter = smoothstep(0.3, 1.2, circleMaskCenter);
    
    float combinedMask = screenMask * circleMaskFromCenter;
    
    float fallSpeed = random(gridId) * 0.5 + 0.3;
    float fallOffset = random(gridId * 2.0);
    float falling = fract(time * fallSpeed * 0.15 + fallOffset);
    
    float pulse = sin(falling * 6.28318) * 0.5 + 0.5;
    
    float shimmer = sin(time * (random(gridId * 3.0) * 2.0 + 1.0) + random(gridId * 4.0) * 6.28) * 0.5 + 0.5;
    
    float circleAnimatedMask = sin(time * 1.5 + circleMaskCenter * 8.0) * 0.5 + 0.5;

    float mouseDistance = length(gridUvCenterInScreenCoords - mouse);
    float mouseInfluence = smoothstep(0.15, 0.0, mouseDistance);
    
    float ripple = sin(mouseDistance * 30.0 - time * 4.0) * 0.5 + 0.5;
    float rippleInfluence = mouseInfluence * ripple;

    float scaleInfluence = max(mouseInfluence * 0.3, circleAnimatedMask * 0.15 + pulse * 0.1);
    
    float dotSize = min(pow(circleMaskCenter, 1.5) * 0.35, 0.35);

    float sdfDot = sdfCircle(gridUv, dotSize * (1.0 + scaleInfluence * 0.5));

    float smoothDot = smoothstep(0.05, 0.0, sdfDot);

    float opacityInfluence = max(mouseInfluence * 6.0, circleAnimatedMask * 0.3 + shimmer * 0.25);
    
    float glow = smoothstep(0.15, 0.0, mouseDistance) * 0.08;

    vec3 composition = mix(bgColor, dotColor, smoothDot * combinedMask * dotOpacity * (1.0 + opacityInfluence));
    
    composition += dotColor * glow * (0.8 + rippleInfluence * 0.3);

    gl_FragColor = vec4(composition, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`

// Store mouse position globally so Scene can access it
const globalMouse = { x: 0.5, y: 0.5 }
let targetMouse = { x: 0.5, y: 0.5 }

export function setMousePosition(x: number, y: number) {
  targetMouse = { x, y }
}

function Scene() {
  const size = useThree((s) => s.size)
  const viewport = useThree((s) => s.viewport)
  const materialRef = useRef<ShaderMaterial>(null)

  const rotation = 0
  const gridSize = 70

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      resolution: { value: new Vector2() },
      dotColor: { value: new Color("#2ADD1B") },
      bgColor: { value: new Color("#000000") },
      mouse: { value: new Vector2(0.5, 0.5) },
      rotation: { value: rotation },
      gridSize: { value: gridSize },
      dotOpacity: { value: 0.12 },
    }),
    [],
  )

  useFrame((state) => {
    if (!materialRef.current) return

    materialRef.current.uniforms.time.value = state.clock.elapsedTime
    materialRef.current.uniforms.resolution.value.set(size.width * viewport.dpr, size.height * viewport.dpr)

    // Smooth lerp towards target mouse position
    globalMouse.x += (targetMouse.x - globalMouse.x) * 0.08
    globalMouse.y += (targetMouse.y - globalMouse.y) * 0.08

    materialRef.current.uniforms.mouse.value.set(globalMouse.x, globalMouse.y)
  })

  const scale = Math.max(viewport.width, viewport.height) / 2

  return (
    <mesh scale={[scale, scale, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export function DotShaderBackground() {
  return (
    <Canvas
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        outputColorSpace: SRGBColorSpace,
        toneMapping: NoToneMapping,
      }}
    >
      <Scene />
    </Canvas>
  )
}
