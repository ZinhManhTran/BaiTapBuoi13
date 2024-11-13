/** Bài toán quản lý tuyển sinh
 *Dữ liệu đầu vào: Điểm chuẩn, điểm 3 môn, khu vực, đối tượng ưu tiên.
 *Điều kiện trúng tuyển: Điểm tổng kết >= điểm chuẩn và không có môn nào điểm 0.
 *Tính toán điểm tổng kết: Tổng điểm 3 môn + điểm ưu tiên theo khu vực và đối tượng.
 Dữ liệu đầu ra: Thông báo đậu/rớt và tổng điểm.
 */

function kiemTra() {
  // Lấy dữ liệu từ form
  const diemChuan = parseFloat(document.getElementById("diemChuan").value);
  const diemMon1 = parseFloat(document.getElementById("diemMon1").value);
  const diemMon2 = parseFloat(document.getElementById("diemMon2").value);
  const diemMon3 = parseFloat(document.getElementById("diemMon3").value);
  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong = document.getElementById("doiTuong").value;

  // Bảng điểm ưu tiên
  const diemUuTien = {
    A: 2,
    B: 1,
    C: 0.5,
    1: 2.5,
    2: 1.5,
    3: 1,
  };

  // Tính điểm ưu tiên theo khu vực và đối tượng
  let diemUuTienKhuVuc = 0;
  let diemUuTienDoiTuong = 0;
  if (khuVuc !== "X") {
    diemUuTienKhuVuc = diemUuTien[khuVuc];
  }
  if (doiTuong !== "0") {
    diemUuTienDoiTuong = diemUuTien[doiTuong];
  }

  // Tính điểm tổng kết
  const diemTongKet =
    diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

  // Kiểm tra kết quả và hiển thị
  const ketQuaDiv = document.getElementById("ketQua");
  if (diemTongKet >= diemChuan) {
    ketQuaDiv.textContent = `Bạn đã đậu! Tổng điểm: ${diemTongKet}`;
  } else {
    ketQuaDiv.textContent = "Bạn đã rớt!";
  }
}
