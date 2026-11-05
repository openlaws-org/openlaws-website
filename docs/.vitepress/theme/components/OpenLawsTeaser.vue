<script setup lang="ts">
import { useData } from 'vitepress'

const props = defineProps<{
  lang?: 'en' | 'de'
}>()

const { isDark } = useData()

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="ol-wrap">
    <!-- Quick Controls Bar -->
    <div class="ol-controls ol-fade-1">
      <div class="ol-eyebrow">
        <span class="ol-pulse"></span>
        <span v-if="props.lang !== 'de'">OPENLAWS · QUIETLY TAKING SHAPE · 2014 → 2026</span>
        <span v-else>OPENLAWS · IM HINTERGRUND ENTSTEHT ETWAS NEUES · 2014 → 2026</span>
      </div>
      <div class="ol-switchers">
        <a :href="props.lang === 'de' ? '/' : '/de/'" class="ol-pill">
          <span :class="{ active: props.lang !== 'de' }">EN</span>
          <span>/</span>
          <span :class="{ active: props.lang === 'de' }">DE</span>
        </a>
        <button type="button" class="ol-pill" @click="toggleTheme">
          <span :class="{ active: !isDark }">Light</span>
          <span>/</span>
          <span :class="{ active: isDark }">Dark</span>
        </button>
      </div>
    </div>

    <!-- Hero -->
    <section class="ol-hero ol-fade-1">
      <h1 v-if="props.lang !== 'de'" class="ol-title">
        The models will become interchangeable.<br />
        <span class="ol-accent">The knowledge will remain.</span>
      </h1>
      <h1 v-else class="ol-title">
        Die Modelle werden austauschbar.<br />
        <span class="ol-accent">Das Wissen bleibt.</span>
      </h1>

      <p v-if="props.lang !== 'de'" class="ol-lead">
        Everyone is racing to build louder prompts and bigger models. We are working on what survives when the model changes: the quiet architecture that turns law, provenance and human judgment into durable capability.
      </p>
      <p v-else class="ol-lead">
        Während überall lautere Prompts und immer neue Sprachmodelle gefeiert werden, arbeiten wir an dem, was bleibt, wenn das Modell wechselt: der stillen Architektur, die Recht, Herkunft und menschliches Urteilsvermögen dauerhaft verbindet.
      </p>

      <div class="ol-cta-row">
        <a href="https://github.com/openlaws-org" target="_blank" rel="noopener" class="ol-btn-primary">
          <span v-if="props.lang !== 'de'">Follow on GitHub (openlaws-org) →</span>
          <span v-else>Auf GitHub folgen (openlaws-org) →</span>
        </a>
        <a href="https://openlaws.com" target="_blank" rel="noopener" class="ol-btn-secondary">
          <span v-if="props.lang !== 'de'">Read the Manifesto on openlaws.com ↗</span>
          <span v-else>Zum Manifest auf openlaws.com ↗</span>
        </a>
      </div>
    </section>

    <!-- Pipeline -->
    <section class="ol-pipeline ol-fade-2">
      <div class="ol-section-head">
        <span class="ol-mono-label">
          {{ props.lang === 'de' ? 'DER WEG BESTÄNDIGEN RECHTSWISSENS' : 'THE FLOW OF DURABLE LEGAL KNOWLEDGE' }}
        </span>
        <span class="ol-mono-sub">Sources → Knowledge → Skills → Application</span>
      </div>

      <div class="ol-pipe-grid">
        <div class="ol-pipe-card">
          <div class="ol-pipe-num">01 · SOURCES</div>
          <h3>{{ props.lang === 'de' ? 'Verlässlicher Ursprung' : 'Authoritative Origin' }}</h3>
          <p>
            {{
              props.lang === 'de'
                ? 'Gesetze, Entscheidungen und Richtlinien bleiben untrennbar mit ihrer Quelle verbunden.'
                : 'Statutes, judgments and internal positions anchored to their verifiable origin.'
            }}
          </p>
        </div>

        <div class="ol-pipe-card">
          <div class="ol-pipe-num">02 · KNOWLEDGE</div>
          <h3>{{ props.lang === 'de' ? 'Lebendige Struktur' : 'Living Structure' }}</h3>
          <p>
            {{
              props.lang === 'de'
                ? 'Kontext und Herkunft bleiben erhalten — lesbar für Mensch und Maschine gleichermaßen.'
                : 'Context and provenance preserved so both humans and machines read the same truth.'
            }}
          </p>
        </div>

        <div class="ol-pipe-card teal">
          <div class="ol-pipe-num">03 · SKILLS</div>
          <h3>{{ props.lang === 'de' ? 'Verdichtete Erfahrung' : 'Distilled Judgment' }}</h3>
          <p>
            {{
              props.lang === 'de'
                ? 'Juristisches Handwerk, Prüfgrenzen und menschliche Verantwortung als wiederholbare Logik.'
                : 'Repeatable legal reasoning, boundaries and human sign-off encoded as enduring craft.'
            }}
          </p>
        </div>

        <div class="ol-pipe-card teal">
          <div class="ol-pipe-num">04 · APPLICATION</div>
          <h3>{{ props.lang === 'de' ? 'Souveräne Anwendung' : 'Calm Execution' }}</h3>
          <p>
            {{
              props.lang === 'de'
                ? 'Sprachmodelle kommen und gehen. Ihr juristischer Maßstab bleibt konstant.'
                : 'Models may come and go. Your legal standard remains sovereign and consistent.'
            }}
          </p>
        </div>
      </div>
    </section>

    <!-- Continuous Narrative Story -->
    <section class="ol-story ol-fade-3">
      <div class="ol-story-meta">
        <span>
          {{
            props.lang === 'de'
              ? 'DER LANGE BOGEN · EINE EUROPÄISCHE GESCHICHTE'
              : 'THE LONG ARC · A EUROPEAN STORY IN TWO ACTS'
          }}
        </span>
        <span>2014 · LONDON / AMSTERDAM / SALZBURG → 2026</span>
      </div>

      <h2 class="ol-story-title">
        {{
          props.lang === 'de'
            ? 'Eine Idee, die ein Jahrzehnt auf ihren Moment gewartet hat.'
            : 'An idea that waited a decade for its moment.'
        }}
      </h2>

      <div v-if="props.lang !== 'de'" class="ol-story-prose">
        <p>
          Long before generative AI entered the courtroom or the boardroom, a European research consortium set out to answer a deceptively simple question: <em>What happens when the law of an entire continent becomes openly addressable, interconnected and readable by machines?</em>
        </p>
        <p>
          Co-funded by the European Commission (DG Justice) and incubated by ODINE and the Open Data Institute in London—alongside LSE, the University of Amsterdam, the University of Sussex and FH Salzburg—<strong>openlaws.eu</strong> pioneered the concept of <strong>Big Open Legal Data (BOLD)</strong>. At the time, the vision was ahead of the technology available to use it.
        </p>
        <p>
          A decade later, the missing half has arrived—and with it, a new paradox. Artificial intelligence can now speak the language of the law effortlessly, yet without verifiable roots, its fluency becomes a liability. What began in 2014 as an open-data vision returns in 2026 as something deeper: a <strong>Legal Knowledge Factory</strong> built for an era where models are temporary, but verified legal knowledge is permanent.
        </p>
      </div>

      <div v-else class="ol-story-prose">
        <p>
          Lange bevor generative KI in Kanzleien und Rechtsabteilungen Einzug hielt, stellte sich ein europäisches Forschungskonsortium eine scheinbar einfache Frage: <em>Was geschieht, wenn das Recht eines ganzen Kontinents offen adressierbar, vernetzt und für Maschinen verstehbar wird?</em>
        </p>
        <p>
          Kofinanziert durch die Europäische Kommission (DG Justice) und gefördert durch ODINE sowie das Open Data Institute in London — gemeinsam mit der LSE, der Universität Amsterdam, der University of Sussex und der FH Salzburg — prägte <strong>openlaws.eu</strong> den Begriff <strong>Big Open Legal Data (BOLD)</strong>. Damals war die Idee ihrer Zeit voraus.
        </p>
        <p>
          Ein Jahrzehnt später ist das fehlende Gegenstück da — und mit ihm ein neues Paradoxon: Künstliche Intelligenz beherrscht heute mühelos die Sprache des Rechts, doch ohne überprüfbare Wurzeln wird ihre Eloquenz zum Risiko. Was 2014 als europäische Open-Data-Pionierarbeit begann, kehrt 2026 in neuer Form zurück: als <strong>Legal Knowledge Factory</strong> für eine Ära, in der Modelle flüchtig sind, aber geprüftes Wissen bleibt.
        </p>
      </div>

      <div class="ol-story-foot">
        <span>
          {{
            props.lang === 'de'
              ? 'Kofinanziert durch die Europäische Union (2014–2016) · Gefördert durch ODINE & ODI London'
              : 'Co-funded by the European Union (2014–2016) · Incubated by ODINE & ODI London'
          }}
        </span>
        <a :href="props.lang === 'de' ? '/de/story' : '/story'" class="ol-story-link">
          {{ props.lang === 'de' ? 'Die ganze Geschichte lesen →' : 'Read the full story →' }}
        </a>
      </div>
    </section>

    <!-- Bottom Mystery & GitHub Signal -->
    <section class="ol-bottom ol-fade-4">
      <div class="ol-mystery-box">
        <div>
          <div class="ol-mono-label teal-text">
            {{
              props.lang === 'de'
                ? 'PHILOSOPHIE · KEIN WEITERES PROMPT-WERKZEUG'
                : 'PHILOSOPHY · NOT ANOTHER PROMPT WRAPPER'
            }}
          </div>
          <blockquote class="ol-quote">
            {{
              props.lang === 'de'
                ? '„Offen, wo Offenheit Vertrauen schafft. Geschützt, wo Urteilskraft den Wert ausmacht.“'
                : '“Open where openness creates trust. Protected where judgment creates value.”'
            }}
          </blockquote>
          <p class="ol-mystery-p">
            {{
              props.lang === 'de'
                ? 'Der wahre Wert einer juristischen Organisation liegt nicht im Abonnement des neuesten Sprachmodells. Er liegt in der Schicht darunter: wie Primärrecht mit eigenen Maßstäben verknüpft wird und wo menschliche Verantwortung entscheidet.'
                : 'The real asset of a legal organization is not its subscription to today’s frontier model. It is the silent layer beneath: how primary law connects to internal positions, where automated reasoning stops, and where human accountability begins.'
            }}
          </p>
        </div>
        <div class="ol-mystery-status">
          <span>
            {{
              props.lang === 'de'
                ? 'Fundament: Europäische Standards · Open Knowledge'
                : 'Foundations: European Identifiers · Open Knowledge'
            }}
          </span>
          <span class="ol-status-green">
            ● {{ props.lang === 'de' ? 'Entsteht im Hintergrund' : 'In quiet preparation' }}
          </span>
        </div>
      </div>

      <div class="ol-signals">
        <div class="ol-mono-label">
          {{ props.lang === 'de' ? 'AUF GITHUB · SCHRITT FÜR SCHRITT' : 'ON GITHUB · STEP BY STEP' }}
        </div>

        <a href="https://github.com/openlaws-org" target="_blank" rel="noopener" class="ol-signal-card">
          <div class="ol-signal-title">github.com / openlaws-org ↗</div>
          <p>
            {{
              props.lang === 'de'
                ? 'Der Ort für offene Spezifikationen, öffentlichen Austausch und jene Bausteine, die wir bewusst mit der Community teilen.'
                : 'Our home for open specifications, public dialogue and the shared building blocks we choose to release to the community.'
            }}
          </p>
        </a>

        <a href="https://github.com/openlaws-org/openlaws-website" target="_blank" rel="noopener" class="ol-signal-card">
          <div class="ol-signal-title">openlaws-org / openlaws-website ↗</div>
          <p>
            {{
              props.lang === 'de'
                ? 'Dieses erste öffentliche Signal — die Brücke zwischen unseren europäischen Forschungswurzeln und dem nächsten Kapitel.'
                : 'This public signal—connecting our European research roots with the next chapter of governed legal knowledge.'
            }}
          </p>
        </a>

        <div class="ol-signal-card dashed">
          <div class="ol-signal-title teal-text">
            {{
              props.lang === 'de'
                ? 'Nicht alles liegt im Schaufenster'
                : 'Selected layers stay behind the curtain—for now'
            }}
          </div>
          <p>
            {{
              props.lang === 'de'
                ? 'Weitere Schichten und Werkzeuge öffnen sich erst dann Schritt für Schritt, wenn ihre Zeit gekommen ist.'
                : 'Additional layers and tools open incrementally when their time has come.'
            }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ol-wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 3.5rem;
}

.ol-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.ol-eyebrow {
  font-family: var(--ol-font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ol-color-blue);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.ol-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--ol-color-teal);
  animation: olPulseDot 2.8s infinite ease-in-out;
}

.ol-switchers {
  display: flex;
  gap: 0.5rem;
}

.ol-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  font-family: var(--ol-font-mono);
  font-size: 0.75rem;
  border: 1px solid var(--ol-border-strong);
  background: var(--ol-bg-surface);
  color: var(--ol-text-secondary);
  text-decoration: none;
  cursor: pointer;
}

.ol-pill .active {
  color: var(--ol-color-blue);
  font-weight: 600;
}

.ol-hero {
  padding: 1rem 0 2.25rem;
}

.ol-title {
  font-size: clamp(2rem, 4.2vw, 3.35rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--ol-text-primary);
  margin-bottom: 1.15rem;
}

.ol-accent {
  color: var(--ol-color-blue);
}

.ol-lead {
  font-size: clamp(1.02rem, 1.4vw, 1.18rem);
  line-height: 1.65;
  color: var(--ol-text-secondary);
  max-width: 66ch;
  margin-bottom: 1.6rem;
}

.ol-cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.ol-btn-primary {
  background: var(--ol-color-action-primary);
  color: #FFFFFF !important;
  font-weight: 600;
  font-size: 0.92rem;
  padding: 0.7rem 1.25rem;
  border-radius: 8px;
  text-decoration: none !important;
  transition: transform 0.18s ease, background 0.18s ease;
}

.ol-btn-primary:hover {
  background: var(--ol-color-action-primary-hover);
  transform: translateY(-1px);
}

.ol-btn-secondary {
  border: 1px solid var(--ol-color-blue);
  color: var(--ol-text-primary) !important;
  font-family: var(--ol-font-mono);
  font-size: 0.86rem;
  font-weight: 500;
  padding: 0.7rem 1.15rem;
  border-radius: 8px;
  text-decoration: none !important;
  transition: transform 0.18s ease;
}

.ol-btn-secondary:hover {
  transform: translateY(-1px);
}

.ol-pipeline {
  background: var(--ol-bg-surface);
  border: 1px solid var(--ol-border-subtle);
  border-radius: 12px;
  padding: 1.35rem 1.5rem;
  margin-bottom: 1.75rem;
}

.ol-section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.9rem;
}

.ol-mono-label {
  font-family: var(--ol-font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ol-color-blue);
}

.teal-text {
  color: var(--ol-color-teal) !important;
}

.ol-mono-sub {
  font-family: var(--ol-font-mono);
  font-size: 0.78rem;
  color: var(--ol-text-muted);
}

.ol-pipe-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.9rem;
}

.ol-pipe-card {
  background: var(--ol-bg-elevated);
  border: 1px solid var(--ol-border-subtle);
  border-radius: 10px;
  padding: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.ol-pipe-card:hover {
  transform: translateY(-2px);
  border-color: var(--ol-color-blue);
}

.ol-pipe-card.teal:hover {
  border-color: var(--ol-color-teal);
}

.ol-pipe-num {
  font-family: var(--ol-font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--ol-color-blue);
  margin-bottom: 0.3rem;
}

.ol-pipe-card.teal .ol-pipe-num {
  color: var(--ol-color-teal);
}

.ol-pipe-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.35rem;
  color: var(--ol-text-primary);
}

.ol-pipe-card p {
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--ol-text-muted);
  margin: 0;
}

.ol-story {
  background: var(--ol-bg-surface);
  border: 1px solid var(--ol-border-subtle);
  border-left: 4px solid var(--ol-color-blue);
  border-radius: 12px;
  padding: 1.6rem 1.75rem;
  margin-bottom: 1.75rem;
}

.ol-story-meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: var(--ol-font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--ol-color-blue);
  margin-bottom: 0.6rem;
}

.ol-story-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--ol-text-primary);
  margin: 0 0 0.9rem;
  border: none;
  padding: 0;
}

.ol-story-prose p {
  font-size: 0.96rem;
  line-height: 1.7;
  color: var(--ol-text-secondary);
  margin: 0 0 0.85rem;
}

.ol-story-foot {
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--ol-border-subtle);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: var(--ol-font-mono);
  font-size: 0.76rem;
  color: var(--ol-text-muted);
}

.ol-story-link {
  color: var(--ol-color-blue);
  font-weight: 600;
  text-decoration: none;
}

.ol-bottom {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 1.25rem;
}

.ol-mystery-box {
  background: #0F172A;
  color: #F3F4F6;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ol-quote {
  font-size: 1.18rem;
  font-weight: 500;
  line-height: 1.5;
  color: #FFFFFF;
  border: none;
  padding: 0;
  margin: 0.65rem 0 0.85rem;
}

.ol-mystery-p {
  font-size: 0.9rem;
  line-height: 1.62;
  color: #CBD5E1;
  margin: 0;
}

.ol-mystery-status {
  margin-top: 1.25rem;
  padding-top: 0.85rem;
  border-top: 1px solid #1E293B;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: var(--ol-font-mono);
  font-size: 0.74rem;
  color: #94A3B8;
}

.ol-status-green {
  color: #4ADE80;
}

.ol-signals {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.ol-signal-card {
  background: var(--ol-bg-elevated);
  border: 1px solid var(--ol-border-subtle);
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
  text-decoration: none !important;
  transition: transform 0.18s ease, border-color 0.18s ease;
}

.ol-signal-card:hover {
  transform: translateY(-2px);
  border-color: var(--ol-color-blue);
}

.ol-signal-card.dashed {
  border-style: dashed;
  background: var(--ol-bg-surface);
}

.ol-signal-title {
  font-family: var(--ol-font-mono);
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--ol-color-blue);
  margin-bottom: 0.25rem;
}

.ol-signal-card p {
  font-size: 0.84rem;
  line-height: 1.48;
  color: var(--ol-text-secondary);
  margin: 0;
}

@media (max-width: 900px) {
  .ol-pipe-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .ol-bottom {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .ol-pipe-grid {
    grid-template-columns: 1fr;
  }
}
</style>
