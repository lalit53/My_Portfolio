import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile1.jpg';

class App extends Component{
    state = { displayBio: false};
 
    toggleDisplayBio=() =>{
        this.setState({ displayBio: !this.state.displayBio});
        
    }
    render(){     

        return(
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Lalit</p>
                <p>I'm a Graduate from Stevens Institute of Technology</p>
                {this.state.displayBio ?(
            <div>
                    <p>I live in Virginia and I code everyday</p>
                    <p>My favourite language is JS</p>
                    <p>I love parathas</p>
                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                </div>
        ) : (<div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>)
            }
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
            </div>

            
        )
    }
}

export default App;