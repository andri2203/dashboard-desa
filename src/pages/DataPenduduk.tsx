import { ComponentPropsWithRef, forwardRef } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

interface DataPendudukType extends ComponentPropsWithRef<"section"> {}

const DataPenduduk = forwardRef<HTMLDivElement, DataPendudukType>(
  (props, ref) => {
    const data = [
      {
        name: "Muhammad Iqbal",
        kk: "1234567890",
        nik: "1234567890123456",
        birthplace: "Banda Aceh",
        birthdate: "1990-01-01",
        gender: "Laki-laki",
        address:
          "Jalan Raya No. 123, RT 01/02, Kelurahan Suka Maju, Kecamatan Suka Maju, Kabupaten Nagan Raya, Aceh 12345",
        religion: "Islam",
        job: "PNS",
      },
      {
        name: "Siti Aisyah",
        kk: "0987654321",
        nik: "0987654321098765",
        birthplace: "Lhokseumawe",
        birthdate: "1985-05-15",
        gender: "Perempuan",
        address:
          "Jalan Sultan Agung No. 45, RT 02/03, Kelurahan Suka Maju, Kecamatan Suka Maju, Kabupaten Nagan Raya, Aceh 12345",
        religion: "Islam",
        job: "TNI",
      },
      {
        name: "Budi Santoso",
        kk: "1357924680",
        nik: "1357924680135792",
        birthplace: "Bireuen",
        birthdate: "1995-08-27",
        gender: "Laki-laki",
        address:
          "Jalan Diponegoro No. 88, RT 03/04, Kelurahan Suka Maju, Kecamatan Suka Maju, Kabupaten Nagan Raya, Aceh 12345",
        religion: "Kristen",
        job: "POLISI",
      },
      {
        name: "Rina Sari",
        kk: "2468013579",
        nik: "2468013579246801",
        birthplace: "Pidie",
        birthdate: "1992-02-28",
        gender: "Perempuan",
        address:
          "Jalan Sudirman No. 12, RT 04/05, Kelurahan Suka Maju, Kecamatan Suka Maju, Kabupaten Nagan Raya, Aceh 12345",
        religion: "Islam",
        job: "Perawat",
      },
      {
        name: "Joko Susanto",
        kk: "3691234567",
        nik: "3691234567369123",
        birthplace: "Sabang",
        birthdate: "1988-06-15",
        gender: "Laki-laki",
        address:
          "Jalan Gajah Mada No. 23, RT 05/06, Kelurahan Suka Maju, Kecamatan Suka Maju, Kabupaten Nagan Raya, Aceh 12345",
        religion: "Buddha",
        job: "Wirausaha",
      },
    ];

    const dateFormat = (dt: string) => {
      const date = new Date(dt);
      return date.toLocaleString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    return (
      <section
        className="flex flex-col px-3 pb-3 min-h-screen"
        {...props}
        ref={ref}
      >
        <h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Data Penduduk
        </h2>
        <div className="w-full px-3 py-4 mt-2 shadow bg-white">
          <table className="w-full text-sm border border-gray-300 px-2">
            <thead>
              <tr>
                <th className="text-center font-semibold text-gray-700">
                  Nama Penduduk
                </th>
                <th className="text-center font-semibold text-gray-700">KK</th>
                <th className="text-center font-semibold text-gray-700">NIK</th>
                <th className="text-center font-semibold text-gray-700">
                  Tempat, Tanggal Lahir
                </th>
                <th className="text-center font-semibold text-gray-700">
                  Jenis Kelamin
                </th>
                <th className="text-center font-semibold text-gray-700">
                  Alamat
                </th>
                <th className="text-center font-semibold text-gray-700">
                  Agama
                </th>
                <th className="text-center font-semibold text-gray-700">
                  Pekerjaan
                </th>
                <th className="text-center font-semibold text-gray-700">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    address,
                    birthdate,
                    birthplace,
                    gender,
                    job,
                    kk,
                    name,
                    nik,
                    religion,
                  },
                  i
                ) => (
                  <tr key={i} className="py-2">
                    <th className="text-center text-gray-700">{name}</th>
                    <td className="text-center text-gray-700">{kk}</td>
                    <td className="text-center text-gray-700">{nik}</td>
                    <td className="text-center text-gray-700">
                      {birthplace}, {dateFormat(birthdate)}
                    </td>
                    <td className="text-center text-gray-700">{gender}</td>
                    <td className="text-center text-gray-700">{address}</td>
                    <td className="text-center text-gray-700">{religion}</td>
                    <td className="text-center text-gray-700">{job}</td>
                    <td className="text-center">
                      <div className="flex rounded-lg overflow-hidden">
                        <button className="outline-0 py-1 px-1.5 text-gray-100 hover:text-white bg-green-400 hover:bg-green-500 text-sm">
                          <FaEdit />
                        </button>
                        <button className="outline-0 py-1 px-1.5 text-gray-100 hover:text-white bg-red-400 hover:bg-red-500 text-sm">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
);

export default DataPenduduk;
