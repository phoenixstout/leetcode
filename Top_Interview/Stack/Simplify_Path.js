const simplifyPath = (path) => {
    const res = [];
    const arr = path.split('/').filter(v => v);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '..') {
            res.pop();
        } else if (arr[i] === '.') {
            continue;
        } else {
            res.push(arr[i])
        }
    }

    return '/' + res.join('/');
};

simplifyPath("/a//b////c/d//././/..");
