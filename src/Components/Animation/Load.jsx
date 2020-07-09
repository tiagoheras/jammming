import React from 'react';
import './Load.css';

export class Load extends React.Component {

    render() {
        if (this.props.isLoading) {
            return (
                <div className="loading-container">
                    <h1>Ja<span className="highlight" id="a">m</span><span className="highlight" id="b">m</span><span className="highlight" id="c">m</span>ing</h1>
                    <h3>Saving New Playlist...</h3>
                </div>
            );
        } else  {
             return null
        }
    }
}