var findMedianSortedArrays = function (nums1, nums2) {
    let [A, B] = [nums1, nums2]
    if(A.length>B.length) [A,B] = [B,A]
    let total = A.length + B.length
    let half = Math.floor(total/2)

    let [l,r] = [0, A.length-1]

    while(true) {
        let i = Math.floor((l+r)/2)
        let j = half - i - 2

        Aleft = i>=0? A[i] : Number.MIN_SAFE_INTEGER
        Aright = i+1<A.length? A[i+1] : Number.MAX_SAFE_INTEGER
        Bleft = j>=0? B[j] : Number.MIN_SAFE_INTEGER
        Bright = j+1<B.length? B[j+1] : Number.MAX_SAFE_INTEGER

        if(Aleft<=Bright && Bleft<=Aright) {
            if(total%2) { // odd
                return(Math.min(Aright, Bright))
            }
            return ( // even
                (Math.max(Aleft, Bleft) + Math.min(Aright, Bright))/2
            )
        }
        else if(Aleft>Bright) {
            r = i-1
        }
        else l=i+1
    }

}

findMedianSortedArrays([1,2,3,4], [3,4,5,6,7])
