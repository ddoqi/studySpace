import { supabase } from "../util/supabase";

export const getTable = (urlReqCompanyName: string) => {
  console.log("실행");
  return supabase
    .from("SurveyData")
    .select()
    .eq("company", `${urlReqCompanyName}`);
};
