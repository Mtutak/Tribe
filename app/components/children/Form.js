import * as React from 'react';
import { Button } from 'antd';
import { Geo } from './form/Geo';

class PostForm extends React.Component {

  // Form Event Handlers

  updateInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmitForm(event) {
    event.preventDefault();
    this.props.action(this.state);
  }

  // Initial State

  initializeState() {
    this.setState({
      title: this.props.defaultTitle || '',
      category: this.props.defaultCategory || ''
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }

  render() {
    return (
         <div className="assessment-container container">
        <div className="row">
            <div className="col-md-6 form-box">
                <form role="form" className="registration-form" onSubmit={(event) => this.handleSubmitForm(event)}>
                    <fieldset>
                        <div className="form-top">
                            <div className="form-top-left">
                                <h3><span><i className="fa fa-calendar-check-o" aria-hidden="true"></i></span>Create Your Tribe</h3>
                                <p>Enter Your Project Details Below</p>
                                {/* Included Geo Component for react-place autofill*/}
                                <Geo />
                            </div>
                        </div>
                        <div className="form-bottom">
                            <div className="row">
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor='title'>Title:</label><br/>
                                    <input 
                                    className='form-control' 
                                    placeholder="Title"
                                    id='title'
                                    type='text'
                                    onChange={(event) => this.updateInput(event)}
                                    defaultValue={this.props.defaultTitle}
                                    required
                                    />
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor='category'>Project Summary:</label><br/>
                                    <textarea 
                                    id='category'
                                    type='text'
                                    onChange={(event) => this.updateInput(event)}
                                    defaultValue={this.props.defaultCategory}
                                    rows="4"
                                    cols="50"
                                    maxlength="250"
                                    required
                                    className="form-control" 
                                    placeholder="Enter a Brief Intro to Your Project!!!"
                                    />
                                </div>
                            </div>
                            <Button
                            type='primary'
                            loading={this.props.loading}
                            htmlType='submit'
                            className='btn btn-next'
                            >
                            Make Your Dream Reality
                            </Button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    );
  }
}

// Props PostForm component
// Requires an "action" function
// Optional "loading" boolean
// Optional "defaultTitle" string
// Optional "defaultCategory" string

PostForm.propTypes = {
  action: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  defaultTitle: React.PropTypes.string,
  defaultCategory: React.PropTypes.string
};

export { PostForm };
