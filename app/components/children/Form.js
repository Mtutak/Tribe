import * as React from 'react';
import { Button } from 'antd';
import { Geo } from './form/Geo';

class Form extends React.Component {

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
        <div id="contact" class="section-padding">
		<div class="container">
			<div class="row">
                <form role="form" className="registration-form" onSubmit={(event) => this.handleSubmitForm(event)}>
                    <fieldset>
                        <div class="page-title text-center">
					<center><h1>Create your Project, Find your Tribe:</h1></center>
					<center><p>List a current project that you are recruiting for</p></center>
					<center><hr class="pg-titl-bdr-btm"></hr></center>
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
                                    <label htmlFor='Title'>Project Title:</label><br/>
                                    <center><input 
                                    className='form-control text-field-box' 
                                    placeholder="Idea Here"
                                    id='name'
                                    type='text'
                                    onChange={(event) => this.updateInput(event)}
                                    defaultValue={this.props.defaultTitle}
                                    required
                                    /></center>
                                </div></center>
                                <center><div className="col-md-6 col-md-offset-3 form-group">
                                    <label htmlFor='category'>Project Summary:</label><br/>
                                   <center><textarea 
                                    id='category'
                                    type='text'
                                    onChange={(event) => this.updateInput(event)}
                                    defaultValue={this.props.defaultCategory}
                                    rows="2"
                                    cols="2"
                                    maxlength="250"
                                    required
                                    className="form-control text-field-box" 
                                    placeholder="Brief Intro to your Project"
                                    /></center>
                                </div></center>
                            </div>
                            
                            <button className="button-medium" id="contact-submit" loading={this.props.loading} htmlType="submit" name="contact">Post Your Project</button>
                           
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

Form.propTypes = {
  action: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  defaultTitle: React.PropTypes.string,
  defaultCategory: React.PropTypes.string
};

export { Form };
