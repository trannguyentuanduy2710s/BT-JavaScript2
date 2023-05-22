// BÀI TẬP 1
function calcAreaGrade(area) {
    if (area === 'A') return 2;

    if (area === 'B') return 1;

    if (area === 'C') return 0.5;

    return 0;
}
function calcTypeGrade(type) {
    if (type === '1') return 2.5;

    if (type === '2') return 1.5;

    if (type === '3') return 1;

    return 0;

}

function ex1() {
    var benchmark = +document.getElementById('benchMark').value;

    var sub1 = +document.getElementById('subJect1').value;

    var sub2 = +document.getElementById('subJect2').value;

    var sub3 = +document.getElementById('subJect3').value;

    var areaVal = document.getElementById('areaSelect').value;

    var typeVal = document.getElementById('typeSelect').value;

    var areaGrade = calcAreaGrade(areaVal);

    var typeGrade = calcTypeGrade(typeVal);

    var total = sub1 + sub2 + sub3 + areaGrade + typeGrade;

    var xepLoai = '';

    if (
        total >= benchmark &&
        sub1 !== 0 &&
        sub2 !== 0 &&
        sub3 !== 0
    ) {
        xepLoai = 'Bạn đã đậu';

    } else {
        xepLoai = 'Bạn đã rớt';

    }
    const result = `Tổng điểm của bạn là: ${total}, ${xepLoai}`;
    document.getElementById('txtKetQua').innerHTML = result;
}


document.getElementById("btnSubmit").onclick = ex1;




// BÀI TẬP 2
document.getElementById('btnTongtiendien').onclick = function () {

    var soKmnumber = +document.getElementById('soKw').value;

    var nameText = document.getElementById('nameText').value;
    var tong = 0;

    var first = 500;
    var sencond = 650;
    var third = 850;
    var four = 1100;
    var end = 1300;

    if (soKmnumber == 0) {
        alert('Vui lòng nhập só Kw !!!');
        return 0;
    }
    else if (soKmnumber <= 50) {
        tong = soKmnumber * first;

    } else if (soKmnumber > 50 && soKmnumber <= 100) {
        tong = (soKmnumber - 50) * sencond + 50 * first;

    } else if (soKmnumber > 100 && soKmnumber <= 200) {
        tong = 50 * first + 50 * sencond + (soKmnumber - 100) * third;

    } else if (soKmnumber > 200 && soKmnumber <= 350) {
        tong = 50 * first + 50 * sencond + 100 * third + (soKmnumber - 200) * four;

    } else if (soKmnumber > 350) {
        tong = 50 * first + 50 * sencond + 100 * third + 150 * four + (soKmnumber - 350) * end;
    }
    document.getElementById('hovaten').innerHTML = "Họ và tên: " + nameText;
    document.getElementById('tienDien').innerHTML = "Tiền điện là:" + '\xa0' + tong; + "Đ"
}


// BÀI TẬP 3
document.getElementById('btnTongtienthue').onclick = function () {

    var name = document.getElementById('tenKH').value;

    var thunhap = +document.getElementById('tongThunhap').value

    var nguoiPhuthuoc = document.getElementById('soNguoi').value

    var thuemacidnh = 4e+6;

    var tong = 0;
    // bai nay sai logic roi, ua may bai nay de ma, y het nhu nhau luon a. Khoan anh em test nó đúng theo mẫu mà ta, em ví dụ cho anh coi ha, ok

    if (thunhap > 0 && thunhap < 10e6) {
        alert('Số tiền thu nhập không hợp lệ !!!');
        return;
    } else if (thunhap <= 60e+6) {
        tong = ((thunhap - thuemacidnh) - (nguoiPhuthuoc * 1.6e+6)) * 0.05;

    } else if (thunhap > 60e+6 && thunhap <= 120e+6) {
        tong = ((thunhap - thuemacidnh) - (nguoiPhuthuoc * 1.6e+6)) * 0.1;

    } else if (thunhap > 120e+6 && thunhap <= 210e+6) {
        tong = ((thunhap - thuemacidnh) - (nguoiPhuthuoc * 1.6e+6)) * 0.15;

    } else if (thunhap > 210e+6 && thunhap <= 384e+6) {
        tong = ((thunhap - thuemacidnh) - (nguoiPhuthuoc * 1.6e+6)) * 0.2;

    } else if (thunhap > 384e+6 && thunhap <= 624e+6) {
        tong = ((thunhap - thuemacidnh) - (nguoiPhuthuoc * 1.6e+6)) * 0.25;

    } else if (thunhap > 624e+6 && thunhap <= 960e+6) {
        tong = ((thunhap - thuemacidnh) - (nguoiPhuthuoc * 1.6e+6)) * 0.3;

    } else if (thunhap > 960e+6) {
        tong = ((thunhap - thuemacidnh) - (nguoiPhuthuoc * 1.6e+6)) * 0.35;
    }
    tong = new Intl.NumberFormat("vn-VN",).format(tong) + '\xa0' + "VNĐ";

    document.getElementById('intraten').innerHTML = "Họ và tên :" + name;
    document.getElementById('ketqua2').innerHTML = "Tiền thuế thu nhập :" + tong;


}


// BÀI TẬP 4

document.getElementById('btnTongtiencap').onclick = function () {
    var maKhachhang = document.getElementById('maKH').value;

    var soKenhcaocap = +document.getElementById('soKenhcaocap').value;

    var loaikhach = document.getElementById("List").value;

    var soKetnoi = document.getElementById("soKetnoi").value;

    var loaikhach;

    var total = 0;

    var phiHoadon = 4.5;
    var phiDichvu = 20.5;
    var thueKenh = 7.5;
    if (loaikhach === "1") {
        tong = phiHoadon + phiDichvu + (soKenhcaocap * thueKenh);
    } else if (loaikhach === "2") {
        phiHoadon = 15;
        if (soKetnoikenh <= 10) {
            phiDichvu = 75;
        } else {
            phiDichvu = 75 + (soKetnoikenh - 10) * 5;
        }
        thueKenh = 50 * soKenhcaocap;
    }

    document.getElementById('ketqua').innerHTML = "Tổng tiền cáp là:" + total;
    document.getElementById('makhachhang').innerHTML = "Mã khách hàng:" + maKhachhang;

}

function onchangeDropDown() {
    var x = document.getElementById("selectOption").value;
    if(x === '2') {
        document.getElementById("soKetnoi").style.visibility = 'visible';
    } else {
        document.getElementById("soKetnoi").style.visibility = 'hidden';
    }
}