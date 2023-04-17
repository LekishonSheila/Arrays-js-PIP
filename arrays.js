// .push Adds an element to the end of an array
let names = ["sheila","faith","gift"];
names.push("Leyian");
console.log(names)
// .unshift adds an element to the beginning of an array
let countries = ["Kenya","Uganda","Tanzania"];
countries.unshift("United states of America");
console.log(countries)

// adding elements in an array
let towns = ["Kilgories","Kisii"];
towns[2] = 'Nyamira';
console.log(towns)
// adding to the third index for the second index to be undefined
let town = ["Nairobi","Nakuru"];
town[3] = 'Kisumu';
console.log(town)
// .pop removes the last element from an array
let dailyActivities = ["eat","read","sleep"];
dailyActivities.pop();
console.log(dailyActivities);
// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56
let arr1 = [3,7,34,90,12];

let otherArray = arr1.slice(0,5);
console.log(otherArray.length-1);

let arr2 = [true,"green","where",12,56];
console.log(arr2.lastIndexOf(arr2))



function binary(num,target){
let left = 0;
let right = num.length-1;
let middle = Math.floor(left+right/2);
while (left<=right){
    if (middle==target){
        return middle
    }
    else if ({middle}<target){
        left = middle+1
    
    } 
   else {
    right = middle-1
    
}
}
return null
}

let num = [3,4,6,10,26,56];
let target = 26;
console.log(binary(num,target))




