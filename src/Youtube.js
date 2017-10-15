import React, { Component, PropTypes } from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelId = 'UC9fSZHEh6XsRpX-xJc6lT3A'
const result = 10;

var finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
        	resultyt: []
        };

        this.clicked = this.clicked.bind(this);
    }

    clicked = () => {
    	fetch(finalUrl)
    		.then((response) => response.json())
    		.then((responseJson) => {
    			const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
    			this.setState({
    				resultyt
    			});
    			// console.log(this.state.resultyt);
    			// console.log(responseJson);
    		})
    		.catch((error) => {
    			console.log(error);
    		});
    }

    render() { 
        return (
        	<div>
	        	<button onClick={this.clicked}>Get average videos</button>
	            {
	            	this.state.resultyt.map((link, i) => {
						// console.log(link);
						var frame = 
							<div className="youtube">
								<iframe 
									key={i}
									width="560" 
									height="315" 
									src={link} 
									frameBorder="0" 
									allowFullScreen>
								</iframe>
							</div>
						return frame;
	            	})
	            }
				{this.frame}
	        </div>
        );
    }
}

export default Youtube;
