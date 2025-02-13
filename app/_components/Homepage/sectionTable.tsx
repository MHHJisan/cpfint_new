import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export function SectionTable() {
  return (
    <div className="flex w-full min-h-screen justify-center items-start bg-[#f8f8f8] py-10 px-4">
      <div className="w-full max-w-[1140px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center bg-[#1e3c74] text-white border border-[#1e3c74] py-5 font-semibold">
                অঞ্চল
              </TableHead>
              <TableHead className="text-center bg-[#1e3c74] text-white border border-[#1e3c74] py-5 font-semibold">
                জেলা
              </TableHead>
              <TableHead className="text-center bg-[#1e3c74] text-white border border-[#1e3c74] py-5 font-semibold">
                পরিমাণ
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center border py-5">চরএলাহী</TableCell>
              <TableCell className="text-center border py-5">
                নোয়াখালী
              </TableCell>
              <TableCell className="text-center border py-5">
                ১৮০ প্যাকেট
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#f2f2f2]">
              <TableCell className="text-center border py-5">কবিরহাট</TableCell>
              <TableCell className="text-center border py-5">
                নোয়াখালী
              </TableCell>
              <TableCell className="text-center border py-5">
                ৩০০ প্যাকেট
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center border py-5">
                সোনাগাজী
              </TableCell>
              <TableCell className="text-center border py-5">ফেনী</TableCell>
              <TableCell className="text-center border py-5">
                ৩০০ প্যাকেট
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#f2f2f2]">
              <TableCell className="text-center border py-5">রামপুর</TableCell>
              <TableCell className="text-center border py-5">
                নোয়াখালী
              </TableCell>
              <TableCell className="text-center border py-5">
                ১৬০ প্যাকেট
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center border py-5">
                চরহাজারী
              </TableCell>
              <TableCell className="text-center border py-5">
                নোয়াখালী
              </TableCell>
              <TableCell className="text-center border py-5">
                ১৪০ প্যাকেট
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#f2f2f2]">
              <TableCell className="text-center border py-5">সেনবাগ</TableCell>
              <TableCell className="text-center border py-5">
                নোয়াখালী
              </TableCell>
              <TableCell className="text-center border py-5">
                ১৫০ প্যাকেট
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center border py-5">
                বেগমগন্জ
              </TableCell>
              <TableCell className="text-center border py-5">
                নোয়াখালী
              </TableCell>
              <TableCell className="text-center border py-5">
                ১৫০ প্যাকেট
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#f2f2f2]">
              <TableCell className="text-center border py-5">
                নোয়াখালী
              </TableCell>
              <TableCell className="text-center border py-5">
                নোয়াখালী
              </TableCell>
              <TableCell className="text-center border py-5">
                ৩০২ প্যাকেট
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center border py-5">
                লক্ষ্মীপুর
              </TableCell>
              <TableCell className="text-center border py-5">
                লক্ষ্মীপুর
              </TableCell>
              <TableCell className="text-center border py-5">
                ২৯০ প্যাকেট
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#f2f2f2]">
              <TableCell className="text-center border py-5">ফেনী</TableCell>
              <TableCell className="text-center border py-5">ফেনী</TableCell>
              <TableCell className="text-center border py-5">
                ২২৮ প্যাকেট
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center border py-5">মোটঃ</TableCell>
              <TableCell className="text-center border py-5"></TableCell>
              <TableCell className="text-center border py-5">
                ২২০০ প্যাকেট
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
