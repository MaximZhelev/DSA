const binarySearch = (arr: number[],target: number) =>{
    let left =0;
    let right=arr.length-1;
    let mid
    while (left<=right) {
        mid=Math.floor((left+right)/2)
        if(arr[mid] > target){
            right = mid-1
        }else if(arr[mid]<target){
            left = mid+1
        }else{
            return mid
        }
    }
    return -1
}

