import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { NewComponentComponent } from './new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-17-features';
  onDemand = false

  isTrue = true
  status = 'finalizado'
  users = [
    {
      name: 'teste',
      id: 5
    },
    {
      name: 'teste 2',
      id: 3
    },
    {
      name: 'teste 3',
      id: 4
    },
  ]

  numbers$ = of([1,2,3,4,5,6])

  emptyList = []

  ngOnInit() {
    setTimeout(() => {
      console.log('teste')
      this.onDemand = true
    },5000)
  }
}
