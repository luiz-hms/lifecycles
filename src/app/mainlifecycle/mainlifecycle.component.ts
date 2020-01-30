import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-mainlifecycle',
  templateUrl: './mainlifecycle.component.html',
  styleUrls: ['./mainlifecycle.component.css']
})
export class MainlifecycleComponent implements OnInit {

  private foods: string[] = ['Rice', 'Beans', 'Pizza'];
  private clients: Client[] = [];
  private name: string;
  private age: number;
  private food: string;
  private editClient: number = -1;

  randomNumber: number;
  constructor() {
    this.generateRamdonNumber();
  }

  generateRamdonNumber() {
    this.randomNumber = Math.round(Math.random() * 1000);
  }

  ngOnInit() {
  }

  save() {
    if (this.editClient == -1) {
    this.clients.push({
      name: this.name,
      age: this.age,
      food: this.food
    });
    } else {
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].food = this.food;
      this.editClient = -1;
    }
    this.age = null;
    this.name = '';
    this.food = '';
  }

  remove(i: number) {
    this.clients.splice(i, 1);
  }

  edit(i: number) {
    this.age = this.clients[i].age;
    this.name = this.clients[i].name;
    this.food = this.clients[i].food;
    this.editClient = i;
  }

}
