const countALL = (companyData: any[], prosType: string): number => {
  const prosTypeArr: number[] = [];

  companyData.forEach((item) => {
    prosTypeArr.push(+item[prosType]);
  });
  let commuteTotalResult: number = prosTypeArr.reduce(
    (total: number, value: number) => (total += value),
    0
  );
  return commuteTotalResult;
};

export default countALL;
