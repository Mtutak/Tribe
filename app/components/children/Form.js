import * as React from 'react';
import { Geo } from './form/Geo';

class Form extends React.Component {

  // Form Event Handlers

  updateInput(event) {
    console.log(event.target.value);
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmitForm(event) {
    console.log(this.props.loading);
    console.log('success!');
    event.preventDefault();
    console.log(this.state);
    {/* this is found in CreateProject Component */}
    this.props.submitAction(this.state);
  }

  // Initial State

  initializeState() {
    this.setState({
      title: this.props.defaultTitle || '',
      category: this.props.defaultCategory || '',
      detail: ''
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }

  render() {
    return (
        <div id="contact" className="section-padding">
		<div className="container">
			<div className="row">
                <form role="form" className="registration-form" onSubmit={(event) => this.handleSubmitForm(event)}>
                    <fieldset>
                        <div className="page-title text-center">
					<center><h1 className="create-project-heading">Create your Project:</h1></center>
					<center><p className="recruiting-p">List a current project that you are recruiting for:</p></center>
					<center><hr className="pg-titl-bdr-btm"></hr></center>
                    <Geo />
				        </div>
                
                        {/*<div className="form-top">
                                <h3><span><i className="fa fa-calendar-check-o" aria-hidden="true"></i></span>Create Your Tribe</h3>
                                <p>Enter Your Project Details Below</p>
                                {/* Included Geo Component for react-place autofill */}
                        {/*</div>*/}
                        <div className="form-bottom">
                            <div className="row">
                                <center><div className="col-md-6 col-md-offset-3 form-group">
                                    <label htmlFor='Title' className='project-form'>Project Title:</label><br/>
                                    <center><input 
                                    className='form-control text-field-box' 
                                    placeholder="Idea Here"
                                    id='title'
                                    type='text'
                                    onChange={(event) => this.updateInput(event)}
                                    defaultValue={this.props.defaultTitle}
                                    required
                                    /></center>
                                </div></center>
                                <center><div className="col-md-6 col-md-offset-3 form-group">
                                    <label htmlFor='category' className='project-form'>Project Summary:</label><br/>
                                   <center><textarea 
                                    id='category'
                                    type='text'
                                    onChange={(event) => this.updateInput(event)}
                                    rows="1"
                                    cols="2"
                                    maxLength="50"
                                    required
                                    className="form-control text-field-box" 
                                    placeholder="Brief Intro to your Project"
                                    /></center>
                                </div></center>
                                <center><div className="col-md-6 col-md-offset-3 form-group">
                                    <label htmlFor='detail' className='project-form'>Details:</label><br/>
                                   <center><textarea 
                                    id='detail'
                                    type='text'
                                    onChange={(event) => this.updateInput(event)}
                                    defaultValue={this.props.defaultCategory}
                                    rows="2"
                                    cols="2"
                                    maxLength="250"
                                    required
                                    className="form-control text-field-box" 
                                    placeholder="This information will only be viewable by users you have met. Provide detail on your project and talents needed"
                                    /></center>
                                </div></center>
                                
                            </div>
                            {/* Update Loading Cursor with this.props.loading bool */}
                            <button 
                                type="primary"
                                className="button-medium project-btn" 
                                id="contact-submit" 
                                loading={this.props.loading} 
                                htmlType="submit" 
                                name="contact">
                                Post Your Project
                            </button>
                           
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    );
  }
}

// Props CreateProjects component
// Requires an "action" function
// Optional "loading" boolean
// Optional "defaultTitle" string
// Optional "defaultCategory" string

Form.propTypes = {
  submitAction: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  defaultTitle: React.PropTypes.string,
  defaultCategory: React.PropTypes.string
};

export { Form };
