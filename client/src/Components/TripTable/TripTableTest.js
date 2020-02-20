import React from "react";
import "antd/dist/antd.css";
// import { Table, Button, Tag } from "antd";
// import { useQuery } from '@apollo/react-hooks';
// import { getTripsDataQuery } from '../../queries/queries';
// import { Segment } from "semantic-ui-react";

function TripTableTest(props) {
    console.log(`THIS IS COMING FROM TABLETEST`,props.vehicleIdState.value)
    // const { data } = useQuery(getTripsDataQuery, {
    //   variables: {
    //     vehicleId: props.vehicleIdState.value,
    //   },
    // });
    return(
        <div>
            {/* {console.log(`THE DATA FROM TRIP`, data )} */}
        </div>
    )

}

export default TripTableTest;
