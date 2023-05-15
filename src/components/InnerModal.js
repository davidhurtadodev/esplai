import Button from './Button';

export default function InnerModal({ rejections }) {
  const handleCleanRejections = (e) => {
    //Eliminate rejected file
    rejections.pop();
  };
  return (
    <div className="bg-[#232730] mx-5 text-left p-5">
      <h2 className="text-xl font-bold mb-5">Ups, algo ha ido mal</h2>
      <p className="mb-5">
        No hemos podido subir tu archivo, revisa el formato o bien inténtalo de
        nuevo
      </p>
      <div className="max-w-[100px]">
        <Button
          onClick={(e) => handleCleanRejections(e)}
          classNames="bg-[#569C50] border-0"
        >
          Cerrar
        </Button>
      </div>
    </div>
  );
}
