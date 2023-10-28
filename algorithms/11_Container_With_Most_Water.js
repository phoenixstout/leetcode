var maxArea = function (height) {
  let l = 0
  let r = height.length-1
  let maxArea = (height.length-1)*(Math.min(height[l], height[r]))
  while (l<r){
    let smaller = Math.min(height[l], height[r])
    let area = smaller * (r-l);
    if(area>maxArea) maxArea = area
    smaller === height[l] ? (l+= 1) : (r -=1);
  }
  return maxArea;
};

maxArea([1,8,6,2,5,4,8,3,7]);