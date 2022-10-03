import React, { Component } from 'react'

export default class Modal extends Component {
    state = {};


    cancelButton = () => {
        this.props.closeModal();
    }
  render() {
    return (
      <div className='card'>
        <div className="card-header">Add a driver</div>
        <div className="card-body">
            <div className="row">
                <div className="col-6">
                    <h5>Car Number:</h5>
                    <div className="btn-group">
                        <button className='btn btn-secondary'>-</button>
                        <button className='btn'>{}</button>
                        <button className='btn btn-info'>+</button>
                    </div>
                </div>

                <div className="col-6">
                    <h5>Financial Penalty:</h5>
                    <div className="btn-group">
                        <button className='btn btn-secondary'>-</button>
                        <button className='btn'>{}</button>
                        <button className='btn btn-info'>+</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-footer text-center">
            <button className='btn btn-warning m-2' onClick={this.cancelButton}>Cancel</button>   
            <button className='btn btn-success m-2'>Save Changes</button>   
        </div> 
      </div>
    )
  }
}
