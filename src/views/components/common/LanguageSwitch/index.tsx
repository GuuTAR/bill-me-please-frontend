import { ChangeEvent, useCallback } from 'react'

import { LANGUAGE } from '@/enum/global'

import { useAppData } from '@/providers/AppDataProvider'

import * as Language from './lang'
import * as Styles from './style'

export default function LanguageSwitch() {
  const { language, setLanguage } = useAppData()

  const isEnglish: boolean = language === LANGUAGE.ENGLISH

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setLanguage(event.target.checked ? LANGUAGE.ENGLISH : LANGUAGE.THAI)
    },
    [setLanguage],
  )

  return (
    <Styles.Root>
      <Styles.LanguageIcon aria-hidden />
      <Styles.LanguageLabel variant="body2" isActive={!isEnglish} aria-hidden>
        {Language.LANGUAGE_LABELS[LANGUAGE.THAI]}
      </Styles.LanguageLabel>
      <Styles.LanguageToggle
        checked={isEnglish}
        onChange={handleChange}
        slotProps={{ input: { 'aria-label': Language.LANG_SWITCH[language] } }}
      />
      <Styles.LanguageLabel variant="body2" isActive={isEnglish} aria-hidden>
        {Language.LANGUAGE_LABELS[LANGUAGE.ENGLISH]}
      </Styles.LanguageLabel>
    </Styles.Root>
  )
}
