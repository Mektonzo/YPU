function con(a1,a2){
    const res = []
    const arr = a1.concat(a2)
    for (let i = 0; i < arr.length; i++) {
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    console.log(res)
}

con([123,1],[1,2])