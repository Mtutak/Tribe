//ES6 if need something in module need to import it
import React from 'react';
// See documentation, works off of Google Maps API 
//https://github.com/krasimir/react-place
import Location from 'react-place';

class Geo extends React.Component {
    onLocationSet(data) {
    console.log(data);
    data.description
    // data.coords.lat
    // data.coords.lng
    }
    //needs at least one method - render
    render () {
        return (
            <div>
                <center><h2> Location </h2></center>
                {/*Location Component from react-place */}
                <Location
                country='US'
                noMatching='Sorry, I can not find {{value}}.'
                onLocationSet={this.props.onLocationSet}
                inputProps={{
                style: {color: '#0099FF'},
                className:'location col-md-12 col-md-offset-6 form-group',
                placeholder: 'Your Tribe Location?'
                }}
                />
            </div>
        );
    }
}
 
export { Geo };