// import React from 'react';
// // import LoadingSpinner from './LoadingSpinner';


// export default function(props) {
//     const refillData = props.refillData
//     const trips = props.trips
//     const refillStamp = new Date(refillData[0].timestamp)
//     const refillLitres = refillData[0].litres

  
//     const filteredTrips = trips.filter((trips) => {
//         return refillStamp <= new Date(trips.endTime)
//     });

//     const totalLitresUsed = filteredTrips.reduce((total, trip)=>{
//         return total + trip.litres;
//       }, 0);
    
//     const totalDistance = filteredTrips.reduce((total, trip)=> {
//         return total + trip.distance;
//     }, 0);


//     const litresLeft = refillLitres - totalLitresUsed
//     const averagePer100Km =  (totalLitresUsed / totalDistance) * 100
//     const kmsLeft = (totalDistance / totalLitresUsed) * litresLeft

//     return (
//       <div style={{ padding: '10px 140px 0px 140px' }}>
//           {console.log(totalLitresUsed, 'total litres')}
//           {console.log(totalDistance, 'total distance')}
//           {console.log(refillData)}

//           {console.log(averagePer100Km.toFixed(1), 'average pewr 100km')}
//           {console.log(litresLeft)}
//           {console.log(kmsLeft)}

//       </div>
//     );
//   }
