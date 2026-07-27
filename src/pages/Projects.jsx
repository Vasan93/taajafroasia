import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { projects } from '../data/site'

const filters = ['All', 'Ongoing', 'Completed']

export default function Projects() {
  const [f, setF] = useState('All')
  const shown = f === 'All' ? projects : projects.filter((p) => p.status === f)

  return (
    <>
      <PageBanner title="Projects" subtitle="A selection of our ongoing and completed work." />

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
            {filters.map((x) => (
              <button
                key={x}
                className={`btn ${f === x ? 'btn-primary' : 'btn-dark'}`}
                onClick={() => setF(x)}
              >
                {x}
              </button>
            ))}
          </div>

          <div className="proj-grid">
            {shown.map((p) => (
              <div className="proj" key={p.name}>
                <div className="thumb">
                  <span className={`tag ${p.status === 'Ongoing' ? 'ongoing' : ''}`}>{p.status}</span>
                </div>
                <div className="body">
                  <h3>{p.name}</h3>
                  <div className="meta">{p.sector} · {p.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
