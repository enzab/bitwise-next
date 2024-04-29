import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="">
      <section className="min-h-screen lg:flex">
        <div className="flex w-full flex-1 items-center justify-center bg-gradient-to-r from-[#00C1FF] to-[#0061FF] lg:px-10">
          <div className="rounded-3xl bg-[#F9FAFB]/10 p-20">
            <h1 className="text-[60px] font-bold text-neutral-50">
              Kami <br></br> Merindukan Anda
            </h1>
            <p className="text-lg text-blue-50">
              Kami senang Anda kembali dan merindukan kehadiran Anda di sini.
            </p>
          </div>
        </div>
        <div className="w-full bg-red-500 lg:max-w-[573px] xl:max-w-[716px] 2xl:max-w-[860px]">
          <div className="rounded-3xl bg-[#F9FAFB]/10 p-20">
            <h1 className="text-[60px] font-bold text-neutral-50">
              Kami <br></br> Merindukan Anda
            </h1>
            <p className="text-lg text-blue-50">
              Kami senang Anda kembali dan merindukan kehadiran Anda di sini.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
