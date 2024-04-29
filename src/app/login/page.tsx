import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="">
      <header className="absolute top-0 z-50 flex w-full lg:flex">
        <div className="flex w-full flex-1 bg-yellow-100 ">
          <p>atas kosong</p>
        </div>
        <div className="flex w-full justify-between bg-green-300 py-4 lg:max-w-[573px] xl:max-w-[716px] 2xl:max-w-[860px]">
          <Image
            src="/svg/logo-1.svg"
            alt="logo"
            width={75}
            height={75}
            className="pl-6"
          />
          <div className="flex ">
            <nav className="hidden w-full items-center gap-x-6 lg:flex">
              <Link className="text-base text-neutral-400" href={"/"}>
                Beranda
              </Link>
              <Link className="text-base text-neutral-400" href={"/"}>
                Tema
              </Link>
              <Link className="text-base text-neutral-400" href={"/"}>
                Harga
              </Link>
              <Link className="text-base text-neutral-400" href={"/"}>
                Tutorial
              </Link>
              <Link className="text-base text-neutral-400" href={"/"}>
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <section className="flex min-h-screen flex-col lg:flex-row">
        <div className="flex w-full flex-1 items-center justify-center bg-gradient-to-r from-[#00C1FF] to-[#0061FF] p-20">
          <div className="rounded-3xl bg-[#F9FAFB]/10 p-20">
            <h1 className="text-[60px] font-bold text-neutral-50">
              Kami <br></br> Merindukan Anda
            </h1>
            <p className="text-lg text-blue-50">
              Kami senang Anda kembali dan merindukan kehadiran Anda di sini.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center bg-red-500 lg:max-w-[573px] xl:max-w-[716px] 2xl:max-w-[860px]">
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

      {/* <header className="absolute top-0  z-50 flex h-20 w-full">
        <div className="w-[50%] bg-yellow-400">
          <p>atas</p>
        </div>
        <div className="flex w-[50%] justify-between">
          <Image src="logo.svg" alt="logo" width={150} height={100} />
          <div className="flex gap-x-6">
            <nav className="hidden items-center gap-x-6 md:flex">
              <Link href={"/"}>Beranda</Link>
              <Link href={"/"}>Tema</Link>
              <Link href={"/"}>Harga</Link>
              <Link href={"/"}>Tutorial</Link>
              <Link href={"/"}>Blog</Link>
            </nav>
            <Button variant={"default"}>Login</Button>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="flex min-h-screen w-full max-w-[650px] flex-col lg:flex lg:flex-row">
          <div className="order-1 flex w-[50%] flex-col items-center justify-center bg-slate-500 pb-48 lg:order-2">
            <p className="bg-green-900 text-red-900">aa</p>
            <p className="bg-green-900 text-red-900">aa</p>
          </div>
          <div className="order-2 w-[50%] bg-gradient-to-r from-[#00C1FF] to-[#0061FF] lg:order-1">
            b
          </div>
        </div>
      </section> */}
    </main>
  );
}
