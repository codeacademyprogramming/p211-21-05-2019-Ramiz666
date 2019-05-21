// function IsEven(n)
// {
//     if(n % 2 == 0)
//     {
//         console.log(n + " is even");
//     }
//     else
//     {
//         console.log(n + " is odd");
//     }
// }

// IsEven(20);
// IsEven(10);
// IsEven(15);
// IsEven(23);
// IsEven(42);

// function Add(n1 ,n2)
// {
//     return n1 + n2;
// }

// let result = Add(10, 30);
// let result2 = Add(100, 1900);

//5 ^ 6 = 5 * 5 * 5 * 5 * 5 * 5
// function FindPower(powerSub, powerSup) {
//   let counter = 1;
//   let result = 1;
//   while (counter <= powerSup) {
//     result *= powerSub;
//     counter++;
//   }

//   return result;
// }

// function FindPowerFor(powerSub, powerSup) {
//   let result = 1;
//   for (let i = 1; i <= powerSup; i++) {
//     result *= powerSub;
//   }

//   return result;
// }

// console.log(FindPowerFor(6, 10, 20, 34));
// console.log(FindPowerFor(5, 2));

// let firstDiv = document.getElementById("main_first");

// while(firstDiv.nextElementSibling != null)
// {
//     console.log("Next element has");
//     firstDiv = firstDiv.nextElementSibling;
// }

// function Calculate(n1, n2, operation)
// {
//     if(operation === "+")
//     {
//         return n1 + n2;
//     }
//     else if(operation === "-")
//     {
//         return n1 - n2;
//     }
//     else if(operation === "*")
//     {
//         return n1 * n2;
//     }
//     else if(operation === "/")
//     {
//         return n1 / n2;
//     }
//     else{
//         return null;
//     }
// }

// console.log(Calculate(10, 15, "sdfsd"));
// console.log(Calculate(10, 15, "+"));
// console.log(Calculate(10, 15, "-"));
// console.log(Calculate(10, 15, "*"));
// console.log(Calculate(10, 15, "/"));

function EvenWriter(number) {
  let i = 1;
  while (i <= number) {
    if (i % 2 === 0) {
      console.log(i);
    }

    i++;
  }

  // for(let i = 1; i <= number; i++)
  // {
  //     if(i % 2 === 0)
  //     {
  //         console.log(i);
  //     }
  // }
}

EvenWriter(25);
EvenWriter(55);
