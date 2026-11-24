import { useState, type ReactNode, type TouchEvent } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'

const heroBg = new URL('./assets/MyBread/IMG_9000.png', import.meta.url).href

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@600&display=swap');

  :root {
    color: #0f0d0b;
    background-color: #f9f6f2;
    font-family: 'Manrope', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: #f9f6f2;
  }

  #root {
    min-height: 100vh;
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`

const Hero = styled.section`
  position: relative;
  isolation: isolate;
  min-height: 70vh;
  display: grid;
  align-items: center;
  padding: clamp(32px, 6vw, 96px);
  color: #fdfaf7;
  overflow: hidden;

  @media (min-width: 900px) {
    grid-template-columns: 3fr 2fr;
  }
`

const HeroImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;
  background: url(${heroBg}) center/cover no-repeat;
  transform: scale(1.02);
  filter: saturate(1.05);
`

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
`

const HeroContent = styled.div`
  max-width: 640px;
  display: grid;
  gap: 28px;
  padding: clamp(12px, 2vw, 24px);
  background: rgba(18, 13, 10, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(10, 6, 4, 0.4);

  @media (max-width: 899px) {
    margin: 0 auto;
  }
`

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffd8a8;
  font-weight: 600;

  &::before {
    content: '';
    width: 34px;
    height: 1.5px;
    background: currentColor;
    border-radius: 999px;
  }
`

const Title = styled.h1`
  margin: 0;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(32px, 6vw, 56px);
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: #fff8ed;
`

const Subtitle = styled.p`
  margin: 0;
  font-size: clamp(16px, 2vw, 20px);
  color: #f7eee4;
  opacity: 0.92;
`

const Bullets = styled.ul`
  display: grid;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`

const Bullet = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 12px;
  font-size: 0.98rem;
  color: #fff6eb;

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    margin-top: 6px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ffba73, #ffd8a8);
    box-shadow: 0 0 0 6px rgba(255, 184, 112, 0.18);
  }
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`

const PrimaryButton = styled.button`
  border: none;
  padding: 14px 22px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  border-radius: 12px;
  background: linear-gradient(135deg, #f7a143, #ffbe74);
  color: #120d0a;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 12px 28px rgba(247, 161, 67, 0.35);
  transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 34px rgba(247, 161, 67, 0.45);
    filter: saturate(1.05);
  }

  &:focus-visible {
    outline: 2px solid #fff1e0;
    outline-offset: 3px;
  }
`

const AccentCircle = styled.div`
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 191, 125, 0.32), transparent 60%);
  top: 12%;
  right: 8%;
  filter: blur(2px);
  z-index: -1;

  @media (max-width: 899px) {
    width: 220px;
    height: 220px;
    right: -10%;
    top: -4%;
  }
`

const promoShine = keyframes`
  0% { transform: translateX(-120%) skewX(-20deg); }
  55%, 100% { transform: translateX(320%) skewX(-20deg); }
`

const PromoBar = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px 14px;
  padding: 12px clamp(16px, 4vw, 48px);
  background: linear-gradient(90deg, #0b0806 0%, #1f140d 50%, #0b0806 100%);
  border-bottom: 1px solid rgba(247, 161, 67, 0.45);
  color: #fff2e4;
  text-decoration: none;
  font-size: 0.95rem;
  overflow: hidden;
  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: 30%;
    background: linear-gradient(90deg, transparent, rgba(255, 216, 168, 0.16), transparent);
    animation: ${promoShine} 5s ease-in-out infinite;
    z-index: -1;
  }

  &:focus-visible {
    outline: 2px solid #ffbe74;
    outline-offset: -4px;
  }

  @media (max-width: 640px) {
    justify-content: flex-start;
    padding-right: 150px;
    font-size: 0.88rem;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      display: none;
    }
  }
`

const PromoTag = styled.span`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #f7a143, #ffd8a8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

const PromoAccent = styled.strong`
  color: #ffbe74;
  font-weight: 800;
`

const PromoLink = styled.span`
  color: #ffd8a8;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: rgba(255, 216, 168, 0.5);
`

const PromoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(11, 8, 6, 0.85), rgba(31, 20, 13, 0.85));
  border: 1px solid rgba(247, 161, 67, 0.55);
  box-shadow: 0 0 28px rgba(247, 161, 67, 0.18);
`

const PromoDiscount = styled.span`
  flex: none;
  padding: 8px 12px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f7a143, #ffbe74);
  color: #120d0a;
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1;
`

const PromoCardText = styled.span`
  display: grid;
  gap: 2px;
  color: #fff2e4;
  font-size: 0.95rem;
  line-height: 1.35;
`

const PromoNote = styled.p`
  margin: 0;
  flex-basis: 100%;
  color: #c35d1c;
  font-weight: 700;
`

const ReasonsSection = styled.section`
  padding: 0 clamp(24px, 6vw, 96px) clamp(32px, 7vw, 120px);
  display: grid;
  gap: 36px;
  background: radial-gradient(circle at 10% 20%, #fff3e0 0, #fff3e000 34%),
    radial-gradient(circle at 85% 10%, #ffe8d0 0, #ffe8d000 28%),
    linear-gradient(180deg, #f9f6f2 0%, #fffaf4 100%);
`

const SectionHeader = styled.div`
  max-width: 760px;
  display: grid;
  gap: 12px;
`

const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.82rem;
  color: #c35d1c;

  &::after {
    content: '';
    flex: 1;
    min-width: 80px;
    height: 1.5px;
    background: linear-gradient(90deg, #f4b36b, transparent);
  }
`

const SectionTitle = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(28px, 4vw, 42px);
  letter-spacing: -0.01em;
  color: #1d120b;
`

const SectionLead = styled.p`
  margin: 0;
  font-size: 1.05rem;
  color: #4a2e1e;
  max-width: 640px;
`

const ReasonsGrid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

const ReasonCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(38, 19, 10, 0.08);
  border-radius: 16px;
  padding: 18px 18px 20px;
  box-shadow: 0 18px 36px rgba(21, 12, 8, 0.08);
  display: grid;
  gap: 8px;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 46px rgba(21, 12, 8, 0.12);
  }
`

const ReasonTitle = styled.h3`
  margin: 0;
  font-size: 1.02rem;
  color: #1e120c;
`

const ReasonText = styled.p`
  margin: 0;
  color: #4f2f1f;
  font-size: 0.98rem;
  line-height: 1.55;
`

const FitSection = styled.section`
  padding: clamp(12px, 3vw, 24px) clamp(24px, 6vw, 96px) clamp(40px, 8vw, 120px);
  display: grid;
  gap: 26px;
  background: linear-gradient(120deg, #fff8ef 0%, #f4e5d8 45%, #fff9f2 100%);
  border-top: 1px solid rgba(32, 16, 8, 0.04);
  border-bottom: 1px solid rgba(32, 16, 8, 0.04);
`

const FitHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 720px;
`

const FitTitle = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(26px, 3.6vw, 40px);
  color: #1b120c;
`

const FitGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

const FitCard = styled.div`
  position: relative;
  background: #ffffff;
  color: #2a170f;
  border-radius: 16px;
  padding: 16px 16px 18px 18px;
  border: 1px solid rgba(38, 19, 10, 0.08);
  box-shadow: 0 16px 36px rgba(20, 12, 8, 0.08);
  display: grid;
  gap: 10px;
  overflow: hidden;
  transition: transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(240, 162, 74, 0.5);
    box-shadow: 0 22px 48px rgba(20, 12, 8, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(247, 178, 104, 0.12), rgba(247, 178, 104, 0));
    opacity: 0.9;
    pointer-events: none;
  }
`

const FitIndex = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, #f7b468, #ffd9a8);
  color: #1f120b;
  font-weight: 800;
  font-size: 0.95rem;
  box-shadow: 0 10px 22px rgba(247, 178, 104, 0.35);
  z-index: 1;
`

const FitText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.55;
  z-index: 1;
`

const BenefitsSection = styled.section`
  padding: clamp(12px, 3vw, 24px) clamp(24px, 6vw, 96px) clamp(40px, 8vw, 130px);
  display: grid;
  gap: 28px;
  background: linear-gradient(180deg, #fefbf7 0%, #f7f1e8 100%);
  border-top: 1px solid rgba(34, 18, 9, 0.05);
  border-bottom: 1px solid rgba(34, 18, 9, 0.05);
`

const BenefitsHeader = styled.div`
  display: grid;
  gap: 10px;
  max-width: 760px;
`

const BenefitsTitle = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(26px, 3.8vw, 40px);
  color: #1b120c;
`

const BenefitsGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

const BenefitCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(30, 15, 8, 0.08);
  border-radius: 14px;
  padding: 16px 16px 18px;
  display: grid;
  gap: 6px;
  box-shadow: 0 14px 32px rgba(18, 10, 6, 0.08);
  transition: transform 150ms ease, box-shadow 150ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(18, 10, 6, 0.12);
  }
`

const BenefitTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #1f120b;
`

const BenefitText = styled.p`
  margin: 0;
  color: #4b2f1f;
  font-size: 0.96rem;
  line-height: 1.5;
`

const DirectionsSection = styled.section`
  padding: 0 clamp(24px, 6vw, 96px) clamp(44px, 8vw, 130px);
  display: grid;
  gap: 26px;
`

const DirectionsHeader = styled.div`
  display: grid;
  gap: 8px;
  max-width: 780px;
`

const DirectionsTitle = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(26px, 3.6vw, 40px);
  color: #1b120c;
`

const DirectionsLead = styled.p`
  margin: 0;
  font-size: 1.01rem;
  color: #432b1d;
`

const DirectionsWrap = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`

const DirectionCard = styled.div`
  background: #1f140d;
  color: #fff2e4;
  padding: 16px 18px;
  border-radius: 14px;
  border: 1px solid rgba(255, 214, 180, 0.18);
  box-shadow: 0 14px 36px rgba(16, 10, 7, 0.22);
  display: grid;
  gap: 6px;
`

const DirectionTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  letter-spacing: 0.01em;
  color: #ffe6c9;
`

const DirectionNote = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #f7dcbf;
`

const BonusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(248, 173, 85, 0.14);
  color: #f6b160;
  border: 1px solid rgba(248, 173, 85, 0.4);
  border-radius: 999px;
  padding: 6px 12px;
  font-weight: 700;
  width: fit-content;
`

const WhatSection = styled.div`
  background: #ffffff;
  border: 1px solid rgba(36, 18, 10, 0.08);
  border-radius: 18px;
  padding: 18px 20px 20px;
  box-shadow: 0 18px 42px rgba(16, 10, 7, 0.08);
  display: grid;
  gap: 16px;
`

const WhatTitle = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  color: #1c120b;
`

const WhatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
`

const WhatItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
  color: #452c1d;
  font-size: 0.98rem;

  &::before {
    content: '•';
    color: #f2a24a;
    font-size: 1.2rem;
    line-height: 1;
  }
`

const CTAStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`

const GallerySection = styled.section`
  padding: clamp(20px, 5vw, 36px) clamp(24px, 6vw, 96px) clamp(48px, 8vw, 120px);
  display: grid;
  gap: 18px;
  background: linear-gradient(180deg, #fffaf4 0%, #f8f0e6 100%);
  border-top: 1px solid rgba(34, 18, 9, 0.05);
`

const GalleryHeader = styled.div`
  display: grid;
  gap: 8px;
  max-width: 760px;
`

const GalleryTitle = styled.h3`
  margin: 0;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(22px, 3vw, 32px);
  color: #1b120c;
`

const GalleryGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`

const GalleryCard = styled.button`
  position: relative;
  padding: 0;
  border: none;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  height: 150px;
  background: #d9c5af;
  box-shadow: 0 12px 28px rgba(20, 12, 8, 0.12);
  transition: transform 150ms ease, box-shadow 150ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(20, 12, 8, 0.16);
  }

  &:focus-visible {
    outline: 2px solid #f7b468;
    outline-offset: 3px;
  }
`

const GalleryImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.04);
`

const ModalOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(12, 6, 4, 0.65);
  backdrop-filter: blur(2px);
  display: ${(p) => (p.$open ? 'grid' : 'none')};
  place-items: center;
  padding: 16px;
  z-index: 20;
`

const ModalContent = styled.div`
  position: relative;
  max-width: min(1200px, 96vw);
  max-height: 92vh;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  background: #0f0b08;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.35);
  display: grid;
  height: 100%;
`

const ModalImage = styled.img`
  min-height: 420px;
  height: 100%;
  width: 100%;
  object-fit: contain;
  background: #0f0b08;
`

const ModalClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: rgba(255, 255, 255, 0.14);
  color: #fff6ec;
  border-radius: 999px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  font-weight: 800;
  display: grid;
  place-items: center;
  backdrop-filter: blur(3px);
  transition: transform 140ms ease, background 140ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.22);
  }

  &:focus-visible {
    outline: 2px solid #f7b468;
    outline-offset: 2px;
  }
`

const ping = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`

const FloatingSupport = styled.a<{ $hidden: boolean }>`
  position: fixed;
  right: 18px;
  top: 18px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 16px;
  background: linear-gradient(135deg, #f7a143, #ffbe74);
  color: #120d0a;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 0.01em;
  box-shadow: 0 16px 36px rgba(247, 161, 67, 0.35);
  z-index: 50;
  border: 1px solid rgba(255, 233, 205, 0.6);
  transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease, opacity 140ms ease;
  opacity: ${(p) => (p.$hidden ? 0 : 1)};
  pointer-events: ${(p) => (p.$hidden ? 'none' : 'auto')};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 42px rgba(247, 161, 67, 0.45);
    filter: saturate(1.08);
  }

  &:focus-visible {
    outline: 2px solid #fff1e0;
    outline-offset: 3px;
  }

  svg {
    animation: ${ping} 2.4s ease-in-out infinite;
  }
`

const ModalNav = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
`

const ModalNavBtn = styled.button`
  pointer-events: auto;
  margin: 0 8px;
  border: none;
  background: rgba(255, 255, 255, 0.16);
  color: #fff6ec;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.2rem;
  backdrop-filter: blur(3px);
  transition: transform 140ms ease, background 140ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.26);
  }

  &:focus-visible {
    outline: 2px solid #f7b468;
    outline-offset: 2px;
  }
`
const TestimonialsSection = styled.section`
  padding: clamp(24px, 6vw, 48px) clamp(24px, 6vw, 96px) clamp(48px, 9vw, 140px);
  display: grid;
  gap: 20px;
  background: radial-gradient(circle at 15% 20%, #fff1e3 0, #fff1e300 32%),
    linear-gradient(180deg, #fdfaf6 0%, #f7f0e6 100%);
  border-top: 1px solid rgba(30, 15, 8, 0.05);
`

const TestimonialsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 760px;
`

const TestimonialsTitle = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(26px, 3.6vw, 40px);
  color: #1b120c;
`

const FAQSection = styled.section`
  padding: clamp(24px, 6vw, 48px) clamp(24px, 6vw, 96px) clamp(56px, 9vw, 140px);
  display: grid;
  gap: 18px;
  background: linear-gradient(180deg, #f7f1e8 0%, #fdfbf8 100%);
  border-top: 1px solid rgba(32, 16, 8, 0.06);
`

const FAQHeader = styled.div`
  display: grid;
  gap: 10px;
  max-width: 760px;
`

const FAQTitle = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', 'Times New Roman', serif;
  font-size: clamp(26px, 3.6vw, 40px);
  color: #1b120c;
`

const FAQList = styled.div`
  display: grid;
  gap: 12px;
`

const FAQItem = styled.div`
  border: 1px solid rgba(32, 16, 8, 0.08);
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 14px 32px rgba(16, 9, 6, 0.06);
`

const FAQQuestion = styled.button<{ $open: boolean }>`
  width: 100%;
  padding: 16px 16px 14px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: #1d120b;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.005em;

  &:focus-visible {
    outline: 2px solid #f4b36b;
    outline-offset: 3px;
    border-radius: 10px;
  }

  span {
    text-align: left;
    flex: 1;
  }

  svg {
    transition: transform 180ms ease;
    transform: rotate(${(p) => (p.$open ? '45deg' : '0deg')});
  }
`

const FAQAnswer = styled.div<{ $open: boolean }>`
  overflow: hidden;
  max-height: ${(p) => (p.$open ? '500px' : '0')};
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transition: max-height 220ms ease, opacity 180ms ease;
  padding: ${(p) => (p.$open ? '0 16px 14px 16px' : '0 16px 0 16px')};
  color: #432b1d;
  font-size: 0.97rem;
  line-height: 1.55;

  ul {
    margin: 6px 0 0 18px;
    padding: 0;
  }

  li {
    margin-bottom: 4px;
  }
`

const Footer = styled.footer`
  padding: clamp(28px, 7vw, 64px) clamp(24px, 6vw, 96px) clamp(34px, 8vw, 80px);
  background: #120d0a;
  color: #f8ede2;
  border-top: 1px solid rgba(255, 220, 190, 0.14);
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 720px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const FooterTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #ffe7cc;
`

const SocialButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 14px;
  border-radius: 12px;
  text-decoration: none;
  color: #120d0a;
  background: #f7b468;
  font-weight: 700;
  box-shadow: 0 12px 26px rgba(247, 180, 104, 0.25);
  transition: transform 140ms ease, box-shadow 140ms ease, filter 140ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 32px rgba(247, 180, 104, 0.32);
    filter: saturate(1.05);
  }

  &:focus-visible {
    outline: 2px solid #ffe8cf;
    outline-offset: 2px;
  }
`

const Icon = styled.span`
  display: inline-flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
`

function App() {
  // Black Friday: скидка 30% до конца 30 ноября 2026 (МСК), после — обычная ссылка
  const promoActive = Date.now() < new Date('2026-12-01T00:00:00+03:00').getTime()
  const joinLink = promoActive
    ? 'https://t.me/tribute/app?startapp=stBU_pc_BLACK2026'
    : 'https://t.me/tribute/app?startapp=stBU_pc_TQ60IN'
  const fitItems = [
    'Вы хотите научиться печь на закваске с нуля и без стресса.',
    'У вас уже был опыт, но «то не растёт, то мякиш не тот» — хочется понять логику.',
    'Вам нужны проверенные рецепты и понятная навигация, а не хаос в сохранёнках.',
    'Вы любите домашний хлеб и хотите контролировать состав.',
    'Вам важна поддержка: можно спросить и получить ответ, а не гадать.',
  ]
  const galleryImageFiles = [
    'IMG_0083.JPG',
    'IMG_0544.JPG',
    'IMG_0550.JPG',
    'IMG_1558.JPG',
    'IMG_2116.JPG',
    'IMG_2676.JPG',
    'IMG_4089.JPG',
    'IMG_4101.JPG',
    'IMG_5574.JPG',
    'IMG_5657.JPG',
    'IMG_7184.JPG',
    'IMG_7380.JPG',
    'IMG_7449.JPG',
    'IMG_7707.JPG',
    'IMG_7780.JPG',
    'IMG_8952.JPG',
    'IMG_8958.JPG',
    'IMG_9513.JPG',
    'IMG_9523.JPG',
    'IMG_9528.JPG',
    'IMG_1.jpg',
    'IMG_2.jpg',
    'IMG_3.jpg',
    'IMG_4.jpg',
    'IMG_5.jpg',
    'IMG_6.jpg',
    'IMG_7.jpg',
    'IMG_8.jpg',
    'IMG_9.jpg',
    'IMG_10.jpg',
  ]
  const galleryImages = galleryImageFiles.map(
    (file) => new URL(`./assets/MyBread/optimized/${file}`, import.meta.url).href
  )
  const reviewImageFiles = [
    'IMG_1956.jpg',
    'IMG_1958.jpg',
    'IMG_1960.jpg',
    'IMG_1961.jpg',
    'IMG_1963.jpg',
    'IMG_1965.jpg',
    'IMG_1973.jpg',
    'IMG_1975.jpg',
    'IMG_1978.jpg',
    'IMG_1984.jpg',
    'IMG_1986.jpg',
    'IMG_1990.jpg',
    'IMG_1999.jpg',
    'IMG_2003.jpg',
    'IMG_2006.jpg',
    'IMG_2012.jpg',
    'IMG_2014.jpg',
    'IMG_2016.jpg',
  ]
  const reviewImages = reviewImageFiles.map(
    (file) => new URL(`./assets/Reviews/optimized/${file}`, import.meta.url).href
  )

  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const faqs: { q: string; a: ReactNode }[] = [
    {
      q: 'Сколько рецептов есть в группе?',
      a: (
        <>
          Сейчас в группе более 100 рецептов. Они разделены на 3 направления: пшеничная закваска, безглютеновая и ржаная. База регулярно пополняется — новые рецепты добавляются каждый месяц.
        </>
      ),
    },
    {
      q: 'Если я новичок — у меня получится?',
      a: (
        <>
          Да. Тут не нужны особые навыки — важно понять процесс и следовать шагам. В группе есть поддержка моя и кураторов, чтобы вы проходили путь спокойно и без «затыков».
        </>
      ),
    },
    {
      q: 'Смогу ли я печь, если у меня нет специальных приспособлений?',
      a: (
        <>
          Да. Я за то, чтобы начать без вложений: попробовать процесс и понять, нравится ли вам. А затем — при желании — постепенно докупать то, что сделает выпечку ещё комфортнее.
        </>
      ),
    },
    {
      q: 'Что нужно в самом начале (минимум)?',
      a: (
        <>
          <p>Стартовый минимум:</p>
          <ul>
            <li>Стеклянная банка 300–1000 мл для выведения/ведения закваски.</li>
            <li>Духовка, которая печёт минимум 230°C.</li>
            <li>Остальное можно заменить тем, что уже есть дома: обычное лезвие/острый нож, вместо корзины — дуршлаг с тканью, присыпанной мукой, и т.д.</li>
          </ul>
        </>
      ),
    },
    {
      q: 'Нужен ли планетарный миксер для прохождения курса?',
      a: (
        <>
          Нет, планетарный миксер не обязателен. Замес можно делать вручную — и эта техника демонстрируется в курсе.
        </>
      ),
    },
    {
      q: 'Можно ли скачать все рецепты?',
      a: (
        <>
          Все рецепты целиком не скачиваются. Но вы можете скачать гайд по пшеничной или безглютеновой закваске: выведение/ведение закваски, необходимое оборудование, информация о муке + базовые рецепты хлеба и десертов. Гайд остаётся с вами, даже если вы решите покинуть группу.
        </>
      ),
    },
    {
      q: 'На какой платформе будет доступ и как я буду пользоваться?',
      a: (
        <>
          Оплата проходит через Tribute. После оплаты вам автоматически приходит доступ в Telegram-группу и понятная инструкция: куда нажать и где искать рецепты/разделы (пшеничная, безглютеновая, ржаная).
        </>
      ),
    },
    {
      q: 'Подписка продлевается автоматически?',
      a: (
        <>
          Да. При оформлении подписки по выбранному тарифу система делает автопродление, но вы в любой момент можете отменить продление (отписаться).
        </>
      ),
    },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const openGallery = (index: number) => {
    setGalleryIndex(index)
    setGalleryOpen(true)
  }
  const closeGallery = () => setGalleryOpen(false)
  const prevGallery = () => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  const nextGallery = () => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)
  const handleTouchStart = (e: TouchEvent) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStart === null) return
    const delta = e.changedTouches[0].clientX - touchStart
    if (Math.abs(delta) > 40) {
      if (delta < 0) nextGallery()
      else prevGallery()
    }
    setTouchStart(null)
  }
  const [reviewOpen, setReviewOpen] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewTouchStart, setReviewTouchStart] = useState<number | null>(null)
  const openReview = (index: number) => {
    setReviewIndex(index)
    setReviewOpen(true)
  }
  const closeReview = () => setReviewOpen(false)
  const prevReview = () => setReviewIndex((prev) => (prev - 1 + reviewImages.length) % reviewImages.length)
  const nextReview = () => setReviewIndex((prev) => (prev + 1) % reviewImages.length)
  const handleReviewTouchStart = (e: TouchEvent) => setReviewTouchStart(e.touches[0].clientX)
  const handleReviewTouchEnd = (e: TouchEvent) => {
    if (reviewTouchStart === null) return
    const delta = e.changedTouches[0].clientX - reviewTouchStart
    if (Math.abs(delta) > 40) {
      if (delta < 0) nextReview()
      else prevReview()
    }
    setReviewTouchStart(null)
  }

  return (
    <>
      <GlobalStyle />
      {promoActive && (
        <PromoBar href={joinLink} target="_blank" rel="noreferrer">
          <PromoTag>Black Friday</PromoTag>
          <span>
            <PromoAccent>−30%</PromoAccent> на подписку до 30 ноября
          </span>
          <PromoLink>Забрать скидку →</PromoLink>
        </PromoBar>
      )}
      <Page>
        <Hero>
          <HeroImage />
          <HeroOverlay />
          <AccentCircle />
          <HeroContent>
            <Eyebrow>Живое хлебное сообщество</Eyebrow>
            <Title>Сообщество по выпечке на закваске с моей поддержкой</Title>
            <Subtitle>
              100+ рецептов, 3 направления (пшеничная / безглютеновая / ржаная), понятные шаги и помощь в
              чате — чтобы у вас получалось с первого раза.
            </Subtitle>
            <Bullets>
              <Bullet>Для новичков и тех, кто хочет уверенную систему</Bullet>
              <Bullet>Можно начать без специального инвентаря</Bullet>
              <Bullet>Новые рецепты добавляются каждый месяц</Bullet>
            </Bullets>
            {promoActive && (
              <PromoCard>
                <PromoDiscount>−30%</PromoDiscount>
                <PromoCardText>
                  <PromoTag>Black Friday</PromoTag>
                  <span>Скидка на подписку действует до 30 ноября включительно</span>
                </PromoCardText>
              </PromoCard>
            )}
            <Actions>
              <PrimaryButton as="a" href={joinLink} target="_blank" rel="noreferrer">
                {promoActive ? 'Присоединиться со скидкой 30%' : 'Присоединиться к сообществу'}
              </PrimaryButton>
            </Actions>
          </HeroContent>
        </Hero>
        <ReasonsSection>
          <SectionHeader>
            <SectionEyebrow>Зачем менять привычный хлеб</SectionEyebrow>
            <SectionTitle>Почему стоит попробовать хлеб на закваске?</SectionTitle>
            <SectionLead>
              От гликемического отклика до вкуса — естественная ферментация работает на вас, а не наоборот.
            </SectionLead>
          </SectionHeader>
          <ReasonsGrid>
            <ReasonCard>
              <ReasonTitle>Более мягкий гликемический отклик</ReasonTitle>
              <ReasonText>Длительная ферментация меняет структуру теста: органические кислоты и естественные ферменты делают углеводы менее «быстрыми», поэтому у многих людей реакция сахара в крови бывает более плавной. Эффект зависит от муки, рецепта и порции.</ReasonText>
            </ReasonCard>
            <ReasonCard>
              <ReasonTitle>Комфортнее для пищеварения</ReasonTitle>
              <ReasonText>Во время брожения тесто частично «предпереваривается»: снижается количество фитиновой кислоты, часть сложных компонентов расщепляется, а мякиш становится более пористым и мягким. Поэтому многим такой хлеб ощущается легче.</ReasonText>
            </ReasonCard>
            <ReasonCard>
              <ReasonTitle>Выразительный вкус и аромат</ReasonTitle>
              <ReasonText>Закваска даёт тот самый глубокий вкус — с лёгкой кислинкой и богатым ароматом. А когда мы комбинируем разные виды муки, каждый раз получается новый характер хлеба — от нежного сливочного до яркого зернового.</ReasonText>
            </ReasonCard>
            <ReasonCard>
              <ReasonTitle>Натуральный состав</ReasonTitle>
              <ReasonText>Вы точно знаете, что внутри — без лишних добавок.</ReasonText>
            </ReasonCard>
            <ReasonCard>
              <ReasonTitle>Дольше сохраняет свежесть</ReasonTitle>
              <ReasonText>Закваска помогает хлебу дольше оставаться мягким: кислоты удерживают влагу, замедляют черствение и естественно сдерживают рост плесени. В результате хлеб дольше радует вкусом и текстурой.</ReasonText>
            </ReasonCard>
            <ReasonCard>
              <ReasonTitle>Огромное разнообразие</ReasonTitle>
              <ReasonText>Пшеничный, ржаной, цельнозерновой, безглютеновый — десятки вариантов под ваш вкус и настроение.</ReasonText>
            </ReasonCard>
          </ReasonsGrid>
        </ReasonsSection>
        <FitSection>
          <FitHeader>
            <SectionEyebrow>Кому будет полезно</SectionEyebrow>
            <FitTitle>Вам сюда, если…</FitTitle>
          </FitHeader>
          <FitGrid>
            {fitItems.map((item, index) => (
              <FitCard key={item}>
                <FitIndex>{index + 1}</FitIndex>
                <FitText>{item}</FitText>
              </FitCard>
            ))}
          </FitGrid>
        </FitSection>
        <BenefitsSection>
          <BenefitsHeader>
            <SectionEyebrow>Что внутри подписки</SectionEyebrow>
            <BenefitsTitle>Что вы получаете в подписке?</BenefitsTitle>
          </BenefitsHeader>
          <BenefitsGrid>
            <BenefitCard>
              <BenefitTitle>100+ рецептов уже внутри</BenefitTitle>
              <BenefitText>База доступна сразу после подключения, плюс регулярные обновления.</BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitTitle>3 раздела под любые задачи</BenefitTitle>
              <BenefitText>Пшеничная, безглютеновая и ржаная подборки с навигацией.</BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitTitle>Новые рецепты каждый месяц</BenefitTitle>
              <BenefitText>Пополнение библиотеки, чтобы пробовать новое без остановки.</BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitTitle>Видео-инструкции</BenefitTitle>
              <BenefitText>Пошаговые разборы, чтобы повторять уверенно и без паники.</BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitTitle>Скачиваемые гайды</BenefitTitle>
              <BenefitText>По пшеничной и безглютеновой закваске: выращивание, ведение, базовые рецепты.</BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitTitle>Поддержка в чате</BenefitTitle>
              <BenefitText>Я и кураторы помогаем, если что-то не получается или нужен совет.</BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitTitle>Понимание логики процесса</BenefitTitle>
              <BenefitText>От закваски до стабильного результата — чтобы вы знали «почему», а не только «как».</BenefitText>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsSection>
        <DirectionsSection>
          <DirectionsHeader>
            <SectionEyebrow>Три направления в одном</SectionEyebrow>
            <DirectionsTitle>3 направления в одном сообществе</DirectionsTitle>
            <DirectionsLead>Вы выбираете своё направление — или печёте во всех трёх.</DirectionsLead>
          </DirectionsHeader>
          <DirectionsWrap>
            <DirectionCard>
              <DirectionTitle>Пшеничная закваска</DirectionTitle>
              <DirectionNote>Классические и авторские багеты, чиабатта, батоны, булочки.</DirectionNote>
            </DirectionCard>
            <DirectionCard>
              <DirectionTitle>Безглютеновая выпечка</DirectionTitle>
              <DirectionNote>От хлеба до десертов без компромиссов по вкусу и текстуре.</DirectionNote>
            </DirectionCard>
            <DirectionCard>
              <BonusPill>Ржаная — бонус</BonusPill>
              <DirectionTitle>Ржаная закваска</DirectionTitle>
              <DirectionNote>Подовые, формовые, бородинский настрой и нюансы по кислотности.</DirectionNote>
            </DirectionCard>
          </DirectionsWrap>
          <WhatSection>
            <WhatTitle>Что вы будете печь в сообществе</WhatTitle>
            <WhatList>
              <WhatItem>Хлеб: пшеничный, ржаной, безглютеновый</WhatItem>
              <WhatItem>Формовые и подовые буханки</WhatItem>
              <WhatItem>Булочки, чиабатта/фокачча</WhatItem>
              <WhatItem>Пицца/лепёшки</WhatItem>
              <WhatItem>Сладкая выпечка/десерты на закваске</WhatItem>
              <WhatItem>Сезонные и праздничные рецепты</WhatItem>
            </WhatList>
            <CTAStack>
              <PrimaryButton as="a" href={joinLink} target="_blank" rel="noreferrer">
                {promoActive ? 'Оформить подписку −30%' : 'Оформить подписку'}
              </PrimaryButton>
              {promoActive && <PromoNote>Black Friday: скидка 30% до 30 ноября включительно</PromoNote>}
              <DirectionsLead>Подписка открывает доступ ко всем направлениям сразу.</DirectionsLead>
            </CTAStack>
          </WhatSection>
        </DirectionsSection>
        <GallerySection>
          <GalleryHeader>
            <SectionEyebrow>Примеры хлеба</SectionEyebrow>
            <GalleryTitle>Моя выпечка и чему я обучаю</GalleryTitle>
          </GalleryHeader>
          <GalleryGrid>
            {galleryImages.map((src, idx) => (
              <GalleryCard key={src} onClick={() => openGallery(idx)} aria-label="Открыть фото хлеба">
                <GalleryImage
                  src={src}
                  alt="Домашний хлеб из сообщества"
                  loading="lazy"
                  decoding="async"
                />
              </GalleryCard>
            ))}
          </GalleryGrid>
        </GallerySection>
        <TestimonialsSection>
          <TestimonialsHeader>
            <SectionEyebrow>Отзывы участниц</SectionEyebrow>
            <TestimonialsTitle>Что говорят внутри сообщества</TestimonialsTitle>
          </TestimonialsHeader>
          <GalleryGrid>
            {reviewImages.map((src, idx) => (
              <GalleryCard key={src} onClick={() => openReview(idx)} aria-label="Открыть отзыв">
                <GalleryImage src={src} alt="Скриншот отзыва" loading="lazy" decoding="async" />
              </GalleryCard>
            ))}
          </GalleryGrid>
        </TestimonialsSection>
        <FAQSection>
          <FAQHeader>
            <SectionEyebrow></SectionEyebrow>
            <FAQTitle>Часто задаваемые вопросы:</FAQTitle>
          </FAQHeader>
          <FAQList>
            {faqs.map((item, index) => {
              const opened = openFaq === index
              return (
                <FAQItem key={item.q}>
                  <FAQQuestion $open={opened} onClick={() => setOpenFaq(opened ? null : index)}>
                    <span>{item.q}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path
                        d="M8 2v12M2 8h12"
                        stroke="#1f120b"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </FAQQuestion>
                  <FAQAnswer $open={opened}>{item.a}</FAQAnswer>
                </FAQItem>
              )
            })}
          </FAQList>
        </FAQSection>
        <Footer>
          <FooterContent>
            <FooterTitle>Сообщество на связи</FooterTitle>
            <SocialButtons>
              <SocialButton
                href="https://www.instagram.com/g.d_wellness?igsh=MTczaGN6NG11dWtjZg=="
                target="_blank"
                rel="noreferrer"
              >
                <Icon>
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </Icon>
                Instagram
              </SocialButton>
              <SocialButton href="https://t.me/gdwellness" target="_blank" rel="noreferrer">
                <Icon>
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 4L11 13" />
                    <path d="M21 4L7 9l2 3 2 3 3 1 7-12z" />
                    <path d="M13 17.5L9 21v-4" />
                  </svg>
                </Icon>
                Telegram
              </SocialButton>
            </SocialButtons>
          </FooterContent>
        </Footer>
        <ModalOverlay
          $open={galleryOpen}
          onClick={closeGallery}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <ModalImage src={galleryImages[galleryIndex]} alt="Фото хлеба крупно" loading="lazy" />
            <ModalNav>
              <ModalNavBtn onClick={prevGallery} aria-label="Предыдущее фото">
                ←
              </ModalNavBtn>
              <ModalNavBtn onClick={nextGallery} aria-label="Следующее фото">
                →
              </ModalNavBtn>
            </ModalNav>
            <ModalClose onClick={closeGallery} aria-label="Закрыть фото">
              ×
            </ModalClose>
          </ModalContent>
        </ModalOverlay>
        <ModalOverlay
          $open={reviewOpen}
          onClick={closeReview}
          onTouchStart={handleReviewTouchStart}
          onTouchEnd={handleReviewTouchEnd}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleReviewTouchStart}
            onTouchEnd={handleReviewTouchEnd}
          >
            <ModalImage src={reviewImages[reviewIndex]} alt="Отзыв крупно" loading="lazy" />
            <ModalNav>
              <ModalNavBtn onClick={prevReview} aria-label="Предыдущий отзыв">
                ←
              </ModalNavBtn>
              <ModalNavBtn onClick={nextReview} aria-label="Следующий отзыв">
                →
              </ModalNavBtn>
            </ModalNav>
            <ModalClose onClick={closeReview} aria-label="Закрыть отзыв">
              ×
            </ModalClose>
          </ModalContent>
        </ModalOverlay>
        <FloatingSupport
          href="https://t.me/menedjerks"
          target="_blank"
          rel="noreferrer"
          $hidden={galleryOpen || reviewOpen}
        >
          <Icon>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M9.75 9.75a2.5 2.5 0 1 1 3.5 2.25c-.6.25-1.25.9-1.25 1.5V15" />
              <circle cx="12" cy="17.25" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </Icon>
          Поддержка
        </FloatingSupport>
      </Page>
      <Analytics/>
    </>
  )
}

export default App
