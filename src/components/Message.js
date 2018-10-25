import React, { Component } from 'react'

class Message extends Component{
    render () {
        return ( 
            <div> 
            { this.props.uuid }: { this.props.text } 
            </div>
        );
    }
};

export default Message;

// PUSHER CHATKIT
// import React, { Component } from 'react'

// class Message extends Component{
//     render () {
//         return ( 
//             <div> 
//             { this.props.senderId }: { this.props.text } 
//             </div>
//         );
//     }
// };

// export default Message;