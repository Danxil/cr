import * as React from 'react';
import {ICar, ICreateCarAction, IDeleteCarAction} from '../actions/CarsActions';

export interface ICarsState {
  cars:ICar[]
}

export interface ICarsProps {
  cars:ICar[]
  createCar(car:ICar):ICreateCarAction
  deleteCar(id:string):IDeleteCarAction
}

export class Cars extends React.Component<ICarsProps, ICarsState> {
  state:ICarsState

  constructor(public props) {
    super()

    this.state = {
      cars: props.cars
    }

    console.log('props', props)
    console.log('state', this.state)
  }

  render() {

    return (
      <div>
        <strong>Cars !1111111111</strong>
      </div>
    )
  }
}

export default Cars
