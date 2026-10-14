const links = [
  { label: 'Email', href: 'mailto:zkto.home@gmail.com', icon: 'email' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Zkto-y', icon: 'youtube' },
  { label: 'Instagram', href: 'https://www.instagram.com/zkto_y/', icon: 'instagram' },
];

function SocialIcon({ name }) {
  if (name === 'email') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="1.5" /><path d="m4.5 7 7.5 6 7.5-6" /></svg>;
  }

  if (name === 'youtube') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 7.2a2.5 2.5 0 0 0-1.8-1.8C17.6 5 12 5 12 5s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 7.2 26 26 0 0 0 2.6 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6.4 19 12 19 12 19s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-4.8 26 26 0 0 0-.4-4.8Z" /><path d="m10 9 5 3-5 3Z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.6" cy="6.7" r=".8" className="icon-fill" /></svg>;
}

export default function SocialLinks({ placement = 'footer' }) {
  return (
    <nav className={`social-links social-links-${placement}`} aria-label="Social links">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={`${link.label} (placeholder link)`}
          title={link.label}
          target={link.label === 'Email' ? undefined : '_blank'}
          rel={link.label === 'Email' ? undefined : 'noreferrer'}
        >
          <SocialIcon name={link.icon} />
        </a>
      ))}
    </nav>
  );
}
