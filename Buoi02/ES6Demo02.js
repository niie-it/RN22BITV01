//Demo object

let sv = {
  hoTen: "Nguyen Van A",
  lop: "FE68",
  "lanh thuong": true,

  layThongTinSV: function () {
    console.log(`Ho ten: ${this.hoTen} - Lop: ${this.lop}`);
  },
};
console.log(sv.hoTen);
console.log(sv["hoTen"]);
console.log(sv["lanh thuong"]);
sv.layThongTinSV();
console.log(sv);

//thêm mới thuộc tính cho obj dễ dàng
sv.maSV = "SV001";
console.log("Sau khi thêm:", sv);
