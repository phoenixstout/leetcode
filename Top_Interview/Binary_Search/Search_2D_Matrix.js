var searchMatrix = function (matrix, target) {
    let m = matrix.length - 1
    let n = matrix[0].length - 1
    if(target<matrix[0][0] || target > matrix[m][n]) return false

    let mid = Math.floor(m / 2)
    let end = m
    while (mid <= end) {
        if(matrix[mid][0] == target) return true
        if (matrix[mid][0] <= target) {
            if (matrix[mid][n] >= target) { // Start second binary seach
                end = n
                matrix[mid]
                let rowmid = Math.floor(n / 2)
                while (true) {
                    if (matrix[mid][rowmid] < target) {
                        if(rowmid <= n-1 && matrix[mid][rowmid+1]>target) return false
                        // else if(matrix[mid][rowmid]>target) return false
                        rowmid = Math.ceil((rowmid + end) / 2)
                    }
                    else if (matrix[mid][rowmid] > target) {
                        end = rowmid
                        rowmid = Math.floor((rowmid) / 2)
                    }
                    else if (matrix[mid][rowmid] == target) {
                        return true
                    }
                    else return false
                }
                rowmid
            }
            mid = Math.floor((mid + end) / 2)
        }
        else {
            end = mid
            mid = Math.ceil((mid) / 2)
        }

        
    }
};

searchMatrix([[1],[3]], 2)