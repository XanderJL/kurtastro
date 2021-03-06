import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Socials from "../components/Socials"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHome {
        logo {
          asset {
            fixed(width: 64) {
              ...GatsbySanityImageFixed
            }
          }
        }
        socials {
          facebook
          instagram
          linkedin
          soundcloud
          twitter
        }
        resume {
          resume {
            asset {
              url
            }
          }
        }
      }
    }
  `)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <Img fixed={data.sanityHome.logo.asset.fixed} />
        </Link>
        <div
          role="button"
          className={"navbar-burger" + (menuOpen ? " is-active" : "")}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
        <div className="navbar-end">
          <a
            href={data.sanityHome.resume.resume.asset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item is-size-5 is-family-monospace"
          >
            Resume
          </a>
          <a
            href="mailto:dylan@kutastro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item is-size-5 is-family-monospace"
          >
            Contact
          </a>
          <Socials className="navbar-item is-size-5 is-family-monospace" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
