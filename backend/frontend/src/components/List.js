import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../containers/Card';
import AddCard from '../containers/AddCard';
import { Button, Glyphicon, Panel, ListGroup } from 'react-bootstrap';

class List extends Component {
  state = {
    isMouseEnter: false
  }

  handleDelete = list => {
    this.props.onDeleteList(list);
  }

  handleMouseEnter = () => {
    this.setState({
      isMouseEnter: true
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isMouseEnter: false
    });
  }

  deleteButtonStyle = {
    marginTop: "-5px"
  } 

  panelHeader = () => {
    if (this.state.isMouseEnter) {
      return (
        <div onMouseLeave={() => this.handleMouseLeave()}>
          {this.props.name}<small>(id: {this.props.id})</small>
          <Button 
            className="pull-right" 
            bsSize="small"
            onClick={() => this.handleDelete(this.props)}
            style={this.deleteButtonStyle}
          >
            <Glyphicon glyph="glyphicon glyphicon-remove" />
          </Button>
        </div>
      )      
    }
    else {
      return (
        <div onMouseEnter={() => this.handleMouseEnter()}>
          {this.props.name}<small>(id: {this.props.id})</small>
        </div>
      )
    }
  }

  render() {
    return this.props.connectDropTarget(
      <div>
        <Panel header={this.panelHeader()} bsStyle="info">
          <ListGroup>
            {this.props.cards_order.map((id, i) => (
              <Card key={id} index={i} {...this.props.selectCard(id)} />
            ))}
          </ListGroup>
          <AddCard list={this.props} />
        </Panel>
      </div>
    )  
  }
}

List.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  board: PropTypes.number,
  cards: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired,
  onDeleteList: PropTypes.func.isRequired,
  moveCardToEmptyList: PropTypes.func.isRequired,

  connectDropTarget: PropTypes.func.isRequired
}

export default List;