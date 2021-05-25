import Players from './components/Players'
import Header from './components/Header'
//import SortingPlayers from './deprecatedcomponents/SortingPlayers'
//import FilteringPlayers from './deprecatedcomponents/FilteringPlayers'
import {useState} from 'react'
import {tempPlayers} from './tempPlayers.js'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function App() {
  const [players, setPlayers] = useState(
    tempPlayers, []
  )
  const [showAddTask, setShowAddTask] = useState(false)

  const fetchPlayers = async() => {
    const res = await fetch('http://localhost:8080/api/v1/player')
    const data = await res.json()
    return data
  }

  const fetchPlayer = async(id) => {
    const res = await fetch(`http://localhost:8080/api/v1/player/${id}`)
    const data = await res.json()
    return data
  }

  const onAdd = () => {
    console.log('added')
  }

  const addPlayer = async(player) => {
    const res = await fetch('http://localhost:8080/api/v1/player/', { method:'POST', 
    headers: {
      'Content-type': 'application/json'
    }, 
    body: JSON.stringify(...player)
    })

    const data = await res.json
    //setPlayers(...players, data)
  }

  const deletePlayer = async (id) => {
    await fetch(`http://localhost:8080/api/v1/player/${id}`, { method: 'DELETE',})

    //setPlayers(players.filter((player) => player.id !== parseInt(id)))
    //console.log(players, id)
    //console.log(players.filter((player) => player.key !== parseInt(id)))
  } 

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

  const geometry = new THREE.TorusGeometry(2,.5,16,100)
  const material = new THREE.MeshStandardMaterial({color: 0xFF6347})
  const torus = new THREE.Mesh(geometry, material)
  torus.position.set(15, 15, 0)

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
    torus.rotation.y += 0.005
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

  /* const ommer = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({})
  ) */

  //scene.add(ommer); 
  animate()

  return (
    <div className ='container'>
      <Header onClick={onAdd}/>
      <Players players={players} onDelete={addPlayer}/>
      </div>
  );
}

export default App;
