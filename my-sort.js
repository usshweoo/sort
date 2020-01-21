var arr = [11,34,7,9,1,-2,90,-100,3,5,7,10,34,1];
var nextIndex;
var done = false;

const sort = arr => {
    while(!done){
        done = true;
        for(var i = 0; i < arr.length -1 ; i++){
            nextIndex = i + 1;
            //if same number delete it
            if(arr[i] == arr[nextIndex]){
                arr.splice(i,1);
            }
            if(arr[i] > arr[nextIndex]){
                var tmp = arr[nextIndex];
                arr[nextIndex] = arr[i];
                arr[i] = tmp;
                done = false;
            }
        }
    }
    return arr;
}

console.log(sort(arr))