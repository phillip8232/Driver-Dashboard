import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDashboardAllDataQuery } from "../queries/queries";

// const carOptions = [
//   {
//     key: "Honda",
//     text: "Honda",
//     value: "Honda"
//   },
//   {
//     key: "Toyota",
//     text: "Toyota",
//     value: "Toyota"
//   },
//   {
//     key: "Mercedez Benz",
//     text: "Mercedez Benz",
//     value: "Mercdez Benz"
//   }
// ];

// const VideoList = ({ videos, onVideoSelect }) => {
//   const renderedList = videos.map(video => {
//     return (
//       <VideoItem
//         key={video.id.videoId}
//         onVideoSelect={onVideoSelect}
//         video={video}
//       />
//     );
//   });

//   return <div className="ui relaxed divided list">{renderedList}</div>;
// };

{
  /* <h1>{this.props.data.owner.cars[0].carName}</h1>
        <h1>{this.props.data.owner.cars[1].carName}</h1>
        <h1>{this.props.data.owner.cars[2].carName}</h1> */
}

class Sample extends Component {
  render() {
    const carLists = this.props.data.owner.cars;
    console.log(carLists);

    const ownerCarList = carLists => {
      return carLists[0].carName;
    };

    return (
      <>
        <h1>{ownerCarList(carLists)}</h1>
      </>
    );
  }
}
export default graphql(getDashboardAllDataQuery)(Sample);
