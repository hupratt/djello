import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Button, Form, FormControl, Glyphicon } from 'react-bootstrap';

class AddCard extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let input = ReactDOM.findDOMNode(this.refs.myInput);
    if (!input.value.trim()) {
      return;
    }
    this.props.onAddCard(this.props.list, input.value);
    input.value = '';    
  }

  render() {
    return (
      <div className="AddCard">
        <Form inline
          onSubmit={e => this.handleSubmit(e)}
        >
          <FormControl
            placeholder="Add New Card"
            ref="myInput"
          />
          <Button type="submit">
            <Glyphicon glyph="glyphicon glyphicon-plus" />
          </Button>
        </Form>
      </div>
    )    
  }
}

AddCard.propTypes = {
  onAddCard: PropTypes.func.isRequired
}

export default AddCard;