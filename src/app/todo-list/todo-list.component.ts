import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo = '';

  ngOnInit(): void {
    debugger;
    const localData = localStorage.getItem('todos');
    if (localData != null) {
      this.todos = JSON.parse(localData);
    }
    console.log(this.todos);
  }

  addTodo() {
    if (this.newTodo.trim() === '') return;
    const newId = this.todos.length + 1;
    const newTodo: Todo = {
      title: this.newTodo,
      completed: false,
    };
    this.todos.unshift(newTodo);
    this.newTodo = '';

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(todo: Todo) {
    // debugger;
    this.todos = this.todos.filter((t) => t !== todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
