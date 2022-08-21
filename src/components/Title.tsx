interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-row">
      <h1 className="text-2xl font-bold mr-4">
        {title}
      </h1>
      <h1 className="after:block after:w-96 after:h-[0.5px] after:mt-4 after:bg-white">      
      </h1>
    </div>
  )
}