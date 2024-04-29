
function rvbToGrey(t) {
    let n = t.length;

    for (let i=0; i<n; i++) {
        for (let j=0; j<t[i].length; j++) {
            let a = t[i][j][0];
            let b = t[i][j][1];
            let c = t[i][j][2];

            let moy = Math.round((a + b + c) / 3);

            t[i][j][0] = moy;
            t[i][j][1] = moy;
            t[i][j][2] = moy;
        }
    }

    return t;
}

console.log(rvbToGrey([
    [[123, 231, 12], [56, 43, 124]],[[78, 152, 76], [64, 132, 200]]]));