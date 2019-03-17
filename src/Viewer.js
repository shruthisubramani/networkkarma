import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Viewer extends Component {

	state = {
		markDown: ''
	};

	componentDidMount() {
		fetch(this.props.urlToPullMarkDownFrom)
			.then(res => {
				return res.text();
			})
			.then(resText => {
				this.setState({
					markDown: resText
				});
			})
			.catch(err => {
				console.log('error', err);
			});
	}

	render() {
		const { markDown } = this.state
		return (
			<div className='markdown'>
				<ReactMarkdown
                    source={ markDown }
                    escapeHtml={ false }
                />
			</div>
		)
	}
}
