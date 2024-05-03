import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/input/text-input";
import {
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ListFilter,
  Search,
  SearchCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="space-y-8 lg:space-y-12">
      <div className="z-50 flex w-screen justify-center">
        <div className="absolute -z-50 flex w-full flex-col gap-3 overflow-hidden opacity-20 lg:-top-[71px] ">
          {/* Block Hero Background Start */}

          <div className="flex gap-3">
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
          </div>
          <div className="flex gap-3">
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
          </div>
          <div className="flex gap-3">
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[160px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[208px] bg-blue-50 lg:h-[142px]"></div>
            <div className="h-[91px] min-w-[184px] bg-blue-50 lg:h-[142px]"></div>
          </div>

          {/* Block Hero Background End */}
        </div>
        <header className="container flex h-20 w-full max-w-[1440px] items-center justify-between">
          <Image
            src="logo.svg"
            alt="logo"
            width={150}
            height={100}
            className="hidden lg:block"
          />
          <Image
            src="/svg/logo-mobile-blue.svg"
            alt="logo"
            width={24}
            height={24}
            className="lg:hidden"
          />
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
        </header>
      </div>

      <section className="container flex h-[310px] w-full max-w-[1440px] flex-col items-center gap-y-4 lg:h-[310px]">
        <div className="flex h-[185px] w-full flex-col items-center gap-y-10 lg:h-[251px] lg:gap-y-10">
          <div className="flex flex-col gap-y-2">
            <h3 className="bg-gradient-to-b from-[#00C1FF] to-[#0061FF] bg-clip-text text-center text-xl text-transparent lg:text-4xl">
              <b>
                Sesuaikan Undangan Anda <br /> dengan Berbagai Pilihan Tema
              </b>
            </h3>
            <p className="text-center text-sm text-neutral-600 lg:text-lg">
              100+ tema dan inspirasi untuk undangan anda
            </p>
          </div>
          <div className="flex h-full max-h-[45px] min-h-[45px] w-[628px] max-w-full justify-center gap-x-2 rounded-xl bg-white px-4 shadow-lg lg:max-h-[64px] lg:px-6">
            <input
              type="text"
              className="w-full text-neutral-500 outline-none"
              placeholder="Cari Tema"
            />
            <button className="text-neutral-500">
              <Search />
            </button>
          </div>
        </div>
        <div className="h-full w-full pt-3 lg:hidden">
          <div className="flex w-full justify-between gap-x-4">
            <Button className="h-11 w-11 rounded-full" variant={"theme"}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex w-full justify-normal gap-x-5 overflow-x-auto">
              <div className="flex min-w-[137px] items-center justify-center rounded-full border-2 border-blue-500">
                <p className="text-center text-base text-blue-500">
                  Semua Tema
                </p>
              </div>
              <div className="flex w-full min-w-[137px] items-center justify-center">
                <p className="text-center text-base text-neutral-700">
                  Wedding & Engagement
                </p>
              </div>
              <div className="flex w-full min-w-[137px] items-center justify-center">
                <p className="text-center text-base text-neutral-700">
                  Kids & Birthday
                </p>
              </div>
              <div className="flex w-full min-w-[137px] items-center justify-center">
                <p className="text-center text-base text-neutral-700">
                  Aqiqah & Tasmiyah
                </p>
              </div>
            </div>
            <Button className="h-11 w-11 rounded-full" variant={"theme"}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-between gap-x-4">
          <Button className="h-11 text-sm" variant={"theme"}>
            Populer &nbsp; <ChevronDown className="h-5 w-5" />
          </Button>
          <div className="hidden w-[846px] justify-between lg:flex">
            <Button className="h-11 w-11 rounded-full" variant={"theme"}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex w-full justify-normal gap-x-5 px-4">
              <div className="flex w-full items-center justify-center rounded-full border-2 border-blue-500">
                <p className="text-center text-base text-blue-500">
                  Semua Tema
                </p>
              </div>
              <div className="flex w-full items-center justify-center">
                <p className="text-center text-base text-neutral-700">
                  Wedding & Engagement
                </p>
              </div>
              <div className="flex w-full items-center justify-center">
                <p className="text-center text-base text-neutral-700">
                  Kids & Birthday
                </p>
              </div>
              <div className="flex w-full items-center justify-center">
                <p className="text-center text-base text-neutral-700">
                  Aqiqah & Tasmiyah
                </p>
              </div>
            </div>
            <Button className="h-11 w-11 rounded-full" variant={"theme"}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <Button className="h-11 text-sm" variant={"theme"}>
            Filter &nbsp; <ListFilter className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="container w-full max-w-[1440px]">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-4">
          {/* Card Start */}

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-1.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-2.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-3.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-4.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-5.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-6.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-7.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-2.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-3.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-4.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-5.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-6.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-7.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-2.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-3.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col overflow-hidden rounded-xl shadow">
            <div className="relative">
              <Image
                className="w-full"
                src={"/img/theme-4.png"}
                alt="theme-1"
                width={302}
                height={302}
              />
              <div className="absolute left-[10px] top-[10px] rounded bg-[#EDE9FE]">
                <p className="px-1 text-[12px] text-[#8B5CF6]">BARU</p>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 p-4">
              <div className="flex flex-col gap-y-1">
                <p className="text-[12px] text-neutral-400">Kategori</p>
                <p className="text-base text-neutral-900">[Judul Tema]</p>
              </div>
              <div className="flex max-h-[20px] items-center rounded-2xl bg-blue-50 p-1">
                <Award className="h-4 w-4 text-blue-500" />
                <p className="text-[12px] text-blue-500">Premium</p>
              </div>
            </div>
          </div>

          {/* Card End */}
        </div>
        <div className="flex h-full w-full justify-center pt-6">
          <Button className="w-full lg:max-w-[208px]" variant={"theme"}>
            <p className="text-base">Tampilkan lebih banyak</p>
          </Button>
        </div>
      </section>

      <section className="container w-full max-w-[1440px]">
        <div className="flex h-full w-full flex-col items-center justify-between gap-x-10 gap-y-16 rounded-3xl bg-gradient-to-br from-[#00C1FF] to-[#006FFD] px-6 py-6 lg:flex lg:h-[426px] lg:flex-row lg:px-36">
          <div className="order-2 w-full min-w-[280px] space-y-2 lg:order-1 lg:w-[532px]">
            <h1 className="text-bold text-2xl text-neutral-50 lg:text-6xl">
              Ingin Design Lain..
            </h1>
            <p className="text-sm text-blue-100 lg:text-lg">
              Tidak menemukan tema yang cocok dengan selera Anda? Tidak perlu
              khawatir, Anda dapat memesan layanan custom tema atau design
              dengan menghubungi kami
            </p>
            <Button variant={"white"}>Hubungi Kami</Button>
          </div>
          <div className="order-1 flex h-[250px] w-full flex-col justify-between lg:order-2 lg:h-[300px] lg:w-[532px]">
            <div className="flex h-[100px] w-full max-w-[300px] justify-start lg:h-[125px] lg:max-w-[329px]">
              <div className="w-full rounded-full rounded-br-none bg-[#40aaff] shadow-2xl lg:h-[125px] lg:max-w-[329px]">
                <div className="flex h-full flex-col justify-center gap-y-3 px-8 py-5">
                  <div className="flex gap-x-3">
                    <Image
                      src={"/img/custom-1.png"}
                      alt="custom-1"
                      height={34}
                      width={34}
                      className="h-[34px] w-[34px]"
                    />
                    <div className="flex flex-col justify-center gap-y-2">
                      <div className="h-1 w-[25px] rounded-full border-2 border-neutral-100 lg:w-[51px]"></div>
                      <div className="flex flex-col gap-y-1">
                        <div className="h-1 w-[47px] rounded-full border-2 border-neutral-300 lg:w-[96px]"></div>
                        <div className="h-1 w-[37px] rounded-full border-2 border-neutral-300 lg:w-[75px]"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[8px] text-neutral-50 lg:text-base">
                    Haloo, saya ingin custom design undangannya. Apakah bisa?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-[100px] justify-end lg:h-[125px] ">
              <div className="w-full max-w-[300px] rounded-full rounded-bl-none bg-[#40aaff] shadow-2xl lg:h-[125px] lg:max-w-[329px]">
                <div className="flex h-full flex-col justify-center gap-y-3 px-8 py-5">
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center gap-3">
                      <p className="text-bold text-[8px] text-blue-50 lg:text-base">
                        VOOW TEAM
                      </p>
                      <Image
                        src={"/svg/logo-custom.svg"}
                        alt="logo-custom"
                        height={34}
                        width={34}
                      />
                    </div>
                    <div className="text-end">
                      <p className="text-[8px] text-neutral-50 lg:text-sm">
                        Tentu saja bisa, kami akan membuat design sesuai
                        preferensimu 😊
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px]-12 container w-full">
        <div className="flex flex-col gap-y-8 lg:flex lg:flex-row lg:justify-between lg:gap-x-10">
          <div className="w-[300px] space-y-2">
            <Image src={"logo.svg"} alt="logo" height={150} width={150} />
            <p className="text-sm text-neutral-500">
              Layanan undangan digital untuk memudahkan anda membuat undangan
              hanya dengan menggunakan smartphone saja.
            </p>
          </div>
          <div className="w-[300px] space-y-2">
            <h6 className="text-xl text-neutral-700">Alamat</h6>
            <p className="text-sm text-neutral-500">
              Cengkareng Business City, Lot 12H Unit 18-19 Jl. Atang Sanjaya RT.
              002/RW.005, Kamal, Kec. Benda, Tangerang, Banten 15125.
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-xl text-neutral-700">Navigasi</h6>
            <ul className="text-sm text-neutral-500">
              <li>Beranda</li>
              <li>Tema</li>
              <li>Harga</li>
              <li>Tutorial</li>
              <li>Artikel</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h6 className="text-xl text-neutral-700">Lainnya</h6>
            <p className="text-sm text-neutral-500">
              Syarat dan Ketentuan Kebijakan dan Privasi
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-xl text-neutral-700">Hubungi Kami</h6>
            <div className="flex gap-x-2">
              <div className="h-12 w-12 rounded-full bg-blue-600/5">
                <Image src={"/svg/ig.svg"} alt="ig" width={48} height={48} />
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-600/5">
                <Image src={"/svg/wa.svg"} alt="ig" width={48} height={48} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px]-12 container w-full">
        <p className="flex justify-center p-4 text-[12px] text-neutral-300">
          © Copyright 2022. All Rights Reserved.
        </p>
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
