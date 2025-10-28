import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroSphere() {
    const containerRef = useRef(null);
    const meshRef = useRef(null);
    const targetGeometryRef = useRef(null);
    const [shapeIndex, setShapeIndex] = useState(0);
    const [shapeName, setShapeName] = useState('구 (Sphere)');

    useEffect(() => {
        const container = containerRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0b0b0c);

        const camera = new THREE.PerspectiveCamera(
            55,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 45;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // 라이트
        const ambient = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambient);
        const directional = new THREE.DirectionalLight(0xffffff, 1.2);
        directional.position.set(20, 30, 10);
        scene.add(directional);

        // 초기 구 생성
        const geometry = new THREE.SphereGeometry(15, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#ffffff'),
            roughness: 0.25,
            metalness: 0.7,
            emissive: new THREE.Color('#ffffff'),
            emissiveIntensity: 0.1,
            wireframe: false,
            flatShading: true // 면을 더 잘 보이게
        });

        const mesh = new THREE.Mesh(geometry, material);
        meshRef.current = mesh;
        scene.add(mesh);

        // 다양한 정다면체 생성 함수
        const createGeometry = (index) => {
            const scale = 15; // 기본 크기
            let newGeometry;
            let name;

            switch(index % 7) {
                case 0:
                    // 구
                    newGeometry = new THREE.SphereGeometry(scale, 32, 32);
                    name = '구 (Sphere)';
                    break;
                case 1:
                    // 정4면체 (Tetrahedron)
                    newGeometry = new THREE.TetrahedronGeometry(scale * 1.5);
                    name = '정4면체 (Tetrahedron)';
                    break;
                case 2:
                    // 정6면체 (큐브)
                    newGeometry = new THREE.BoxGeometry(scale * 1.5, scale * 1.5, scale * 1.5);
                    name = '정6면체 (Cube)';
                    break;
                case 3:
                    // 정8면체 (Octahedron)
                    newGeometry = new THREE.OctahedronGeometry(scale * 1.2);
                    name = '정8면체 (Octahedron)';
                    break;
                case 4:
                    // 정12면체 (Dodecahedron)
                    newGeometry = new THREE.DodecahedronGeometry(scale);
                    name = '정12면체 (Dodecahedron)';
                    break;
                case 5:
                    // 정20면체 (Icosahedron)
                    newGeometry = new THREE.IcosahedronGeometry(scale);
                    name = '정20면체 (Icosahedron)';
                    break;
                case 6:
                    // 토러스 (보너스)
                    newGeometry = new THREE.TorusGeometry(scale * 0.8, scale * 0.3, 16, 100);
                    name = '토러스 (Torus)';
                    break;
                default:
                    newGeometry = new THREE.SphereGeometry(scale, 32, 32);
                    name = '구 (Sphere)';
            }

            return { geometry: newGeometry, name };
        };

        // 형태 변환 함수
        const morphToShape = (targetIndex) => {
            const { geometry: targetGeo, name } = createGeometry(targetIndex);
            setShapeName(name);

            // 이전 geometry 저장
            const oldGeometry = mesh.geometry;

            // 새로운 geometry로 교체
            mesh.geometry = targetGeo;

            // 이전 geometry 정리
            oldGeometry.dispose();

            // 변환 애니메이션을 위한 스케일 효과
            mesh.scale.set(0.8, 0.8, 0.8);

            // 스케일 애니메이션
            const scaleAnimation = () => {
                if (mesh.scale.x < 1) {
                    mesh.scale.x += 0.02;
                    mesh.scale.y += 0.02;
                    mesh.scale.z += 0.02;
                    requestAnimationFrame(scaleAnimation);
                } else {
                    mesh.scale.set(1, 1, 1);
                }
            };
            scaleAnimation();
        };

        // 클릭 이벤트 핸들러
        const handleClick = () => {
            const newIndex = shapeIndex + 1;
            setShapeIndex(newIndex);
            morphToShape(newIndex);
        };

        // 클릭 이벤트 리스너
        container.addEventListener('click', handleClick);

        // 애니메이션
        const clock = new THREE.Clock();
        const animate = () => {
            const t = clock.getElapsedTime();

            // 회전 애니메이션
            mesh.rotation.y += 0.005;
            mesh.rotation.x += 0.002;

            // 살짝 떠있는 효과
            mesh.position.y = Math.sin(t * 2) * 0.5;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // 리사이즈
        const onResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', onResize);

        return () => {
            container.removeEventListener('click', handleClick);
            window.removeEventListener('resize', onResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            container.removeChild(renderer.domElement);
        };
    }, [shapeIndex]);

    return (
        <div className="relative h-screen w-full bg-[#0b0b0c]">
            <div
                ref={containerRef}
                className="absolute inset-0 cursor-pointer"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
                <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_0_20px_#ffffff40] mb-4">
                    Polyhedron <span className="text-[#ff486f]">Morph</span>
                </h1>
                <p className="text-gray-300 text-xl mb-2">
                    클릭하여 다면체 변형
                </p>
                <div className="bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 mt-4">
                    <p className="text-white text-lg font-semibold">
                        현재: <span className="text-[#ff486f]">{shapeName}</span>
                    </p>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                    클릭 횟수: {shapeIndex}
                </p>
            </div>

            {/* 진행 표시기 */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex space-x-2">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                (shapeIndex % 7) === i
                                    ? 'bg-[#ff486f] scale-125'
                                    : 'bg-gray-600'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}