"use client";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { DoubleSide } from "three";
import {
    particleColorAtom,
    particleAmountAtom,
    speedControlAtom,
    particleOpacityAtom,
} from "../../../Atom";

export default function Blooms() {
    const [particleAmount] = useAtom(particleAmountAtom);
    const [particleColor] = useAtom(particleColorAtom);
    const [colors, setColors] = useState(new THREE.Color(particleColor));
    const [dispose, setDispose] = useState(false);
    const [opacity] = useAtom(particleOpacityAtom);

    useEffect(() => {
        setColors(new THREE.Color(particleColor));
    }, [particleColor]);

    useEffect(() => {
        setDispose(true);
        setTimeout(() => {
            setDispose(false);
        }, 50);
    }, [particleAmount, particleColor, opacity]);

    return (
        <>
            {!dispose &&
                [...Array(particleAmount)].map((_, i) => {
                    const x = Math.random() * 120 - 60;
                    const y = Math.random() * 120 - 50;
                    const z = Math.random() * 50 - 70;
                    const rotateX = Math.random() * 360;
                    const rotateY = Math.random() * 360;
                    const rotateZ = Math.random() * 360;
                    return (
                        <Bloom
                            key={i}
                            position={[x, y, z]}
                            rotate={[rotateX, rotateY, rotateZ]}
                            colors={colors}
                        />
                    );
                })}
        </>
    );
}

type TriangleProps = {
    position?: [number, number, number];
    rotate?: [number, number, number];
    colors: THREE.Color;
};

function Bloom(prop: TriangleProps) {
    const { position, rotate, colors } = prop;
    const [speed] = useAtom(speedControlAtom);
    const [opacity] = useAtom(particleOpacityAtom);
    const phase = speed;
    const ref = useRef<THREE.BufferGeometry>(null);
    const meshRef = useRef<THREE.Mesh>(null);

    // 花びらのシェイプを作成
    var curve1 = new THREE.QuadraticBezierCurve(
        new THREE.Vector2(0, 0),
        new THREE.Vector2(-0.5, 0.6),
        new THREE.Vector2(0, 0.8)
    );
    var curve2 = new THREE.QuadraticBezierCurve(
        new THREE.Vector2(0, 0.8),
        new THREE.Vector2(0.5, 0.6),
        new THREE.Vector2(0, 0)
    );
    var shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.quadraticCurveTo(curve1.v1.x, curve1.v1.y, curve1.v2.x, curve1.v2.y);
    shape.quadraticCurveTo(
        curve1.v1.x + curve2.v1.x,
        curve1.v1.y + curve2.v1.y,
        curve2.v2.x,
        curve2.v2.y
    );
    shape.quadraticCurveTo(
        -curve1.v1.x + curve2.v1.x,
        curve1.v1.y + curve2.v1.y,
        -curve1.v2.x,
        curve1.v2.y
    );
    shape.quadraticCurveTo(-curve1.v1.x, curve1.v1.y, 0, 0);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.y -= phase;
            if (meshRef.current.position.y < -50) {
                meshRef.current.position.x = Math.random() * 120 - 60;
                const y = Math.random() * 80 - 20;
                if (y > 70) {
                    meshRef.current.position.y = y;
                } else {
                    meshRef.current.position.y = 70;
                }
                meshRef.current.position.z = Math.random() * 50 - 70;

                meshRef.current.rotation.x = Math.random() * 360;
                meshRef.current.rotation.y = Math.random() * 360;
                meshRef.current.rotation.z = Math.random() * 360;
            }

            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.z += 0.01;
        }
    });

    return (
        <mesh
            position={position}
            rotation={rotate}
            castShadow
            receiveShadow
            ref={meshRef}
        >
            <shapeGeometry args={[shape, 100]} ref={ref} />
            <shaderMaterial
                uniforms={{
                    colors: {
                        value: {
                            r: colors.r,
                            g: colors.g,
                            b: colors.b,
                        },
                    },
                    opacity: { value: opacity },
                }}
                vertexShader={`
                    varying vec2 vUv;
                    varying vec3 vPosition;
                    void main() {
                        vUv = uv;
                        vPosition = position;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `}
                fragmentShader={`
                    varying vec2 vUv;
                    varying vec3 vPosition;
                    uniform vec3 colors;
                    uniform float opacity;
                    
                    void main() {
                        float gradient = 1.0 - (vPosition.x + 0.5) / 2.0;
                        gl_FragColor = vec4(colors, opacity * gradient);
                    }
                `}
                transparent
                side={DoubleSide}
            />
        </mesh>
    );
}
