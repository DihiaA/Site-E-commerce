import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = [
    {
      todoName: 'Projet 1',
      todoStatus: true,
      image: 'http://placehold.it/150'
    },
    {
      todoName: 'Projet 2',
      todoStatus: false,
      image: 'http://placehold.it/150'
    },
    {
      todoName: 'Projet 3',
      todoStatus: true,
      image: 'http://placehold.it/150'
    },
    {
      todoName: 'Projet 4',
      todoStatus: false,
      image: 'http://placehold.it/150'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeStatus(i: number){
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
  }

}
