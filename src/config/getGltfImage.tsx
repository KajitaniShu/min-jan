import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function getGltfImage(gltfPath:any) {
  return new Promise((resolve, reject) => {
    // シーン、カメラ、レンダラーの初期化
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 10);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 300);
    
    // GLTFファイルの読み込み
    const loader = new GLTFLoader();
    loader.load(gltfPath, (gltf) => {
        scene.add(gltf.scene);

        // カメラとライトの設定
        camera.position.z = 8;
        camera.position.y = 3.5;
        const light = new THREE.DirectionalLight(0xFFFBC1, 1);
        light.position.set(3, 3, 3);
        scene.add(light);

        const light2 = new THREE.PointLight(0x00ffff);
        light2.position.set(2, 2, 2);

        const ambientLight = new THREE.AmbientLight(0xffffff, 5);
        scene.add(ambientLight);
        
        scene.add(ambientLight);

        // レンダリング
        renderer.render(scene, camera);

        // Base64エンコードされた画像を取得
        resolve(renderer.domElement.toDataURL('image/png'));
    }, undefined, (error) => {
        reject(error);
    });
});
}