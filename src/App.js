import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';

export default class App extends Component {
    state = {
        drivers: [],
        modalVisibility: false,
        currentData: "",
    };

    componentDidMount(){
        const drivers = [
            {
                carName: 'Nexia 3',
                carNumber: '70 022 AAA',
                financialPenalty: 150
            },

            {
                carName: 'Nexia 2',
                carNumber: '20 122 ABA',
                financialPenalty: 250
            },

            {
                carName: 'Captiva',
                carNumber: '10 032 AAA',
                financialPenalty: 150
            },
            
            {
                carName: 'Malibu',
                carNumber: '75 822 AAA',
                financialPenalty: 450
            },
            
            {
                carName: 'Matiz',
                carNumber: '80 012 BBA',
                financialPenalty: 70
            },
        ];
        this.setState({
            drivers,
        });
    }

    removeDriver = (index) => {
        const drivers = this.state.drivers;
        drivers.splice(index, 1);
        this.setState({
            drivers,
        })
    }

    openModal = () => {
        this.setState({
            modalVisibility: true,
        })
    }

    closeModal = () => {
        this.setState({
            modalVisibility: false,
        })
    }

  render() {
    const { drivers, modalVisibility, currentData } = this.state;

    return (
      <div className='main--container'>
        <div className="container">
            <h1>Radar o'ljasi</h1>
            <div className="row">
                <div className="col">
                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Car Name</th>
                                <th>Car Number</th>
                                <th>Financial Penalty</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {drivers.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.carName}</td>
                                <td>{item.carNumber}</td>
                                <td>
                                    <span className='badge badge-danger'>{item.financialPenalty}.000 so'm</span>
                                </td>
                                <td>
                                    <button className='btn btn-danger btn-sm' onClick={() => this.removeDriver(index)}>Remove</button>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="button btn btn-primary m-2" onClick={this.openModal}>Add a penalty</div>
                    {
                        modalVisibility ? <Modal closeModal={this.closeModal} currentData={currentData}/> : ""
                    }
                </div>
            </div>
        </div>
      </div>
    )
  }
}
