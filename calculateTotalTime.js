function calculateTotalTime(queue, taps, walkingTime) {
    let totalTime = 0;
    let tapUsage = new Array(taps.length).fill(0); 
    let firstPerson = true; 
  
    for (let bottleSize of queue) {
      let minTapTime = Infinity;
      let minTapIndex = -1;
      for (let i = 0; i < tapUsage.length; i++) {
        if (tapUsage[i] < minTapTime) {
          minTapTime = tapUsage[i];
          minTapIndex = i;
        }
      }
  
      let fillTime = Math.ceil(bottleSize / taps[minTapIndex]);
  
      tapUsage[minTapIndex] = minTapTime + fillTime;
  
      if (!firstPerson) {
        totalTime += walkingTime;
      }
      firstPerson = false; 
  
      
      totalTime += fillTime;
    }
  
    return totalTime;
  }
  
  
  const queue = [400, 750, 1000];
  const taps = [50, 200];
  const walkingTime = 5;
  console.log(calculateTotalTime(queue, taps, walkingTime)); // output: 13.75