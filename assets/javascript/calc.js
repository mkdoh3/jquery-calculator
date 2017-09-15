
 $(document).ready(function () {

     var num1 = "";
     var nums = [];
     //operator initiated with placeholder so that an operator click is ignored if it comes before a number click
     var operator = "#";
     var results = "";


     $(".number").on("click", function () {
         var press = $(this).attr("value");
        //grab html value, make operator a valid btn
         operator = "";
         num1 += press;
         //update num1 in html
         $("#result").html(num1);
     });




     $(".operator").on("click", function () {
         if (num1) {
             //store first number in an array once an operator is clicked
             nums.push(num1);
         }
         //grab operator value, push it to nums array and update html. reset num1 for next input
         //if (!operator) also prevents sequential operator presses
         if (!operator) { 
             operator = $(this).attr("value");
             nums.push(operator);
             $("#result").html(operator);
             num1 = "";
         }
     });


     //push last num1 and eval the string in nums array
     $(".equal").on("click", function () {
         nums.push(num1);
         //setting operator as empty allows for operator on the stored results
         operator = "";
         num1 = "";

         //eval doesnt work with '^' so we grab the values on either side of a "^" index, eval them with math.pow,
         //then remove those 3 indexes from the array and reinsert the math.pow return (num2)
         for (; nums.indexOf("^") > -1;) {
             var num2 = Math.pow(nums[nums.indexOf("^") - 1], nums[nums.indexOf("^") + 1]);
             var index = nums.indexOf("^");
             nums.splice((nums.indexOf("^") - 1), 3);
             nums.splice((index - 1), 0, num2);
         }

         //join the array and eval, reset the array and then push result so it can still be operated on until clear is clicked
         //update html
         results = eval(nums.join(""));
         nums = [];
         nums.push(results.toString());
         $("#result").html(results);
     });


     //reset everything
     $(".clear").on("click", function () {
         num1 = "";
         nums = [];
         operator = "#";
         results = "";
         $("#result").html("");
     });

 });
