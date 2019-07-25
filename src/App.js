// =====**** steps ****=====
// 1)change fun to class => class App
// 2)extend parent class => extends Component
// 3)add constructor() and super method bcz of parent class => constructor(props){super(props);}
// 4)create render() in which we put our html code => render()
// 5)inside render add return =>render(return ();)
// 6)inside return copy our html
// 7)replace class= in html to => className=
// 8)for input tag its self close tag => add /
// 9)in app.css add our css
// 10)crom allow react code to inspect use this link to install it
// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
// and in property click on react
// 11)add notes in class => this.notes = [];
// 12)every time when do list add key means id => key={note.id}


import React,{Component} from 'react';//we add (import)component which is part of react so we use this class here bcz we extends it
import logo from './logo.svg';
import './App.css';
// main code
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React - yeah - we will become the boss of it!
//         </a>
//       </header>
//     </div>
//   );
// }


// we edit code there are two way 1)fun way and 2)class way
// 1st insted of fun way we use class way
class App extends Component {//inheritance component class we use in app class
  constructor(props)//this refer a property
  {
      super(props);//super refer to parents here component is parent of app class
      this.notes = [
        {
          id:1,
          text:'tea',

        },
        {
          id:2,
          text:'cook dinner',
          
        },
        {
          id:3,
          text:'study react',
          
        },
        {
          id:4,
          text:'study more react',
          
        },
      ];
  }
  render()//render convert into html which is inside the fun
  {
    return (
      <div className="wrap">
		<div className="container">
			<div className="notes">
        {/* transform same things(replicate) use map */
          // inside html use {} to add javascript
          this.notes.map(function(note){
            return (
              // inside js we want to add html use ()
              <div className="note new-note" key={note.id}>

              <form className="note-body">
                  <div className="form-group">
                    <label for="note-input">
                      {/* from html to js code so we use {} */}
                      {note.text}
                    </label>
                    <input type="text" className="form-control" id="note-input"/>
                  </div>
            
                  <button type="submit" className="btn btn-primary">Add</button>
              </form>
              
            </div>
            );
          })
        }
			
			</div>
		</div>
	</div>
    );
  }
    
  }

export default App;
