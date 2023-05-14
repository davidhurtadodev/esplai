import { useDropzone } from 'react-dropzone';
import InnerModal from './InnerModal';
import Button from './Button';
export default function Dropzone() {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        'application/json': ['.json'],
      },
    });
  console.log(fileRejections);
  return (
    <div className="w-full">
      <div className="text-center">
        <section className=" mx-auto mb-10 w-full max-w-[600px] shadow-[1px_0px_36px_6px_rgba(86,156,80,1)]">
          <div className="py-36 w-full h-full" {...getRootProps()}>
            <input {...getInputProps()} />
            {fileRejections.length > 0 && acceptedFiles.length === 0 ? (
              <InnerModal rejections={fileRejections} />
            ) : null}

            {acceptedFiles.length > 0 && fileRejections.length === 0 ? (
              <p>Tu archivo data.json se ha subido correctamente.</p>
            ) : null}
            {acceptedFiles.length === 0 && fileRejections.length === 0 ? (
              <p>Arrastra tus archivos aca.</p>
            ) : null}
          </div>
        </section>
      </div>
      <div className="w-full max-w-[600px] mx-auto">
        <Button classNames="bg-[#569C50] hover:bg-[#447c40] border-0">
          Subir archivos
        </Button>
      </div>
    </div>
  );
}
