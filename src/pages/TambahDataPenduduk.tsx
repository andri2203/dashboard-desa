import { ComponentPropsWithRef, forwardRef } from "react";
import Input from "../forms/input";
import RadioInput from "../forms/radioInput";
import Select from "../forms/select";

interface TambahDataPendudukType extends ComponentPropsWithRef<"section"> {}

const TambahDataPenduduk = forwardRef<HTMLDivElement, TambahDataPendudukType>(
  (props, ref) => {
    return (
      <section
        className="flex flex-col px-3 pb-3 min-h-screen"
        {...props}
        ref={ref}
      >
        <h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Tambah Data Penduduk
        </h2>
        <div className="w-full px-3 py-4 mt-2 shadow bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col"
          >
            <div className="flex w-full gap-3">
              <Input name="kk" title="Nomor Kartu Keluarga" type="number" />
              <Input
                name="nik"
                title="Nomor Induk Kependudukan"
                type="number"
              />
            </div>
            <div className="flex w-full gap-3">
              <Input name="nama" title="Nama Lengkap" type="text" />
              <RadioInput
                name="gender"
                title="Jenis Kelamin"
                option={["Pria", "Wanita"]}
              />
            </div>
            <div className="flex w-full gap-3">
              <Input name="tempatLahir" title="Tempat Lahir" type="text" />
              <Input name="tanggalLahir" title="Tanggal Lahir" type="date" />
              <Select
                name="golDarah"
                title="Golongan Darah"
                optionDefault="-- Pilih Golongan Darah --"
                option={[
                  { key: "a", value: "A" },
                  { key: "b", value: "B" },
                  { key: "ab", value: "AB" },
                  { key: "o", value: "O" },
                ]}
              />
            </div>
            <div className="mb-3">
              <Input name="alamat" title="Alamat" type="text" />
              <div className="flex justify-between gap-3">
                <Input name="rt" title="Nomor RT" type="number" />
                <Input name="rw" title="Nomor RW" type="number" />
              </div>
              <div className="flex justify-between gap-3">
                <Input name="desa" title="Desa / Kelurahan" type="text" />
                <Input name="kecamatan" title="Kecamatan" type="text" />
              </div>
              <div className="flex justify-between gap-3">
                <Select
                  name="agama"
                  title="Agama"
                  optionDefault="-- Pilih Agama --"
                  option={[
                    { key: "islam", value: "Islam" },
                    { key: "katolik", value: "Katolik" },
                    { key: "protestan", value: "Protestan" },
                    { key: "hindu", value: "Hindu" },
                    { key: "budha", value: "Budha" },
                    { key: "konghucu", value: "Konghucu" },
                  ]}
                />
                <Select
                  name="status"
                  title="Status Perkawinan"
                  optionDefault="-- Pilih Status Perkawinan --"
                  option={[
                    { key: "belumMenikah", value: "Belum Menikah" },
                    { key: "menikah", value: "Menikah" },
                    { key: "janda", value: "Janda" },
                    { key: "duda", value: "Duda" },
                  ]}
                />
              </div>
              <div className="flex justify-between gap-3">
                <Input name="pekerjaan" title="Pekerjaan" type="text" />
                <Select
                  name="wargaNegara"
                  title="Kewarganegaraan"
                  optionDefault="-- Pilih Kewarganegaraan --"
                  option={[
                    { key: "wni", value: "WNI" },
                    { key: "wna", value: "WNA" },
                  ]}
                />
              </div>
              <div className="flex w-full justify-end mt-4">
                <button className="outline-0 px-3 py-2 bg-sky-400 text-gray-200 hover:text-white hover:bg-sky-500 rounded-lg shadow-sm">
                  Tambah Data
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
);

export default TambahDataPenduduk;
