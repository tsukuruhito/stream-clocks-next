import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import { useAtom } from "jotai";
import * as THREE from "three";
import { particleColorAtom, particleOpacityAtom } from "../../../Atom";
import { motion } from "framer-motion-3d";

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const fragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform vec3 uColor;
uniform float opacity;
uniform float hueShift;

vec3 hueShiftYIQ(vec3 color, float hueShift) {
    const vec3  kRGBToYPrime = vec3 (0.299, 0.587, 0.114);
    const vec3  kRGBToI     = vec3 (0.596, -0.275, -0.321);
    const vec3  kRGBToQ     = vec3 (0.212, -0.523, 0.311);

    const vec3  kYIQToR   = vec3 (1.0, 0.956, 0.621);
    const vec3  kYIQToG   = vec3 (1.0, -0.272, -0.647);
    const vec3  kYIQToB   = vec3 (1.0, -1.107, 1.704);

    float   YPrime  = dot (color, kRGBToYPrime);
    float   I      = dot (color, kRGBToI);
    float   Q      = dot (color, kRGBToQ);

    // Calculate the hue and chroma
    float   hue     = atan (Q, I);
    float   chroma  = sqrt (I * I + Q * Q);

    hue += hueShift;

    // Convert back to YIQ
    Q = chroma * sin (hue);
    I = chroma * cos (hue);

    // Convert back to RGB
    vec3    yIQ   = vec3 (YPrime, I, Q);
    color.r = dot (yIQ, kYIQToR);
    color.g = dot (yIQ, kYIQToG);
    color.b = dot (yIQ, kYIQToB);

    return color;
}

void main() {
    vec2 position = -1.0 + 2.0 * vUv;
    float radius = length(position);
    float gradient = 1.0 - (vUv.x + 0.5) / 2.0;
    float PI = 3.141592;
    vec3 color = uColor;
    color = hueShiftYIQ(color, hueShift);
    vec3 color2;
    color2 = hueShiftYIQ(color, -(hueShift * 2.0 * PI));
    color = mix(color, color2, gradient);
    gl_FragColor = vec4(color, opacity);
}
`;

type CircleProps = {
    radius: number;
    segments: number;
    color: string;
    opacity: number;
    animation: {
        initial: { x: number; y?: number; z: number };
        animate: { x: number; y?: number; z: number };
        transition: {
            duration: number;
            repeat: number;
            repeatType: string;
            ease: string;
        };
    };
};

const Circle = forwardRef<any, CircleProps>((props, ref) => {
    const { radius, segments, color, opacity, animation } = props;
    return (
        <>
            <motion.mesh
                ref={ref}
                initial={animation.initial}
                animate={animation.animate}
                transition={{
                    duration: animation.transition.duration,
                    repeat: animation.transition.repeat,
                    repeatType: animation.transition.repeatType as
                        | "loop"
                        | "mirror"
                        | "reverse"
                        | undefined,
                    ease: animation.transition.ease,
                }}
            >
                <circleGeometry args={[radius, segments]} />
                <shaderMaterial
                    attach="material"
                    args={[
                        {
                            uniforms: {
                                uTime: { value: 0 },
                                uColor: {
                                    value: new THREE.Color(color),
                                },
                                opacity: { value: opacity },
                                hueShift: { value: 0.2 },
                            },
                            vertexShader: vertexShader,
                            fragmentShader: fragmentShader,
                            transparent: true,
                        },
                    ]}
                />
            </motion.mesh>
        </>
    );
});

export default function Circles() {
    const [particleColor] = useAtom(particleColorAtom);
    const [opacity] = useAtom(particleOpacityAtom);
    const ref = useRef<THREE.Mesh>();
    const ref2 = useRef<THREE.Mesh>();
    const ref3 = useRef<THREE.Mesh>();

    const circleAnimation = {
        initial: { x: -4, z: -0.5 },
        animate: { x: 4, z: -0.5 },
        transition: {
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
        },
    };

    const circleAnimation2 = {
        initial: { x: 1, y: -1.25, z: 0 },
        animate: { x: 1, y: -1.5, z: 0 },
        transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
    };
    const circleAnimation3 = {
        initial: { x: -2.5, y: -1.0, z: -1 },
        animate: { x: -2.5, y: -1.5, z: -1 },
        transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
    };
    const circleAnimation4 = {
        initial: { x: 2.5, y: 1.5, z: -4 },
        animate: { x: 2.5, y: 2.0, z: -4 },
        transition: {
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
    };
    const circleAnimation5 = {
        initial: { x: -2.5, y: 1.5, z: -2 },
        animate: { x: -2.5, y: 2.5, z: -2 },
        transition: {
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
    };
    const circleAnimation6 = {
        initial: { x: 3.5, z: 1 },
        animate: { x: -3.5, z: 1 },
        transition: {
            duration: 40,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
        },
    };

    useFrame((state) => {
        if (ref.current && ref3.current) {
            ref.current.position.y =
                Math.sin(state.clock.getElapsedTime()) * 0.25;
            ref3.current.position.y =
                Math.sin(state.clock.getElapsedTime()) * 0.15 - 0.5;
        }
    });

    return (
        <>
            <Circle
                ref={ref}
                radius={0.5}
                segments={64}
                color={particleColor}
                opacity={opacity}
                animation={circleAnimation}
            />
            <Circle
                ref={ref2}
                radius={1.0}
                segments={64}
                color={particleColor}
                opacity={opacity}
                animation={circleAnimation2}
            />
            <Circle
                ref={ref2}
                radius={0.6}
                segments={64}
                color={particleColor}
                opacity={opacity}
                animation={circleAnimation3}
            />
            <Circle
                ref={ref2}
                radius={0.5}
                segments={64}
                color={particleColor}
                opacity={opacity}
                animation={circleAnimation4}
            />
            <Circle
                ref={ref2}
                radius={1.7}
                segments={64}
                color={particleColor}
                opacity={opacity}
                animation={circleAnimation5}
            />
            <Circle
                ref={ref3}
                radius={0.55}
                segments={64}
                color={particleColor}
                opacity={opacity}
                animation={circleAnimation6}
            />
        </>
    );
}
