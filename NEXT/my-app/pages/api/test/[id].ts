// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { config } from "process";

type Data = {
  name: string;
  id: string | string[] | undefined;
};

// 요청경로 : http://localhost:3000/api/test/123
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // 왜 콘솔 안찍형ㅇㅅㅇ?????
  const { query } = req;
  console.log("query", query);
  const { id } = query;
  console.log("id:", id);

  res
    .status(200)
    .json({ name: "나는 api폴더 안의 test폴더 안의 [id].ts양", id });
}
