import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { NgIf, DatePipe, Location } from '@angular/common';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgIf, DatePipe, FormsModule, MonacoEditorModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  template: `
      <ngx-monaco-editor 
        [(ngModel)]="code"
        [options]="editorOptions"
        style="height:400px;">
      </ngx-monaco-editor>
    `
})
export class TaskComponent implements OnInit{
  aufgabe: any;
  code = `public class HelloWorld {
    public static void Main() {
        Console.WriteLine("Hello, world!");
    }
  }`;
  editorOptions = { theme: 'vs-dark', language: 'csharp' };
  constructor(
    private route: ActivatedRoute, //Werte in der URL zugreifen
    private taskService: TaskService,
    private router: Router,
    private location: Location
    ) {}
  
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
