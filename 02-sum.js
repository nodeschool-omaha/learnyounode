var sum = 0;
process.argv.forEach(function(arg, index) {
  if (index < 2)
    return;

  sum += Number(arg);
});
console.log(sum);
