import { markRaw } from 'vue'

import { Skill } from '@/lib/Skill/Skill'

import {
  RegistletCategory,
  RegistletCategoryIds,
  RegistletItemBase,
  RegistletItemBaseSkill,
  RegistletItemBaseSpecial,
  RegistletItemBaseStat,
} from './RegistletItem'

export default class RegistletSystem {
  skillCategory: RegistletCategory<RegistletItemBaseSkill>
  statCategory: RegistletCategory<RegistletItemBaseStat>
  specialCategory: RegistletCategory<RegistletItemBaseSpecial>

  private _idItemMap!: Map<string, RegistletItemBase>
  private _skillItemMap!: Map<Skill, RegistletItemBaseSkill[]>
  private _allObtainLevelList!: number[]

  constructor() {
    this.skillCategory = markRaw(
      new RegistletCategory<RegistletItemBaseSkill>(RegistletCategoryIds.Skill)
    )
    this.statCategory = markRaw(
      new RegistletCategory<RegistletItemBaseStat>(RegistletCategoryIds.Stat)
    )
    this.specialCategory = markRaw(
      new RegistletCategory<RegistletItemBaseSpecial>(RegistletCategoryIds.Special)
    )
  }

  getRegistletItemById(id: string): RegistletItemBase | null {
    if (!this._idItemMap) {
      this._idItemMap = new Map()
      const handle = (items: RegistletItemBase[]) => {
        items.forEach(item => {
          this._idItemMap.set(item.id, item)
        })
      }
      handle(this.skillCategory.items)
      handle(this.statCategory.items)
      handle(this.specialCategory.items)
    }
    return this._idItemMap.get(id) ?? null
  }

  getRegistletItemsBySkill(skill: Skill): RegistletItemBaseSkill[] {
    if (!this._skillItemMap) {
      this._skillItemMap = new Map()
      this.skillCategory.items.forEach(item => {
        item.link.forEach(link => {
          if (!this._skillItemMap.has(link)) {
            this._skillItemMap.set(link, [])
          }
          this._skillItemMap.get(link)!.push(item)
        })
      })
    }
    return this._skillItemMap.get(skill) ?? []
  }

  getAllObtainLevelList() {
    if (!this._allObtainLevelList) {
      const tmpSet = new Set<number>()
      const handle = (items: RegistletItemBase[]) => {
        items.forEach(item => {
          item.obtainLevels.forEach(level => tmpSet.add(level))
        })
      }
      handle(this.skillCategory.items)
      handle(this.statCategory.items)
      handle(this.specialCategory.items)
      this._allObtainLevelList = [...tmpSet].sort((item1, item2) => item1 - item2)
    }
    return this._allObtainLevelList
  }
}
