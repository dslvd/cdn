import Head from 'next/head'

import { FileUploader } from '@/components/file-uploader';
import { FilesList } from '@/components/files-list';

export default function Home() {
  return (
    <>
      <Head>
        <title>Uploader to cdn.dslvd.xyz</title>
      </Head>
      <main className="container">
        <h1>Upload to cdn.dslvd.xyz</h1>
        <FileUploader />
        <FilesList />
      </main>
    </>
  )
}
