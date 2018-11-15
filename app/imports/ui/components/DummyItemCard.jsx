import React from 'react';
import { Card, Image, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class DummyItemCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>[ITEM TITLE]</Card.Header>
        </Card.Content>
        <Image src='/images/poof22.png'/>
        <Card.Content>
          <Image circular floated='left' size='mini' src='/images/poof22.png'/>
          <Card.Header>[Seller]</Card.Header>
          <Card.Header>[Condition]</Card.Header>
          <Header green floated='right' size='huge'>$20.00</Header>
        </Card.Content>
      </Card>
    );
  }
}

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(DummyItemCard);
