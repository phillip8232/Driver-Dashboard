// import React, { Component } from "react";
// import { graphql } from "react-apollo";
// import { getTraveldSinceQuery } from "../../queris/queris";
// import LoadingSpinner from '../LoadingSpinner';


// class TraveldSinceCard extends Component {
//   displayCarData() {
//     let data = this.props.data;
//     if (data.loading) {
//       return <LoadingSpinner />;
//     } else {
//       return <div>{data.car.traveldsince} km traveld (since last fillup)</div>

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

// export default graphql(getTraveldSinceQuery)(TraveldSinceCard);