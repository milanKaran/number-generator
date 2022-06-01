import './App.css';

function App() {
  //Function to call for shuffling list numbers
  //that are being passed by number list
  //(i.e.:integer array) called 'arr'
  function shuffleArray(arr) {
      let lastInd = arr.length, randomInd, tempNum;

      //Let n_1 denote number coming before
      //currently iterated number.
      //Working in reverse with numbers in the list,
      //iterating from last to first number,
      //swap n_1 with randomly picked number between
      //first number and n_1.
      for (let i = lastInd; i > 0; i--) {
          randomInd = Math.floor(Math.random() * i);
          tempNum = arr[i-1];
          arr[i-1] = arr[randomInd];
          arr[randomInd] = tempNum;
      }
      return arr;
  }

  //Initialize numbers from 1 to 10,000
  let arr = [];
  for (let i = 1; i <= 10000; i++) {
      arr.push(i);
  }

  //call the function for shuffling the list numbers.
  arr = shuffleArray(arr);

  //Use list 'arr' and perform string manipulation with numbers
  //This is done so that random numbers can fit into the web page without overflowing
  let outputStr = '';
  for (let j = 25; j < arr.length; j = j+25) {
      //For every 25 numbers, add a comma between each and newline
      outputStr = outputStr + arr.slice(j-25, j-1).join(', ') + ',\n';
  }
  //Render the numbers
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          List of generated numbers:
        </h1>
          <p>{outputStr}</p>
      </header>
    </div>
  );
}

export default App;
