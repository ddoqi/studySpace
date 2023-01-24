import React from "react";
import { useState } from "react";

const countAVE = (companyData: any, category: string): number => {
  let commuteAve: number = 0;
  companyData?.map((item: any) => {
    const aveArray: number[] = [];
    console.log("item[category]:", item[category]);
    aveArray.push(item[category]);
    console.log("나도 길이가 2여야댕..", aveArray.length);
    let commuteTotalResult: number = aveArray.reduce(
      (total: number, value: number) => (total += value),
      0
    );
    console.log("commuteTotalResult는 commute의 총합", commuteTotalResult);
    commuteAve = commuteTotalResult / aveArray.length;
    console.log("난 평균값이야", commuteAve);
  });
  return commuteAve;
};

export default countAVE;
