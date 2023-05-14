import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { Inter } from 'next/font/google';
import { useSession, signIn, signOut } from 'next-auth/react';
import Dropzone from '@/components/Dropzone';
// import { useRouter } from 'next/router';
// import Dropzone from 'react-dropzone';

//application/json
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: session } = useSession();

  // const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
  //   useDropzone({
  //     accept: {
  //       'application/json': ['.json'],
  //     },
  //   });

  if (session) {
    return (
      <Layout>
        <div className="flex items-center lg:px-10 px-10 flex-col-reverse lg:flex-row">
          <Dropzone />
          <div className="text-left w-[30%] m-auto mb-16 ">
            <div className="text-center">
              <h1 className="text-slate-100 text-3xl mb-2">
                Bienvenido a DDrop
              </h1>
            </div>
            <p className="text-slate-100">
              Para subir tus archivos de forma simple a drive,puedes hacer Login
              a traves de Google
            </p>
            <hr className="border-b-[1px] my-5 border-slate-500" />

            <Button
              classNames="bg-[#130F26] hover:bg-slate-100 hover:text-[#130F26]"
              onClick={signOut}
            >
              Logout
            </Button>
          </div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="flex justify-center">
          <div className="text-left w-[300px] m-auto ">
            <div className="text-center">
              <h1 className="text-slate-100 text-3xl mb-2">
                Bienvenido a DDrop
              </h1>
            </div>
            <p className="text-slate-100">
              Para subir tus archivos de forma simple a drive,puedes hacer Login
              a traves de Google
            </p>
            <hr className="border-b-[1px] my-5 border-slate-500" />

            <Button
              classNames="bg-[#130F26] hover:bg-slate-100 hover:text-[#130F26]"
              onClick={signIn}
            >
              Login con Google
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
}
