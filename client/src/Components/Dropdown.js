import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { graphql } from "react-apollo";
import { getDashboardAllDataQuery } from "../queries/queries";

const carOptions = [
  {
    key: "Honda",
    text: "Honda",
    value: "Honda"
  },
  {
    key: "Toyota",
    text: "Toyota",
    value: "Toyota"
  },
  {
    key: "Mercedez Benz",
    text: "Mercedez Benz",
    value: "Mercdez Benz"
  }
];

// const VideoList = ({ videos, onVideoSelect }) => {

//   const renderedList = videos.map(video => {
//     return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
//   });

//   return (
//     <div className="ui relaxed divided list">{renderedList}</div>
//   )
// }

class CarDropDown extends Component {
  render() {
    return (
      <Dropdown
        className="dd-styles"
        placeholder="Select Car"
        fluid
        selection
        options={carOptions}
      />
    );
  }
}
export default graphql(getDashboardAllDataQuery)(CarDropDown);
