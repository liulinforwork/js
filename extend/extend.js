/**
 * Created by Administrator on 2017/7/14.
 */
var obj1 = {
    a:1,
    b:{
        b1:2,
        b2:5
    }
}
var obj2 = {
    b:{
        b1:21,
        b4:51
    },
    c:32
}
//
// var obj3 = {
//     d:4
// }

// console.log($.extend(obj1,obj2,obj3));


function myExend() {

    var options,namem,copy;

    var length = arguments.length;
    var target = arguments[0];

    for(var i=0; i<length; i++){
        options = arguments[i];
        if(options != null){

            for(name in options){
                
            }

        }else{

        }
    }
}