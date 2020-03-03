// common
function isInt(n) {
    return n % 1 === 0;
}

function parseDateString(dateString) {
    return ({
        day: dateString.split("/")[0],
        month: dateString.split("/")[1],
        year: dateString.split("/")[2]
    })
}

function compareDate(date1, date2) {
    if (date1.year > date2.year) return true
    else if (date1.year === date2.year) {
        
        if (date1.month > date2.month) return true    
        else if (date1.month === date2.month) {
            
            if (date1.day > date2.day) return true
        }

    }

    return false
}

/* bai 1
 * @param {Number} n integer
 */
function isPrimeNummber(n) {

    if (typeof n === "number" && isInt(n)) {

        for (let i = 2; i < n; i++)
            if (n % i === 0) return false

        return n > 1
    } else return false
}
/* test */
// console.log(isPrimeNummber(97))
// console.log(isPrimeNummber(96))

/* bai 2
 * @param {Number} n 
 */
function reverseNumber(n) {

    if (typeof n === "number")
        return n.toString().split('').reverse().join('');

    else return "parameter not is number!"
}
/* test */
// console.log(reverseNumber(12346678))

/* bai 6
 * @param {String} str
 */
function getAllIndexChar(str, char) {

    if (typeof str === "string" && typeof char === "string") {

        let count = 0
        str.split("").map(w => {
            if (w == char)++count
        })

        return count

    } return "parameter not is string!"

}
/* test */
//console.log(getAllIndexChar("aadsa", "a"))

/* bai 4
 * @param {Array} arr [nummber]
 */
function incrementArrBy1(arr) {

    if (typeof arr === "object") {
        return arr.map(num => (num+1) )

    } return "parameter not is array!"
}
/* test */
// console.log(incrementArrBy1([1,2,3,4,5]))

/* bai 5
 * @param {Array} arr [Object]
 */
function convertObjectKey(arr) {

    if (typeof arr === "object" && arr[0] !== undefined) {        
        return arr.map(obj => ({
                "id": obj.pk,
                "ten": obj.lastname,
                "sodienthoai": obj.phone
            }))

    } return "parameter not is array!"
}
/* test */
// console.log(convertObjectKey([
//     {pk: 1, lastname: "abc", phone: "3213123123"},
//     {pk: 2, lastname: "bac", phone: "3213123123"},
//     {pk: 3, lastname: "cab", phone: "3213123123"}
// ]))

/* bai 3
 *  @param {String} str 
 */
function getAllIndexCharOfString(str) {
    
    if (typeof str === "string") {
        
        let result = {}
        
        str.split("")
            .map(char => {
                result[`${char}`] = getAllIndexChar(str,char)
            })
        
        return result  
    } else return "parameter not is string!"
}
/* test */
//console.log(getAllIndexCharOfString("aaaaabcac"))

/* bai 9
 * @param {Array} dateArr [dd/mm/yyyy]
 */
function getBiggestDate(dateArr) {

    if (typeof dateArr === "object" && dateArr[0] !== undefined) {
        
        let biggestDate = parseDateString("0/0/0")

        dateArr.map(dateString => {
    
            let date = parseDateString(dateString)
    
            if (compareDate(date, biggestDate)) {
                biggestDate = date 
            } 
    
        })
    
        return biggestDate
    } return "parameter not is array!"
}
/* test */
//console.log(getBiggestDate(["1/2/2020", "3/1/1098", "1/2/2019", "2/2/2020"]))

/* bai 10
 * @param {String} date "dd/mm/yyy" 
 */
function isSunday (dateString) {

    if (typeof dateString === "string") {

        let date = parseDateString(dateString)
        return (new Date(date.year, date.month-1, date.day).getDay() === 0) // months are indexed from 0.

    } else return "parameter not is string!"
}
/* test */
//console.log(isSunday("8/3/2020"))

/* bai 8
 *  @param {String} str
 */
function combinationsString(str) {

    if (typeof str === "string") {

        let letters = str.split("")
        let combi = [];
        let temp= "";
        let letLen = Math.pow(2, letters.length);
        
        for (let i = 0; i < letLen ; i++){
            temp= "";
            for (let j=0;j<letters.length;j++) {
                if ((i & Math.pow(2,j))){ 
                    temp += letters[j]
                }
            }
            if (temp !== "") {
                combi.push(temp);
            }
        }
        
        return combi.join("\n")

    } else return "parameter not is string!"
}
/* test */
//console.log(combinationsString("quang"))
