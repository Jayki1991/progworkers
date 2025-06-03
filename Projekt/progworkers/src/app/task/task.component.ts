import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { NgIf, DatePipe, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgIf, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  aufgabe: any;
  constructor(
    private route: ActivatedRoute, //Werte in der URL zugreifen
    private taskService: TaskService,
    private router: Router,
    private location: Location) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.aufgabe = this.taskService.getAufgabeById(id);
    }
  }
  back(){
    this.location.back();
  }
}
