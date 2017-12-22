import { Component } from '@angular/core';

class Note{
	title:string; 
	text:string;
	constructor(){
		this.title='';
		this.text='';
	}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	note :Note;
	notes: Array<Note>;
	constructor(){
		this.note = new Note();
		this.notes=[];
	}
  takeNote(){
  this.notes.push(this.note);
  this.note = new Note();
  console.log(this.notes);
  }
}
