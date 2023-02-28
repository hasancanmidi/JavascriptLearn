function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height,2);     //üssünü alır.
    return Math.round(bmi);   //En yakın sayıya yuvarlar.
}
