//https://docs.google.com/spreadsheets/d/1ez-PCsSvKQ2-7e9WvKGa6DSbhr6PbT16yxi5Xj4cAlc/edit?usp=sharing
//https://script.google.com/macros/s/AKfycbxqxI_to-4APeG0p2InZXL7uJ31pJfPjW_etiPCCGZ-lckPAWI/exec

var url = 'https://script.google.com/macros/s/AKfycbxqxI_to-4APeG0p2InZXL7uJ31pJfPjW_etiPCCGZ-lckPAWI/exec';
var postData = { a: 'a', b: 'b'};

function setup() {
  createCanvas(800, 800);

}


function mouseClicked(){
  httpPost(url,postData,'json')

  // httpDo(url,postData,'json')
  // console.log(httpGet(url,'json'))
}
