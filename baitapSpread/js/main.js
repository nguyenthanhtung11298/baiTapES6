//Lấy text ở trong thẻ có class là heading
let string = document.querySelector(".heading").innerHTML

//Dùng Spread Operator để tạo 1 mạng với các phần tử là các kí tự trong text
let a = [...string]

//Tách từng phần tử trong mảng thu được cho vào từng thẻ span, sau đó xếp các thẻ span vào hẻ h2 có class heading
let content='';
for (let i = 0; i<a.length; i++){
    content += `<span>${a[i]}</span>`
}
document.querySelector('.heading').innerHTML = content