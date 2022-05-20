// log All pair of array
const box = ["a","b","c","d"];
//this code i had written by self that was wrong so dont worry just keep learning guys
// const logPair =(item)=>{
//     item.forEach((element,i) => {
//         item.forEach((nElement,j)=>{
//             console.log(item[index],item[index]);
//         })
//     });
// }
// logPair(box)

const logPair =(item)=>{
    item.forEach((element,i) => {
        item.forEach((nElement,j)=>{
            console.log(item[i],item[j]);
        })
    });
}
logPair(box)
