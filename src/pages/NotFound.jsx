import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', padding: '120px 0' }}>
      <div className="container">
        <div className="kicker">Error 404</div>
        <h1>Page Not Found</h1>
        <p className="lead">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 12 }}>Back to Home</Link>
      </div>
    </section>
  )
}
