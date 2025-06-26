import React, { ChangeEvent } from 'react'
import Image from 'next/image';

type Props = {
  file: File | null,
  setFile: (e: File | null)=>void
};
const FileUploader: React.FC<Props> = ({file, setFile}) => {
  

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
     if(e.target.files){
        setFile(e.target.files[0]);
     }
  };

  // useEffect(()=>{

  // })
  return (
    <div>
        <input type="file" onChange={handleFileUpload} placeholder='Upload images' className='my-4'/>
        {file && (
            <div className='space-y-4'>
                <Image src={URL.createObjectURL(file)} alt="preview" className='h-32'/>
                <p>File name: {file.name}</p>
                <p>File size: {((file.size)/1024).toFixed(2)} KB</p>
                <p>File type: {file.type}</p>
            </div>
        )}
    </div>
  )
}

export default FileUploader