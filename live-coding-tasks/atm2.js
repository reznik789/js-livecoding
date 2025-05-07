const nominals = [50, 100, 200, 500, 1000, 5000];

function atm(amount, nominals, nominalsLeft) {
  nominals.sort((a, b) => a - b);

  if (amount < nominals[0]) return "Ошибка";
  const [res, left] = nominals.reduceRight(
    ([res, left], curNom, index) => {
      if (left < curNom || nominalsLeft[index] <= 0) return [res, left];
      const canGive = Math.min(Math.floor(left / curNom), nominalsLeft[index]);
      res.push(`N${curNom}*${canGive}`);
      return [res, left - canGive * curNom];
    },
    [[], amount]
  );
  if (left > 0) return "Ошибка: Невозоможно выдать из купюр в банкомате";
  return res;
}

console.log(
  atm(6000, nominals, [10, 10, 10, 10, 10, 0]),
  atm(350, nominals, [10, 10, 10, 10, 10, 0]),
  atm(200, nominals, [10, 10, 10, 10, 10, 0]),
  atm(250, nominals, [10, 0, 0, 0, 0, 0])
);
