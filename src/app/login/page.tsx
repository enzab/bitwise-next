import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/input/text-input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="">
      <section className="flex min-h-screen flex-col lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-4 bg-gradient-to-r from-[#00C1FF] to-[#0061FF] p-4">
          <div className="flex w-full justify-between bg-transparent px-6 lg:hidden">
            <Image
              src="/svg/logo-mobile.svg"
              alt="logo"
              width={24}
              height={24}
              className=""
            />
            <Button variant={"white"}>% Promo</Button>
          </div>
          <div className="rounded-3xl bg-[#F9FAFB]/10 px-5 py-10 lg:px-10 lg:py-20">
            <h1 className="text-2xl font-bold text-neutral-50 lg:text-6xl">
              Kami <br></br> Merindukan Anda
            </h1>
            <p className="text-sm text-blue-50 lg:text-lg">
              Kami senang Anda kembali dan merindukan kehadiran Anda di sini.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col lg:max-w-[573px] xl:max-w-[716px] 2xl:max-w-[860px]">
          <div className="hidden justify-between py-7 pl-6 pr-14 lg:flex">
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
          <div className="space-y-10 px-10 py-16">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-neutral-900 lg:text-6xl">
                Selamat Datang Kembali
              </h3>
              <p className="text-sm text-neutral-600 lg:text-lg">
                Nikmati kembali kemudahan membuat undangan digital bersama VOOW
              </p>
            </div>
            <div className="w-full space-y-4">
              <TextInput label={"Email atau No. Hp"} />
              <TextInput label={"Password"} type={"password"} />
              <Button className="w-full" size={"lg"} variant={"default"}>
                Masuk
              </Button>
            </div>
            <div className="">
              <div className="relative flex items-center py-5">
                <div className="flex-grow border-t border-neutral-100"></div>
                <span className="mx-4 flex-shrink text-neutral-400">
                  Atau login dengan
                </span>
                <div className="flex-grow border-t border-neutral-100"></div>
              </div>
              <div className="flex justify-center gap-x-2">
                <Image
                  src={"/svg/facebook.svg"}
                  alt="facebook"
                  height={48}
                  width={48}
                />
                <Image
                  src={"/svg/google.svg"}
                  alt="google"
                  height={48}
                  width={48}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <p>
                Belum punya akun?{" "}
                <a href="">
                  <b className="text-blue-500">Daftar</b>
                </a>
              </p>
            </div>
            <footer className="bg-red-100">
              <p className="text-center">
                © Copyright 2022. All Rights Reserved.
              </p>
            </footer>
          </div>
        </div>
      </section>
      <div className="sticky bottom-0 lg:hidden">
        <div className="flex h-[70px] w-full items-center justify-between bg-neutral-50 px-5 py-3">
          <div className="flex flex-col justify-center">
            <Image
              className=""
              src={"/svg/beranda.svg"}
              alt="beranda"
              width={48}
              height={48}
            />
            <p className=" text-center text-[10px] text-blue-500">Beranda</p>
          </div>
          <div className="flex flex-col justify-center">
            <Image
              className=""
              src={"/svg/harga.svg"}
              alt="harga"
              width={48}
              height={48}
            />
            <p className="text-center text-[10px] text-neutral-300">Harga</p>
          </div>
          <div className="flex flex-col justify-center">
            <Image
              className=""
              src={"/svg/tema.svg"}
              alt="tema"
              width={48}
              height={48}
            />
            <p className="text-center text-[10px] text-neutral-300">Tema</p>
          </div>
          <div className="flex flex-col justify-center">
            <Image
              className=""
              src={"/svg/tutorial.svg"}
              alt="tutorial"
              width={48}
              height={48}
            />
            <p className="text-center text-[10px] text-neutral-300">Tutorial</p>
          </div>
          <div className="flex flex-col justify-center">
            <Image
              className=""
              src={"/svg/akun.svg"}
              alt="akun"
              width={48}
              height={48}
            />
            <p className="text-center text-[10px] text-neutral-300">Akun</p>
          </div>
        </div>
      </div>
    </main>
  );
}
