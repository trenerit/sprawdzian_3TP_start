import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {
  tabIUsers = [
    {id: 1, login: 'pkania'},
    {id: 2, login: 'anowak'},
    {id: 3, login: 'mtomczyk'}
  ]
}
