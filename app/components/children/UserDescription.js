import * as React from 'react';

class UserDescription extends React.Component {
    render() {
        return(
        <div className="container">
             <div className="icon-text">
                <h3 className="txt-tl">I do this for a living...</h3>
                {/*Get this info on initial login*/}
                {/*Can omit this altogether if no time...*/}
            </div>
        </div>
        );
    }
}

export { UserDescription };