
// part 4 (skeleton, just for debugging)

// import React from 'react';

// class Signup extends React.Component {
//     render () {
//         return (
//             <div></div>
//         );
//     }
// };

// export default Signup;



// part 5

import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            credentials: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state)
            // .then(() => this.props.history.push('/posts'));
    }
    
    render() {
        return (
            <div className="session-form">
                <h2>Sign Up!</h2>
                <form>
                    <label>Username: 
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Email: 
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>                
                    <label>Password: 
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <label>Credentials:
                        <input
                            type="text"
                            value={this.state.credentials}
                            onChange={this.handleInput('credentials')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>     
                </form>
            </div>
        );
    }
};

export default Signup;