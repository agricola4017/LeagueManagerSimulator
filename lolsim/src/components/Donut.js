import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const Donut = ({onChange, showDonut}) => {
    

    /* const ommer = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({})
    ) */

    //scene.add(ommer); 
     //scene, camera, renderer
    //container holds everything ,needs light
    const scene = new THREE.Scene()

    //eyeball mimick @Param(foV, aspect ratio, view frustrum)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'), alpha:true
    })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.setZ(30)
    renderer.render(scene, camera)

    const //geometry = new THREE.SphereGeometry(2 ,5,16,1000)
    geometry = new THREE.TorusKnotGeometry(2 , 1,9, 10,4,4)
    const material = new THREE.MeshLambertMaterial({color: 0xFF8FFF})
    const torus = new THREE.Mesh(geometry, material)
    torus.position.set(15, 16, 0)

    scene.add(torus)

    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(20,20,20)
    scene.add(pointLight)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(ambientLight)

    const controls = new OrbitControls(camera, renderer.domElement)
    const animate = () => {
    requestAnimationFrame(animate)

    torus.rotation.x += .01
    torus.rotation.y += 0.01
    torus.rotation.z += .01

    controls.update() 

    
    renderer.render(scene, camera)
    }

    function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24)
    const material = new THREE.MeshStandardMaterial({color:0xffffff})
    const star = new THREE.Mesh(geometry, material)

    const[x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100))
    
    star.position.set(x,y,z)
    scene.add(star)
    }

    //console.log(new THREE.TextureLoader().load('omnom', ()=> {console.log('as')}))
    scene.background = null;
    animate()
    
    return <>
        {
            (showDonut && onChange())
        }
    </>
    
}

