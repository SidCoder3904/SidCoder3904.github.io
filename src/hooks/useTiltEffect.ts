// src/hooks/useTiltEffect.ts
import { useEffect } from 'react';

const useTiltEffect = (cardRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (!cardRef.current) return;

    const tiltEffectSettings = {
      max: 10,
      perspective: 1000,
      scale: 1.01,
      speed: 300,
      easing: "cubic-bezier(.03,.98,.52,.99)"
    };

    const card = cardRef.current;

    const setTransition = () => {
      clearTimeout((card as any).transitionTimeoutId);
      card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
      (card as any).transitionTimeoutId = setTimeout(() => {
        card.style.transition = "";
      }, tiltEffectSettings.speed);
    };

    const cardMouseEnter = () => setTransition();

    const cardMouseMove = (event: MouseEvent) => {
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;
      const centerX = card.offsetLeft + cardWidth / 2;
      const centerY = card.offsetTop + cardHeight / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
      const rotateXUncapped = (+1) * tiltEffectSettings.max * mouseY / (cardHeight / 2);
      const rotateYUncapped = (-1) * tiltEffectSettings.max * mouseX / (cardWidth / 2);
      const rotateX = Math.max(Math.min(rotateXUncapped, tiltEffectSettings.max), -tiltEffectSettings.max);
      const rotateY = Math.max(Math.min(rotateYUncapped, tiltEffectSettings.max), -tiltEffectSettings.max);

      card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
    };

    const cardMouseLeave = () => {
      card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      setTransition();
    };

    card.addEventListener("mouseenter", cardMouseEnter);
    card.addEventListener("mousemove", cardMouseMove);
    card.addEventListener("mouseleave", cardMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", cardMouseEnter);
      card.removeEventListener("mousemove", cardMouseMove);
      card.removeEventListener("mouseleave", cardMouseLeave);
    };
  }, [cardRef]);
};

export default useTiltEffect;
