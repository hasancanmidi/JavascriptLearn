const newFunc = () => {
    let arr = ['1','2','3','4','5','1','2','3','4','5']
    for(let  i = 0; i < arr.length; i++){
        if( i === 5){
            break; //continue eklesen devam eder
        }
        console.log(i)
    }
}
newFunc()