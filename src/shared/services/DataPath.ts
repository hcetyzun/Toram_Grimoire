export const enum DataPathIds {
  Skill = 0,
  SkillMain = 1,
  Stats = 2,
  CharacterStats = 3,
  Glossary = 4,
  Equipment = 5,
  Crystal = 6,
  Enchant = 7,
  Registlet = 8,
  Potion = 9,
  Quest = 10,
}

function DataPath(id: DataPathIds): string {
  switch (id) {
    case DataPathIds.Skill:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/skill/skill.csv'
    case DataPathIds.SkillMain:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/skill_main/skill_main.csv'
    case DataPathIds.Stats:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/stats/stats.csv'
    case DataPathIds.CharacterStats:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/character_stats/character_stats.csv'
    case DataPathIds.Glossary:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/glossary/glossary.csv'
    case DataPathIds.Equipment:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/equipment/equipment.csv'
    case DataPathIds.Crystal:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/crystal/crystal.csv'
    case DataPathIds.Enchant:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/enchant/enchant.csv'
    case DataPathIds.Registlet:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/registlet/registlet.csv'
    case DataPathIds.Potion:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/potion/potion.csv'
    case DataPathIds.Quest:
      return 'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/quest/quest.csv'
  }
}

function DataPathLang(id: DataPathIds): (string | null)[] {
  /**
   * The order of languages: [en, zh_tw, ja, zh_cn]
   */
  switch (id) {
    case DataPathIds.Skill:
      return [
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/en/skill_en.csv',
        null,
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/ja/skill_ja.csv',
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/zh_cn/skill_cn.csv',
      ]
    case DataPathIds.SkillMain:
      return [
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/en/skillmain_en.csv',
        null,
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/ja/skillmain_ja.csv',
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/zh_cn/skillmain_cn.csv',
      ]
    case DataPathIds.Stats:
      return [
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/en/stats_en.csv',
        null,
        null,
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/zh_cn/stats_cn.csv',
      ]
    case DataPathIds.CharacterStats:
      return [null, null, null, null]
    case DataPathIds.Glossary:
      return [
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/en/glossary_en.csv',
        null,
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/ja/glossary_ja.csv',
        'https://cdn.jsdelivr.net/gh/hcetyzun/Data-mirror@main/data/lang/zh_cn/glossary_cn.csv',
      ]
  }
  return []
}

export { DataPath, DataPathLang }
