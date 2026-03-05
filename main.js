document.getElementById('pay1').onclick = function () {
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
    let gio = JSON.parse(localStorage.getItem("gioHang")) || [];

    gio.push({
        ten: "Áo khoác nữ 2 lớp",
        gia: 100000,
        soLuong: 1
    });

    localStorage.setItem("gioHang", JSON.stringify(gio));

    alert("Đã thêm vào giỏ hàng!");
}