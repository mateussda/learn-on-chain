import { useEffect, useState } from "react"
import type { CSSProperties } from "react"
import { useSearchParams } from "react-router-dom"
import Card from "../components/Card"

type Lesson = {
  id: number
  title: string
  summary: string
  duration: string
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Welcome & Tooling",
    duration: "08 min",
    summary:
      "Kick off the course with an overview of the Internet Computer, required tooling, and how the local project is structured."
  },
  {
    id: 2,
    title: "Language Basics",
    duration: "18 min",
    summary:
      "Review Motoko fundamentals: immutability, core types, records, variants, and how modules keep code organized."
  },
  {
    id: 3,
    title: "Actors & Canisters",
    duration: "16 min",
    summary:
      "Understand the actor model, public and query methods, and how Candid interfaces describe your canister surface."
  },
  {
    id: 4,
    title: "State & Persistence",
    duration: "14 min",
    summary:
      "Explore stable variables, upgrade-safe patterns, and strategies to persist data without risking state loss."
  },
  {
    id: 5,
    title: "Inter-canister Patterns",
    duration: "12 min",
    summary:
      "Dive into async flows, cycle management, and defensive techniques for composing calls across canisters."
  },
  {
    id: 6,
    title: "Mini Project",
    duration: "20 min",
    summary:
      "Apply the lessons by shipping a mini canister: expose list/get/create flows and validate locally with dfx."
  },
  {
    id: 7,
    title: "Next Steps",
    duration: "06 min",
    summary:
      "Wrap up with curated resources, common pitfalls to avoid, and paths to keep evolving your on-chain skills."
  }
]

const lessonButtonStyle = (isActive: boolean): CSSProperties => ({
  width: "100%",
  display: "block",
  padding: "12px 14px",
  borderRadius: 14,
  border: `1px solid ${isActive ? "rgba(124,58,237,.45)" : "var(--border)"}`,
  background: isActive
    ? "linear-gradient(135deg, rgba(124,58,237,.28), rgba(6,182,212,.14))"
    : "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01))",
  color: "var(--text)",
  textAlign: "left",
  cursor: "pointer",
  transition: "transform .15s ease, border-color .15s ease",
  transform: isActive ? "translateY(-1px)" : "translateY(0)"
})

const getLessonFromQuery = (paramValue: string | null): Lesson | undefined => {
  if (!paramValue) return undefined
  const parsed = Number(paramValue)
  if (!Number.isFinite(parsed)) return undefined
  return lessons.find((lesson) => lesson.id === parsed)
}

export default function CoursePlayer() {
  const [searchParams] = useSearchParams()
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(lessons[0])

  useEffect(() => {
    const lessonFromQuery = getLessonFromQuery(searchParams.get("lesson"))
    if (lessonFromQuery) {
      setSelectedLesson(lessonFromQuery)
    }
  }, [searchParams])

  return (
    <section className="section">
      <div className="hero" style={{ marginBottom: 20 }}>
        <div className="kicker">Course Player</div>
        <h2 style={{ margin: "4px 0 6px" }}>{selectedLesson.title}</h2>
        <p className="subtle">
          Browse lessons on the right to update the current module preview.
        </p>
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, .8fr)", alignItems: "start" }}
      >
        <Card>
          <div className="placeholder" style={{ height: 260, marginBottom: 18 }}>
            Lesson {selectedLesson.id}
          </div>
          <div className="kicker">Selected Lesson</div>
          <h2 style={{ margin: "6px 0 10px" }}>{selectedLesson.title}</h2>
          <div className="row" style={{ gap: 8, marginBottom: 10 }}>
            <span className="badge">{selectedLesson.duration}</span>
          </div>
          <p className="subtle" style={{ fontSize: 15 }}>{selectedLesson.summary}</p>
        </Card>

        <Card>
          <div className="kicker">Course Outline</div>
          <h3 style={{ margin: "6px 0 10px" }}>Lessons</h3>
          <p className="small subtle" style={{ marginBottom: 12 }}>
            Pick a lesson to preview its content in the player.
          </p>
          <div className="divider" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {lessons.map((lesson) => {
              const isActive = lesson.id === selectedLesson.id

              return (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => setSelectedLesson(lesson)}
                  style={lessonButtonStyle(isActive)}
                >
                  <div className="row" style={{ justifyContent: "space-between", gap: 10 }}>
                    <span className="badge">Lesson {lesson.id.toString().padStart(2, "0")}</span>
                    <span className="badge" style={{ background: "rgba(15,21,45,.6)" }}>
                      {lesson.duration}
                    </span>
                  </div>
                  <strong style={{ display: "block", margin: "8px 0 6px" }}>{lesson.title}</strong>
                  <p className="small subtle" style={{ margin: 0 }}>{lesson.summary}</p>
                  {isActive && (
                    <span
                      className="badge"
                      style={{
                        marginTop: 10,
                        display: "inline-flex",
                        background: "rgba(124,58,237,.12)",
                        borderColor: "rgba(124,58,237,.45)",
                        color: "#c4b5fd"
                      }}
                    >
                      Now playing
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </Card>
      </div>
    </section>
  )
}
