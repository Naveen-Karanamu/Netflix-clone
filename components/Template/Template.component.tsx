import { Movie } from '../../typings'
import Image from 'next/image'

interface Props {
  movies: Movie
}

const Template = ({ movies }: Props) => {
  return (
    <>
      <div className="relative duration-300 ease-out md:hover:scale-105">
        <div className="transision relative h-28 min-w-[180px] md:h-32 md:min-w-[240px] ">
          <Image
            src={`https://image.tmdb.org/t/p/w500${
              movies.backdrop_path || movies.poster_path
            }`}
            className="rounded-sm object-cover md:rounded"
            layout="fill"
          />
        </div>
      </div>
    </>
  )
}

export default Template