
//ES6 if need something in module need to import it
//This module is to use HTML5 Geolocation to try and autopopulate the Geolocation
//If the autopopulated location is not accurate or not supported then
//display Geo component for autofill location

import React from 'react';


class AutoGeo extends React.Component {
    //needs at least one method - render
    render () {
        return (
            <div>
                <h2> Auto-Geo </h2>
                {/*nhttps://www.w3schools.com/html/html5_geolocation.asp */}
            </div>
        )
}
}
 


export { AutoGeo };