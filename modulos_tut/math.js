const pi = 3.141553;

function sum(x, y){
    return x + y;
}

function substraction(x, y){
    return x - y;
}

function circleArea(r){
    return pi*r*r;
}

module.exports = {
    sum: sum,
    sub: substraction,
    pi: pi
};