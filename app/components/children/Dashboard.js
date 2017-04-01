import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Dashboard = ({ secretData }) => (
  <Card className="container card-container">
    <CardTitle
      style={{ fontSize: '16px', color: 'white'}}
      title="Pending Connection..."
      subtitle="Go ahead, get out and talk to each other!"
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;