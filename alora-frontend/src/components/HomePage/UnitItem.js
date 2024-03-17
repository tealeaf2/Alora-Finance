export default function UnitItem({src, text, alt}) {
return(
  <div
  className="flex flex-col items-center">
    <img
    src={src}
    alt={alt}
    className="h-48 w-48 my-[-20px] rounded-lg"
    ></img>

    <p>
      {text}
    </p>
  </div>
)
}