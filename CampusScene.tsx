'use client';
import {Canvas} from '@react-three/fiber';
import {OrbitControls,Text,Stars,ContactShadows} from '@react-three/drei';
import {useMemo,useState} from 'react';
import * as THREE from 'three';
import {buildings,type Building} from '@/lib/campus';

function BuildingMesh({building,selected,incident,onSelect}:{building:Building;selected:boolean;incident:boolean;onSelect:(id:string)=>void}){
 const [hover,setHover]=useState(false);
 const alert=incident&&building.id==='SCI-02';
 const color=alert?'#ff5477':selected?'#8a83ff':hover?'#72bce7':building.color;
 return <group position={[building.x,0,building.z]} onClick={e=>{e.stopPropagation();onSelect(building.id)}} onPointerOver={e=>{e.stopPropagation();setHover(true);document.body.style.cursor='pointer'}} onPointerOut={()=>{setHover(false);document.body.style.cursor='auto'}}>
  <mesh position={[0,building.height/2,0]} castShadow receiveShadow>
   <boxGeometry args={[3.25,building.height,2.7]}/>
   <meshStandardMaterial color={color} metalness={.38} roughness={.32} emissive={alert?'#8b1836':selected?'#30277b':'#091426'} emissiveIntensity={alert ? .8 : .28}/>
  </mesh>
  {Array.from({length:Math.floor(building.height*2)},(_,i)=><group key={i}>
   <mesh position={[0,.48+i*.47,1.356]}><boxGeometry args={[2.65,.17,.025]}/><meshBasicMaterial color={alert?'#ffb2c0':'#65e5f4'} transparent opacity={.8}/></mesh>
   <mesh position={[0,.48+i*.47,-1.356]}><boxGeometry args={[2.65,.17,.025]}/><meshBasicMaterial color={alert?'#ffb2c0':'#65e5f4'} transparent opacity={.8}/></mesh>
  </group>)}
  <mesh position={[0,building.height+.04,0]}><boxGeometry args={[3.45,.09,2.9]}/><meshStandardMaterial color={alert?'#ff7b91':'#b6c9ed'} metalness={.6}/></mesh>
  <Text position={[0,building.height+.62,0]} fontSize={.31} color={alert?'#ff9eae':'#dce7ff'} anchorX="center" outlineWidth={.008} outlineColor="#071021">{building.id}</Text>
  {(selected||alert)&&<mesh position={[0,.055,0]} rotation={[-Math.PI/2,0,0]}><ringGeometry args={[2.25,2.38,64]}/><meshBasicMaterial color={alert?'#ff597d':'#67e5f3'} side={THREE.DoubleSide}/></mesh>}
  {alert&&<pointLight position={[0,3,0]} color="#ff456c" intensity={8} distance={8}/>}
 </group>;
}
function Landscape(){
 const trees=useMemo(()=>Array.from({length:46},(_,i)=>{const a=i*2.39996,r=11+(i%5)*1.35;return [Math.cos(a)*r,Math.sin(a)*r] as const}),[]);
 return <>
  <mesh rotation={[-Math.PI/2,0,0]} receiveShadow><planeGeometry args={[48,40]}/><meshStandardMaterial color="#101c2d" roughness={.95}/></mesh>
  <gridHelper args={[48,48,'#2a405e','#1b2c46']} position={[0,.025,0]}/>
  <mesh rotation={[-Math.PI/2,0,0]} position={[0,.045,0]}><planeGeometry args={[2.5,38]}/><meshStandardMaterial color="#263950"/></mesh>
  <mesh rotation={[-Math.PI/2,0,0]} position={[0,.05,0]}><planeGeometry args={[39,2.1]}/><meshStandardMaterial color="#263950"/></mesh>
  {trees.map(([x,z],i)=><group key={i} position={[x,0,z]}>
   <mesh position={[0,.45,0]}><cylinderGeometry args={[.12,.17,.9,7]}/><meshStandardMaterial color="#625548"/></mesh>
   <mesh position={[0,1.15,0]}><coneGeometry args={[.65,1.7,7]}/><meshStandardMaterial color={i%3===0?'#24756c':'#205b60'} roughness={.85}/></mesh>
  </group>)}
 </>
}
export default function CampusScene({selected,onSelect,incident}:{selected:string;onSelect:(id:string)=>void;incident:boolean}){
 return <Canvas shadows dpr={[1,1.7]} camera={{position:[15,17,20],fov:42}} gl={{antialias:true}}>
  <color attach="background" args={['#080f20']}/><fog attach="fog" args={['#080f20',27,68]}/>
  <ambientLight intensity={.72}/><hemisphereLight args={['#a9c5ff','#111827',1.35]}/>
  <directionalLight position={[9,17,8]} intensity={2.2} castShadow shadow-mapSize={[2048,2048]}/>
  <pointLight position={[0,8,0]} intensity={20} distance={26} color="#6264ff"/>
  <Stars radius={85} depth={45} count={700} factor={2} fade speed={.2}/>
  <Landscape/>{buildings.map(b=><BuildingMesh key={b.id} building={b} selected={selected===b.id} incident={incident} onSelect={onSelect}/>)}
  <ContactShadows position={[0,.03,0]} opacity={.35} scale={38} blur={2.5} far={8}/>
  <OrbitControls makeDefault enablePan enableZoom minDistance={10} maxDistance={43} minPolarAngle={.3} maxPolarAngle={Math.PI/2.2} target={[0,1.5,0]}/>
 </Canvas>;
}