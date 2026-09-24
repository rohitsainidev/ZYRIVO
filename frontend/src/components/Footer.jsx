import React, { useState } from 'react';
import {
  Mail,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Phone,
  Check,
  MapPin,
} from 'lucide-react';

/* ─── tiny inline styles to avoid class conflicts ─── */
const S = {
  footerBg: {
    background: 'linear-gradient(180deg, #0d1117 0%, #080b10 100%)',
  },
  pillarsStrip: {
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  pillarIcon: {
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#a78bfa',
  },
  card: {
    borderRadius: 20,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
    padding: '36px 0',
    marginBottom: 56,
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  inputWrap: {
    background: 'rgba(10,14,20,0.85)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: 12,
    width: '100%',
    boxSizing: 'border-box',
    padding: '11px 14px 11px 38px',
    color: '#f1f5f9',
    fontSize: 13,
    outline: 'none',
  },
  subscribeBtn: {
    background: 'linear-gradient(135deg,#7c3aed,#5b21b6)',
    borderRadius: 12,
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.06em',
    padding: '11px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    whiteSpace: 'nowrap',
    transition: 'opacity .2s,transform .15s',
    flexShrink: 0,
  },
  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity .2s',
    cursor: 'pointer',
    textDecoration: 'none',
    opacity: 1,
  },
  payBadge: {
    fontSize: 10,
    fontWeight: 700,
    color: '#475569',
    letterSpacing: '0.03em',
  },
};

/* ─── Trust Pillar ─── */
const TrustPillar = ({ icon: Icon, title, desc }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
    <div style={S.pillarIcon}><Icon size={19} /></div>
    <div>
      <p style={{ color: '#f1f5f9', fontWeight: 700, fontSize: 13, margin: 0 }}>{title}</p>
      <p style={{ color: '#64748b', fontSize: 11.5, marginTop: 3, lineHeight: 1.55, margin: '3px 0 0' }}>{desc}</p>
    </div>
  </div>
);

/* ─── Link Column ─── */
const LinkCol = ({ heading, links }) => (
  <div>
    <p style={{ color: '#f1f5f9', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14, marginTop: 0 }}>
      {heading}
    </p>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
      {links.map((l) => (
        <li key={l}>
          <a
            href="#featured-collection"
            style={{ color: '#64748b', fontSize: 12.5, textDecoration: 'none', transition: 'color .2s' }}
            onMouseEnter={(e) => (e.target.style.color = '#a78bfa')}
            onMouseLeave={(e) => (e.target.style.color = '#64748b')}
          >
            {l}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/* ─── Social Icon ─── */
const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    style={S.socialIcon}
    onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.65'; }}
    onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
  >
    {children}
  </a>
);

/* ═══════════════════════════════════════════════════════ */
const Footer = ({ onAdminClick }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => { setEmail(''); setSubscribed(false); }, 4000);
    }
  };

  return (
    <footer style={{ ...S.footerBg, color: '#94a3b8', fontFamily: 'Inter,sans-serif' }}>

      {/* ── 1. Trust Pillars ── */}
      <div style={S.pillarsStrip}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '32px 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: '24px 32px',
        }}>
          <TrustPillar icon={Truck}       title="Free Express Shipping"  desc="On all prepaid & COD orders across India" />
          <TrustPillar icon={RotateCcw}   title="7-Day Easy Returns"      desc="Hassle-free pickup & instant refund" />
          <TrustPillar icon={ShieldCheck} title="100% Genuine Quality"    desc="Direct from certified artisan makers" />
          <TrustPillar icon={Headphones}  title="24 × 7 Support"          desc="Chat, call, or email — always here" />
        </div>
      </div>

      {/* ── 2. Main Body ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px 0' }}>

        {/* Newsletter Card */}
        <div style={S.card}>
          <div style={{ maxWidth: 440 }}>
            <span style={{
              display: 'inline-block',
              fontSize: 10, fontWeight: 800, letterSpacing: '0.14em',
              color: '#a78bfa', marginBottom: 10,
              textTransform: 'uppercase',
            }}>
              ZYRIVO Club
            </span>
            <h3 style={{ color: '#f1f5f9', fontWeight: 800, fontSize: 20, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
              Unlock Extra 15% Off — Exclusively Yours
            </h3>
            <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              Early festival sales, designer drops &amp; members-only deals delivered straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ flex: '1 1 300px', maxWidth: 460 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Mail size={15} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#475569', pointerEvents: 'none' }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={S.inputWrap}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(139,92,246,0.55)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.10)')}
                />
              </div>
              <button
                type="submit"
                disabled={subscribed}
                style={{
                  ...S.subscribeBtn,
                  opacity: btnHover && !subscribed ? 0.87 : 1,
                  transform: btnHover && !subscribed ? 'scale(0.97)' : 'scale(1)',
                }}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
              >
                {subscribed
                  ? <><Check size={15} style={{ color: '#4ade80' }} /> Subscribed!</>
                  : <>Subscribe <ArrowRight size={14} /></>
                }
              </button>
            </div>
            <p style={{ fontSize: 11, color: '#475569', marginTop: 8 }}>
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </div>

        {/* Link Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(145px,1fr))',
          gap: '40px 28px',
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>

          {/* Brand col */}
          <div style={{ gridColumn: 'span 2', minWidth: 0 }}>
            <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: '0.22em', color: '#f1f5f9', fontFamily: 'Georgia,serif', display: 'block', marginBottom: 14 }}>
              ZYRIVO
            </span>
            <p style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.7, maxWidth: 300, marginBottom: 18, marginTop: 0 }}>
              India's premier fashion &amp; lifestyle atelier — authentic ethnic wear, contemporary western silhouettes &amp; handcrafted footwear at unbeatable prices.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 20 }}>
              {[
                { href: 'tel:+911800209', Icon: Phone, text: '+91 1800-209-ZYRIVO' },
                { href: 'mailto:support@ZYRIVO.in', Icon: Mail, text: 'support@ZYRIVO.in' },
              ].map(({ href, Icon, text }) => (
                <a key={text} href={href}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', fontSize: 12, textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#a78bfa')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                >
                  <Icon size={13} style={{ color: '#7c3aed', flexShrink: 0 }} />
                  {text}
                </a>
              ))}
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#475569', fontSize: 12 }}>
                <MapPin size={13} style={{ color: '#7c3aed', flexShrink: 0 }} />
                Mumbai, Maharashtra, India
              </span>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 9 }}>
              <SocialIcon href="#instagram" label="Instagram">
                <svg width="15" height="15" fill="#94a3b8" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </SocialIcon>
              <SocialIcon href="#facebook" label="Facebook">
                <svg width="14" height="14" fill="#94a3b8" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.813C10.5 0 9 1.583 9 4.615V8z"/></svg>
              </SocialIcon>
              <SocialIcon href="#twitter" label="X / Twitter">
                <svg width="14" height="14" fill="#94a3b8" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </SocialIcon>
              <SocialIcon href="#pinterest" label="Pinterest">
                <svg width="14" height="14" fill="#94a3b8" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </SocialIcon>
            </div>
          </div>

          <LinkCol heading="Women's Wear"   links={["Kurtis & Kurtas","Anarkali Suits","Sarees & Lehengas","Western Dresses","Tops & Blouses","Palazzos & Pants"]} />
          <LinkCol heading="Men's Wear"     links={["Polo & Casual T-Shirts","Casual Cotton Shirts","Slim Fit Jeans","Chinos & Trousers","Track Pants & Joggers","Sneakers & Derbies"]} />
          <LinkCol heading="Customer Care"  links={["Track Your Order","Return & Exchange","Shipping Info","Help & FAQs","Size Guide","B2B / Bulk Orders"]} />
          <LinkCol heading="Company"        links={["About ZYRIVO","Careers","Press & Media","Sustainability","Privacy Policy","Terms of Service"]} />
        </div>

        {/* Bottom Bar */}
        <div style={{
          padding: '22px 0 28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}>
          <p style={{ fontSize: 11.5, color: '#475569', margin: 0 }}>
            © {new Date().getFullYear()} ZYRIVO FASHION INDIA PVT. LTD. · All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              type="button"
              onClick={onAdminClick}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                fontSize: 11.5,
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              Merchant &amp; Seller Hub
            </button>
            <span style={{ color: '#334155', fontSize: 11 }}>•</span>
            <span style={{ color: '#475569', fontSize: 11.5 }}>100% Safe &amp; Secure Checkout</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

