import { ComponentPropsWithRef, forwardRef } from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

interface KelolaArtikelType extends ComponentPropsWithRef<"section"> {}

const KelolaArtikel = forwardRef<HTMLDivElement, KelolaArtikelType>(
  (props, ref) => {
    const data = [
      {
        title: "10 Tempat Wisata Menarik di Kabupaten Nagan Raya",
        date: "2022-02-11",
        article:
          "Kabupaten Nagan Raya memiliki banyak tempat wisata yang menarik. Salah satunya adalah Pantai Bungus, pantai yang terkenal dengan pasir putihnya...",
      },
      {
        title: "Sejarah Singkat Kabupaten Nagan Raya",
        date: "2022-02-10",
        article:
          "Kabupaten Nagan Raya merupakan salah satu kabupaten di Provinsi Aceh. Kabupaten ini didirikan pada tahun 2002 dan memiliki luas wilayah sekitar 3.500 km persegi...",
      },
      {
        title: "Budaya dan Adat Istiadat di Kabupaten Nagan Raya",
        date: "2022-02-09",
        article:
          "Kabupaten Nagan Raya memiliki budaya dan adat istiadat yang kaya. Salah satunya adalah adat menyambut tamu dengan menyajikan hidangan khas...",
      },
      {
        title: "Potensi Pariwisata di Kabupaten Nagan Raya",
        date: "2022-02-08",
        article:
          "Kabupaten Nagan Raya memiliki potensi pariwisata yang besar. Salah satunya adalah pantai-pantai yang indah dan terjangkau. Selain itu, ada juga beberapa tempat wisata...",
      },
      {
        title: "Pendidikan di Kabupaten Nagan Raya",
        date: "2022-02-07",
        article:
          "Kabupaten Nagan Raya memiliki beberapa sekolah dan universitas yang baik. Salah satunya adalah Universitas Nagan Raya, yang menawarkan berbagai program studi...",
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
                  Judul
                </th>
                <th className="text-center font-semibold text-gray-700">
                  Tanggal
                </th>
                <th className="text-center font-semibold text-gray-700">
                  Artikel
                </th>
                <th className="text-center font-semibold text-gray-700">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ title, date, article }, i) => (
                <tr key={i} className="py-2">
                  <th className="text-center text-gray-700">{title}</th>
                  <td className="text-center text-gray-700">
                    {dateFormat(date)}
                  </td>
                  <td className="text-center text-gray-700">{article}</td>
                  <td className="text-center">
                    <div className="flex rounded-lg overflow-hidden">
                      <button className="outline-0 py-1 px-1.5 text-gray-100 hover:text-white bg-sky-400 hover:bg-sky-500 text-sm">
                        <FaEye />
                      </button>
                      <button className="outline-0 py-1 px-1.5 text-gray-100 hover:text-white bg-green-400 hover:bg-green-500 text-sm">
                        <FaEdit />
                      </button>
                      <button className="outline-0 py-1 px-1.5 text-gray-100 hover:text-white bg-red-400 hover:bg-red-500 text-sm">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
);

export default KelolaArtikel;
