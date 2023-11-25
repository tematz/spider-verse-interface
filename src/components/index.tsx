import styles from './heroesList.module.scss'

import { spiderManFont } from '@/fonts'
import { IHeroData } from '@/interfaces/heroes'

interface Iprops {
  heroes: IHeroData[]
}

export default function HeroesList({ heroes }: Iprops) {
  return (
    <>
      <h1 className={`${spiderManFont.className} ${styles.title}`}>
        Personagens
      </h1>
    </>
  )
}
