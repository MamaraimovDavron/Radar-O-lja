import React, { Component } from 'react'

export default class Modal extends Component {
    state = {};


    cancelButton = () => {
        this.props.closeModal();
    }

    changeCurrentData(type, isIncrement){
        this.props.changeCurrentData(type, isIncrement);
    }


    saveChanges = () => {
        this.props.saveChanges();
    };

    componentWillUnmount(){
        this.props.clearCurrentData();
    }

  render() {

    const { currentData } = this.props;
    return (
      <div className='card'>
        <div className="card-header">Add a driver</div>
        <div className="card-body">
            <div className="row">
                <div className="col-5 text-center">
                    <h5>Provision Number:</h5>
                    <div className="btn-group">
                        <button className='btn btn-secondary' onClick={() => this.changeCurrentData("carNumber", false)}>-</button>
                        <button className='btn'>{currentData ? currentData.carNumber : 0}</button>
                        <button className='btn btn-info' onClick={() => this.changeCurrentData("carNumber", true)}>+</button>
                    </div>
                </div>
                
                <div className="col-2 ">
                    <img className="img-fluid" 
                        src="data:image/jpeg;base64,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" alt="" />
                </div>

                <div className="col-5">
                    <h5>Financial Penalty:</h5>
                    <div className="btn-group">
                        <button className='btn btn-secondary' onClick={() => this.changeCurrentData("financialPenalty", false)}>-</button>
                        <button className='btn'>{currentData ? currentData.financialPenalty : 0}.00 so'm</button>
                        <button className='btn btn-info' onClick={() => this.changeCurrentData("financialPenalty", true)}>+</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-footer text-center">
            <button className='btn btn-warning m-2' onClick={this.cancelButton}>Cancel</button>   
            <button className='btn btn-success m-2' onClick={this.saveChanges}>Save Changes</button>   
        </div> 
      </div>
    )
  }
}
