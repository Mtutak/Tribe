import * as React from 'react';
import { Geo } from '../form/Geo';

class ProfileForm extends React.Component {

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
      bio: this.props.defaultbio || '',
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
		{/*<div className="container">
			<div className="row">*/}
                <form role="form" className="registration-form" onSubmit={(event) => this.handleSubmitForm(event)}>
                    <fieldset>
                        <div className="page-title text-center">
					<center><h1 className="edit-profile">Edit Your Profile: </h1></center>
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
                                <center><div className="col-lg-12 form-group">
                                    <label htmlFor='title' className="form-fonts">One Liner:</label><br/>
                                    <center><input 
                                    className='form-control text-field-box form-fonts' 
                                    placeholder="It was all a dream..."
                                    id='title'
                                    type='text'
                                    onChange={(event) => this.updateInput(event)}
                                    defaultValue={this.props.defaultTitle}
                                    required
                                    /></center>
                                 </div></center>
                                <center><div className="col-lg-12 form-group">
                                    <label htmlFor='bio' className="form-fonts">Bio:</label><br/>
                                   <center><textarea 
                                    id='bio'
                                    type='text'
                                    onChange={(event) => this.updateInput(event)}
                                    rows="2"
                                    cols="2"
                                    maxLength="50"
                                    required
                                    className="form-control text-field-box" 
                                    placeholder="I used to read Word Up magazine. Salt'n'Pepa and Heavy D up in the limousine"
                                    /></center>
                                </div></center>
                                <center><div className="col-lg-12 form-group">
                                    <label htmlFor='detail' className="form-fonts">Details:</label><br/>
                                   <center><textarea 
                                    id='detail'
                                    type='text'
                                    onChange={(event) => this.updateInput(event)}
                                    defaultValue={this.props.defaultbio}
                                    rows="2"
                                    cols="2"
                                    maxLength="250"
                                    required
                                    className="form-control text-field-box" 
                                    placeholder="Super Nintendo, Sega Genesis. When I was dead broke, man I couldn't picture this. 50 inch screen, money green leather sofa"
                                    /></center>
                                </div></center>
                                
                            </div>
                            {/* Update Loading Cursor with this.props.loading bool */}
                            <button 
                                type="primary"
                                className="button-medium save-profile-btn" 
                                id="contact-submit"                                 
                                name="contact">
                                SAVE
                            </button>
                           
                        </div>
                    </fieldset>
                </form>
            </div>
    //     </div>
    // </div>
    );
  }
}

// Props CreateProjects component
// Requires an "action" function
// Optional "loading" boolean
// Optional "defaultTitle" string
// Optional "defaultbio" string

ProfileForm.propTypes = {
  submitAction: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  defaultTitle: React.PropTypes.string,
  defaultbio: React.PropTypes.string
};

export { ProfileForm };
