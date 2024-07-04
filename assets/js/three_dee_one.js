import * as THREE from "three";

const canvasElement = document.querySelector("#canvas")
const width = canvasElement.clientWidth;
const height = canvasElement.clientHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  20,
  width / height,
  0.1,
  1000,
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({alpha: true});

renderer.setSize(
  width,
  height,
);
renderer.setAnimationLoop(animate);

document.querySelector("#canvas").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00FF00});
const cube = new THREE.Mesh(geometry, material);

const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
const lineSegments = new THREE.LineSegments(edges, lineMaterial);

const group = new THREE.Group();
group.add(cube);
group.add(lineSegments);
scene.add(group);

function animate() {
  group.rotation.x += 0.01;
  group.rotation.y += 0.01;

  renderer.render(scene, camera);
}

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);
