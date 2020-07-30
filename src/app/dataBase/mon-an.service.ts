import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DinhDuongDto, EnumDinhDuong, ThucPhamDto} from './modal/thucPhamDto';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonAnService {

  constructor() {
  }
  getAllMonAn(): Observable<ThucPhamDto[]> {
    const data: ThucPhamDto[] = [];
    for (let i = 0; i < 12; i++) {
      const dd: DinhDuongDto[] = [];
      dd.push({
        donVi: 'g',
        hamLuong: Math.floor(Math.random() * Math.floor(i + 1)),
        maDinhDuong: EnumDinhDuong.ChatBeo,
        tenDinhDuong: 'Chất béo'
      });
      dd.push({
        donVi: 'g',
        hamLuong: Math.floor(Math.random() * Math.floor(i + 1)),
        maDinhDuong: EnumDinhDuong.ChatBotDuong,
        tenDinhDuong: 'Bột đường'
      });
      dd.push({
        donVi: 'g',
        hamLuong: Math.floor(Math.random() * Math.floor(i + 1)),
        maDinhDuong: EnumDinhDuong.Dam,
        tenDinhDuong: 'Đạm'
      });
      data.push({
        ten: 'Thực phẩm ' + i,
        nhom: 'Nhóm ',
        dinhDuong: dd
      })
      ;
    }
    return of(data).pipe(delay(500));
  }
}
