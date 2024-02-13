// 1.Print odd numbers in an array
Code:

var a = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            console.log(array[i])
        }
    }
}
a([1, 2, 3, 4, 5, 6, 7, 8, 9])




// 2. Convert all the strings to title caps in a string array
Code:

var a = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    console.log(str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() +
            txt.substr(1).toLowerCase();
    }))
}
a('hello world')




// 3.Sum of all numbers in an array
Code:

var a = (array) => {
    let sum = 0;
    for (element in array) {
        sum += array[element]
    }
    console.log(sum)
}
a([20, 30, 40, 50, 60, 70, 80])




// 4. Return all the prime numbers in an array
Code:

var a = (array) => {
    var arr = []
    var number = 0
    for (let i = 0; i < array.length; i++) {
        number = array[i]

        function isPrime(n) {
            // Corner case
            if (n <= 1)
                return false;

            // Check from 2 to n-1
            for (let i = 2; i < n; i++)
                if (n % i == 0)
                    return false;

            return true;
        }
        if (isPrime(number) === true) {
            arr.push(number)
        }
    }
    console.log(arr)
}

a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])




// 5. Return all the palindromes in an array
Code:

var a = (arr) => {
    var answer = []
    var string = ""
    for (item in arr) {
        string = arr[item]

        function isPalindrome(str) {
            str = str.toLowerCase()
            if (str.length % 2 === 0) {
                length = Math.round(str.length / 2)
                let halfstring = ""
                for (let i = 0; i < length; i++) {
                    halfstring += str.charAt(i)
                }

                let remainingstring = ""
                for (let i = length; i < str.length; i++) {
                    remainingstring += str.charAt(i)
                }

                reverse = remainingstring.split("").reverse().join("")

                if (halfstring === reverse) {
                    return true
                }
                else {
                    return false
                }

            }
            else {
                length = Math.round(str.length / 2)
                let halfstring = ""
                for (let i = 0; i < length; i++) {
                    halfstring += str.charAt(i)
                }

                let remainingstring = ""
                for (let i = length - 1; i < str.length; i++) {
                    remainingstring += str.charAt(i)
                }

                reverse = remainingstring.split("").reverse().join("")

                if (halfstring === reverse) {
                    return true
                }
                else {
                    return false
                }
            }
        }

        if (isPalindrome(string) === true) {
            answer.push(string.toLowerCase())
        }
    }
    console.log(answer)
}
a(["redivider", "deified", "civic", "RADAR", "LeVel", "music", "stars", "idea", "football", "mobile"])
