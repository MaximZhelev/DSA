const merge = (arr: number[], left: number, mid: number, right: number) => {
    const leftArr = arr.slice(left, mid + 1); //copy of left half
    const rightArr = arr.slice(mid + 1, right + 1);
    let i = 0; // starting index of leftArr
    let j = 0; // starting index of rightArr
    let k = left; // starting index of merged subarray (i.e. arr[left:right+1])
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] < rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }
    // if not all elements of leftArr have been traversed, copy the remaining elements
    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }
      // else if not all elements of rightArr have been traversed, copy remaining elements
      while (j < rightArr.length) {
          arr[k] = rightArr[j]
          j++
          k++
        }
  };