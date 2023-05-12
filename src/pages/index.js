import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { Inter } from 'next/font/google';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <Layout>
        <div className="text-left w-[300px] m-auto ">
          <div className="text-center">
            <h1 className="text-slate-100 text-3xl mb-2">Bienvenido a DDrop</h1>
          </div>
          <p className="text-slate-100">
            Para subir tus archivos de forma simple a drive,puedes hacer Login a
            traves de Google
          </p>
          <hr className="border-b-[1px] my-5 border-slate-500" />

          <Button onClick={signOut}>Logout</Button>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="flex">
          <div>
            <div></div>
            <Button>Subir archivos</Button>
          </div>
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

            <Button onClick={signIn}>Login con Google</Button>
          </div>
        </div>
      </Layout>
    );
  }
}
