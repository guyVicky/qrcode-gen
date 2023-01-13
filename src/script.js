const typenumber = 4;
const errorCorrectionLevel = "L";

function createQR(s) {
  let qr = qrcode(typenumber, errorCorrectionLevel);
  qr.addData(s);
  qr.make();
  opts = new Object();
  opts.cellSize = 8;
  opts.margin = opts.cellSize * 4;
  opts.scalable = true;
  document.getElementById("qr-img").src = qr.createDataURL(
    opts.cellSize,
    opts.margin
  );
}

document.getElementById("submit").addEventListener("click", (e) => {
  let str = document.getElementById("string").value;
  createQR(str);
});

createQR("hello, world");
