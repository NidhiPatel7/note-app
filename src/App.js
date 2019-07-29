// basic consept of react
// react convert code in js,jsx(x=xml),css,html.
// server(node.js) transpile code react to all other language (like html etc) for browser.

// need node server = npm.

// terminal  = npm -v if you see version you have installed 
// link for installation = https://nodejs.org/en/

// link for create app 
// https://facebook.github.io/create-react-app/docs/getting-started use this module for create app


// terminal 
// cd desktop


// npx create-react-app note-app (note-app name of app)

// cd node-app (note-app name of app)
// npm start (to start http://localhost:3000/ in your browser which is starting point )


// go in app src folder app.js which is react page for coding

// ======when use vs code or sublime and want to check code
// install in sublime or vs code for code and edit option from js to js react


// ======*** steps to send code in github and github to pc ****======
// 1)ADD PROJECT
// git init


// git add .


// git commit -m "setup react project"


// git log

// create reposetry and copy 2nd link and enter user name and password



// 2)DOWNLOAD PROJECT
// git clone (clone link from git hub project)



// 3)NPM INSTALL
// cd note-app(project name)

// npm install(its install npm)


// 4)RUN THE CODE

// npm start (to run code)



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
class App extends Component 
{//inheritance component class we use in app class for use component from react(which is in Component)
  constructor(props)//here this refer a property
  {
      super(props);//super refer to parents here component is parent of app class
      this.state = {
        friends : [],
        color:'green',
       notes : [
          // {
          //   id:1,
          //   text:'tea',
  
          // },
          // {
          //   id:2,
          //   text:'cook dinner',
            
          // },
          // {
          //   id:3,
          //   text:'study react',
            
          // },
          // {
          //   id:4,
          //   text:'study more react',
            
          // },
        ],
        noteInputValue:'',
      };
     
      // two way to do but we use arrow fun bcz aroow fun catpture this  here
  }
  // =====***** for change = we change state means our value ****======
  handleNoteInputChange = (e) =>
  {
    // this prefer to app so we use e.target for text feild
      // console.log(this);
      // here this is component
      // e.target.value;
      // this.state.noteInputChange = e.target.value; this is wrong way we cant change things 
      //directly we have to ask react to change it so follow bottom line

      this.setState({noteInputValue : e.target.value});//react change the things here using setState it set the state
  }
  // ====**** for add value when click on button ***====
  handleAddNoteClick= (e) =>
  {
    // this prefer the appp thats why we use e.target to get button
    e.preventDefault();
    // =====way1=====
    // var newNotes = this.state.notes;//we add old list
    // newNotes.push({
    //   id:Date.now(),//like how i used in php project with datae and time to gunerate diffrent key
    //   text:this.state.noteInputValue,
    // });
    // this.setState({notes:newNotes});
    // ====way2 ====
    var note =
    {
        id:Date.now(),//like how i used in php project with datae and time to gunerate diffrent key
        text:this.state.noteInputValue,
    }
    var newNotes = [note,...this.state.notes];//... copy and past old note
    this.setState({
      notes:newNotes,
      noteInputValue:'',
    });
  }
  // ======for delete =====
  removeNote = (noteId) =>
  {
    var notes = this.state.notes;
    var filterNotes = notes.filter(function(item){
      return item.id != noteId;
    });
    this.setState({notes:filterNotes});
  }


  render()//render convert into html which is inside the fun
  {
    return (
      // here this is app bcz its inside render
      <div className="wrap">
		<div className="container">
			<div className="notes">
        {/* transform same things(replicate) use map */
          // inside html use {} to add javascript
          this.state.notes.map((note) =>
          { //this here is undefine bcz its in simple fun and in loop
            // after use arrow fun this is app
            return(
              // inside js we want to add html use return()
              <div className="note new-note" key={note.id}>

              <form className="note-body">
                <i onClick={(e) => {this.removeNote(note.id)}} className="far fa-times-circle note-remove"></i>
                  <div className="form-group">
                    <label htmlFor="note-input">
                      {/* from html to js code so we use {} */}
                      {note.text}
                    </label>
                    <input type="text" className="form-control" id="note-input"/>
                  </div>
            
                  {/* <button type="submit" className="btn btn-primary">Add</button> */}
              </form>
              
            </div>
            );
          })
        }
			 <div className="note new-note" >

    <form className="note-body">
        <div className="form-group">
          <label htmlFor="note-input">
           Add Note
          </label>
          <input type="text" className="form-control" value={this.state.noteInputValue} id="note-input" onChange={this.handleNoteInputChange}/>
          {/* we only use handleNoteInputChange not () after like handleNoteInputChange() bcz we want to go(handle) to fun not want to call*/}
        </div>

        <button  id="add-note" type="submit" className="btn btn-primary" onClick={this.handleAddNoteClick}>Add</button>
    </form>

</div>
			</div>
		</div>
	</div>
    );
  }
    
  }

export default App;
