import { useState } from 'react'
import styles from './styles.module.css'
import { useDropzone } from 'react-dropzone'
import Cloud from '../../components/Icons/Cloud'
import { publishVideo, uploadVideo } from '../../services'
import { useLocation } from 'wouter'

export default function UploadVideo (): JSX.Element {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [location, setLocation] = useLocation()
  const onDrop = (files) => {
    const [file] = files
    setUploading(true)
    uploadVideo({ videoFile: file }).then(async (res) => {
      const [error, videoSrc] = res
      console.log(videoSrc)
      await publishVideo({ videoSrc, description: 'el nano y la nana' })
      setLocation('/')
    }).catch(err => err)
    setUploaded(true)
  }
  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    disabled: uploading || uploaded,
    maxFiles: 1,
    accept: 'video/mp4, video/x-m4v, video/*',
    onDrop
  })
  return (<section className={styles.wrapper}>
    <div className={styles.uploadVideo}>

      <form>
        <div {...getRootProps()}>
          <input {...getInputProps()} type="file" />
          <Cloud />
          <div>Selecciona el video para cargar</div>
          <div> O arrastra y suelta el archivo</div>
          <ul>
            <li>MP4 o WebM</li>
            <li>Resolución de menos de 720x1280</li>
            <li>Hasta 180 segundos</li>

          </ul>
        </div>
        <label>
          leyenda
          <input type="text" placeholder="" />
        </label>
        <button>
          Publicar
        </button>
      </form>
    </div>
  </section>)
}
