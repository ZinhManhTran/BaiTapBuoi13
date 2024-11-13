/**
 * Phân tích bài toán:
*Dữ liệu đầu vào:
  -Tên khách hàng: Dùng để hiển thị trong kết quả.
  -Số kilowatt tiêu thụ (kWh): Là giá trị số thực để tính toán tiền điện.
*Xử lý:
  Chia số kWh thành các bậc: Tùy thuộc vào số kWh tiêu thụ mà chia thành các khoảng để tính theo giá điện từng bậc.
  Tính tiền từng bậc: Nhân số kWh trong mỗi bậc với giá điện tương ứng.
  Tính tổng tiền: Cộng dồn tiền của các bậc lại để ra tổng số tiền điện phải trả
*Dữ liệu đầu ra:
  -Hiển thị ra tên khách hàng và số tiền điện phải trả
Sơ đồ khối:
 */

function tinhTien() {
  // Lấy thông tin từ form
  const ten = document.getElementById("ten").value;
  const soKW = parseFloat(document.getElementById("soKW").value);

  // Tính tiền điện
  let tienDien = 0;
  if (soKW <= 50) {
    tienDien = soKW * 500;
  } else if (soKW <= 100) {
    tienDien = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW <= 150) {
    tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW <= 200) {
    tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKW - 150) * 1100;
  } else {
    tienDien = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (soKW - 200) * 1300;
  }

  // Hiển thị kết quả
  const ketQuaDiv = document.getElementById("ketQua");
  ketQuaDiv.textContent = `Họ và tên: ${ten}\nSố tiền điện phải trả: ${tienDien.toLocaleString()} đồng`;
}
