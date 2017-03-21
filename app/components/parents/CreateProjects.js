import * as React from 'react';
import { Header } from '../children/Header';
import { Form } from '../children/Form';

class CreateProject extends React.Component {
    render() {
        return(
        <div>
            <Header />
            <Form />
        </div>
        );
    }
}

export default CreateProject;