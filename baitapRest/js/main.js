//rest paragram ...theArgs là 1 mảng chưa biết trước só lượng phần tử có tên theArgs
calcArgs = (...theArgs)=>{
    //reduce để cộng các phần tử của mảng Args
    let sum = theArgs.reduce((preVal, curVal)=>{
        return parseFloat( preVal)+parseFloat(curVal)
    })

    // trả về tổng các phần tử trong mảng chia cho số phần tử của mảng
    return (sum/theArgs.length).toFixed(2)
    
}
//Tính điểm trung bình khối 1
document.getElementById('btnKhoi1').addEventListener('click',function(){
    let diemToan = document.getElementById('inpToan').value ;
    // console.log(diemToan)
    let diemLy = document.getElementById('inpLy').value ;
    // console.log(diemLy)
    let diemHoa = document.getElementById('inpHoa').value ;
    // console.log(diemHoa)
    document.getElementById('tbKhoi1').innerHTML = calcArgs(diemToan,diemLy,diemHoa)
    // console.log(calcArgs(diemToan,diemLy,diemHoa))
})
//Tính điểm trung bình khối 2
document.getElementById('btnKhoi2').addEventListener('click',function(){
    let diemVan = document.getElementById('inpVan').value ;
    let diemSu = document.getElementById('inpSu').value ;
    let diemDia = document.getElementById('inpDia').value ;
    let diemEnglish = document.getElementById('inpEnglish').value;
    // console.log(diemHoa)
    document.getElementById('tbKhoi2').innerHTML = calcArgs(diemVan,diemSu,diemDia,diemEnglish)
    // console.log(calcArgs(diemToan,diemLy,diemHoa))
})