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

document.getElementById('pay2').onclick = function () {
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