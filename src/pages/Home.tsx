// import {
//     Code,
//     Rocket,
//     Clock,
//     Shield,
//     Smartphone,
//     Globe,
//     Zap,
// } from 'lucide-react';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
//
// export default function Home() {
//     const [, setHoveredCard] = useState<number | null>(null);
//
//     const features = [
//         { icon: Rocket, title: '빠른 MVP 개발', description: '아이디어를 2-4주 안에 실제 제품으로 구현합니다' },
//         { icon: Code, title: '전문 개발팀', description: '10년+ 경력의 시니어 개발자들이 프로젝트를 담당합니다' },
//         { icon: Shield, title: '품질 보증', description: '6개월 무상 유지보수와 버그 수정을 제공합니다' },
//         { icon: Clock, title: '정시 납품', description: '약속된 일정을 지키며, 주 단위 진행상황을 공유합니다' },
//     ];
//
//     const services = [
//         {
//             icon: Smartphone,
//             title: '모바일 앱',
//             description: 'iOS/Android 네이티브 & 크로스플랫폼',
//             tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
//         },
//         {
//             icon: Globe,
//             title: '웹 애플리케이션',
//             description: '반응형 웹사이트 & SaaS 플랫폼',
//             tech: ['React', 'Next.js', 'Node.js', 'TypeScript'],
//         },
//         {
//             icon: Zap,
//             title: 'AI/ML 솔루션',
//             description: 'ChatGPT 연동 & 맞춤형 AI 모델',
//             tech: ['OpenAI', 'Python', 'TensorFlow', 'LangChain'],
//         },
//     ];
//
//     const process = [
//         { step: '1', title: '무료 상담', description: '프로젝트 요구사항 분석' },
//         { step: '2', title: '견적 & 일정', description: '투명한 가격과 명확한 일정' },
//         { step: '3', title: '개발 진행', description: '애자일 방식의 빠른 개발' },
//         { step: '4', title: '배포 & 지원', description: '런칭과 지속적인 유지보수' },
//     ];
//
//     const stats = [
//         { value: '2', label: '완료된 프로젝트 (Roomi, ifdot)' },
//         { value: '100%', label: '고객 만족도' },
//         { value: '3~4주', label: '평균 개발 기간' },
//         { value: '24/7', label: '지원 서비스' },
//     ];
//
//     const fadeUp = {
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//     };
//
//     return (
//         <div className="min-h-screen bg-[#0B0B0C] text-white relative overflow-hidden">
//             {/* 🔮 Refokus Glow Background */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff486f15,transparent_70%)]"></div>
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#00fff215,transparent_70%)]"></div>
//
//
//             {/* Hero 3D Parallax */}
//             <section
//                 className="relative overflow-hidden perspective-[1000px]"
//                 onMouseMove={(e) => {
//                     const x = (e.clientX / window.innerWidth - 0.5) * 20;
//                     const y = (e.clientY / window.innerHeight - 0.5) * 20;
//                     const hero = document.getElementById("hero-3d");
//                     if (hero) hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//                 }}
//                 onMouseLeave={() => {
//                     const hero = document.getElementById("hero-3d");
//                     if (hero) hero.style.transform = "rotateY(0deg) rotateX(0deg)";
//                 }}
//             >
//                 <motion.div
//                     id="hero-3d"
//                     className="relative z-10 container mx-auto px-6 py-32 text-center transition-transform duration-500"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                 >
//                     <h1 className="text-6xl font-black text-white mb-6 drop-shadow-[0_0_10px_#ff486f80]">
//                         Reality in <span className="text-[#ff486f]">Motion</span>
//                     </h1>
//                     <p className="text-gray-400 text-xl max-w-2xl mx-auto">
//                         We turn your MVP into a living product with motion and precision.
//                     </p>
//                 </motion.div>
//             </section>
//             {/* ✅ Hero */}
//             <section className="relative overflow-hidden">
//                 <motion.div
//                     className="relative z-10 container mx-auto px-6 py-32 text-center"
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeUp}
//                 >
//                     <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-[#ff486f] bg-[#ff486f]/10 rounded-full border border-[#ff486f]/30">
//                         🚀 스타트업 MVP 전문 개발사
//                     </span>
//
//                     <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
//                         아이디어를{' '}
//                         <span className="block text-[#ff486f] drop-shadow-[0_0_10px_#ff486f70]">
//                             현실로 만드는
//                         </span>
//                         <span className="block text-white">룸메이트</span>
//                     </h1>
//
//                     <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
//                         스타트업의 MVP를 빠르고 안정적으로 개발합니다.
//                         <br />최고의 개발팀과 함께 당신의 비즈니스를 시작하세요.
//                     </p>
//
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="px-8 py-4 bg-[#ff486f] text-white font-bold rounded-full shadow-[0_0_15px_#ff486f70] hover:shadow-[0_0_30px_#ff486f90] transition-all duration-300"
//                     >
//                         프로젝트 상담하기 →
//                     </motion.button>
//                 </motion.div>
//             </section>
//
//             {/* ✅ Features */}
//             <section className="py-24 px-6">
//                 <div className="container mx-auto">
//                     <motion.div
//                         className="text-center mb-16"
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={fadeUp}
//                     >
//                         <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
//                             왜 룸메이트인가?
//                         </h2>
//                         <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//                             스타트업이 성공하는 데 필요한 모든 것을 제공합니다
//                         </p>
//                     </motion.div>
//
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {features.map((feature, index) => {
//                             const Icon = feature.icon;
//                             return (
//                                 <motion.div
//                                     key={index}
//                                     className="group relative"
//                                     whileHover={{ scale: 1.05, y: -6 }}
//                                     initial="hidden"
//                                     whileInView="visible"
//                                     variants={fadeUp}
//                                     viewport={{ once: true }}
//                                     onMouseEnter={() => setHoveredCard(index)}
//                                     onMouseLeave={() => setHoveredCard(null)}
//                                 >
//                                     <div className="relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-[#ff486f]/40 transition-all duration-500 hover:shadow-[0_0_25px_#ff486f50]">
//                                         <div className="w-12 h-12 bg-[#ff486f]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#ff486f] transition-all duration-300">
//                                             <Icon className="text-[#ff486f] group-hover:text-white transition-colors" size={24} />
//                                         </div>
//                                         <h3 className="font-bold text-lg text-white mb-2">{feature.title}</h3>
//                                         <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
//                                     </div>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>
//
//             {/* ✅ Services (Refokus Slide형) */}
//             <section className="py-24 px-6">
//                 <div className="container mx-auto">
//                     <motion.div
//                         className="text-center mb-16"
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={fadeUp}
//                     >
//                         <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
//                             우리가 만드는 것
//                         </h2>
//                         <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//                             최신 기술스택으로 모든 플랫폼을 지원합니다
//                         </p>
//                     </motion.div>
//
//                     <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
//                         {services.map((service, index) => {
//                             const Icon = service.icon;
//                             return (
//                                 <motion.div
//                                     key={index}
//                                     className="min-w-[320px] snap-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:shadow-[0_0_25px_#ff486f40] hover:scale-105 transition-all duration-500"
//                                     whileHover={{ y: -6 }}
//                                 >
//                                     <Icon className="text-[#ff486f] mb-4" size={32} />
//                                     <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
//                                     <p className="text-gray-400 mb-4">{service.description}</p>
//                                     <div className="flex flex-wrap gap-2">
//                                         {service.tech.map((tech, i) => (
//                                             <span
//                                                 key={i}
//                                                 className="px-3 py-1 bg-white/10 text-xs font-medium text-[#ff486f] rounded-full border border-white/10"
//                                             >
//                                                 {tech}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>
//
//             {/* ✅ Process */}
//             <section className="py-24 px-6">
//                 <div className="container mx-auto">
//                     <motion.div
//                         className="text-center mb-16"
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={fadeUp}
//                     >
//                         <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
//                             개발 프로세스
//                         </h2>
//                         <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//                             4단계로 완성되는 당신의 MVP
//                         </p>
//                     </motion.div>
//
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                         {process.map((item, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#ff486f]/30 hover:shadow-[0_0_25px_#ff486f40] transition-all duration-500"
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true }}
//                                 variants={fadeUp}
//                             >
//                                 <div className="w-16 h-16 bg-[#ff486f] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
//                                     {item.step}
//                                 </div>
//                                 <h3 className="font-bold text-white mb-2">{item.title}</h3>
//                                 <p className="text-sm text-gray-400">{item.description}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* ✅ Stats */}
//             <section className="py-12 px-6 border-t border-white/10 bg-black/40 backdrop-blur-xl">
//                 <div className="container mx-auto">
//                     <motion.div
//                         className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={fadeUp}
//                     >
//                         {stats.map((stat, index) => (
//                             <motion.div key={index} whileHover={{ scale: 1.1 }}>
//                                 <p className="text-3xl font-bold text-[#ff486f] drop-shadow-[0_0_10px_#ff486f70]">
//                                     {stat.value}
//                                 </p>
//                                 <p className="text-gray-400 mt-1">{stat.label}</p>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//
// // 🪐 Scene 생성
// function createScene() {
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xffffff);
//     return scene;
// }
//
// // 🎥 카메라 생성
// function createCamera(container: HTMLDivElement) {
//     const camera = new THREE.PerspectiveCamera(
//         60,
//         container.clientWidth / container.clientHeight,
//         0.1,
//         1000
//     );
//     camera.position.set(0, 0, 200);
//     return camera;
// }
//
// // 🧱 Renderer 생성
// function createRenderer(container: HTMLDivElement) {
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio); // ✅ 디바이스 해상도 그대로
//     renderer.outputEncoding = THREE.sRGBEncoding; // ✅ 감마 교정
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.toneMappingExposure = 1.2; // ✅ 살짝 더 부드럽게
//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//     container.appendChild(renderer.domElement);
//     return renderer;
// }
//
// // 🌕 코어 구체 (ShaderMaterial 달 표면 버전)
// function createCoreSphere() {
//     const geometry = new THREE.SphereGeometry(30, 800, 800);
//
//     const uniforms = {
//         time: { value: 0 },
//         baseColor: { value: new THREE.Color(0xdedede) },
//         lightDir: { value: new THREE.Vector3(1, 1, 1).normalize() },
//     };
//
//     const material = new THREE.ShaderMaterial({
//         uniforms,
//         vertexShader: `
//             varying vec3 vNormal;
//             varying vec3 vPos;
//             void main() {
//                 vNormal = normalize(normalMatrix * normal);
//                 vPos = (modelMatrix * vec4(position, 1.0)).xyz;
//                 gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//             }
//         `,
//         fragmentShader: `
//             uniform float time;
// uniform vec3 baseColor;
// uniform vec3 lightDir;
// varying vec3 vNormal;
// varying vec3 vPos;
//
// float hash(vec3 p) {
//     p = fract(p * 0.3183099 + vec3(0.1,0.2,0.3));
//     p *= 17.0;
//     return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
// }
//
// float smootherstep(float edge0, float edge1, float x) {
//     x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
//     return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
// }
//
// float noise(vec3 p) {
//     vec3 i = floor(p);
//     vec3 f = fract(p);
//     f = vec3(
//         smootherstep(0.0, 1.0, f.x),
//         smootherstep(0.0, 1.0, f.y),
//         smootherstep(0.0, 1.0, f.z)
//     );
//     float n = mix(
//         mix(
//             mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
//             mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x),
//             f.y
//         ),
//         mix(
//             mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
//             mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x),
//             f.y
//         ),
//         f.z
//     );
//     return n;
// }
//
// void main() {
//     float n = noise(vPos * 0.08) * 0.6 + noise(vPos * 0.4) * 0.3;
//
//     // ✅ 노이즈를 약간 블러링한 효과로 변환
//     float softNoise = smoothstep(0.0, 1.0, n);
//
//     // ✅ 라이트 확산 계산
//     float brightness = max(dot(vNormal, lightDir), 0.0);
//     vec3 diffuse = baseColor * (0.5 + brightness * 0.6);
//     vec3 finalColor = mix(diffuse, vec3(0.1), softNoise * 0.3);
//
//     // ✅ 부드러운 하이라이트 (Specular)
//     vec3 viewDir = normalize(-vPos);
//     vec3 halfDir = normalize(lightDir + viewDir);
//     float spec = pow(max(dot(vNormal, halfDir), 0.0), 50.0);
//     finalColor += vec3(spec * 0.25);
//
//     gl_FragColor = vec4(finalColor, 1.0);
// }
//         `,
//     });
//
//     const mesh = new THREE.Mesh(geometry, material);
//     mesh.castShadow = true;
//     mesh.receiveShadow = true;
//     return { mesh, geometry, material };
// }
//
// // ☀️ 정적 조명 설정 - 완전히 고정된 위치와 방향
// function createStaticLights(scene: THREE.Scene) {
//     // 1. 매우 약한 전체 조명 (그림자 부분이 너무 어둡지 않도록)
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
//     scene.add(ambientLight);
//
//     // 2. 메인 태양광 - 완전히 고정된 위치에서 평행광선
//     // ☀️ 메인 태양광 - 완전히 고정된 위치에서 평행광선
//     const sunLight = new THREE.DirectionalLight(0xffffff, 2.5); // 💡 밝기 강화 (기존 1.2 → 2.5)
//     sunLight.position.set(100, 200, 150); // 📍 좀 더 위쪽으로
//     sunLight.castShadow = true;
//
// // ✅ 그림자 범위(조명 범위) 확장
//     sunLight.shadow.mapSize.width = 4096;
//     sunLight.shadow.mapSize.height = 4096;
//     sunLight.shadow.camera.near = 0.5;
//     sunLight.shadow.camera.far = 1000;
//     sunLight.shadow.camera.left = -300;
//     sunLight.shadow.camera.right = 300;
//     sunLight.shadow.camera.top = 300;
//     sunLight.shadow.camera.bottom = -300;
//
//     scene.add(sunLight);
//     scene.add(sunLight.target);
//
//     // 3. 보조 rim light (윤곽선 강조용) - 옵션
//     const rimLight = new THREE.DirectionalLight(0x4488ff, 0.3);
//     rimLight.position.set(-50, 50, -100);
//     rimLight.target.position.set(0, 0, 0);
//     scene.add(rimLight);
//     scene.add(rimLight.target);
//
//     // 4. 바닥/배경 조명 - 아래에서 올라오는 약한 빛
//     const fillLight = new THREE.DirectionalLight(0xffccaa, 0.2);
//     fillLight.position.set(0, -100, 50);
//     fillLight.target.position.set(0, 0, 0);
//     scene.add(fillLight);
//     scene.add(fillLight.target);
//
//     return { sunLight, rimLight, fillLight };
// }
//
// // 🎞️ 애니메이션 함수
// // 🎞️ 애니메이션 함수 (ShaderMaterial 전용)
// function createAnimation({
//                              coreMesh,
//                              coreGeometry,
//                              coreMaterial,
//                              renderer,
//                              scene,
//                              camera,
//                              animationRef,
//                              controls,
//                          }: {
//     coreMesh: THREE.Mesh;
//     coreGeometry: THREE.BufferGeometry;
//     coreMaterial: THREE.ShaderMaterial;
//     renderer: THREE.WebGLRenderer;
//     scene: THREE.Scene;
//     camera: THREE.Camera;
//     animationRef: React.MutableRefObject<number | undefined>;
//     controls: OrbitControls;
// }) {
//     const basePositions = coreGeometry.attributes.position.array as Float32Array;
//     const directionVectors: THREE.Vector3[] = [];
//     for (let i = 0; i < basePositions.length; i += 3) {
//         directionVectors.push(
//             new THREE.Vector3(basePositions[i], basePositions[i + 1], basePositions[i + 2]).normalize()
//         );
//     }
//
//     const clock = new THREE.Clock();
//     const duration = 4.0;
//     const baseRadius = 30;
//     const minScale = 1.0;
//     const maxScale = 1.8;
//
//     const animate = () => {
//         const elapsed = clock.getElapsedTime();
//         const cycleTime = elapsed % duration;
//         let progress = cycleTime / duration;
//
//         // 팽창/수축 이징
//         if (progress > 0.5) progress = 1 - (progress - 0.5) * 2;
//         else progress = progress * 2;
//         const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
//         const expand = THREE.MathUtils.lerp(minScale, maxScale, ease);
//
//         // 폭발/수축 애니메이션
//         const pos = coreGeometry.attributes.position.array as Float32Array;
//         for (let i = 0; i < directionVectors.length; i++) {
//             const dir = directionVectors[i];
//             const idx = i * 3;
//             pos[idx] = dir.x * baseRadius * expand;
//             pos[idx + 1] = dir.y * baseRadius * expand;
//             pos[idx + 2] = dir.z * baseRadius * expand;
//         }
//         coreGeometry.attributes.position.needsUpdate = true;
//
//         // 회전
//         coreMesh.rotation.y += 0.001;
//         coreMesh.rotation.x += 0.0006;
//
//         // ✅ time uniform 업데이트 (노이즈 변화용)
//         coreMaterial.uniforms.time.value = elapsed;
//
//         controls.update();
//         renderer.render(scene, camera);
//         animationRef.current = requestAnimationFrame(animate);
//     };
//
//     animate();
// }
//
// export default function HeroSection() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const animationRef = useRef<number>();
//
//     useEffect(() => {
//         const container = containerRef.current;
//         if (!container) return;
//
//         const scene = createScene();
//         const camera = createCamera(container);
//         const renderer = createRenderer(container);
//
//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.enableDamping = true;
//         controls.dampingFactor = 0.05;
//         controls.enableZoom = false;
//         controls.enablePan = false;
//
//         // 1️⃣ coreMesh 생성 후 씬에 추가
//         const { mesh: coreMesh, geometry: coreGeometry, material: coreMaterial } = createCoreSphere();
//         scene.add(coreMesh);
//
//         // 2️⃣ 정적 조명 설정 (한번 설정 후 변경 없음)
//         createStaticLights(scene);
//
//         // 3️⃣ 선택사항: 바닥면 추가 (그림자를 더 잘 보이게)
//         // const planeGeometry = new THREE.PlaneGeometry(200, 200);
//         // const planeMaterial = new THREE.MeshStandardMaterial({
//         //     color: 0xffffff,
//         //     roughness: 0.8,
//         //     metalness: 0.1
//         // });
//         // const plane = new THREE.Mesh(planeGeometry, planeMaterial);
//         // plane.rotation.x = -Math.PI / 2;
//         // plane.position.y = -50;
//         // plane.receiveShadow = true;
//         // scene.add(plane);
//
//         // 4️⃣ 애니메이션 실행
//         createAnimation({
//             coreMesh,
//             coreGeometry,
//             coreMaterial,
//             renderer,
//             scene,
//             camera,
//             animationRef,
//             controls
//         });
//
//         const handleResize = () => {
//             camera.aspect = container.clientWidth / container.clientHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(container.clientWidth, container.clientHeight);
//         };
//         window.addEventListener("resize", handleResize);
//
//         return () => {
//             cancelAnimationFrame(animationRef.current!);
//             window.removeEventListener("resize", handleResize);
//             renderer.dispose();
//             if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
//         };
//     }, []);
//
//     return (
//         <div className="fixed inset-0 m-0 p-0 overflow-hidden bg-black">
//             <div ref={containerRef} className="absolute inset-0 m-0 p-0" />
//         </div>
//     );
// }
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TerminalBuildHero() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentText, setCurrentText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [loop, setLoop] = useState(0);

    const messages = [
        "> 아이디어 만 있다면?",
        "> 외주 신청",
        "> 디자인 · 개발 진행",
        "> MVP 완성",
        "> 🚀 런칭 완료!",
        "",
        "✨ 단순하지만 빠르게, 당신의 아이디어를 실현합니다."
    ];

    // ✅ 타이핑 효과 (한 글자씩)
    useEffect(() => {
        if (lineIndex >= messages.length) {
            // 모두 끝나면 2초 쉬고 다시 반복
            setTimeout(() => {
                setDisplayedLines([]);
                setLineIndex(0);
                setCharIndex(0);
                setCurrentText("");
                setLoop((prev) => prev + 1);
            }, 2000);
            return;
        }

        if (charIndex < messages[lineIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + messages[lineIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 35); // ⚡ 속도 조절 (빠르게 주르륵)
            return () => clearTimeout(timeout);
        } else {
            // 한 줄 끝나면 다음 줄로
            const lineTimeout = setTimeout(() => {
                setDisplayedLines((prev) => [...prev, messages[lineIndex]]);
                setCurrentText("");
                setCharIndex(0);
                setLineIndex((prev) => prev + 1);
            }, 300);
            return () => clearTimeout(lineTimeout);
        }
    }, [charIndex, lineIndex, loop]);

    return (
        <div
            className="w-full h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory
               bg-gradient-to-b from-[#111113] to-[#1a1a1d] text-white"
        >
            {/* ✅ 1️⃣ 첫 섹션 */}
            <section className="relative h-screen w-full flex flex-col items-center justify-center snap-start">
                {/* 배경 glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff486f20,transparent_70%)]" />

                {/* CMD 스타일 터미널 창 */}
                <motion.div
                    key={loop}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-white text-[#111113] w-[90%] max-w-3xl rounded-lg shadow-[0_0_40px_#ff486f30]
                   border border-[#111113]/20 font-mono overflow-hidden"
                >
                    {/* 윈도우 스타일 상단 바 */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#f5f5f5] border-b border-[#e0e0e0]">
                        <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
                        <span className="ml-3 text-gray-500 text-sm select-none">Roommate.exe</span>
                    </div>

                    {/* 내용 */}
                    <div className="p-6 md:p-8 min-h-[220px]">
                        {displayedLines.map((line, i) => (
                            <p key={i} className="whitespace-pre text-sm md:text-lg mb-1 tracking-tight">
                                {line}
                            </p>
                        ))}
                        <p className="whitespace-pre text-sm md:text-lg tracking-tight inline">
                            {currentText}
                            <motion.span
                                className="inline-block w-3 h-5 bg-[#ff486f] ml-1"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                            />
                        </p>
                    </div>
                </motion.div>

                {/* 🔽 스크롤 유도 */}
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-6 text-gray-400 text-sm flex flex-col items-center"
                >
                    <span className="mb-2">더 알아보기</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </section>

            {/* ✅ 2️⃣ 다음 섹션 */}
            <section className="relative h-screen w-full flex flex-col items-center justify-center snap-start bg-gradient-to-b from-[#f6f6f6] to-[#eaeaea] text-center text-[#111113]">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-black mb-8"
                >
                    <span className="text-[#ff486f]">앱 · 웹</span> 개발해줘
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-2xl md:text-3xl mb-12 leading-relaxed"
                >
                    아이디어만 주세요.
                    <br />실제 서비스로 만들어드릴게요.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-[#ff486f] text-white font-bold text-lg rounded-full shadow-[0_0_25px_#ff486f90]
                   hover:shadow-[0_0_40px_#ff486fb0] transition-all duration-300"
                >
                    프로젝트 시작하기 →
                </motion.button>
            </section>
        </div>
    );
}