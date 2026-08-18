'use client';

import { useEffect } from 'react';

const SECTIONS = ['home', 'experience', 'project', 'skills', 'contact'];

export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups = [];

    const cv = document.getElementById('petals');
    const hero = document.getElementById('home');
    if (cv && hero && !reduce) {
      const ctx = cv.getContext('2d');
      let W = 0;
      let H = 0;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let petals = [];
      const TINTS = ['#c98a4e', '#b5713f', '#d8a86a', '#a85c46', '#c4a06d'];
      let t = 0;
      let running = true;
      let visible = true;
      let onscreen = true;
      let raf = 0;

      const size = () => {
        W = hero.offsetWidth;
        H = hero.offsetHeight;
        cv.width = W * dpr;
        cv.height = H * dpr;
        cv.style.width = `${W}px`;
        cv.style.height = `${H}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };

      const spawn = (seed) => ({
        x: Math.random() * W,
        y: seed ? Math.random() * H : -20 - Math.random() * 120,
        s: 5 + Math.random() * 7,
        vy: 0.22 + Math.random() * 0.42,
        amp: 16 + Math.random() * 40,
        freq: 0.006 + Math.random() * 0.012,
        ph: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.016,
        flip: 0.5 + Math.random() * 0.5,
        a: 0.35 + Math.random() * 0.45,
        c: TINTS[(Math.random() * TINTS.length) | 0],
      });

      const reset = () => {
        size();
        petals = [];
        const n = Math.round(Math.min(W < 700 ? 16 : 34, W / 34));
        for (let i = 0; i < n; i += 1) petals.push(spawn(true));
      };

      const petal = (p) => {
        const s = p.s;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo(s * 0.85, -s * 0.5, s * 0.7, s * 0.55, 0, s);
        ctx.bezierCurveTo(-s * 0.7, s * 0.55, -s * 0.85, -s * 0.5, 0, -s);
        ctx.closePath();
      };

      const frame = () => {
        if (!running) return;
        t += 1;
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < petals.length; i += 1) {
          const p = petals[i];
          p.y += p.vy;
          p.rot += p.vr;
          const x = p.x + Math.sin(t * p.freq + p.ph) * p.amp;
          const sx = Math.cos(t * p.freq * 2.1 + p.ph) * p.flip;
          ctx.save();
          ctx.translate(x, p.y);
          ctx.rotate(p.rot);
          ctx.scale(Math.max(0.16, Math.abs(sx)), 1);
          ctx.globalAlpha = p.a * (1 - Math.max(0, (p.y - H * 0.82) / (H * 0.18)));
          ctx.fillStyle = p.c;
          petal(p);
          ctx.fill();
          ctx.restore();
          if (p.y > H + 24) petals[i] = spawn(false);
        }
        raf = requestAnimationFrame(frame);
      };

      const pump = () => {
        const should = visible && onscreen;
        if (should && !running) {
          running = true;
          frame();
        } else if (!should) {
          running = false;
          cancelAnimationFrame(raf);
        }
      };

      reset();
      frame();

      const onResize = () => reset();
      window.addEventListener('resize', onResize);
      cleanups.push(() => window.removeEventListener('resize', onResize));

      const ioPetals = new IntersectionObserver((es) => {
        es.forEach((e) => {
          onscreen = e.isIntersecting;
        });
        pump();
      }, { threshold: 0 });
      ioPetals.observe(hero);
      cleanups.push(() => ioPetals.disconnect());

      const onVis = () => {
        visible = !document.hidden;
        pump();
      };
      document.addEventListener('visibilitychange', onVis);
      cleanups.push(() => {
        document.removeEventListener('visibilitychange', onVis);
        running = false;
        cancelAnimationFrame(raf);
      });
    }

    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.rv').forEach((n) => io.observe(n));
    cleanups.push(() => io.disconnect());

    const railRect = document.getElementById('railRect');
    const art = document.querySelector('.art');
    const nodes = Array.from(document.querySelectorAll('.node'));
    let ticking = false;

    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (railRect) railRect.setAttribute('height', (p * 812).toFixed(1));

      if (art && !reduce) {
        if (window.scrollY < window.innerHeight * 1.25) {
          art.style.transform = `translateY(${window.scrollY * 0.2}px)`;
          art.style.opacity = String(Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.9)));
        } else if (art.style.opacity !== '0') {
          art.style.opacity = '0';
        }
      }

      const mid = window.scrollY + window.innerHeight * 0.4;
      let active = 0;
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) active = i;
      });
      nodes.forEach((n, i) => n.classList.toggle('on', i <= active));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
