import {Component, OnInit} from '@angular/core';
import { MonAnService } from './dataBase/mon-an.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  constructor(private maService: MonAnService) {
  }
  title = 'RouterApp';

  ngOnInit(): void {
    this.maService.getAllMonAn();
  }
}
