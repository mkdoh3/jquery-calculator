 ///pretty close, but some of the logic is out of order as far as when to clear certian variables. 
 ////also needs a way to handle the case in which and operator is clicked twice in a row or an operator is clicked before a number
 ///

 $(document).ready(function () {

     var num1 = "";
     var nums = [];
     var operator = "#";
     var results = "";


     $(".number").on("click", function () {
         var press = $(this).attr("value");
         operator = "";
         num1 += press;
         $("#result").html(num1);
     });




     $(".operator").on("click", function () {
         if (num1) {
             nums.push(num1);
         }

         //need to clean this logic up


         if (!operator) {
             operator = $(this).attr("value");
             nums.push(operator);
             $("#result").html(operator);
             num1 = "";
         }
     });



     $(".equal").on("click", function () {
         nums.push(num1);
         operator = "";
         num1 = "";

         for (; nums.indexOf("^") > -1;) {
             var num2 = Math.pow(nums[nums.indexOf("^") - 1], nums[nums.indexOf("^") + 1]);
             var index = nums.indexOf("^");
             nums.splice((nums.indexOf("^") - 1), 3);
             nums.splice((index - 1), 0, num2);
         }


         results = eval(nums.join(""));
         nums = [];
         nums.push(results.toString());
         $("#result").html(results);
     });



     $(".clear").on("click", function () {
         num1 = "";
         nums = [];
         operator = "#";
         results = "";
         $("#result").html("");
     });

 });
