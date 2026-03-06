document.getElementById('pay1').onclick = function () {
    let mau = document.querySelector('input[name="mau1"]:checked');
    let size = document.querySelector('input[name="size1"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let kq = confirm("Bạn có chắc là muốn mua ngay lập tức không?");
    if (kq == true) {
        alert("Mua hàng thành công!");
        let donHang = {
            ten: "Áo khoác nỉ dành cho nữ",
            gia: 100000,
            trangThai: "Đang vận chuyển"
        };
        localStorage.setItem("donHang", JSON.stringify(donHang));
    }
}
document.getElementById('save1').onclick = function () {
    let mau = document.querySelector('input[name="mau1"]:checked');
    let size = document.querySelector('input[name="size1"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Áo khoác nỉ dành cho nữ",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}


document.getElementById('pay2').onclick = function () {
    let mau = document.querySelector('input[name="mau2"]:checked');
    let size = document.querySelector('input[name="size2"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let kq = confirm("Bạn có chắc là muốn mua ngay lập tức không?");
    if (kq == true) {
        alert("Mua hàng thành công!");
        let donHang = {
            ten: "Áo khoác nỉ dài tay",
            gia: 100000,
            trangThai: "Đang vận chuyển"
        };
        localStorage.setItem("donHang", JSON.stringify(donHang));
    }
}
document.getElementById('save2').onclick = function () {
    let mau = document.querySelector('input[name="mau2"]:checked');
    let size = document.querySelector('input[name="size2"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Áo khoác nỉ dài tay",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}


document.getElementById('pay3').onclick = function () {
    let mau = document.querySelector('input[name="mau3"]:checked');
    let size = document.querySelector('input[name="size3"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let kq = confirm("Bạn có chắc là muốn mua ngay lập tức không?");
    if (kq == true) {
        alert("Mua hàng thành công!");
        let donHang = {
            ten: "Áo khoác nữ",
            gia: 100000,
            trangThai: "Đang vận chuyển"
        };
        localStorage.setItem("donHang", JSON.stringify(donHang));
    }
}
document.getElementById('save3').onclick = function () {
    let mau = document.querySelector('input[name="mau3"]:checked');
    let size = document.querySelector('input[name="size3"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Áo khoác nữ",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}

document.getElementById('pay4').onclick = function () {
    let mau = document.querySelector('input[name="mau4"]:checked');
    let size = document.querySelector('input[name="size4"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let kq = confirm("Bạn có chắc là muốn mua ngay lập tức không?");
    if (kq == true) {
        alert("Mua hàng thành công!");
        let donHang = {
            ten: "Áo gió dành cho nam",
            gia: 100000,
            trangThai: "Đang vận chuyển"
        };
        localStorage.setItem("donHang", JSON.stringify(donHang));
    }
}
document.getElementById('save4').onclick = function () {
    let mau = document.querySelector('input[name="mau4"]:checked');
    let size = document.querySelector('input[name="size4"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Áo gió dành cho nam",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}

document.getElementById('pay5').onclick = function () {
    let mau = document.querySelector('input[name="mau5"]:checked');
    let size = document.querySelector('input[name="size5"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let kq = confirm("Bạn có chắc là muốn mua ngay lập tức không?");
    if (kq == true) {
        alert("Mua hàng thành công!");
        let donHang = {
            ten: "Áo thun ngắn tay",
            gia: 100000,
            trangThai: "Đang vận chuyển"
        };
        localStorage.setItem("donHang", JSON.stringify(donHang));
    }
}
document.getElementById('save5').onclick = function () {
    let mau = document.querySelector('input[name="mau5"]:checked');
    let size = document.querySelector('input[name="size5"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Áo thun ngắn tay",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}

document.getElementById('pay6').onclick = function () {
    let mau = document.querySelector('input[name="mau6"]:checked');
    let size = document.querySelector('input[name="size6"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let kq = confirm("Bạn có chắc là muốn mua ngay lập tức không?");
    if (kq == true) {
        alert("Mua hàng thành công!");
        let donHang = {
            ten: "Áo khoác nữ 2 lớp",
            gia: 100000,
            trangThai: "Đang vận chuyển"
        };
        localStorage.setItem("donHang", JSON.stringify(donHang));
    }
}
document.getElementById('save6').onclick = function () {
    let mau = document.querySelector('input[name="mau6"]:checked');
    let size = document.querySelector('input[name="size6"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Áo khoác nữ 2 lớp",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}

document.getElementById('pay7').onclick = function () {
    let mau = document.querySelector('input[name="mau7"]:checked');
    let size = document.querySelector('input[name="size7"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let kq = confirm("Bạn có chắc là muốn mua ngay lập tức không?");
    if (kq == true) {
        alert("Mua hàng thành công!");
        let donHang = {
            ten: "Áo khoác da 2 lớp",
            gia: 100000,
            trangThai: "Đang vận chuyển"
        };
        localStorage.setItem("donHang", JSON.stringify(donHang));
    }
}
document.getElementById('save7').onclick = function () {
    let mau = document.querySelector('input[name="mau7"]:checked');
    let size = document.querySelector('input[name="size7"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Áo khoác da 2 lớp",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}

document.getElementById('pay8').onclick = function () {
    let mau = document.querySelector('input[name="mau8"]:checked');
    let size = document.querySelector('input[name="size8"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let kq = confirm("Bạn có chắc là muốn mua ngay lập tức không?");
    if (kq == true) {
        alert("Mua hàng thành công!");
        let donHang = {
            ten: "Áo măng tô",
            gia: 100000,
            trangThai: "Đang vận chuyển"
        };
        localStorage.setItem("donHang", JSON.stringify(donHang));
    }
}
document.getElementById('save8').onclick = function () {
    let mau = document.querySelector('input[name="mau8"]:checked');
    let size = document.querySelector('input[name="size8"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Áo măng tô",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}

document.getElementById('pay9').onclick = function () {
    let mau = document.querySelector('input[name="mau9"]:checked');
    let size = document.querySelector('input[name="size9"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let kq = confirm("Bạn có chắc là muốn mua ngay lập tức không?");
    if (kq == true) {
        alert("Mua hàng thành công!");
        let donHang = {
            ten: "Váy xòe hoa nhí",
            gia: 100000,
            trangThai: "Đang vận chuyển"
        };
        localStorage.setItem("donHang", JSON.stringify(donHang));
    }
}
document.getElementById('save9').onclick = function () {
    let mau = document.querySelector('input[name="mau9"]:checked');
    let size = document.querySelector('input[name="size9"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Váy xòe hoa nhí",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}

document.getElementById('pay10').onclick = function () {
    let mau = document.querySelector('input[name="mau10"]:checked');
    let size = document.querySelector('input[name="size10"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let kq = confirm("Bạn có chắc là muốn mua ngay lập tức không?");
    if (kq == true) {
        alert("Mua hàng thành công!");
        let donHang = {
            ten: "Váy đầm",
            gia: 100000,
            trangThai: "Đang vận chuyển"
        };
        localStorage.setItem("donHang", JSON.stringify(donHang));
    }
}
document.getElementById('save10').onclick = function () {
    let mau = document.querySelector('input[name="mau10"]:checked');
    let size = document.querySelector('input[name="size10"]:checked');
    if (!mau) {
        return;
    }
    if (!size) {
        return;
    }

    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Váy đầm",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}