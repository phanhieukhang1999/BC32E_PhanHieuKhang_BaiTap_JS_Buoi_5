/*-----------Bài tập 1------------- */
document.getElementById('btnKetQua').onclick = function () {
    var kiemTraDiem = 0;

    //xử lý
    var kiemTraDiem = tongDiem('diemChuan', 'chonKhuVuc', 'chonDoiTuong', 'diemMon1', 'diemMon2', 'diemMon3');

    document.getElementById('ketQua_b1').innerHTML = tongDiem;

}
function tongDiem(id1, id2, id3, id4, id5, id6) {
    //input: id của các thẻ thừ id1 -> id6
    var diemChuan = document.getElementById(id1).value;
    var khuvuc = Number(document.getElementById(id2).value)
    var doiTuong = Number(document.getElementById(id3).value);
    var diem1 = Number(document.getElementById(id4).value);
    var diem2 = Number(document.getElementById(id5).value);
    var diem3 = Number(document.getElementById(id6).value);

    var diem = !0;


    //xử lý
    if (diem &= kiemTraDiem(diem1) && kiemTraDiem(diem2) && kiemTraDiem(diem3)) {
        tongDiem = diem1 + diem2 + diem3 + (khuvuc + doiTuong);
        if (tongDiem >= 0) {
            tongDiem = 'Bạn đã đậu. Tổng điểm: ' + tongDiem;
        } else {
            tongDiem = 'Bạn đã rớt. Tổng điểm: ' + tongDiem;
        }
    } else {
        tongDiem = 'Bạn đã rớt. Do có điểm nhỏ thấp hơn hoặc bằng 0';
    }
    return tongDiem;


}

function kiemTraDiem(diemChuan) {
    return !(diemChuan <= 0);
}


/*-----------Bài tập 2------------- */


document.getElementById('btnTinhTienDien').onclick = function () {
    //input: hoTen: string
    var hoTen = document.getElementById('nhapHoTen').value;
    var tienDien = 0;

    var tienDien = tongTienDien('nhapSoKw');

    tienDien = new Intl.NumberFormat("vn-VN").format(tienDien)

    //hiển thị giao diện
    document.getElementById('ketQua_b2').innerHTML = 'Họ tên: ' + hoTen + '; Có số tiền điện là: ' + tienDien + ' VND';
}

function tongTienDien(id1) {//input thẻ id: number
    var soKw = Number(document.getElementById(id1).value);

    var kw_1 = 500;
    var kw_2 = 650;
    var kw_3 = 850;
    var kw_4 = 1100;
    var kw_5 = 1300;
    //output: tongTienDien: number
    var tongTienDien = 0;
    //xử lý
    if ((0 < soKw && soKw <= 50)) {
        tongTienDien = soKw * kw_1;
    } else if (soKw > 50 && soKw <= 100) {
        tongTienDien = 50 * kw_1 + (soKw - 50) * kw_2;
    } else if (soKw > 100 && soKw <= 200) {
        tongTienDien = 50 * kw_1 + 50 * kw_2 + (soKw - 100) * kw_3;
    } else if (soKw > 200 && soKw <= 350) {
        tongTienDien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (soKw - 200) * kw_4;
    } else if (soKw > 350) {
        tongTienDien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (soKw - 350) * kw_5;
    } else {
        tongTienDien = 'Số kw không hợp lệ! Vui lòg nhập lại';
    }

    return tongTienDien;
}

