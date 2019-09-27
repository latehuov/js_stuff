var floats = []
var floats2 = []
for (let i = 0.1; i < 10.1; i = i + 0.1)
{
    floats.push ((i - 0.1).toFixed(1))
    floats2.push(i- 0.1)
}
for (let a = 0; a < floats.length; a ++)
{
    console.log(floats[a])
    console.log(floats2[a])
}
