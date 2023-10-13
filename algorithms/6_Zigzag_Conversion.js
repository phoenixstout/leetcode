var convert = function(s, numRows) {
    if(numRows === 1) return s
    let step = 2*numRows-2
    let output = ''
    
    for(let i=0; i<numRows; i++) {
        for(let j = i; j<s.length; j+=step) {
            output+= s[j]
            s[j]
            if(i!=0 && i!=numRows-1) {
                s[j+step-2*i]
                output+= s[j+step-2*i] ? s[j+step-2*i] : ''
            }
        }
    }
    return output
};

convert('paypalishiring', 3)