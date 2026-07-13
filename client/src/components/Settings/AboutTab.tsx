import React from 'react'
import { Info, Coffee, Heart, ExternalLink, Bug, Lightbulb, BookOpen } from 'lucide-react'
import { useTranslation } from '../../i18n'
import Section from './Section'

interface Props {
  appVersion: string
}

export default function AboutTab({ appVersion }: Props): React.ReactElement {
  const { t, locale } = useTranslation()

  return (
    <Section title={t('settings.about')} icon={Info}>
      <style>{`
        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
      `}</style>
      <p className="text-content-secondary" style={{ fontSize: 'calc(13px * var(--fs-scale-body, 1))', lineHeight: 1.6, marginBottom: 6, marginTop: -4 }}>
        {t('settings.about.description')}
      </p>
    </Section>
  )
}
