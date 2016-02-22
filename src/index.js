var assets = require.context('./assets',false ,/^\.\//);

console.log(assets('./a.png'));
console.log(assets('./b.png'));
console.log(assets('./c.png'));
