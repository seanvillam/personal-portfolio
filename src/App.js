import React, {useState, useEffect} from 'react'

const styles = {
  container: { fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', color: '#111827', padding: '0', margin: '0' },
  nav: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid #e5e7eb', background: '#ffffff', position: 'sticky', top: 0, zIndex: 50 },
  logoWrap: { display: 'flex', alignItems: 'center', gap: '12px' },
  navLinks: { display: 'flex', gap: '12px', alignItems: 'center' },
  btn: { padding: '8px 12px', borderRadius: '8px', border: 'none', cursor: 'pointer' },
  hero: { padding: '40px 20px', textAlign: 'center' },
  grid: { display: 'grid', gap: '20px' },
  card: { background: '#fff', border: '1px solid #e5e7eb', padding: '16px', borderRadius: '12px', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' },
  footer: { padding: '20px', textAlign: 'center', borderTop: '1px solid #e5e7eb', marginTop: '40px' }
}

function Logo () {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <img src='/images/logo.png' alt='Logo' style={{ width: '15%', height: '15%'}}/>
    </div>
  )
}

function Nav ({currentPage, setPage}) {
  const links = ['Home', 'About', 'Projects', 'Education', 'Services', 'Contact']
  return (
    <nav style={styles.nav}>
      <div style={styles.logoWrap}>
        <button onClick={() => setPage('Home')} aria-label='Home' style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <Logo/>
        </button>
      </div>
      <div style={styles.navLinks}>
        {links.map((label) => (
          <button
            key={label}
            onClick={() => setPage(label)}
            style={{
              ...styles.btn,
              background: currentPage === label ? '#111827' : 'transparent',
              color: currentPage === label ? '#fff' : '#111827',
              padding: '8px 14px',
              fontWeight: 600
            }}
            aria-current={currentPage === label ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
        <a href='/' onClick={(e) => { e.preventDefault(); setPage('Home') }} style={{ marginLeft: 8, textDecoration: 'none', color: '#6b7280' }}>Preview</a>
      </div>
    </nav>
  )
}

function Home ({ onNavigate }) {
  return (
    <main style={styles.hero}>
      <h1 style={{ fontSize: 34, marginBottom: 8 }}>Hello, I am Sean Villamonte</h1>
      <p style={{ maxWidth: 760, margin: '0 auto 20px' }}>Explore my portfolio to see projects, education, and the services I provide.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
        <button onClick={() => onNavigate('About')} style={{ ...styles.btn, background: '#111827', color: '#fff' }}>About Me</button>
        <button onClick={() => onNavigate('Contact')} style={{ ...styles.btn, background: 'transparent', border: '1px solid #111827' }}>Contact Me</button>
      </div>
    </main>
  )
}

function About () {
  return (
    <section style={{ padding: 20, maxWidth: 980, margin: '0 auto' }}>
      <h2>About Me</h2>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 12 }}>
        <img src='/images/headshot-placeholder.png' alt='Headshot' style={{ width: 140, height: 140, objectFit: 'cover', borderRadius: 12, background: '#f3f4f6' }} />
        <div>
          <p style={{ marginTop: 0 }}>Sean Villamonte</p>
          <p>I am an aspiring web developer and I enjoy turning ideas into accessible, performant interfaces.</p>
        </div>
      </div>
    </section>
  )
}

function Projects () {
  const projectList = [
    {
      title: 'Portfolio Website',
      img: '/images/portfolio.png',
      role: 'Front-End Developer',
      outcome: 'Developed a personal portfolio website using React to showcase skills.',
    }
  ]

  return (
    <section style={{ padding: 20, maxWidth: 980, margin: '0 auto' }}>
      <h2>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 12 }}>
        {projectList.map((p) => (
          <article key={p.title} style={styles.card}>
            <div style={{ height: 160, borderRadius: 8, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={p.img} alt={p.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <h3 style={{ marginTop: 12 }}>{p.title}</h3>
            <p style={{ margin: '6px 0', color: '#6b7280' }}><strong>Role:</strong> {p.role}</p>
            <p style={{ marginTop: 8 }}>{p.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Education () {
  const edu = [
    { institution: 'Centennial College', degree: 'Ontario College Advanced Diploma', years: '2024 - 2026' },
  ]

  return (
    <section style={{ padding: 20, maxWidth: 720, margin: '0 auto' }}>
      <h2>Education</h2>
      <ul style={{ marginTop: 12, listStyle: 'none', padding: 0 }}>
        {edu.map((e) => (
          <li key={e.institution} style={{ ...styles.card, marginBottom: 12 }}>
            <h3 style={{ margin: 0 }}>{e.institution}</h3>
            <p style={{ margin: '6px 0' }}>{e.degree}</p>
            <small style={{ color: '#6b7280' }}>{e.years}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Services () {
  const services = [
    'Custom web application development',
    'Responsive UI/UX implementation',
    'Single Page Applications using React',
    'Maintenance & optimization',
    'Code reviews & mentoring'
  ]

  return (
    <section style={{ padding: 20, maxWidth: 900, margin: '0 auto' }}>
      <h2>Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 12 }}>
        {services.map((s) => (
          <div key={s} style={styles.card}>
            <h4 style={{ margin: 0 }}>{s}</h4>
            <p style={{ marginTop: 8, color: '#6b7280' }}>I provide {s.toLowerCase()} with industry best-practices and accessible design.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact ({ onRedirectHome }) {
  const initialForm = { firstName: '', lastName: '', phone: '', email: '', message: '' }
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  function handleChange (e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validateEmail (email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  function handleSubmit (e) {
    e.preventDefault()
    setError('')
    if (!form.firstName || !form.lastName || !form.email) {
      setError('Please complete First name, Last name and Email.')
      return
    }
    if (!validateEmail(form.email)) {
      setError('Please provide a valid email address.')
      return
    }

    try {
      const previous = JSON.parse(localStorage.getItem('contactMessages') || '[]')
      const newEntry = { ...form, submittedAt: new Date().toISOString() }
      localStorage.setItem('contactMessages', JSON.stringify([newEntry, ...previous]))
    } catch (err) {
      console.error('Storage failed', err)
    }

    setForm(initialForm)
    onRedirectHome({ success: true, message: 'Thank you, your message was sent!' })
  }

  return (
    <section style={{ padding: 20, maxWidth: 720, margin: '0 auto' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 10, marginTop: 12 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <input name='firstName' value={form.firstName} onChange={handleChange} placeholder='First Name' style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
          <input name='lastName' value={form.lastName} onChange={handleChange} placeholder='Last Name' style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
        </div>
        <input name='phone' value={form.phone} onChange={handleChange} placeholder='Contact Number' style={{ padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
        <input name='email' value={form.email} onChange={handleChange} placeholder='Email Address' style={{ padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
        <textarea name='message' value={form.message} onChange={handleChange} placeholder='Your message' rows={6} style={{ padding: 10, borderRadius: 8, border: '1px solid #e5e7eb' }} />
        {error && <div style={{ color: 'crimson' }}>{error}</div>}
        <div style={{ display: 'flex', gap: 8 }}>
          <button type='submit' style={{ ...styles.btn, background: '#111827', color: '#fff' }}>Send Message</button>
          <button type='button' onClick={() => setForm(initialForm)} style={{ ...styles.btn, border: '1px solid #111827' }}>Reset</button>
        </div>
      </form>
    </section>
  )
}


export default function App () {
  const [page, setPage] = useState('Home')
  const [flash, setFlash] = useState(null)

  useEffect(() => {
    if (flash) {
      const t = setTimeout(() => setFlash(null), 3500)
      return () => clearTimeout(t)
    }
  }, [flash])

  function handleRedirectHome (payload) {
    if (payload?.success) setFlash(payload.message || 'Saved')
    setPage('Home')
  }

  return (
    <div style={styles.container}>
      <Nav currentPage={page} setPage={setPage} />

      <div style={{ minHeight: '60vh' }}>
        {page === 'Home' && <Home onNavigate={setPage} />}
        {page === 'About' && <About />}
        {page === 'Projects' && <Projects />}
        {page === 'Education' && <Education />}
        {page === 'Services' && <Services />}
        {page === 'Contact' && <Contact onRedirectHome={handleRedirectHome} />}
      </div>

      {flash && (
        <div style={{ position: 'fixed', right: 20, bottom: 20, background: '#111827', color: '#fff', padding: 12, borderRadius: 8, boxShadow: '0 6px 20px rgba(0,0,0,0.12)' }}>{flash}</div>
      )}

    </div>
  )
}
