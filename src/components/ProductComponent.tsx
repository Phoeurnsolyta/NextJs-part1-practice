
// export name vs default : export name need to put component in {}, export name can have a lot of export in one file, but default call component as explicit and can have only one export 

export default function ProductComponent() {
  return (
    <div>
      <h1 className="text-4xl">Product One</h1>
      <h2 className="text-6xl">Product Two</h2>
      <div className="bg-red-500 border border-amber-200 w-200 h-100"></div>
    </div>
  )
}
