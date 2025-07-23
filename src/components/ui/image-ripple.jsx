"use client"

import React, { useEffect, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrthographicCamera, useFBO, useTexture } from "@react-three/drei"
import * as THREE from "three"

export default function Scene() {
  const device = useDimension()

  if (!device.width || !device.height) return null

  const frustumSize = device.height
  const aspect = device.width / device.height

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <Canvas>
        <OrthographicCamera
          makeDefault
          args={[
            (frustumSize * aspect) / -2,
            (frustumSize * aspect) / 2,
            frustumSize / 2,
            frustumSize / -2,
            -1000,
            1000,
          ]}
          position={[0, 0, 2]}
        />
        <RippleImage />
      </Canvas>
    </div>
  )
}

function RippleImage() {
  const { size, viewport, gl, camera } = useThree()
  const mouse = useMouse()
  const device = useDimension()

  const fboBase = useFBO(device.width, device.height)
  const fboTexture = useFBO(device.width, device.height)

  const planeRef = useRef()
  const uniforms = useRef({
    uTexture: { value: null },
    uDisplacement: { value: null },
    winResolution: {
      value: new THREE.Vector2(device.width, device.height).multiplyScalar(
        device.pixelRatio
      ),
    },
  })

  const imageScene = useRef(new THREE.Scene())
  const imageCamera = useRef(
    new THREE.OrthographicCamera(
      viewport.width / -2,
      viewport.width / 2,
      viewport.height / 2,
      viewport.height / -2,
      -1000,
      1000
    )
  )

  useEffect(() => {
    const geometry = new THREE.PlaneGeometry(1080 / 4, 1920 / 4)

    const tex1 = new THREE.TextureLoader().load("/picture9.jpeg")
    const tex2 = new THREE.TextureLoader().load("/picture1.jpeg")

    const mat1 = new THREE.MeshBasicMaterial({ map: tex1 })
    const mat2 = new THREE.MeshBasicMaterial({ map: tex2 })

    const mesh1 = new THREE.Mesh(geometry, mat1)
    mesh1.position.set(-0.3 * viewport.width, 0, 1)

    const mesh2 = new THREE.Mesh(geometry, mat2)
    mesh2.position.set(0, 0, 1)

    imageScene.current.add(mesh1, mesh2)
  }, [viewport.width])

  useFrame(({ gl, scene: finalScene }) => {
    gl.setRenderTarget(fboTexture)
    gl.clear()
    gl.render(imageScene.current, imageCamera.current)

    gl.setRenderTarget(null)

    if (uniforms.current.uTexture) {
      uniforms.current.uTexture.value = fboTexture.texture
      uniforms.current.uDisplacement.value = fboTexture.texture
    }
  })

  return (
    <mesh ref={planeRef}>
      <planeGeometry args={[device.width, device.height]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        transparent
        uniforms={uniforms.current}
      />
    </mesh>
  )
}

function useMouse() {
  const [mouse, setMouse] = useState({ x: 0, y: 0, pixelRatio: 1 })

  useEffect(() => {
    const handleMouse = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
      })
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  return mouse
}

function useDimension() {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
    pixelRatio: 1,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: window.devicePixelRatio,
      })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return dimension
}

const fragment = `
uniform sampler2D uTexture;
uniform sampler2D uDisplacement;
uniform vec4 winResolution;
varying vec2 vUv;
float PI = 3.141592653589793238;

void main() {
  vec2 vUvScreen = gl_FragCoord.xy / winResolution.xy;

  vec4 displacement = texture2D(uDisplacement, vUvScreen);
  float theta = displacement.r * 2.0 * PI;

  vec2 dir = vec2(sin(theta), cos(theta));
  vec2 uv = vUvScreen + dir * displacement.r * 0.075;

  vec4 color = texture2D(uTexture, uv);
  gl_FragColor = color;
}
`

const vertex = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
