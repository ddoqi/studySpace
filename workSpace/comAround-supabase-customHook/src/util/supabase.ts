import { createClient } from "@supabase/supabase-js";

/// ----------왜 에러나지 (env 파일설정 문제인가)
// const supabaseUrl: any = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey: any = process.env.REACT_APP_SUPABASE_ANON_KEY;
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);
/// ----------왜 에러나지------------------------

export const supabase = createClient(
  "https://kzukqoitfufrkkoqmesl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6dWtxb2l0ZnVmcmtrb3FtZXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzOTA0NzEsImV4cCI6MTk4OTk2NjQ3MX0.4nBZio_fn3xvWdX0cRyI3-hhtByTqP4qB1oYsiB8ly0"
);

//---------혹시모를 주석---------------
// interface Database {
//   public: {
//     Tables: {
//       companyTable: {
//         Row: {};
//         Insert: {};
//         Update: {};
//       };
//     };
//   };
// }
//----------------------------------------
