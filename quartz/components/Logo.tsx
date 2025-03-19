import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface LogoOptions {
  height?: string
}

export default ((opts: LogoOptions = {}) => {
  function Logo({ displayClass }: QuartzComponentProps) {
    return (
      <a href="/" className={displayClass}>
        <img
          id="logo"
          src="/static/icon.png"
          alt="SWAB Logo"
          style={{
            height: opts.height || "2rem",
            width: "auto",
            margin: "3px auto",
          }}
        />
      </a>
    )
  }

  return Logo
}) satisfies QuartzComponentConstructor
