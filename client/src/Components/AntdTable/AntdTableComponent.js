import React from 'react';

import { Table, Button, Tag } from 'antd';

import { Segment } from 'semantic-ui-react';

class AntdTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredInfo: null,
      sortedInfo: null,
    };
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };
  setTimeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'time',
      },
    });
  };
  setDistanceSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'time',
      },
    });
  };

  render() {
    const trips = this.props.tripData;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Time',
        dataIndex: 'startTime',
        sorter: (a, b) =>
          a.startTime < b.startTime ? -1 : a.startTime > b.startTime ? 1 : 0,
        sortOrder: sortedInfo.columnKey === 'startTime' && sortedInfo.order,
      },

      {
        title: 'Distance',
        dataIndex: 'distance',
        sorter: (a, b) => a.distance - b.distance,
        sortOrder: sortedInfo.columnKey === 'distance' && sortedInfo.order,
      },

      {
        title: 'Tags',
        dataIndex: 'tags.tagType',
        filters: [
          { text: 'busuiness', value: 'busuiness' },
          { text: 'vacation', value: 'vacation' },
        ],
        filteredValue: filteredInfo.tags || null,
        onFilter: (value, record) => record.tags.includes(value),
      },

      {
        title: 'Start Location',
        dataIndex: 'startLocation.displayName',
      },

      {
        title: 'End Location',
        dataIndex: 'endLocation.displayName',
      },
    ];
    return (
      <Segment>
        {console.log(trips)}
        <div>
          <div className="table-operations">
            <Button onClick={this.setTimeSort}>Sort time</Button>
            <Button onClick={this.setDistanceSort}>Sort Distance</Button>
            <Button onClick={this.clearFilters}>Clear filters</Button>
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <Table
            columns={columns}
            dataSource={trips}
            onChange={this.handleChange}
          />
        </div>
      </Segment>
    );
  }
}

export default AntdTableComponent;
