const typenumber = 4;
const errorCorrectionLevel = "L";

function createQR(s) {
  let qr = qrcode(typenumber, errorCorrectionLevel);
  qr.addData(s);
  qr.make();
  opts = new Object();
  opts.cellSize = 10;
  opts.margin = opts.cellSize * 4;
  opts.scalable = true;
  document.getElementById("App").innerHTML = qr.createImgTag(opts.cellSize);
}

createQR("hi");
