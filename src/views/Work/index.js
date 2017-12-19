import React, { Component } from 'react';
import portfolioData from '../../data/portfolio.json'
import '../../css/Work.css';
import Modal from 'react-modal';
import Close from '../../components/Close';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Work extends Component {
	constructor() {
    super();
    this.state = {
      data: portfolioData,
      currentProject: {},
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = (e, el) => {
    this.setState({modalIsOpen: true, currentProject: el});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

	render() {
		return (
			<div className="Work">
				<CSSTransitionGroup
	          transitionName="example"
	          transitionAppear={true}
	          transitionAppearTimeout={500}
	          transitionEnter={false}
	          transitionLeave={false}>
				<Close />
					<Modal 
		      	isOpen={this.state.modalIsOpen}
	          contentLabel="Minimal Modal Example"
	          className="Modal"
	          overlayClassName="Overlay"
		      >
						<div className="Modal-close" onClick={this.closeModal}>CLOSE</div>	      
		      	<div className="Item-details">
								<h4>{this.state.currentProject.category}</h4>
								<h1>{this.state.currentProject.title}</h1>
								<p>{this.state.currentProject.description}</p>
								<p>{this.state.currentProject.hashtags}</p>
								<a className="Item-details-link" href={this.state.currentProject.projectURL} target="_blank">VIEW</a>
						</div>

		      	
	          <div className="Modal-background"></div>
		      </Modal>

					<div className="Grid-container">
						{this.state.data.projects.map((el) => {
							return ( 
								<div className="Grid-item" key={el._id} onClick={ ((e) => this.openModal(e, el)) }  >
									<div className="Grid-item-link" target="_blank">
										<div className="pink"></div>
										<img src={el.imgURL} className="Grid-item-img" alt={el.title}/>
										<h1 className="Grid-item-title">{el.title}</h1>
									</div>

								</div>
							)
						})}

					</div>
				</CSSTransitionGroup>

			</div>
		)
	}
}

/*

export default class Work extends Component {
	constructor() {
    super();
    this.state = {
      data: portfolioData,
    };
  }

	render() {
		return (
			<div className="Work">
				<div className="Grid-container">
					{this.state.data.projects.map((project) => {
						return (
							<div className="Grid-item" key={project._id}>
								<a href={project.projectURL} className="Grid-item-link" target="_blank">
									<div className="pink"></div>
									<img src={project.imgURL} className="Grid-item-img" />
									<h1 className="Grid-item-title">{project.title}</h1>
								</a>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

*/