// import React, { Component } from "react";
// import { graphql } from "react-apollo";
// import { getParkingQuery } from "../../queris/queris";
// import LoadingSpinner from '../LoadingSpinner';


// class ParkingCard extends Component {
//   displayCarData() {
//     let data = this.props.data;
//     if (data.loading) {
//       return <LoadingSpinner />;
//     } else {
//       return <div>{data.car.parking}</div>
//     }
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.displayCarData()}
//         </ul>
//       </div>
//     );
//   }
// }

// export default graphql(getParkingQuery)(ParkingCard);