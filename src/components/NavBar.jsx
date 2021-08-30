import React from 'react';
import ReactDOM from 'react-dom';
import { FaAlignRight } from 'react-icons/fa';


class NavBar extends React.Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        return (
          <>
              <div className="navBar">
                    <button onClick={this.Toggle}>
                        <FaAlignRight />
                    </button>
                    <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                        <li href="#home" >Home</li>
                        <li href="#aboutMe">About Me</li>
                        <li href="#contact">Contact</li>
                        <li href="#blogposts">Blogposts</li>
                    </ul>
              </div>
          </>
        );
    }
}

export default NavBar;