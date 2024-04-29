import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-8 lg:space-y-12">
      <header className="container flex h-20 w-full max-w-[1440px] items-center justify-between">
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
      </header>

      <section className="container flex w-full max-w-[1440px] flex-col items-end gap-x-4 md:flex-row">
        <div className="order-2 w-full space-y-2 md:order-1">
          <h2 className="bg-gradient-to-r from-start via-via to-end bg-clip-text p-1 text-xl font-bold text-transparent md:text-6xl">
            Buat Undangan Digital Lebih Mudah Dengan VOOW
          </h2>
          <p className="text-sm text-neutral-500 md:text-lg">
            Temukan cara modern untuk mengundang teman-teman ke acara anda.
            Buat, sesuaikan, dan bagikan undangan anda secara online untuk
            pengalaman undangan yang praktis dan berkesan
          </p>
          <Button>Coba Sekarang</Button>
        </div>
        <Image
          className="order-1 md:order-2"
          src={"/hero.png"}
          alt="hero"
          width={500}
          height={500}
        />
      </section>

      <section className="container w-full max-w-[1440px]">
        <div className="flex w-full flex-col overflow-hidden rounded-3xl bg-slate-100 md:flex-row">
          <div className="relative flex h-[400px] justify-center overflow-hidden lg:w-[798px] ">
            <div className="absolute -top-[97px] left-0 hidden space-y-2 lg:block">
              <Image
                src={"/img/template-1.png"}
                alt="template-1"
                width={258}
                height={194}
              />
              <Image
                src={"/img/template-2.png"}
                alt="template-1"
                width={258}
                height={194}
              />
              <Image
                src={"/img/template-3.png"}
                alt="template-1"
                width={258}
                height={194}
              />
            </div>
            <div className="space-y-2">
              <Image
                src={"/img/template-4.png"}
                alt="template-1"
                width={258}
                height={194}
              />
              <Image
                src={"/img/template-5.png"}
                alt="template-1"
                width={258}
                height={194}
              />
            </div>
            <div className="absolute -top-[97px] right-0 hidden space-y-2 lg:block">
              <Image
                src={"/img/template-6.png"}
                alt="template-1"
                width={258}
                height={194}
              />
              <Image
                src={"/img/template-7.png"}
                alt="template-1"
                width={258}
                height={194}
              />
              <Image
                src={"/img/template-8.png"}
                alt="template-1"
                width={258}
                height={194}
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-y-2 p-4 md:px-20 ">
            <h3 className="text-xl font-bold text-blue-500 md:text-4xl">
              100+ Pilihan Tema Yang Beragam
            </h3>
            <p className="text-base text-neutral-500 md:text-lg">
              Tidak perlu khawatir dalam mendesain undangan karena kami
              menawarkan berbagai macam pilihan tema gratis dan premium untuk
              memenuhi preferensi Anda
            </p>
          </div>
        </div>
      </section>

      <section className="container flex w-full max-w-[1440px] flex-col gap-x-4  lg:flex-row">
        <div className="order-2 flex flex-col justify-center space-y-2 lg:order-1">
          <h3 className="w-full text-4xl font-bold text-blue-500 lg:w-[288px]">
            Lebih Praktis dan Efisien
          </h3>
          <p className="text-lg text-neutral-500">
            Buat undangan digital Anda sendiri secara cepat dan mudah hanya
            melalui smartphone
          </p>
        </div>
        <Image
          src={"/img/iPhone.png"}
          className="order-1 p-4 lg:order-2"
          alt="iPhone"
          width={482}
          height={400}
        />
      </section>

      <section className="container flex w-full max-w-[1440px] flex-col space-y-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-blue-500">
            Fitur Unggulan Kami
          </h3>
          <p className="text-lg text-neutral-500">
            Temukan Fitur menarik yang kami tawarkan khusus untuk anda
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:gap-6">
          {/* Card Fitur Start */}
          <div className="flex gap-x-5 space-y-2 rounded-lg border-2  p-4 lg:flex lg:flex-col">
            <Image src="/img/fitur-1.svg" alt="logo" width={44} height={44} />
            <div className="">
              <p className="text-lg font-semibold text-neutral-700">
                Atur Informasi Event
              </p>
              <p className="text-sm text-neutral-500">
                Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi
                acara dengan mudah
              </p>
            </div>
          </div>

          <div className="flex gap-x-5 space-y-2 rounded-lg border-2 p-4 lg:flex lg:flex-col">
            <Image src="/img/fitur-2.svg" alt="logo" width={44} height={44} />
            <div className="">
              <p className="text-lg font-semibold text-neutral-700">
                Galeri Foto & Video
              </p>
              <p className="text-sm text-neutral-500">
                Bagikan momen indah melalui galeri foto/video yang menampilkan
                kenangan spesial Anda
              </p>
            </div>
          </div>

          <div className="flex gap-x-5 space-y-2 rounded-lg border-2 p-4 lg:flex lg:flex-col">
            <Image src="/img/fitur-3.svg" alt="logo" width={44} height={44} />
            <div className="">
              <p className="text-lg font-semibold text-neutral-700">
                Background Musik
              </p>
              <p className="text-sm text-neutral-500">
                Tambahkan sentuhan emosional dengan musik latar yang sesuai
                dengan suasana acara
              </p>
            </div>
          </div>

          <div className="flex gap-x-5 space-y-2 rounded-lg border-2 p-4 lg:flex lg:flex-col">
            <Image src="/img/fitur-4.svg" alt="logo" width={44} height={44} />
            <div className="">
              <p className="text-lg font-semibold text-neutral-700">
                Wedding Wishes
              </p>
              <p className="text-sm text-neutral-500">
                Tamu dapat meninggalkan ucapan selamat dan harapan mereka untuk
                Anda
              </p>
            </div>
          </div>

          <div className="hidden flex-col space-y-2 rounded-lg border-2 p-4 lg:flex">
            <Image src="/img/fitur-5.svg" alt="logo" width={44} height={44} />
            <p className="text-lg font-semibold text-neutral-700">
              Custom Guest Name
            </p>
            <p className="text-sm text-neutral-500">
              Personalisasi undangan dengan nama tamu yang diundang
            </p>
          </div>

          <div className="hidden flex-col space-y-2 rounded-lg border-2 p-4 lg:flex">
            <Image src="/img/fitur-6.svg" alt="logo" width={44} height={44} />
            <p className="text-lg font-semibold text-neutral-700">
              Import Guest
            </p>
            <p className="text-sm text-neutral-500">
              Mudahnya mengimpor daftar tamu memudahkan anda untuk
              mempersonalisasi undangan
            </p>
          </div>

          <div className="hidden flex-col space-y-2 rounded-lg border-2 p-4 lg:flex">
            <Image src="/img/fitur-7.svg" alt="logo" width={44} height={44} />
            <p className="text-lg font-semibold text-neutral-700">Form Guest</p>
            <p className="text-sm text-neutral-500">
              Persiapkan daftar tamu dengan formulir yang dapat disesuaikan
            </p>
          </div>

          <div className="hidden flex-col space-y-2 rounded-lg border-2 p-4 lg:flex">
            <Image src="/img/fitur-8.svg" alt="logo" width={44} height={44} />
            <p className="text-lg font-semibold text-neutral-700">QR Guest</p>
            <p className="text-sm text-neutral-500">
              Pindai kode QR undangan untuk akses cepat dan mudah ke detail
              acara
            </p>
          </div>

          <div className="hidden flex-col space-y-2 rounded-lg border-2 p-4 lg:flex">
            <Image src="/img/fitur-9.svg" alt="logo" width={44} height={44} />
            <p className="text-lg font-semibold text-neutral-700">RSVP</p>
            <p className="text-sm text-neutral-500">
              Tetap terorganisir dengan mengetahui siapa yang datang dengan
              mudah melalui fitur RSVP
            </p>
          </div>

          <div className="hidden flex-col space-y-2 rounded-lg border-2 p-4 lg:flex">
            <Image src="/img/fitur-10.svg" alt="logo" width={44} height={44} />
            <p className="text-lg font-semibold text-neutral-700">Gift</p>
            <p className="text-sm text-neutral-500">
              Tampilkan daftar hadiah yang diinginkan dan beri tamu pilihan yang
              mudah untuk memberikan hadiah yang tepat.
            </p>
          </div>

          <div className="hidden flex-col space-y-2 rounded-lg border-2 p-4 lg:flex">
            <Image src="/img/fitur-11.svg" alt="logo" width={44} height={44} />
            <p className="text-lg font-semibold text-neutral-700">Usher</p>
            <p className="text-sm text-neutral-500">
              Petunjuk lokasi, panduan acara, dan informasi penting lainnya yang
              akan membantu tamu merasa nyaman
            </p>
          </div>

          <div className="hidden flex-col space-y-2 rounded-lg border-2 p-4 lg:flex">
            <Image src="/img/fitur-12.svg" alt="logo" width={44} height={44} />
            <p className="text-lg font-semibold text-neutral-700">
              Live Streaming
            </p>
            <p className="text-sm text-neutral-500">
              Bagikan momen istimewa dengan mereka yang tidak bisa hadir melalui
              streaming langsung
            </p>
          </div>
          {/* Card Fitur End */}
        </div>
      </section>

      <section className="container flex w-full max-w-[1440px] flex-col gap-y-6">
        <div className="flex flex-col space-y-2 lg:items-center lg:text-center">
          <h3 className="text-4xl font-bold text-blue-500">Testimonial</h3>
          <p className="text-lg text-neutral-500 lg:w-[727px]">
            Beberapa testimoni yang membagikan cerita sukses dan kepuasan mereka
            dengan VOOW
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-6">
          <div className="flex w-full flex-col space-y-4 rounded-lg border-2 p-4">
            <div className="flex items-center space-x-2">
              <Image
                src={"/img/testimoni-1.png"}
                alt="testimoni-1"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h6 className="text-bold text-xl text-neutral-900">
                  Arlene McCoy
                </h6>
                <p className="text-base text-neutral-500">2023</p>
              </div>
            </div>
            <p>
              Aplikasi undangan digital website paling keren sih ini 👍🏻 Proses
              dari pembelian, pembayaran dan pembuatan undangannya cepat dan
              mudah. Pilihan tema dan lagunya juga lengkap 😍 mantappp 💫
            </p>
          </div>
          <div className="hidden w-full flex-col space-y-4 rounded-lg border-2 p-4 lg:flex">
            <div className="flex items-center space-x-2">
              <Image
                src={"/img/testimoni-2.png"}
                alt="testimoni-1"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h6 className="text-bold text-xl text-neutral-900">
                  Shawn Mendes
                </h6>
                <p className="text-base text-neutral-500">2023</p>
              </div>
            </div>
            <p>
              Aplikasi undangan digital website paling keren sih ini 👍🏻 Proses
              dari pembelian, pembayaran dan pembuatan undangannya cepat dan
              mudah. Pilihan tema dan lagunya juga lengkap 😍 Top lah pokoknya
              💫
            </p>
          </div>
          <div className="hidden w-full flex-col space-y-4 rounded-lg border-2 p-4 lg:flex">
            <div className="flex items-center space-x-2">
              <Image
                src={"/img/testimoni-3.png"}
                alt="testimoni-1"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h6 className="text-bold text-xl text-neutral-900">
                  Annette Black
                </h6>
                <p className="text-base text-neutral-500">2023</p>
              </div>
            </div>
            <p>
              Aplikasi undangan digital website paling keren sih ini 👍🏻 Proses
              dari pembelian, pembayaran dan pembuatan undangannya cepat dan
              mudah. Pilihan tema dan lagunya juga lengkap 😍 Terbaik lah 💫
            </p>
          </div>
        </div>

        {/* <div className="lg:grid lg:grid-cols-3 lg:gap-6">
          <div className="flex w-[441px] flex-col space-y-6 rounded-lg border-2 p-6">
            <div className="flex items-center space-x-2">
              <Image
                src={"/img/testimoni-1.png"}
                alt="testimoni-1"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h6 className="text-bold text-xl text-neutral-900">
                  Arlene McCoy
                </h6>
                <p className="text-base text-neutral-500">2023</p>
              </div>
            </div>
            <p>
              Aplikasi undangan digital website paling keren sih ini 👍🏻 Proses
              dari pembelian, pembayaran dan pembuatan undangannya cepat dan
              mudah. Pilihan tema dan lagunya juga lengkap 😍 mantappp 💫
            </p>
          </div>
          <div className="hidden w-[441px] flex-col space-y-6 rounded-lg border-2 p-6 lg:flex">
            <div className="flex items-center space-x-2">
              <Image
                src={"/img/testimoni-1.png"}
                alt="testimoni-1"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h6 className="text-bold text-xl text-neutral-900">
                  Arlene McCoy
                </h6>
                <p className="text-base text-neutral-500">2023</p>
              </div>
            </div>
            <p>
              Aplikasi undangan digital website paling keren sih ini 👍🏻 Proses
              dari pembelian, pembayaran dan pembuatan undangannya cepat dan
              mudah. Pilihan tema dan lagunya juga lengkap 😍 mantappp 💫
            </p>
          </div>
          <div className="hidden w-[441px] flex-col space-y-6 rounded-lg border-2 p-6 lg:flex">
            <div className="flex items-center space-x-2">
              <Image
                src={"/img/testimoni-1.png"}
                alt="testimoni-1"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <h6 className="text-bold text-xl text-neutral-900">
                  Arlene McCoy
                </h6>
                <p className="text-base text-neutral-500">2023</p>
              </div>
            </div>
            <p>
              Aplikasi undangan digital website paling keren sih ini 👍🏻 Proses
              dari pembelian, pembayaran dan pembuatan undangannya cepat dan
              mudah. Pilihan tema dan lagunya juga lengkap 😍 mantappp 💫
            </p>
          </div>
        </div> */}
      </section>

      <section className="container flex w-full max-w-[1440px] flex-col">
        <div className="flex w-full flex-col rounded-2xl bg-gradient-to-r from-[#00C1FF] to-[#006FFD] px-6 pt-6 lg:flex-row lg:items-center lg:px-20">
          <div className="flex flex-col space-y-3">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-neutral-50 lg:text-6xl">
                Mulai 0 Rupiah
              </h1>
              <p className="text-sm text-blue-100 lg:text-lg">
                Buat undangan digitalmu mulai dari 0 Rupiah saja. Ciptakan
                undangan dan bagikan momen anda dengan lebih mudah
              </p>
            </div>
            <div className="space-x-2">
              <Button className="text-base font-semibold" variant={"white"}>
                Coba Gratis
              </Button>
              <Button
                className="text-base font-semibold"
                variant={"transparent"}
              >
                Lihat Paket Lainnya
              </Button>
            </div>
          </div>

          <Image
            className="w-full lg:h-[426px] lg:w-[448px]"
            src={"/img/iPhone-2.png"}
            alt="iPhone-2"
            width={296}
            height={280}
          />
        </div>
      </section>

      <section className="container flex w-full max-w-[1440px] flex-col space-y-4 lg:flex-row lg:gap-x-20 lg:px-20 lg:py-10">
        <div className="order-1 justify-center lg:order-2 lg:flex lg:flex-col">
          <h3 className="text-4xl font-bold text-blue-500">Pembayaran</h3>
          <p className="text-lg text-neutral-500">
            Kami menyediakan beragam pembayaran untuk memudahkan anda dalam
            menggunakan VOOW
          </p>
        </div>
        <div className="order-2 flex flex-col gap-y-3 lg:order-1 lg:w-full">
          <div className="flex flex-col gap-y-3  lg:flex-row lg:gap-x-6">
            {/* Bank Transfer Start */}
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-neutral-700">
                Bank Transfer
              </p>
              <div className="grid w-full grid-cols-3 gap-2">
                <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-50 px-3 py-7">
                  <Image
                    className=""
                    src={"/img/bank-1.png"}
                    alt="mandiri"
                    height={24}
                    width={80}
                  />
                </div>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-50 px-3 py-7">
                  <Image
                    className=""
                    src={"/img/bank-2.png"}
                    alt="bca"
                    height={25}
                    width={80}
                  />
                </div>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-50 px-3 py-7">
                  <Image
                    className=""
                    src={"/img/bank-3.png"}
                    alt="bri"
                    height={30}
                    width={80}
                  />
                </div>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-50 px-3 py-7">
                  <Image
                    className=""
                    src={"/img/bank-4.png"}
                    alt="bni"
                    height={26}
                    width={80}
                  />
                </div>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-50 px-3 py-7">
                  <Image
                    className=""
                    src={"/img/bank-5.png"}
                    alt="permata"
                    height={20}
                    width={80}
                  />
                </div>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-50 px-3 py-7">
                  <Image
                    className=""
                    src={"/img/bank-6.png"}
                    alt="cimb"
                    height={12}
                    width={80}
                  />
                </div>
              </div>
            </div>
            {/* Bank Transfer End */}
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-neutral-700">Outlet</p>
              <div className="grid w-full grid-cols-3 gap-2">
                <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-50 px-3 py-7">
                  <Image
                    className=""
                    src={"/img/outlet-1.png"}
                    alt="alfamart"
                    height={25}
                    width={80}
                  />
                </div>
                <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-50">
                  <Image
                    className=""
                    src={"/img/outlet-2.png"}
                    alt="indomaret"
                    height={26}
                    width={80}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-neutral-700">Ewallet</p>
              <div className="grid grid-cols-3 gap-2 lg:flex lg:flex-row">
                <div className="flex items-center justify-center rounded-md bg-neutral-50 px-[20px] py-[10px] lg:h-[80px] lg:w-[108px]">
                  <Image
                    className=""
                    src={"/img/ewallet-1.png"}
                    alt="ovo"
                    height={24}
                    width={80}
                  />
                </div>
                <div className="flex items-center justify-center rounded-md bg-neutral-50 px-[20px] py-[10px]  lg:h-[80px] lg:w-[108px]">
                  <Image
                    className=""
                    src={"/img/ewallet-2.png"}
                    alt="spay"
                    height={25}
                    width={80}
                  />
                </div>
                <div className="flex items-center justify-center rounded-md bg-neutral-50 px-[20px] py-[10px]  lg:h-[80px] lg:w-[108px]">
                  <Image
                    className=""
                    src={"/img/ewallet-3.png"}
                    alt="linkaja"
                    height={60}
                    width={67}
                  />
                </div>
                <div className="flex items-center justify-center rounded-md bg-neutral-50 px-3 py-7 lg:h-[80px] lg:w-[108px]">
                  <Image
                    className=""
                    src={"/img/ewallet-4.png"}
                    alt="dana"
                    height={22}
                    width={80}
                  />
                </div>
                <div className="flex items-center justify-center rounded-md bg-neutral-50 px-3 py-7 lg:h-[80px] lg:w-[108px]">
                  <Image
                    className=""
                    src={"/img/ewallet-5.png"}
                    alt="qris"
                    height={25}
                    width={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container w-full max-w-[1440px] space-y-6">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-4xl font-bold text-blue-500">Blog</h3>
            <div className="flex gap-x-1">
              <p className="text-base text-blue-500">Selengkapnya</p>
              <Image
                src={"/svg/arrow.svg"}
                alt="arrow"
                width={10}
                height={10}
              />
            </div>
          </div>
          <p className="text-lg text-neutral-500">
            Dapatkan insight dan informasi berharga di Blog kami
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          <div className="rounded-lg border-2">
            <Image
              className="w-full rounded-t-lg"
              src={"/img/blog-1.png"}
              alt="blog-1"
              width={302}
              height={227}
            />
            <div className="flex flex-col gap-y-1 p-4">
              <p className="text-[10px] text-neutral-400">
                15 Juli 2023, oleh Shawn Mendes
              </p>
              <p className="line-clamp-2">
                Judul Blog Dengan Maksimal 2 Baris Saja: Jika Lebih Maka
                Tampilannya Akan Seperti Ini
              </p>
            </div>
          </div>
          <div className="rounded-lg border-2">
            <Image
              className="w-full rounded-t-lg"
              src={"/img/blog-2.png"}
              alt="blog-1"
              width={302}
              height={227}
            />
            <div className="flex flex-col gap-y-1 p-4">
              <p className="text-[10px] text-neutral-400">
                15 Juli 2023, oleh Shawn Mendes
              </p>
              <p className="line-clamp-2">
                Judul Blog Dengan Maksimal 2 Baris Saja: Jika Lebih Maka
                Tampilannya Akan Seperti Ini
              </p>
            </div>
          </div>
          <div className="rounded-lg border-2">
            <Image
              className="w-full rounded-t-lg"
              src={"/img/blog-3.png"}
              alt="blog-1"
              width={302}
              height={227}
            />
            <div className="flex flex-col gap-y-1 p-4">
              <p className="text-[10px] text-neutral-400">
                15 Juli 2023, oleh Shawn Mendes
              </p>
              <p className="line-clamp-2">
                Judul Blog Dengan Maksimal 2 Baris Saja: Jika Lebih Maka
                Tampilannya Akan Seperti Ini
              </p>
            </div>
          </div>
          <div className="rounded-lg border-2">
            <Image
              className="w-full rounded-t-lg"
              src={"/img/blog-4.png"}
              alt="blog-1"
              width={302}
              height={227}
            />
            <div className="flex flex-col gap-y-1 p-4">
              <p className="text-[10px] text-neutral-400">
                15 Juli 2023, oleh Shawn Mendes
              </p>
              <p className="line-clamp-2">
                Judul Blog Dengan Maksimal 2 Baris Saja: Jika Lebih Maka
                Tampilannya Akan Seperti Ini
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-10 w-full items-center justify-center rounded-md bg-neutral-50 lg:hidden">
          <p className="text-neutral-700">Tampilkan lebih banyak</p>
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

      <footer className="sticky bottom-0 lg:hidden">
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
      </footer>
    </main>
  );
}
