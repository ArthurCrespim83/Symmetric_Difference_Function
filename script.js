function diffArray(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    
    return combinedArray.filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  // Example usage:
  const arrayA = ["diamond", "stick", "apple"];
  const arrayB = ["stick", "emerald", "bread"];
  
  const result = diffArray(arrayA, arrayB);
  console.log(result); 
  // Expected output: ["diamond", "apple", "emerald", "bread"]
  
  const arrayC = ["a", "b", "c"];
  const arrayD = ["a", "b", "c"];
  
  const result2 = diffArray(arrayC, arrayD);
  console.log(result2);
  // Expected output: [] (empty array)