/*
 The exercise:
 the exercise consider a List object.
 這測驗考慮一個list 物件
 List is defined as a set of utility function that apply to a list object.
 List 是定義 像一個 實用的 function 組合，可顯示成一組 list 物件

 List object is defined as :
 {
   value : a value for this object
   next: another list object or List.Nil(指定下一個物件是誰)
 }
 List.Nil represents(相當) the end of a List. or an empty List.

 for instance:
 {
   value : 1,
   next : {
     value : 2,
     next : List.Nil
   }
 }
  this show a list of value 1 -> 2

  The exercise has 2 parts :

  A) implement the reverse function
     執行反向 function
  B) implement the map function
     執行配對 function

  // NO ARRAY FUNCTION, NO OUTSIDE JS FUNCTION
  // ONLY ALLOWED FUNCTION IS
  // - function xxx(){} you define inside the function 自己定義的func
  // - this.reverse || this.map only the self function 自己叫自己
  // - console.log(this.toString()) for DEBUGGING      console()
*/


// 建立一個 list
var List = {
  Nil: {},
  fromArray: function(list, arr) {
    if (arr.length === 0) return list;
    else return this.fromArray(
      this.prepend(list, arr.pop()),
      arr);
  },
  toArray: function(list) {
    if (!list.value) return [];
    //
    var ar = this.toArray(list.next);
    ar.unshift(list.value);
    return ar;
  },
  prepend: function(list, elem) {
    return {
      value: elem,
      next: list ? list : List.Nil
    };
  },
  toString: function(list) {
    if (list == List.Nil) return "Nil";
    else return list.value + " -> " + this.toString(list.next);
  },


  /*
  # 1.Reverse function: 取得一個list 並反轉內容順序
  Reverse function take a list and reverse its elements.
  For instance:
  reverse(1->2->3->Nil) = 3->2->1->Nil
  (same as javascript reverse)
  */

  reverse: function(list) {
    // NEED TO IMPLEMENT THIS
    // NO FOR LOOP NO ARRAY FUNCTION, NO OUTSIDE JS FUNCTION

    //console.log(["first is",list.value]);
    //console.log(["nexts are ",List.toString(list.next)]);

    if (list == List.Nil) return "Nil";
    else return "ee";
    //     return reverse(list);
  },
  /*
  # 2.map function 如同 javascript array map 但這是給一個 list
  map function is the same as javascript array map but for the list
(https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  for instance: map([1,2,3],function(x){return x+1;}) = [2,3,4]
  */
  map: function(list, functor) {
    // NEED TO IMPLEMENT THIS
    // NO ARRAY FUNCTION, NO OUTSIDE JS FUNCTION

    // console.log(list);
    // USE functor
    // USE List.prepend(list , value)
    // console.log([list.value,list.next]);
    //if(list == List.Nil)return List.Nil;
    // 否則回傳自己的值 + -> + map(下一個list, 做什麼事)
    //else return list.value + " -> " + this.map (list.next,functor);
    //
    /*
     prepend:function(list,elem){
         return {
           value : elem,
           next: list?list:List.Nil
         };
      },
    */
    /*
        if(list == List.Nil)return List.Nil;
        else return list.value + " -> " + this.map (list.next,functor);
        */
    // this.map (prepend(list,elem));
    //      console.log(prepend(list,elem));
    // return List.Nil ;

    return list;
  },


  filter: function(list, functor) {
    var match /*true or false */ = functor(list.value);
    //IF YOU WANT YOU CAN ALSO DO FILTER FUNCTION ;)
    //NOT REQUIRED
  }
};


//Test suite : 測試包

//utility array equals 功能等與陣列
Array.prototype.equals = function(array) {
  // 如果其他陣列是false？回傳false
  // if the other array is a falsy value, return
  if (!array)
    return false;
  // 比較長度 - 暢度不等於陣列長 也回傳false
  // compare lengths - can save a lot of time
  if (this.length != array.length)
    return false;

  for (var i = 0, l = this.length; i < l; i++) {

    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse 遞歸 into the nested arrays
      if (!this[i].equals(array[i]))
        return false;
    } else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};


// testOn
function testOn(array) {
  var l1 = List.fromArray(List.Nil, array.slice());
  console.log(["test on ", List.toArray(l1), List.toString(l1)]);
  //Test 1
  var lreverse = List.reverse(l1);
  var areverse = array.slice().reverse();
  console.log(["list reversed ", areverse, List.toString(lreverse)]);
  //Test 2
  var testf = function(x) {
    return x + 1;
  };
  var lmap = List.map(l1, testf);
  var amap = array.slice().map(testf);
  console.log(["list mapped ", amap, List.toString(lmap)]);
  return List.toArray(lreverse).equals(areverse) && List.toArray(lmap).equals(
    amap);
}

var t1 = testOn([1, 2, 3, 887]);

// var t2 = testOn(["one","two","three"]);
// var t3 = testOn([1,2,3]);
// var t4 = testOn([]);
// console.log(["success = ",
//         t1 && t2 && t3 && t4]);
