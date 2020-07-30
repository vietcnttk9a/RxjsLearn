export class ThucPhamDto {
  ten: string | undefined;
  nhom: string | undefined;
  dinhDuong: DinhDuongDto[];
}

export class DinhDuongDto {
  tenDinhDuong: string | undefined;
  maDinhDuong: EnumDinhDuong | undefined;
  hamLuong: number | undefined;
  donVi: string | undefined;
}

export enum EnumDinhDuong {
  Nuoc = 1, //Nước
  Dam = 2, //Chất Đạm
  ChatBeo = 3, //Chất Béo
  ChatBotDuong = 4, //Chất bột đường
  ChatSo = 5, //Chất xơ
  Tro = 6, //Tro
}
