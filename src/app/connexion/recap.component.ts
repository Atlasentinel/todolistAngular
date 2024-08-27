import { Component, OnInit } from '@angular/core';

interface Task {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
})
export class ConnexionComponent implements OnInit {
  todos: Task[] = [];
  completedTasks: Task[] = [];
  pendingTasks: Task[] = [];
  totalTasks: number = 0;

  ngOnInit() {
    // Récupérer les données du localStorage
    const todosString = localStorage.getItem('todos');
    if (todosString) {
      this.todos = JSON.parse(todosString);
      this.totalTasks = this.todos.length;

      // Séparer les tâches accomplies et en attente
      this.completedTasks = this.todos.filter(task => task.completed);
      this.pendingTasks = this.todos.filter(task => !task.completed);
    }
  }
}