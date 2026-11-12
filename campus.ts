export type Building = {
  id:string; name:string; type:string; x:number; z:number; height:number;
  energy:number; temperature:number; occupancy:number; color:string;
};
export const buildings:Building[]=[
 {id:'ENG-01',name:'Engineering Block',type:'Academic',x:-6,z:-4,height:3.5,energy:73,temperature:24.2,occupancy:84,color:'#5278b8'},
 {id:'SCI-02',name:'Science Laboratories',type:'Research',x:0,z:-4,height:4.8,energy:81,temperature:23.7,occupancy:61,color:'#6678b7'},
 {id:'LIB-03',name:'Central Library',type:'Learning',x:6,z:-4,height:2.7,energy:52,temperature:23.1,occupancy:72,color:'#4c91a9'},
 {id:'ADM-04',name:'Administration',type:'Operations',x:-6,z:4,height:2.8,energy:48,temperature:24.6,occupancy:43,color:'#687ab1'},
 {id:'INN-05',name:'Innovation Hub',type:'Innovation',x:0,z:4,height:4.1,energy:65,temperature:23.8,occupancy:76,color:'#8972b8'},
 {id:'HOS-06',name:'Student Residence',type:'Residential',x:6,z:4,height:3.7,energy:59,temperature:25.1,occupancy:68,color:'#557da9'}
];
export const activitySeed=[
 {title:'Campus telemetry synchronized',detail:'Six infrastructure nodes reported successfully.',time:'Just now',kind:'success'},
 {title:'Energy optimization completed',detail:'Synthetic demand profile recalibrated.',time:'4 min ago',kind:'info'},
 {title:'Access network healthy',detail:'All simulated gateways are responding.',time:'12 min ago',kind:'success'}
];