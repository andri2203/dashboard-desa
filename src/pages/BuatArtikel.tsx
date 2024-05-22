import { ComponentPropsWithRef, forwardRef, useState } from "react";
import Input from "../forms/input";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface BuatArtikelType extends ComponentPropsWithRef<"section"> {}

const BuatArtikel = forwardRef<HTMLDivElement, BuatArtikelType>(
  (props, ref) => {
    const [_editor, setEditor] = useState<ClassicEditor | null>(null);
    const [data, setData] = useState("<p>Hello from CKEditor 5!</p>");

    return (
      <section
        className="flex flex-col px-3 pb-3 min-h-screen"
        {...props}
        ref={ref}
      >
        <h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Tambah Artikel
        </h2>
        <div className="w-full px-3 py-4 mt-2 shadow bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col"
          >
            <div className="flex w-full items-end gap-3">
              <Input name="kk" title="Nomor Kartu Keluarga" type="number" />
              <button className="outline-0 w-3/12 h-10 px-3 py-2 bg-sky-400 text-gray-200 hover:text-white hover:bg-sky-500 rounded-lg shadow-sm">
                Buat Artikel
              </button>
            </div>
            <div className="w-full mt-2">
              <CKEditor
                editor={ClassicEditor}
                data={data}
                onReady={(editor) => {
                  setEditor(editor);
                }}
                onChange={(_event, editor) => {
                  setData(editor.getData());
                }}
              />
            </div>
          </form>
        </div>
      </section>
    );
  }
);

export default BuatArtikel;
