import * as React from 'react';

class UserDescription extends React.Component {
    render() {
        return(
        <div className="container">
             <div class="icon-text">
                <h3 class="txt-tl">I do this for a living...</h3>
                {/*Get this info on initial login*/}
                {/*Can omit this altogether if no time...*/}
            </div>
        </div>
        );
    }
}

export { UserDescription };