import {Component, OnInit} from '@angular/core';
import {MonAnService} from '../dataBase/mon-an.service';
import {Observable} from 'rxjs';
import {ThucPhamDto} from '../dataBase/modal/thucPhamDto';

@Component({
  selector: 'app-thuc-pham-hien-co',
  templateUrl: './thuc-pham-hien-co.component.html',
  styleUrls: ['./thuc-pham-hien-co.component.css']
})
export class ThucPhamHienCoComponent implements OnInit {
  constructor(private maService: MonAnService) {
  }
  $dataSource: Observable<ThucPhamDto[]>;

  ngOnInit(): void {
    this.$dataSource = this.maService.getAllMonAn();
  }
}
