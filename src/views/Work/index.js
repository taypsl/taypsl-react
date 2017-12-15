import React, { Component } from 'react';
import portfolioData from '../../data/portfolio.json'
import '../../css/Work.css';
import Modal from 'react-modal';
import Close from '../../components/Close';

export default class Work extends Component {
	constructor() {
    super();
    this.state = {
      data: portfolioData,
      // clicked: false,
      currentProject: {},
      modalIsOpen: false
    };
    // this.handleShowProject = this.handleShowProject.bind(this);
    // this.handleHideProject = this.handleHideProject.bind(this);
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // handleShowProject = (e, el) => {
  //   this.setState({ 
  //   	clicked: true,
  //   	currentProject: el
  //   });
  // }
  
  // handleHideProject() {
  //   this.setState({ clicked: false });
  // }

  openModal = (e, el) => {
    this.setState({modalIsOpen: true, currentProject: el});
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

	render() {
		return (
			<div className="Work">
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