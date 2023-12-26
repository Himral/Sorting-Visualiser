import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 350; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({array});
  }

 mergeSort(){

 }
 quickSort(){

 }
 bubbleSort(){

 }
 heapSort(){
    
 }
  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div 
          className="array-bar" 
          key = {idx}
          style = {{height: `${value}px`}}
          ></div>
        ))}
        <button className = "main-button" onClick={()=> this.resetArray()}>Generate New Array!</button>
        <button className = "main-button" onClick={()=> this.mergeSort()}>Merge Sort</button>
        <button className = "main-button" onClick={()=> this.quickSort()}>Quick Sort</button>
        <button className = "main-button" onClick={()=> this.bubbleSort()}>Bubble Sort</button>
        <button className = "main-button" onClick={()=> this.heapSort()}>Heap Sort</button>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

