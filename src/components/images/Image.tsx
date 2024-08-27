
const ImageCard = ({src,alt,hasPadding=false}:{src:string, alt:string, hasPadding:boolean}) => {
  return (
    <img src={src} alt={alt} className={`${hasPadding ? 'rounded-lg' : 'rounded-t-lg'} w-full max-h-[200px] object-cover`}/>
  )
}

export default ImageCard