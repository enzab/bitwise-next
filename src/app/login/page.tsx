import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/input/text-input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="">
      {/* <header className="absolute top-0 z-50 flex w-full lg:flex">
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
      </header> */}
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
        <div className="flex w-full flex-col lg:max-w-[573px] xl:max-w-[716px] 2xl:max-w-[860px]">
          <div className="flex justify-between py-7 pl-6 pr-14">
            <Image
              src="/svg/logo-1.svg"
              alt="logo"
              width={60}
              height={60}
              className=""
            />
            <div className="flex">
              <nav className="hidden w-full items-center gap-x-6 text-base text-neutral-400 lg:flex">
                <Link className="" href={"/"}>
                  Beranda
                </Link>
                <Link className="" href={"/"}>
                  Tema
                </Link>
                <Link className="" href={"/"}>
                  Harga
                </Link>
                <Link className="" href={"/"}>
                  Tutorial
                </Link>
                <Link className="" href={"/"}>
                  Blog
                </Link>
              </nav>
            </div>
          </div>
          <div className="p-20">
            <h3 className="text-[60px] font-bold text-neutral-900">
              Selamat Datang Kembali
            </h3>
            <p className="text-lg text-neutral-600">
              Nikmati kembali kemudahan membuat undangan digital bersama VOOW
            </p>
            <div className="w-full pt-14">
              <TextInput label={"Email atau No. Hp"} />
              <TextInput label={"Password"} type={"password"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
