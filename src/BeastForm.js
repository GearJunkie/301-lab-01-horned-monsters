import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BeastForm extends React.Component {
  render () {
    return (
      <Form onSubmit={this.props.filterHorns}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Beast By Number Of Horns</Form.Label>
          <Form.Control onChange={this.props.handleFormSubmit} name="test" as="select" aria-label="Default select example">
            <option value={'default'}>Select number of horns</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
            <option value={100}>One Hundred</option>
          </Form.Control>
          <Form.Text className="text-muted">
          Thanks for visiting!
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
      Submit
        </Button>

      </Form>
    );
  }
}

export default BeastForm;
