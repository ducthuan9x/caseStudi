class Student {
    ten;
    ngaysinh;
    toan;
    ly;
    hoa;

    constructor(ten, ngaysinh, toan, ly, hoa) {
        this.ten = ten;
        this.ngaysinh = ngaysinh;
        this.toan = parseFloat(toan);
        this.ly = parseFloat(ly);
        this.hoa = parseFloat(hoa);
    }

    diemtbinh() {
        return (this.toan + this.ly + this.hoa) / 3
    }

    xeploai() {
        let a = this.diemtbinh()
        if (a <= 5) {
            return "trung bình";
        } else if (a < 8) {
            return "khá";
        } else {
            return 'giỏi';
        }
    }

}

let producStudent = [];
let ten1 = document.getElementById('hoten');
let ngaysinh1 = document.getElementById('ngaysinh');
let toan1 = document.getElementById('toan');
let ly1 = document.getElementById('ly');
let hoa1 = document.getElementById('hoa');
index();

function index() {
    let html = "";
    for (let i = 0; i < producStudent.length; i++) {
        html += "<tr>" + "<td>" + (i + 1) + "</td>" + "<td>" + producStudent[i].ten + "</td>" + "<td>" + producStudent[i].ngaysinh + "</td>" + "<td>" + producStudent[i].toan +
            "</td>" + "<td>" + producStudent[i].ly + "</td>" + "<td>" + producStudent[i].hoa + "</td>" + "<td>" + producStudent[i].diemtbinh() + "</td>" +
            "<td>" + producStudent[i].xeploai() + "</td>" + "<td>" + "<button class='button2' onclick='duoi(" + i + ")'>Đuổi</button>" +
            " " + "<button class='button1' onclick='sua(" + i + ")'>Sửa</button>" + "</td>" + "</tr>";
    }
    document.getElementById('list').innerHTML = html;
}
function hthi() {
    let studen= new Student(ten1.value,ngaysinh1.value,toan1.value,ly1.value,hoa1.value);
    ten1.value= "";
    ngaysinh1.value="";
    toan1.value="";
    ly1.value="";
    hoa1.value="";
    producStudent.push(studen);
    index();
}
function duoi(hSinh){
    confirm("đuổi thật à???")
    producStudent.splice(hSinh,1)
    index()
    alert('bạn đã bị đuổi khỏi lớp')
}function sua(i){
    let hs = producStudent[i];
    confirm("bạn chắc chưa")
   ten1.value = producStudent[i].ten;
     ngaysinh1.value= producStudent[i].ngaysinh;
     toan1.value= producStudent[i].toan;
     ly1.value= producStudent[i].ly;
    hoa1.value= producStudent[i].hoa;
    alert('bắt đầu chỉnh sửa thông tin');
    index();

}

